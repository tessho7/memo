#!/usr/bin/perl

use strict;
use warnings;

use utf8;
binmode(STDOUT, ":utf8");

use Term::ANSIColor qw(:constants);
$Term::ANSIColor::AUTORESET = 1;

use AnyEvent::HTTP;
my $cv = AnyEvent->condvar;

my $network = $ARGV[0] || die 'ネットワークを指定：192.168.100.1-254等(nmapみたいなやつ)' . "\n";

my $res = {};

messages( 'Network: ' . BOLD GREEN $network . "\n" );
messages( 'Nmap   : ' . BOLD YELLOW '開始' . "\r" );

my @nmap = `nmap -sP $network | grep 'Host '`;

messages( 'Nmap   : ' . BOLD GREEN '完了' . "\n" );
messages( 'Check  : ' . BOLD YELLOW '開始' . "\r" );
sleep( 1 );

foreach my $ip( @nmap ){
  chomp( $ip );
  $ip = ($ip =~ /Host (.*) appears to be up\./)[0];
  my $url = sprintf("%s%s%s", 'https://', $ip, ':8333');
  $cv->begin;
  http_get( $url, recurse => 0, timeout => 5, sub{
    my($src, $header) = @_;
    if( $header->{ Status } =~ /^2+/ ){
      my $key = sprintf( "%03d.%03d.%03d.%03d", split(/\./, $ip) );
      $res->{ $key } = [$ip, $url, BOLD GREEN $header->{ Status }];
    }
    $cv->end;
  } );
}
$cv->recv;
messages( 'Check  : ' . BOLD GREEN '完了' . "\n" );
sleep( 1 );

print join( "\t", @{ $res->{ $_ } } ) . "\n" for sort keys %$res;

print 'Done.' . "\n";

exit;

sub messages {
  my $msg = shift || return;
  local $| = 1;
  print $msg;
  local $| = 0;
}

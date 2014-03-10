### メール電文作成時にちょいちょいわすれるので
```perl
use Encode qw/encode decode_utf8/;
my $subject  = encode( 'MIME-Header-ISO_2022_JP' => decode_utf8( [件名] ) );
my $mailbody = encode( 'iso-2022-jp' => decode_utf8( [本文] ) );
```

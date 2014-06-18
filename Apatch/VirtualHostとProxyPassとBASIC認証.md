```
<VirtualHost *:80> 
  ServerAdmin admin@example.com
  DocumentRoot /data/example
  ServerName www.example.com
 
  # 
  CustomLog logs/example_access_log combined 
  ErrorLog logs/example_error_log 
 
  <Proxy *> 
    AllowOverride FileInfo AuthConfig Limit 
    Options MultiViews Indexes SymLinksIfOwnerMatch 

    AuthType Basic 
    AuthName "Password for www.example.com" 
    AuthUserFile /etc/httpd/conf/www_example_com_passwd 
    Require valid-user 
  </Proxy> 
 
  # Reverse Proxy 
  ProxyPass / http://192.168.0.200:3000/ 
  ProxyPassReverse / http://192.168.0.200:3000/ 
  
</VirtualHost>
```

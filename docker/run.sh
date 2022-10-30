#!/bin/sh

# Recreate config file
rm -rf /var/www/html/config.js
touch /var/www/html/config.js

# Add assignment
echo "window._env_ = {" >> /var/www/html/config.js

if [ -n "${URLS}" ]; then
 echo "URLS: ${URLS}," >> /var/www/html/config.js
fi

if [ -n "${THEME_COLOR}" ]; then
 echo "THEME_COLOR: '${THEME_COLOR}'," >> /var/www/html/config.js
fi

if [ -n "${BASE_NAME}" ]; then
 echo "BASE_NAME: '${BASE_NAME}'," >> /var/www/html/config.js
fi

echo "}" >> /var/www/html/config.js

sed -i -e "s@%PAGE_TITLE%@$PAGE_TITLE@g" /var/www/html/index.html

if [ -n "${BASIC_AUTH_USER}" ] && [ -n "${BASIC_AUTH_PWD}" ]; then
 # create htpasswd by openssl
 printf "$BASIC_AUTH_USER:$(openssl passwd -crypt $BASIC_AUTH_PWD)\n" >>/home/htpasswd
 # change nginx config file
 cd /etc/nginx/conf.d
 mv default_auth.conf default.conf
fi

# start nginx
nginx -g "daemon off;"

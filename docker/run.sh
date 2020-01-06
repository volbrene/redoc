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

echo "}" >> /var/www/html/config.js

sed -i -e "s@%PAGE_TITLE%@$PAGE_TITLE@g" /var/www/html/index.html

# start nginx
nginx -g "daemon off;"

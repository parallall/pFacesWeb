#!/bin/sh

# get the os
OS=$(eval uname)
DEPLOY_DIR=pFacesOrionPlugin

# Linux ?
if [[ $OS == *"Linux"* ]]; then
    WEBSERVER_ROOT=/var/www/html/
fi

# MacOS ?
if [[ $OS == *"Darwin"* ]]; then
    WEBSERVER_ROOT=/Library/WebServer/Documents
fi

# copy the plugin
echo Copying the plugin to $WEBSERVER_ROOT/$DEPLOY_DIR
echo ---------------------------------------------------
TARGET=$WEBSERVER_ROOT/$DEPLOY_DIR
sudo cp -a ./. $TARGET/

# start the web-server
echo Starting ApacheServer !
echo ---------------------------------------------------
sudo apachectl start

# finish
echo Now, you can use the plugin from the following URL:
echo ---------------------------------------------------
echo http://localhost/$DEPLOY_DIR
echo ---------------------------------------------------
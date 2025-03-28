#!/bin/bash

#git -C repo pull https://github.com/supix/vmmate

#if [ $? -ne 0 ]; then
#	exit $?
#fi

#cd repo
#npm install
#rm -rf dist
ng b --configuration production

#cd docker/frontend
docker build -t supix/vmmate:latest .
#cd ../..

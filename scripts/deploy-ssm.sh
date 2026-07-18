#!/bin/bash

set -e

mkdir -p /tmp/deployment

aws s3 cp s3://cloud-native-deployment-artifacts-2026/cloud-native-webapp /tmp/cloud-native-webapp.zip

rm -rf /tmp/deployment/*

unzip -o /tmp/cloud-native-webapp.zip -d /tmp/deployment

sudo cp -r /tmp/deployment/app/* /var/www/html/

sudo systemctl restart nginx
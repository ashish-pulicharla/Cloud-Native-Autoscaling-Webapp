# Launch Template

## Overview
The Launch Template defines the configuration used by the Auto Scaling Group to launch EC2 instances.

## Configuration
- AMI: Ubuntu 22.04 LTS
- Instance Type: t2.micro
- Key Pair: <your-key-pair-name>
- Security Group: HTTP (80), SSH (22)

## User Data
The launch template uses a user data script to:
- Install Nginx
- Start the Nginx service
- Deploy the web application automatically

## Purpose
The Launch Template ensures that every EC2 instance created by the Auto Scaling Group uses the same configuration.

# Application Load Balancer Listener

## Overview
The Application Load Balancer (ALB) Listener checks incoming requests and forwards them to the appropriate Target Group.

## Configuration
- Listener Protocol: HTTP
- Listener Port: 80
- Default Action: Forward

## Forwarding Rule
- Action: Forward requests
- Target Group: Web Application Target Group

## Listener Rules
- Protocol: HTTP
- Port: 80
- Default Rule: Forward all traffic to the configured Target Group

## Purpose
The listener receives incoming HTTP requests from users and forwards them to healthy EC2 instances registered in the Target Group.

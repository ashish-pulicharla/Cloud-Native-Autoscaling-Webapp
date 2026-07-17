# Application Load Balancer (ALB)

## Overview
The Application Load Balancer (ALB) distributes incoming HTTP traffic across multiple EC2 instances to ensure high availability and fault tolerance.

## Configuration
- Load Balancer Type: Application Load Balancer
- Scheme: Internet-facing
- IP Address Type: IPv4
- Listener: HTTP (Port 80)

## Target Group
- Target Type: Instances
- Protocol: HTTP
- Health Check Path: /
- Health Check Protocol: HTTP

## Security Group
- HTTP (80) - Allowed
- HTTPS (443) - Optional
- Source: Internet

## Purpose
The Application Load Balancer routes incoming client requests to healthy EC2 instances running in the Auto Scaling Group.

## Outcome
The web application is accessible through the Application Load Balancer DNS name, providing improved availability and scalability.

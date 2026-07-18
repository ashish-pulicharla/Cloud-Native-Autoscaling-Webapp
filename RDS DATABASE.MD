# Amazon RDS (Relational Database Service)

## Overview
Amazon RDS is used to provide a managed relational database for the web application. It offers automated backups, high availability, and simplified database administration.

## Configuration
- Database Engine: MySQL
- Deployment Type: Single-AZ
- Instance Class: db.t3.micro
- Storage Type: General Purpose SSD (gp3)
- Database Port: 3306

## Network Configuration
- Deployed in Private Subnets
- Associated with an RDS Security Group
- Accessible only from the application EC2 instances

## Security
- Database is not publicly accessible
- Security Group allows MySQL (Port 3306) only from the EC2 Security Group
- Master username and password are configured during database creation

## Purpose
The RDS instance stores the application's persistent data while providing a secure, scalable, and managed database service.

## Outcome
The web application connects securely to the Amazon RDS database for storing and retrieving application data.

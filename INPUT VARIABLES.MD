# Input Variables

## Overview
The following configuration values are required for deploying the compute infrastructure.

| Variable | Description | Example |
|----------|-------------|---------|
| AWS Region | AWS Region used for deployment | ap-south-1 |
| AMI ID | Amazon Machine Image ID | Ubuntu 22.04 LTS |
| Instance Type | EC2 Instance Type | t2.micro |
| Key Pair | SSH Key Pair | my-key-pair |
| VPC | Virtual Private Cloud | Project VPC |
| Public Subnets | Subnets for ALB | Public Subnet 1, Public Subnet 2 |
| Private Subnets | Subnets for RDS | Private Subnet 1, Private Subnet 2 |
| Security Group | EC2 Security Group | Web Security Group |
| Database Engine | RDS Database Engine | MySQL |
| Database Port | MySQL Port | 3306 |

## Purpose
These input values are used to configure the EC2 instances, Load Balancer, Auto Scaling Group, and Amazon RDS consistently across the environment.

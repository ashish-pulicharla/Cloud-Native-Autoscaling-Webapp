# Compute & Database Setup

## EC2 Instance
- Ubuntu 22.04 LTS
- Instance Type: t2.micro
- Security Group: HTTP (80), SSH (22)

## Launch Template
- Created from EC2 instance configuration
- Used by Auto Scaling Group

## Auto Scaling Group
- Minimum Capacity: 2
- Desired Capacity: 2
- Maximum Capacity: 4

## Application Load Balancer
- Internet-facing
- Listener: HTTP (80)
- Target Group attached

## Amazon RDS
- Engine: MySQL
- Database deployed in private subnet
- Connected to EC2 application

## User Data
- Nginx installed automatically
- Website deployed during instance launch

## Result
The application is accessible through the Application Load Balancer DNS.
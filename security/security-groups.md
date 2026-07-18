# Security Groups Configuration

## Overview

Security Groups were used as virtual firewalls to control inbound and outbound network traffic for the Application Load Balancer (ALB), EC2 instances, and Amazon RDS database. The rules were designed to expose only the required services while keeping backend resources protected.

---

## Security Group Architecture

```
Internet
    │
    ▼
Application Load Balancer
    │
    ▼
EC2 Instances (Private Subnets)
    │
    ▼
Amazon RDS (Private Subnets)
```

Only the Application Load Balancer is publicly accessible. EC2 instances and the RDS database remain protected within private subnets.

---

## Application Load Balancer Security Group

### Inbound Rules

| Protocol | Port | Source | Purpose |
|----------|------|--------|---------|
| HTTP | 80 | 0.0.0.0/0 | Allow web traffic |
| HTTPS* | 443 | 0.0.0.0/0 | Allow secure web traffic (if configured) |

### Outbound Rules

| Protocol | Destination | Purpose |
|----------|-------------|---------|
| All Traffic | EC2 Security Group | Forward requests to EC2 instances |

---

## EC2 Instance Security Group

### Inbound Rules

| Protocol | Port | Source | Purpose |
|----------|------|--------|---------|
| HTTP | 80 | ALB Security Group | Receive application traffic from the ALB only |

> No public inbound SSH access was allowed. Instance management and deployment were performed using AWS Systems Manager (SSM).

### Outbound Rules

| Protocol | Destination | Purpose |
|----------|-------------|---------|
| HTTPS | AWS Services | Access SSM, CloudWatch, and Amazon S3 |
| MySQL | RDS Security Group | Connect to the database |
| HTTP/HTTPS | Internet (via NAT Gateway) | Install packages and updates when required |

---

## Amazon RDS Security Group

### Inbound Rules

| Protocol | Port | Source | Purpose |
|----------|------|--------|---------|
| MySQL | 3306 | EC2 Security Group | Allow database connections from the application |

The database is not accessible from the public internet.

---

## Security Best Practices Followed

- EC2 instances were deployed in private subnets.
- Amazon RDS was deployed in private subnets.
- Only the Application Load Balancer accepted public traffic.
- Security Groups restricted communication between resources.
- AWS Systems Manager (SSM) was used instead of SSH for administration.
- Least-privilege network access was applied throughout the infrastructure.

---

## Benefits

This security configuration provides:

- Reduced attack surface.
- Secure communication between AWS resources.
- Protection of application and database servers.
- Controlled access using Security Groups and private networking.
- Improved overall infrastructure security.
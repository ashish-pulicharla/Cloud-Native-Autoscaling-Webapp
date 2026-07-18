# Security Module

## Overview

The Security module describes the security measures implemented in the **Cloud-Native Auto-Scaling Web Application with CI/CD, Monitoring, and Infrastructure Automation on AWS**.

The project was designed following AWS security best practices to protect the infrastructure, application, and deployment process. Network isolation, IAM roles, AWS Systems Manager (SSM), and Security Groups were used to minimize security risks while maintaining automated deployment and monitoring.

---

## Security Objectives

The primary security objectives of the project were to:

- Protect the application infrastructure from unauthorized access.
- Keep EC2 instances and the database within private subnets.
- Implement secure communication between AWS services.
- Eliminate the need for public SSH access.
- Use IAM roles instead of storing AWS credentials.
- Enable secure automated deployments using AWS Systems Manager (SSM).

---

## Security Components

### Identity and Access Management (IAM)

IAM roles were assigned to AWS services to provide only the permissions required for their respective tasks.

Roles used in the project include:

- EC2 Instance Role
- CodeBuild Service Role

These roles enabled secure access to AWS Systems Manager, CloudWatch, Amazon S3, and other required services without using long-term credentials.

---

### Security Groups

Security Groups were configured to control network traffic between resources.

- The Application Load Balancer accepts public HTTP traffic.
- EC2 instances accept traffic only from the Application Load Balancer.
- Amazon RDS accepts database connections only from the EC2 instances.
- No direct public access is provided to backend resources.

---

### Secure Deployment

The deployment process uses AWS Systems Manager (SSM) instead of direct remote access.

Deployment workflow:

```
GitHub
   │
   ▼
AWS CodeBuild
   │
   ▼
Amazon S3
   │
   ▼
AWS Systems Manager
   │
   ▼
Private EC2 Instances
```

This approach enables automated deployments while keeping EC2 instances in private subnets.

---

## Security Best Practices Implemented

- Private subnets for EC2 and RDS.
- Public access limited to the Application Load Balancer.
- IAM roles used instead of access keys.
- No inbound SSH access to EC2 instances.
- Deployment performed through AWS Systems Manager (SSM).
- CloudWatch monitoring and Amazon SNS alerts for operational visibility.
- Least-privilege access wherever applicable.

---

## Folder Structure

```
security/
├── iam-roles.md
├── security-groups.md
├── ssm-security.md
└── README.md
```

---

## Benefits

The implemented security measures provide:

- Secure infrastructure architecture.
- Reduced attack surface.
- Controlled access between AWS resources.
- Secure and automated deployments.
- Compliance with AWS cloud security best practices.
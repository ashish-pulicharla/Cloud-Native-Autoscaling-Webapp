# IAM Roles and Permissions

## Overview

AWS Identity and Access Management (IAM) was used to securely manage access between AWS services in the project. Instead of storing AWS credentials on the EC2 instances, IAM roles were attached to resources to provide the required permissions.

This approach follows AWS security best practices by using temporary credentials and the principle of least privilege.

---

## IAM Roles Used

### 1. EC2 Instance Role

The EC2 instances were assigned an IAM role that allowed them to communicate securely with AWS Systems Manager (SSM) and Amazon CloudWatch.

Permissions included:

- AmazonSSMManagedInstanceCore
- CloudWatchAgentServerPolicy

Purpose:

- Register EC2 instances with AWS Systems Manager.
- Receive and execute SSM Run Command requests.
- Send monitoring metrics and logs to Amazon CloudWatch.

---

### 2. CodeBuild Service Role

The CodeBuild project used a dedicated IAM service role to build the application and trigger deployment through AWS Systems Manager.

Permissions included:

- AWSCodeBuildDeveloperAccess
- AmazonS3FullAccess
- AmazonSSMFullAccess
- CloudWatchLogsFullAccess

Purpose:

- Download source code from GitHub.
- Store build artifacts in Amazon S3.
- Execute SSM Run Commands to deploy the application.
- Write build logs to Amazon CloudWatch Logs.

---

## IAM Best Practices Followed

The following security practices were implemented:

- IAM roles were used instead of long-term access keys.
- Services were granted only the permissions required for their tasks.
- AWS managed policies were used for simplicity and reliability.
- No AWS credentials were stored in the application source code.
- Access between AWS services was controlled through IAM roles.

---

## Benefits

Using IAM roles provided:

- Secure authentication between AWS services.
- Reduced risk of credential exposure.
- Easier permission management.
- Compliance with AWS security best practices.
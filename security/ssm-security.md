# Secure Deployment Using AWS Systems Manager (SSM)

## Overview

The initial deployment plan considered using AWS CodeDeploy and GitHub Actions to automate application deployment. However, during implementation, the team identified practical limitations and security concerns. As a result, the deployment strategy was redesigned to use **AWS Systems Manager (SSM) Run Command**.

This approach enabled secure, automated deployments without exposing the EC2 instances to the public internet.

---

## Initial Deployment Approach

The original CI/CD pipeline was planned as follows:

```
GitHub
    │
    ▼
AWS CodeBuild
    │
    ▼
AWS CodeDeploy
    │
    ▼
EC2 Instances
```

During implementation, CodeDeploy could not be used because of AWS account limitations. GitHub Actions was also evaluated, but it required direct network access to the EC2 instances, which conflicted with the project's security objectives.

---

## Final Deployment Architecture

The final deployment workflow used AWS Systems Manager.

```
GitHub
    │
    ▼
AWS CodeBuild
    │
    ▼
Amazon S3 (Build Artifact)
    │
    ▼
AWS Systems Manager (Run Command)
    │
    ▼
Private EC2 Instances
```

The deployment process works as follows:

1. Developers push code to GitHub.
2. AWS CodeBuild builds the application.
3. Build artifacts are stored in Amazon S3.
4. CodeBuild invokes AWS Systems Manager Run Command.
5. SSM executes the deployment script on the EC2 instance.
6. The deployment script updates the web application and restarts the Nginx service.

---

## Why AWS Systems Manager?

AWS Systems Manager was selected because it provides secure remote management without requiring direct access to EC2 instances.

Key advantages include:

- No public IP addresses required for EC2 instances.
- No inbound SSH (Port 22) access.
- Commands are executed securely through the SSM Agent.
- IAM roles are used for authentication instead of SSH keys.
- Deployment can be performed on instances in private subnets.

---

## Security Benefits

The SSM-based deployment improves the security of the infrastructure by:

- Keeping application servers in private subnets.
- Eliminating the need for public SSH access.
- Reducing the attack surface.
- Using IAM roles for secure authentication.
- Logging deployment activities through AWS services for auditing and troubleshooting.

---

## Outcome

By adopting AWS Systems Manager, the project achieved a secure and automated deployment process while maintaining the privacy of EC2 instances. This approach aligned with AWS security best practices and supported the project's objective of building a secure cloud-native web application.
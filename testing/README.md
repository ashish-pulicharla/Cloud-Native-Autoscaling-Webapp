# Testing Module

## Overview

This module contains the testing documentation for the **Cloud-Native Auto-Scaling Web Application with CI/CD, Monitoring, and Infrastructure Automation on AWS** project.

The testing process validated the deployment pipeline, application functionality, monitoring system, and overall infrastructure to ensure that the project met its functional and operational requirements.

---

## Objectives

The testing activities were performed to:

- Verify successful application deployment.
- Validate the CI/CD workflow using AWS CodeBuild and AWS Systems Manager (SSM).
- Confirm that the web application was accessible through the Application Load Balancer (ALB).
- Verify that CloudWatch collected metrics and logs correctly.
- Test CloudWatch Alarms and Amazon SNS notifications.
- Ensure the infrastructure operated as expected after deployment.

---

## Testing Components

### 1. Deployment Testing

Deployment testing verified that:

- Source code was successfully built using AWS CodeBuild.
- Build artifacts were uploaded to Amazon S3.
- AWS Systems Manager (SSM) executed the deployment commands on the EC2 instances.
- The Nginx web server restarted successfully.
- The latest version of the application was available after deployment.

Documentation:

- `deployment-testing.md`

---

### 2. Application Testing

Application testing confirmed:

- Website accessibility through the Application Load Balancer.
- Successful loading of HTML, CSS, and JavaScript resources.
- Proper operation of the Nginx web server.
- Successful deployment of application updates.

Documentation:

- `application-testing.md`

---

### 3. Monitoring Testing

Monitoring testing validated:

- CloudWatch Agent installation and operation.
- Collection of CPU, Memory, Disk, and Network metrics.
- CloudWatch Dashboard visualization.
- CloudWatch Alarm triggering.
- Amazon SNS email notifications.

Documentation:

- `monitoring-testing.md`

---

### 4. Project Screenshots

Screenshots captured throughout the implementation provide visual evidence of:

- Terraform infrastructure
- EC2 instances
- Application Load Balancer
- AWS CodeBuild
- Amazon S3
- AWS Systems Manager
- CloudWatch Dashboard
- CloudWatch Alarms
- Amazon SNS
- Deployed web application

Documentation:

- `screenshots.md`

---

## Folder Structure

```
testing/
├── deployment-testing.md
├── monitoring-testing.md
├── application-testing.md
├── screenshots.md
└── README.md
```

---

## Test Summary

| Test Area | Status |
|-----------|--------|
| Deployment | ✅ Passed |
| Application | ✅ Passed |
| Monitoring | ✅ Passed |
| Notifications | ✅ Passed |

---

## Technologies Used

- GitHub
- AWS CodeBuild
- Amazon S3
- AWS Systems Manager (SSM)
- Amazon EC2
- Nginx
- Amazon CloudWatch
- Amazon SNS
- Ubuntu Linux

---

## Outcome

The testing process confirmed that:

- The infrastructure functioned correctly.
- The deployment pipeline successfully delivered application updates.
- Monitoring and alerting operated as expected.
- The application was accessible through the Application Load Balancer.
- The overall solution met the project's functional and operational objectives.

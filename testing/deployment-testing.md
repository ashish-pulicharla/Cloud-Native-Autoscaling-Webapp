# Deployment Testing

## Overview

Deployment testing was performed to verify that the CI/CD pipeline successfully deployed the latest version of the web application to the EC2 instances using AWS CodeBuild and AWS Systems Manager (SSM).

The objective was to ensure that every code change pushed to the GitHub repository was built, transferred, and deployed correctly without manual intervention on the EC2 instance.

---

## Deployment Workflow

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
EC2 Instance
    │
    ▼
Nginx Web Server
```

---

## Test Environment

| Component | Service |
|----------|---------|
| Source Repository | GitHub |
| Build Service | AWS CodeBuild |
| Artifact Storage | Amazon S3 |
| Deployment | AWS Systems Manager (SSM) |
| Web Server | Nginx |
| Compute | Amazon EC2 |
| Operating System | Ubuntu |

---

## Test Cases

### Test Case 1 – Build Validation

**Objective:** Verify that the application builds successfully.

**Steps:**
1. Push changes to the GitHub repository.
2. Start the CodeBuild project.
3. Monitor the build logs.

**Expected Result:**
- Build completes successfully.
- Build artifacts are generated and uploaded to Amazon S3.

**Result:** Passed

---

### Test Case 2 – Deployment Validation

**Objective:** Verify that the deployment script runs successfully on the EC2 instance.

**Steps:**
1. Trigger deployment through AWS Systems Manager.
2. Execute the deployment script.
3. Restart the Nginx service.

**Expected Result:**
- Application files are copied to `/var/www/html`.
- Nginx restarts successfully.
- No deployment errors occur.

**Result:** Passed

---

### Test Case 3 – Website Verification

**Objective:** Confirm that the deployed application is accessible.

**Steps:**
1. Open the Application Load Balancer DNS name in a web browser.
2. Verify that the latest version of the website is displayed.

**Expected Result:**
- Website loads successfully.
- Recent code changes are visible.

**Result:** Passed

---

## Deployment Validation Checklist

- GitHub source updated successfully.
- CodeBuild completed without errors.
- Build artifacts stored in Amazon S3.
- SSM Run Command executed successfully.
- Deployment script completed.
- Nginx service restarted.
- Website displayed the latest application version.

---

## Outcome

Deployment testing confirmed that the automated deployment workflow functioned correctly. The integration of GitHub, AWS CodeBuild, Amazon S3, and AWS Systems Manager enabled reliable and secure deployment of the web application without exposing the EC2 instance to the public internet.
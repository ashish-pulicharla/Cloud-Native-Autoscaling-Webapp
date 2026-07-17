# Application Testing

## Overview

Application testing was performed to verify that the web application was successfully deployed, accessible through the Application Load Balancer (ALB), and functioning as expected after each deployment.

The testing also confirmed that changes pushed to the GitHub repository were correctly deployed to the EC2 instances using AWS CodeBuild and AWS Systems Manager (SSM).

---

## Test Environment

| Component | Service |
|----------|---------|
| Application | Static Web Application (HTML, CSS, JavaScript) |
| Web Server | Nginx |
| Compute | Amazon EC2 |
| Load Balancer | Application Load Balancer (ALB) |
| Deployment | AWS CodeBuild + AWS Systems Manager |
| Operating System | Ubuntu |

---

## Test Case 1 – Website Accessibility

### Objective

Verify that the website is accessible through the Application Load Balancer.

### Steps

1. Open a web browser.
2. Enter the Application Load Balancer DNS name.
3. Wait for the application to load.

### Expected Result

- The website loads successfully.
- No HTTP errors (404, 403, or 500) are displayed.

### Result

**Passed**

---

## Test Case 2 – Deployment Verification

### Objective

Verify that the latest application changes are deployed successfully.

### Steps

1. Modify a file in the application source code.
2. Push the changes to the GitHub repository.
3. Execute the deployment workflow.
4. Refresh the website.

### Expected Result

The latest changes are visible on the website.

### Result

**Passed**

---

## Test Case 3 – Nginx Service Verification

### Objective

Verify that the Nginx web server is running after deployment.

### Steps

Run the following command on the EC2 instance:

```bash
sudo systemctl status nginx
```

### Expected Result

- Nginx service is active (running).
- The application is served successfully.

### Result

**Passed**

---

## Test Case 4 – Application Response

### Objective

Verify that static resources are loaded correctly.

### Items Verified

- Home page
- CSS styling
- JavaScript functionality
- Images and static assets (if applicable)

### Expected Result

All resources load without errors.

### Result

**Passed**

---

## Test Summary

| Test Case | Status |
|-----------|--------|
| Website Accessibility | Passed |
| Deployment Verification | Passed |
| Nginx Service | Passed |
| Static Resource Loading | Passed |

---

## Outcome

Application testing confirmed that:

- The website was successfully deployed.
- The Application Load Balancer routed requests correctly.
- Nginx served the application without issues.
- Updates deployed through AWS CodeBuild and AWS Systems Manager were reflected on the live website.

The application operated as expected throughout the testing phase.
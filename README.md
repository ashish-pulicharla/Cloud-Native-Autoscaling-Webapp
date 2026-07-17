# 🚀 Cloud-Native Auto-Scaling Web Application with CI/CD, Monitoring, and Infrastructure Automation on AWS

## 📌 Project Overview

This project demonstrates the design and implementation of a **Cloud-Native Auto-Scaling Web Application** on **Amazon Web Services (AWS)**. The infrastructure is provisioned using **Terraform**, the application is deployed through an automated **CI/CD pipeline**, and the infrastructure is continuously monitored using **Amazon CloudWatch** and **Amazon SNS**.

To enhance security, deployment is performed using **AWS Systems Manager (SSM)**, eliminating the need for direct SSH access to EC2 instances.

---

## 🏗️ System Architecture

> **Architecture Diagram**

![System Architecture]<img width="687" height="395" alt="system_architecture" src="https://github.com/user-attachments/assets/3aded938-49e3-4297-9772-2839ab76db64" />


---

## ✨ Key Features

* Infrastructure provisioning using Terraform
* Custom VPC with public and private subnets
* Amazon EC2 Auto Scaling Group
* Application Load Balancer (ALB)
* Amazon RDS database
* Automated deployment using AWS CodeBuild
* Secure deployment with AWS Systems Manager (SSM)
* Continuous monitoring with Amazon CloudWatch
* Email notifications using Amazon SNS
* Nginx web server
* Complete project documentation and testing

---

## 🛠️ Technologies Used

### Cloud Services

* Amazon EC2
* Amazon VPC
* Application Load Balancer
* Auto Scaling Group
* Amazon RDS
* Amazon S3
* AWS CodeBuild
* AWS Systems Manager (SSM)
* Amazon CloudWatch
* Amazon SNS
* AWS IAM

### Infrastructure

* Terraform

### Web Technologies

* HTML
* CSS
* JavaScript
* Nginx
* Ubuntu Linux

### Version Control

* Git
* GitHub

---

## 📁 Repository Structure

```text
Cloud-Native-Auto-Scaling-Webapp/
│
├── app/                 # Web application
├── terraform/           # Infrastructure as Code
├── compute/             # EC2, ALB, Auto Scaling, RDS
├── cicd/                # CodeBuild and deployment scripts
├── monitoring/          # CloudWatch & SNS configuration
├── security/            # IAM, Security Groups, SSM
├── testing/             # Testing documentation
├── screenshots/         # Project screenshots
├── documentation/       # Project report and presentation
├── README.md
├── LICENSE
└── .gitignore
```

---

## ⚙️ Deployment Workflow

```text
Developer
     │
     ▼
GitHub Repository
     │
     ▼
AWS CodeBuild
     │
     ▼
Amazon S3 (Build Artifact)
     │
     ▼
AWS Systems Manager (SSM)
     │
     ▼
EC2 Instances
     │
     ▼
Nginx Web Server
     │
     ▼
Application Load Balancer
     │
     ▼
Users
```

---

## 📊 Monitoring

The application is continuously monitored using Amazon CloudWatch.

Monitored resources include:

* CPU Utilization
* Memory Utilization
* Disk Utilization
* Network Traffic
* System Logs
* Nginx Logs

CloudWatch Alarms are configured to trigger Amazon SNS email notifications whenever configured thresholds are exceeded.

---

## 🔒 Security

Security best practices implemented in this project include:

* Private subnets for EC2 instances and Amazon RDS
* IAM Roles for secure service authentication
* Security Groups to restrict network traffic
* Secure deployment using AWS Systems Manager (SSM)
* No direct SSH access to EC2 instances
* Least-privilege access control

---

## 🧪 Testing

The project was validated through:

* Deployment Testing
* Application Testing
* Monitoring Testing
* CloudWatch Alarm Testing
* Amazon SNS Notification Testing

Detailed testing reports are available in the **testing/** directory.

---

## 📸 Project Screenshots

Project screenshots are available in the **screenshots/** directory.

They include:

* Terraform Infrastructure
* VPC Architecture
* EC2 Instances
* Auto Scaling Group
* Application Load Balancer
* AWS CodeBuild
* AWS Systems Manager
* Amazon CloudWatch Dashboard
* CloudWatch Alarms
* Amazon SNS Notifications
* Deployed Web Application

---

## 📄 Documentation

Complete project documentation is available in the **documentation/** directory.

Included files:

* Project Report (PDF)
* Project Report (DOCX)
* Project Presentation

---

## 👥 Team Members

| Member   | Responsibility                               |
| -------- | -------------------------------------------- |
| Member 1 | Infrastructure (Terraform, VPC, IAM)         |
| Member 2 | Compute (EC2, Auto Scaling, ALB, RDS)        |
| Member 3 | CI/CD (GitHub, CodeBuild, SSM Deployment)    |
| Member 4 | Monitoring, Security, Testing, Documentation |

---

## 🚀 Future Enhancements

* HTTPS using AWS Certificate Manager (ACM)
* Domain integration using Amazon Route 53
* Containerization using Docker
* Kubernetes deployment using Amazon EKS
* Infrastructure security improvements
* Advanced application monitoring

---

## 📜 License

This project was developed for educational and internship purposes.

---

## ⭐ Acknowledgements

This project demonstrates cloud-native application deployment using AWS services, Infrastructure as Code, secure deployment practices, continuous monitoring, and automated infrastructure management.

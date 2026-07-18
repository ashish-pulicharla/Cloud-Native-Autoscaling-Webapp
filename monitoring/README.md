# Monitoring Module

## Overview

This module contains the monitoring and alerting configuration for the **Cloud-Native Auto-Scaling Web Application with CI/CD, Monitoring, and Infrastructure Automation on AWS**.

Monitoring was implemented using **Amazon CloudWatch**, **CloudWatch Agent**, and **Amazon SNS** to continuously observe the health and performance of the EC2 instances hosting the web application.

---

## Objectives

- Monitor EC2 instance performance in real time.
- Collect system and application logs.
- Visualize resource utilization using CloudWatch Dashboards.
- Generate automatic alerts when resource usage exceeds defined thresholds.
- Notify administrators through Amazon SNS email notifications.

---

## Monitoring Components

### Amazon CloudWatch

Amazon CloudWatch was used to monitor the infrastructure by collecting metrics such as:

- CPU Utilization
- Memory Utilization
- Disk Utilization
- Network Traffic

---

### CloudWatch Agent

The CloudWatch Agent was installed on the EC2 instances to collect additional operating system metrics and logs that are not available by default.

Collected metrics include:

- CPU usage
- Memory usage
- Disk usage
- Network statistics

Collected logs include:

- System logs (`/var/log/syslog`)
- Nginx access logs (`/var/log/nginx/access.log`)
- Nginx error logs (`/var/log/nginx/error.log`)

---

### CloudWatch Dashboard

A custom CloudWatch Dashboard was created to provide a centralized view of the application's performance.

Dashboard widgets display:

- CPU Utilization
- Memory Usage
- Disk Usage
- Network Traffic

---

### CloudWatch Alarms

CloudWatch Alarms were configured to detect abnormal resource utilization.

| Alarm | Threshold |
|--------|-----------|
| CPU Utilization | > 80% |
| Memory Utilization | > 80% |
| Disk Utilization | > 85% |

When an alarm is triggered, CloudWatch sends a notification to Amazon SNS.

---

### Amazon SNS

Amazon SNS delivers email notifications to the administrator whenever a CloudWatch Alarm enters the **ALARM** state.

This enables quick identification and response to infrastructure issues.

---

## Folder Structure

```
monitoring/
├── cloudwatch-agent-config.json
├── cloudwatch-dashboard.json
├── alarms.md
├── sns-notification.md
├── monitoring-setup.md
└── README.md
```

---

## Outcome

The monitoring solution provides:

- Continuous infrastructure monitoring
- Centralized log collection
- Real-time performance visualization
- Automatic email notifications
- Improved application reliability and availability

---

## Technologies Used

- Amazon CloudWatch
- Amazon CloudWatch Agent
- Amazon SNS
- Amazon EC2
- Nginx
- Ubuntu Linux
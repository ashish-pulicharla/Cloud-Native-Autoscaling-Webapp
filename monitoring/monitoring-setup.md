# CloudWatch Monitoring Setup

## Overview

Monitoring was implemented using the Amazon CloudWatch Agent. The agent was installed on the EC2 instances to collect system-level metrics such as memory usage, disk utilization, and network statistics, along with application and system logs. These metrics were visualized in CloudWatch Dashboards, while CloudWatch Alarms and Amazon SNS were used to notify administrators of abnormal conditions.

---

## Monitoring Architecture

```
EC2 Instance
     │
     ▼
CloudWatch Agent
     │
     ├── CPU Metrics
     ├── Memory Metrics
     ├── Disk Metrics
     ├── Network Metrics
     ├── System Logs
     └── Nginx Logs
            │
            ▼
Amazon CloudWatch
     │
     ├── Dashboard
     ├── Alarms
     └── Logs
            │
            ▼
Amazon SNS
     │
     ▼
Email Notification
```

---

## Installation Steps

### 1. Install the CloudWatch Agent

```bash
sudo apt update
sudo apt install amazon-cloudwatch-agent -y
```

### 2. Create the Configuration File

The CloudWatch Agent configuration was stored as:

```
/opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json
```

This configuration collects:

- CPU utilization
- Memory utilization
- Disk utilization
- Network traffic
- System logs
- Nginx access logs
- Nginx error logs

---

### 3. Start the CloudWatch Agent

```bash
sudo systemctl enable amazon-cloudwatch-agent
sudo systemctl start amazon-cloudwatch-agent
```

Verify the service:

```bash
sudo systemctl status amazon-cloudwatch-agent
```

---

## Metrics Collected

| Metric | Description |
|---------|-------------|
| CPU Utilization | Processor usage of the EC2 instance |
| Memory Utilization | Percentage of memory in use |
| Disk Utilization | Percentage of disk space used |
| Network In | Incoming network traffic |
| Network Out | Outgoing network traffic |

---

## Logs Collected

The following log files were forwarded to Amazon CloudWatch Logs:

| Log File | Purpose |
|----------|---------|
| /var/log/syslog | System events |
| /var/log/nginx/access.log | HTTP access requests |
| /var/log/nginx/error.log | Web server errors |

---

## Dashboard

A CloudWatch Dashboard was created to monitor:

- CPU Utilization
- Memory Usage
- Disk Usage
- Network Traffic

This provided a centralized view of the application's health and performance.

---

## Alerts

CloudWatch Alarms were configured for:

- CPU Utilization > 80%
- Memory Utilization > 80%
- Disk Utilization > 85%

When a threshold was exceeded, Amazon SNS sent an email notification to the administrator.

---

## Benefits

- Continuous monitoring of EC2 instances
- Real-time visibility into system performance
- Centralized log management
- Automatic alert notifications
- Improved reliability and availability of the application
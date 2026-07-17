# CloudWatch Alarms

## Overview

CloudWatch Alarms were configured to continuously monitor the health and performance of the EC2 instances in the Auto Scaling Group. When a metric exceeded the configured threshold, Amazon SNS sent an email notification to the project team.

---

## Configured Alarms

### 1. High CPU Utilization

| Property | Value |
|----------|-------|
| Metric | CPUUtilization |
| Namespace | AWS/EC2 |
| Threshold | Greater than 80% |
| Evaluation Period | 5 Minutes |
| Statistic | Average |
| Action | Send notification using Amazon SNS |

Purpose:
Detects unusually high CPU usage, which may indicate heavy application load or performance issues.

---

### 2. High Memory Utilization

| Property | Value |
|----------|-------|
| Metric | MEMORY_USED_PERCENT |
| Namespace | CloudNativeWebApp |
| Threshold | Greater than 80% |
| Evaluation Period | 5 Minutes |
| Statistic | Average |
| Action | Send notification using Amazon SNS |

Purpose:
Monitors memory consumption collected by the CloudWatch Agent.

---

### 3. High Disk Utilization

| Property | Value |
|----------|-------|
| Metric | DISK_USED_PERCENT |
| Namespace | CloudNativeWebApp |
| Threshold | Greater than 85% |
| Evaluation Period | 5 Minutes |
| Statistic | Average |
| Action | Send notification using Amazon SNS |

Purpose:
Alerts when disk usage approaches capacity, preventing application failures due to insufficient storage.

---

## Alarm Notifications

All alarms publish messages to the configured Amazon SNS topic.

Notification Method:
- Email

When an alarm enters the ALARM state:
1. CloudWatch detects the threshold breach.
2. The alarm changes state.
3. Amazon SNS sends an email notification.
4. The administrator can investigate and resolve the issue.

---

## Alarm Testing

The alarms were tested during project implementation.

Testing included:
- Increasing CPU utilization to trigger the CPU alarm.
- Verifying alarm state changes in CloudWatch.
- Confirming email notifications through Amazon SNS.
- Monitoring recovery when metrics returned to normal.

---

## Outcome

The monitoring solution successfully:
- Detected abnormal resource utilization.
- Generated automatic alerts.
- Improved system availability.
- Enabled proactive monitoring of the deployed web application.
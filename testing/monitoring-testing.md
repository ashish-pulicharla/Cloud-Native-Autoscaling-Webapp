# Monitoring Testing

## Overview

Monitoring testing was performed to verify that Amazon CloudWatch, CloudWatch Agent, CloudWatch Alarms, and Amazon SNS were functioning correctly. The objective was to ensure that system metrics were collected, alarms were triggered when thresholds were exceeded, and email notifications were delivered successfully.

---

## Test Environment

| Component | Service |
|----------|---------|
| Monitoring Service | Amazon CloudWatch |
| Monitoring Agent | CloudWatch Agent |
| Alert Service | Amazon SNS |
| Compute | Amazon EC2 |
| Operating System | Ubuntu |
| Web Server | Nginx |

---

## Test Case 1 – CloudWatch Agent Status

### Objective

Verify that the CloudWatch Agent is installed and running.

### Steps

1. Install the CloudWatch Agent.
2. Start the service.
3. Check the service status.

Command:

```bash
sudo systemctl status amazon-cloudwatch-agent
```

### Expected Result

- CloudWatch Agent is active (running).

### Result

**Passed**

---

## Test Case 2 – Metrics Collection

### Objective

Verify that CloudWatch receives metrics from the EC2 instance.

### Metrics Verified

- CPU Utilization
- Memory Utilization
- Disk Utilization
- Network Traffic

### Expected Result

All configured metrics appear in the CloudWatch console.

### Result

**Passed**

---

## Test Case 3 – Dashboard Verification

### Objective

Verify that the CloudWatch Dashboard displays the configured metrics.

### Dashboard Widgets

- CPU Utilization
- Memory Usage
- Disk Usage
- Network Traffic

### Expected Result

Dashboard displays real-time metrics for the EC2 instance.

### Result

**Passed**

---

## Test Case 4 – CloudWatch Alarm

### Objective

Verify that CloudWatch Alarms change state when thresholds are exceeded.

### Configured Alarms

| Alarm | Threshold |
|--------|-----------|
| CPU Utilization | > 80% |
| Memory Utilization | > 80% |
| Disk Utilization | > 85% |

### Expected Result

The alarm changes from **OK** to **ALARM** when the configured threshold is exceeded.

### Result

**Passed**

---

## Test Case 5 – Amazon SNS Notification

### Objective

Verify that Amazon SNS sends email notifications when an alarm is triggered.

### Steps

1. Trigger a CloudWatch Alarm.
2. Wait for the alarm to enter the **ALARM** state.
3. Verify that an email notification is received.
4. Confirm the alarm returns to **OK** after the metric returns to normal.

### Expected Result

The administrator receives an email notification from Amazon SNS.

### Result

**Passed**

---

## Test Summary

| Test | Status |
|------|--------|
| CloudWatch Agent | Passed |
| Metrics Collection | Passed |
| Dashboard Verification | Passed |
| Alarm Trigger | Passed |
| SNS Email Notification | Passed |

---

## Outcome

Monitoring testing confirmed that:

- The CloudWatch Agent collected system metrics successfully.
- CloudWatch displayed real-time metrics.
- Dashboards visualized system performance.
- CloudWatch Alarms detected threshold breaches.
- Amazon SNS delivered email notifications to the administrator.

The monitoring solution provided continuous visibility into the application's health and infrastructure performance.
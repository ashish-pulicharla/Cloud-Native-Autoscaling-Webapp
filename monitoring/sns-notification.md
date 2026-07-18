# Amazon SNS Notification Setup

## Overview

Amazon Simple Notification Service (SNS) was integrated with Amazon CloudWatch to provide real-time email alerts whenever a CloudWatch Alarm entered the **ALARM** state. This ensured that administrators were immediately informed about performance issues in the deployed web application.

---

## Purpose

The SNS topic was used to:

- Send email notifications when CloudWatch alarms were triggered.
- Inform administrators about high resource utilization.
- Improve monitoring and incident response.
- Reduce the need for continuous manual monitoring.

---

## Implementation Steps

### Step 1: Create an SNS Topic

- Open the AWS Management Console.
- Navigate to **Amazon SNS**.
- Create a **Standard Topic**.
- Give the topic an appropriate name (for example, `CloudWatchAlerts`).

---

### Step 2: Create an Email Subscription

- Select the created SNS topic.
- Click **Create Subscription**.
- Protocol: **Email**
- Endpoint: Administrator's email address.

---

### Step 3: Confirm Subscription

AWS sends a confirmation email to the subscribed address.

The subscription becomes active only after clicking the **Confirm Subscription** link.

---

### Step 4: Attach SNS to CloudWatch Alarms

While creating each CloudWatch Alarm:

- Select **Send notification to an SNS topic**.
- Choose the previously created SNS topic.
- Save the alarm configuration.

---

## Notification Flow

```
CloudWatch Metric
        │
        ▼
CloudWatch Alarm
        │
Threshold Exceeded
        │
        ▼
Amazon SNS Topic
        │
        ▼
Email Notification
        │
        ▼
Administrator
```

---

## Notifications Generated

The following alarms were configured to send email notifications:

- High CPU Utilization
- High Memory Utilization
- High Disk Utilization

---

## Testing

The notification system was tested by intentionally increasing resource utilization.

The following were verified:

- CloudWatch Alarm changed to **ALARM** state.
- SNS successfully published the notification.
- Confirmation email was received.
- Alarm returned to **OK** after utilization decreased.

---

## Outcome

The integration of Amazon SNS with CloudWatch provided:

- Automatic email alerts.
- Faster issue detection.
- Improved monitoring reliability.
- Better operational visibility of the deployed application.
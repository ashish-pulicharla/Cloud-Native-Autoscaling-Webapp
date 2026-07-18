# Target Group

## Overview

An AWS Target Group is used by the Application Load Balancer (ALB) to route incoming client requests to one or more registered EC2 instances. It performs health checks to ensure traffic is sent only to healthy instances, improving application availability and reliability.

---

## Features

- Routes traffic from the Application Load Balancer to EC2 instances
- Performs automatic health checks
- Sends traffic only to healthy targets
- Supports automatic target registration through Auto Scaling Groups
- Improves application availability and fault tolerance

---

## Configuration

| Parameter | Value |
|----------|-------|
| Target Type | Instance |
| Protocol | HTTP |
| Port | 80 |
| VPC | Project VPC |
| Health Check Protocol | HTTP |
| Health Check Path | / |
| Health Check Interval | 30 Seconds |
| Healthy Threshold | 5 |
| Unhealthy Threshold | 2 |
| Success Codes | 200 |

---

## Registered Targets

The Target Group contains EC2 instances launched by the Auto Scaling Group. When new instances are created, they are automatically registered with the Target Group. If an instance becomes unhealthy, it is removed from service until it passes health checks again.

---

## Integration

The Target Group is integrated with:

- Application Load Balancer (ALB)
- Auto Scaling Group (ASG)
- EC2 Instances

Traffic Flow:

```
Client
   │
   ▼
Application Load Balancer
   │
   ▼
Target Group
   │
   ├── EC2 Instance 1
   ├── EC2 Instance 2
   └── EC2 Instance 3
```

---

## Benefits

- High Availability
- Automatic Health Monitoring
- Load Distribution
- Fault Tolerance
- Seamless Auto Scaling Integration

---

## Summary

The Target Group serves as the bridge between the Application Load Balancer and EC2 instances. It continuously monitors the health of registered targets and ensures incoming traffic is directed only to healthy instances, providing a reliable and highly available application environment.

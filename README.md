# Automated Network Request Management

## Project Overview

Automated Network Request Management is a ServiceNow-based application designed to automate the process of submitting, managing, approving, and tracking network-related requests.

The system provides a centralized platform where users can submit network requests through a Service Catalog item. The submitted request information is automatically processed using Flow Designer, stored in a custom database table, routed for approval, and updated based on the approval decision.

The project reduces manual processing, improves data accuracy, provides better request tracking, and automates communication through email notifications.

---

## Problem Statement

Traditional network request management may involve manual forms, emails, spreadsheets, and communication between multiple teams. This can result in:

* Manual data entry
* Incomplete request information
* Delays in request processing
* Difficulty tracking request status
* Manual approval processes
* Lack of centralized request records
* Increased chances of data inconsistency
* Manual communication with requesters

To overcome these challenges, an automated Network Request Management system was developed using ServiceNow.

---

## Objectives

The main objectives of the project are:

* To provide a centralized platform for submitting network requests.
* To collect structured network request information.
* To validate and control request form fields.
* To automatically create request records.
* To store request information in a custom database table.
* To automate the approval process.
* To automatically update request status based on approval.
* To send email notifications to relevant users.
* To provide better visibility and tracking of requests.
* To improve data integrity and reduce manual effort.

---

## Technologies Used

| Technology / ServiceNow Component | Purpose                        |
| --------------------------------- | ------------------------------ |
| ServiceNow                        | Main application platform      |
| Service Catalog                   | Network request submission     |
| Catalog Variables                 | Collect request information    |
| Catalog UI Policy                 | Dynamic field visibility       |
| Flow Designer                     | Workflow automation            |
| Custom Database Table             | Store network request data     |
| Approval                          | Request approval process       |
| Email Notification                | Automated communication        |
| System Logs                       | Monitoring and troubleshooting |
| Audit History                     | Tracking record changes        |

---

## Features

### 1. Network Request Catalog Item

A Service Catalog item named **Network Request** was created to allow users to submit network-related requests.

**Catalog Item:** Network Request

**Description:** Network request Management

The catalog item collects important requester and network information.

---

### 2. Requester Information

The request form contains fields for collecting requester information and network request details.

The implemented fields include:

* Opened on behalf
* Email ID
* User Name
* Phone Number
* Requested For
* Mobile Number
* Type of Connection
* Existing ID
* Total Amount
* Mode of Payment
* Address

---

### 3. Type of Connection

The **Type of Connection** field provides the following options:

* Existing
* New

A Catalog UI Policy was implemented to dynamically control the visibility of the Existing ID field.

When the user selects:

**Type of Connection = Existing**

the **Existing ID** field is displayed.

When the user selects:

**Type of Connection = New**

the **Existing ID** field is hidden.

This improves the user experience and prevents unnecessary information from being displayed.

---

## 4. Custom Database Table

A custom table named **Database Tables** was created to store the submitted network request information.

The table contains fields including:

* Database Number
* Requested For
* Mobile Number
* Type of Connection
* Mode of Payment
* Total Amount
* Address
* Approval Status
* Assigned To
* Created
* Created By
* Updated
* Updated By
* Updates
* Sys ID

The custom table provides a centralized location for storing and tracking network request records.

---

## 5. Flow Designer Automation

Flow Designer is used to automate the complete request lifecycle.

The main workflow consists of:

```text
Service Catalog Trigger
        ↓
Get Catalog Variables
        ↓
Create Record
        ↓
Send Email
        ↓
Ask For Approval
        ↓
Flow Logic - If Condition
        ↓
Update Record
```

### Flow Trigger

The flow is triggered when a new request is submitted through the Service Catalog.

**Trigger:** Service Catalog

This allows the workflow to automatically start whenever a user submits a Network Request.

### Get Catalog Variables

The **Get Catalog Variables** action retrieves the values submitted by the user through the Network Request catalog item.

These values are then used in subsequent flow actions.

### Create Record

The **Create Record** action creates a corresponding record in the custom **Database Tables** table.

The catalog variable values are mapped to the appropriate fields in the custom table.

This ensures that every submitted network request is stored as a structured database record.

### Send Email

The **Send Email** action sends an automated email notification during the request processing lifecycle.

The notification provides information about the request and keeps the requester informed about the progress of the request.

---

## 6. Approval Process

An approval process was implemented using Flow Designer.

The **Ask For Approval** action is used to send the request for approval.

The approval process can be represented as:

```text
Request Submitted
        ↓
Request Record Created
        ↓
Approval Requested
        ↓
Approver Reviews Request
        ↓
      Decision
      /      \
 Approve    Reject
    ↓          ↓
 Approved    Rejected
```

---

## 7. Flow Logic

Flow Logic is used to determine the next step based on the approval result.

The flow checks the approval condition and performs the appropriate action.

If the request is approved, the corresponding record is updated with the approved status.

If the request is rejected, the corresponding record is updated accordingly.

---

## 8. Update Record

The **Update Record** action updates the request record after the approval decision.

This ensures that the request record reflects the latest state of the request.

For example:

```text
Approval Status = Approved
```

or

```text
Approval Status = Rejected
```

---

## 9. Email Notifications

Email notifications are integrated into the workflow to keep users informed about important request events.

Examples include:

* Request creation notification
* Approval notification
* Request status update notification

Example request creation notification:

```text
Request REQ0010002 was created
```

Example approval notification:

```text
Request REQ0010002 was approved
```

---

## 10. Request Lifecycle

The complete lifecycle of a network request is:

```text
User Opens Network Request
            ↓
Fills Request Details
            ↓
Submits Request
            ↓
ServiceNow Creates Request
            ↓
Flow Designer Starts
            ↓
Catalog Variables Retrieved
            ↓
Database Record Created
            ↓
Email Notification Sent
            ↓
Approval Requested
            ↓
Approver Reviews Request
            ↓
Approval Decision
       ↙            ↘
   Approved        Rejected
      ↓                ↓
Update Record      Update Record
      ↓                ↓
Email Notification Email Notification
```

---

## 11. Data Integrity

Data integrity was considered during the development of the application.

The system uses:

* Mandatory fields
* Catalog UI Policies
* Structured catalog variables
* Controlled field choices
* Approval status validation
* Automated record creation
* Automated record updates

These mechanisms help reduce incomplete and inconsistent request information.

---

## 12. Testing

The application was tested by submitting network requests and verifying the complete workflow.

| Test Case | Test Description           | Expected Result                      | Status |
| --------- | -------------------------- | ------------------------------------ | ------ |
| TC01      | Submit Network Request     | Request should be created            | Pass   |
| TC02      | Select Existing connection | Existing ID should be displayed      | Pass   |
| TC03      | Select New connection      | Existing ID should be hidden         | Pass   |
| TC04      | Submit request             | Database record should be created    | Pass   |
| TC05      | Request approval           | Approval request should be generated | Pass   |
| TC06      | Approve request            | Request status should be updated     | Pass   |
| TC07      | Reject request             | Rejection should be handled          | Pass   |
| TC08      | Request creation           | Email notification should be sent    | Pass   |
| TC09      | Request approval           | Approval notification should be sent | Pass   |
| TC10      | Verify record history      | Request changes should be traceable  | Pass   |

---

## 13. Sample Request Lifecycle

A sample request was submitted through the Network Request catalog item.

The request generated a ServiceNow request number.

The request was then processed through Flow Designer.

The flow:

1. Retrieved the submitted catalog variables.
2. Created a record in the Database Tables table.
3. Sent an email notification.
4. Generated an approval request.
5. Processed the approval decision.
6. Updated the database record.
7. Sent the appropriate notification.

The request lifecycle was verified using ServiceNow records, system logs, and audit history.

---

## 14. Advantages

The Automated Network Request Management system provides the following benefits:

* Reduces manual processing.
* Centralizes network request information.
* Improves request tracking.
* Automates approvals.
* Automates notifications.
* Reduces data entry errors.
* Improves data consistency.
* Provides better visibility into request status.
* Creates an auditable request lifecycle.
* Improves overall operational efficiency.

---

## 15. Future Enhancements

The project can be further enhanced by implementing:

* Role-based access control for different teams.
* SLA monitoring.
* Priority-based request processing.
* Dashboard and reporting.
* Integration with external network management systems.
* Automated provisioning of network resources.
* Mobile-friendly request management.
* Advanced analytics for network requests.
* Integration with REST APIs.

---

## 16. Project Workflow Summary

The overall system can be summarized as:

```text
User
 ↓
Service Catalog
 ↓
Network Request Form
 ↓
Request Submission
 ↓
Flow Designer
 ↓
Get Catalog Variables
 ↓
Create Database Record
 ↓
Email Notification
 ↓
Approval
 ↓
Approval Decision
 ↓
Update Database Record
 ↓
Final Notification
```

---

## 17. Screenshots

Screenshots demonstrating the implementation will be added to the project repository.

The project screenshots include:

1. Network Request Catalog Item
2. Network Request Form
3. Type of Connection and Existing ID behavior
4. Database Tables custom table
5. Database Table fields
6. Flow Designer workflow
7. Get Catalog Variables action
8. Create Record action
9. Ask For Approval action
10. Flow Logic
11. Approval Request
12. Created Request
13. Approved Request
14. Email Notification
15. Flow Execution Details

---

## 18. Demo

A complete demonstration of the Automated Network Request Management system will be provided through the demo link below.

**Demo Video:**
Project demo : https://drive.google.com/file/d/1LXFAOK2Mi65Uf_-8C_Vg9MY29PInHhMr/view?usp=sharing

The demonstration covers:

* Network Request submission
* Dynamic form behavior
* Request creation
* Database record creation
* Flow Designer execution
* Approval process
* Request approval
* Record update
* Email notification

---

## 19. Documentation

The complete project documentation is available in the `Documentation` folder.

**Documentation:**

[📘 View Project Documentation](Documentation/Automated%20Network%20Request%20Management%20document.pdf)

---

## 20. Author

**Name:** Avala Praveena

**Project:** Automated Network Request Management

**Platform:** ServiceNow

**Department:** Computer Science and Engineering

---

## License

This project was developed for academic and project demonstration purposes.

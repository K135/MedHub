# MedHub Admin Backend API Documentation

Base URL: `http://localhost:5001/api`

## Authentication

All protected routes require an authentication token in the header:
```
Authorization: Bearer <token>
```
or
```
x-auth-token: <token>
```

---

## Auth Routes

### POST `/auth/signup`
Register a new organizer
- **Body**: `{ name, email, phone, password, organizationName }`
- **Response**: `{ token }`

### POST `/auth/login`
Login organizer
- **Body**: `{ email, password }`
- **Response**: `{ token }`

---

## Profile Routes (Protected)

### GET `/profile`
Get organizer profile
- **Response**: Organizer object (without password)

### PUT `/profile`
Update organizer profile
- **Body**: `{ name, email, phone, organizationName, website }`
- **Response**: Updated organizer object

### PUT `/profile/password`
Change password
- **Body**: `{ currentPassword, newPassword }`
- **Response**: `{ msg: 'Password updated successfully' }`

---

## Course Routes (Protected)

### POST `/courses`
Create a new course
- **Body**: Course object with fields:
  - `courseType`: 'external' | 'banner' | 'lms'
  - `title`, `description`, `bannerImage`
  - `price`, `discount`
  - `externalLink` (for external courses)
  - `startDate`, `endDate`, `location`
  - `targetProfession` (array)
  - `credits` (array of { type, value })
  - `modules` (for LMS courses)
  - `status`: 'draft' | 'active' | 'archived'
- **Response**: Created course object

### GET `/courses`
Get all courses for logged-in organizer
- **Response**: Array of course objects

### GET `/courses/:id`
Get specific course
- **Response**: Course object

### PUT `/courses/:id`
Update course
- **Body**: Fields to update
- **Response**: Updated course object

### DELETE `/courses/:id`
Delete course
- **Response**: `{ msg: 'Course removed' }`

### GET `/courses/stats/summary`
Get course statistics
- **Response**: `{ totalCourses, activeCourses, draftCourses, totalEnrollments }`

---

## Transaction/Payment Routes (Protected)

### GET `/transactions`
Get all transactions for organizer
- **Response**: Array of transaction objects with populated course info

### GET `/transactions/stats`
Get payment statistics
- **Response**: 
  ```json
  {
    "totalEarnings": number,
    "availableForPayout": number,
    "monthlyGrowth": number,
    "nextPayoutDate": date,
    "transactionCount": number
  }
  ```

### GET `/transactions/:id`
Get specific transaction
- **Response**: Transaction object

### POST `/transactions`
Create new transaction (for testing)
- **Body**: `{ courseId, amount, student: { name, email } }`
- **Response**: Created transaction object

---

## Bank Details Routes (Protected)

### GET `/bank-details`
Get bank details (masked)
- **Response**: Bank details with masked account number

### POST `/bank-details`
Save/update bank details
- **Body**: `{ accountHolderName, bankName, routingNumber, accountNumber }`
- **Response**: Bank details (masked)

### DELETE `/bank-details`
Delete bank details
- **Response**: `{ msg: 'Bank details removed' }`

---

## Support Routes (Protected)

### POST `/support`
Create support ticket
- **Body**: `{ subject, message, priority }`
- **Response**: Created ticket object

### GET `/support`
Get all tickets for organizer
- **Response**: Array of ticket objects

### GET `/support/:id`
Get specific ticket
- **Response**: Ticket object

### POST `/support/:id/reply`
Add reply to ticket
- **Body**: `{ message }`
- **Response**: Updated ticket with reply

### PUT `/support/:id/status`
Update ticket status
- **Body**: `{ status }` ('open' | 'in-progress' | 'resolved' | 'closed')
- **Response**: Updated ticket object

---

## Upload Routes (Protected)

### POST `/upload/single`
Upload single file
- **Content-Type**: `multipart/form-data`
- **Field**: `file`
- **Response**: 
  ```json
  {
    "filename": string,
    "originalname": string,
    "mimetype": string,
    "size": number,
    "url": string
  }
  ```

### POST `/upload/multiple`
Upload multiple files (max 10)
- **Content-Type**: `multipart/form-data`
- **Field**: `files`
- **Response**: Array of file objects

### DELETE `/upload/:filename`
Delete uploaded file
- **Response**: `{ msg: 'File deleted successfully' }`

---

## Static Files

Uploaded files are accessible at:
```
http://localhost:5001/uploads/<filename>
```

---

## Models

### Organizer
- name, email, phone, password
- organizationName, website
- createdAt

### Course
- organizer (ref)
- courseType, title, description
- bannerImage, price, discount
- externalLink, startDate, endDate, location
- targetProfession[], credits[], modules[]
- status, enrollmentCount, rating
- createdAt, updatedAt

### Transaction
- organizer (ref), course (ref)
- transactionId, description, amount
- status, payoutStatus
- student: { name, email }
- createdAt

### BankDetails
- organizer (ref)
- accountHolderName, bankName
- routingNumber, accountNumber
- isVerified
- createdAt, updatedAt

### SupportTicket
- organizer (ref)
- subject, message
- status, priority
- replies[]
- createdAt, updatedAt

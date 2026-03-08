# Online Quiz Application with Realtime Database and API Integration

A **cloud-based online quiz platform** built using **Google App Engine and Firebase**, designed to simplify quiz management for educators and provide an interactive assessment platform for students.

The application enables **real-time quiz participation, automated evaluation, and instant result tracking**, making it suitable for modern digital learning environments.

---

# Project Information

| Field | Details |
|------|------|
| Course | CSI3001 – Cloud Computing and Methodologies |
| Project | Online Quiz Application |
| Technologies | Google App Engine, Firebase Realtime Database |

---

# Objective of the Project

The objective of this project is to develop an **intuitive and scalable online quiz system** using cloud technologies.

The platform enables:

- Easy quiz creation for educators  
- Real-time quiz participation for students  
- Automatic evaluation of responses  
- Instant score tracking and feedback  
- Scalable infrastructure capable of supporting many users simultaneously  

By leveraging **cloud services and real-time databases**, the system enhances **interactive digital learning and academic performance tracking**.

---
FACULTY USER FUNCTIONALITIES:

<img width="940" height="588" alt="image" src="https://github.com/user-attachments/assets/0982af01-7286-46fe-b47f-f5670e7e61c1" />

<img width="940" height="588" alt="image" src="https://github.com/user-attachments/assets/ccf4c834-ce4d-47f0-95f8-9da78d9d2727" />

<img width="940" height="588" alt="image" src="https://github.com/user-attachments/assets/929d2759-2ea2-44f6-a832-bc3a7002d26f" />

<img width="940" height="588" alt="image" src="https://github.com/user-attachments/assets/0576c491-ce84-4e68-ad73-aa550d09f609" />

<img width="940" height="588" alt="image" src="https://github.com/user-attachments/assets/089b3f1d-dd93-47a7-8780-626e13b0779a" />

<img width="940" height="588" alt="image" src="https://github.com/user-attachments/assets/a33b9a0a-4fac-4eaa-8c72-50e377938b01" />

<img width="940" height="588" alt="image" src="https://github.com/user-attachments/assets/f2075f45-5587-4016-ae8d-b4d7eb6b9fc7" />

<img width="940" height="588" alt="image" src="https://github.com/user-attachments/assets/ca8b331b-2bc9-4c6e-a711-5d436004a0d8" />

<img width="940" height="713" alt="image" src="https://github.com/user-attachments/assets/82880f5c-c9f4-4692-a861-6a0a28476475" />

STUDENT USER FUNCTIONALITIES:
<img width="940" height="588" alt="image" src="https://github.com/user-attachments/assets/e299a2df-6fbc-40b2-b9cf-0295901703e2" />

<img width="940" height="588" alt="image" src="https://github.com/user-attachments/assets/a01c8f69-17dc-435e-9c76-ea8e73417b08" />

<img width="940" height="588" alt="image" src="https://github.com/user-attachments/assets/7c335328-57da-47ab-adea-36ff0232f0ce" />

<img width="940" height="588" alt="image" src="https://github.com/user-attachments/assets/87428a15-77a7-4c73-9672-4a72069b4884" />

<img width="940" height="588" alt="image" src="https://github.com/user-attachments/assets/007d45a9-3a77-4476-b717-3ce89aea6044" />

Google Analytics Integration
<img width="940" height="513" alt="image" src="https://github.com/user-attachments/assets/991f43dc-4f1c-4f72-889a-75a8e265b0a9" />

<img width="940" height="525" alt="image" src="https://github.com/user-attachments/assets/4edf0373-272b-4e30-8919-7bb35cc1ffd4" />

# System Architecture

The system follows a **cloud-based architecture** where the frontend interacts with Firebase services deployed on Google Cloud.

```
User Interface (Student / Faculty)
            │
            ▼
       Web Application
            │
            ▼
      Google App Engine
            │
            ▼
   Firebase Services & APIs
            │
            ▼
Realtime Database + Authentication
```

---

# Modules

The application is divided into two primary modules.

---

## Student Module

This module allows students to interact with quizzes and monitor their performance.

### Features

- Student registration and login  
- Participate in quizzes assigned by faculty  
- View quiz results and scores  
- Access quiz history  
- Receive feedback on performance  

The interface is designed to be **simple and user-friendly**, ensuring smooth quiz participation.

---

## Faculty Module

The faculty module provides administrative control over quizzes.

### Features

- Create and manage quizzes  
- Assign quizzes to students  
- Set quiz deadlines  
- Monitor student participation  
- Analyze results and performance  
- Provide feedback to students  

This module enables educators to **effectively manage assessments and evaluate student learning progress**.

---

# Database

The project uses **Firebase Realtime Database**, a cloud-hosted NoSQL database that synchronizes data across connected clients instantly.

### Key Characteristics

- Real-time data synchronization  
- Low latency data access  
- Highly scalable cloud infrastructure  
- Secure access using Firebase security rules  

### Data Stored

The database stores:

- User profiles  
- Quiz questions  
- Student responses  
- Quiz scores  
- Result analytics  

When a faculty member creates or updates a quiz, the changes are **instantly reflected for all students without refreshing the page**.

Similarly, when students submit answers, their responses and scores are **automatically updated in the database in real time**.

---

# API Integration

The application integrates multiple **Firebase and Google APIs** to enhance functionality.

---

## Firebase Authentication

Handles secure login and user identity management.

Features:

- Email/password authentication  
- Secure user access control  
- Role-based login for students and faculty  

---

## Firebase Realtime Database

Provides real-time storage and synchronization of application data including:

- Quizzes  
- Results  
- User data  

This ensures **instant updates across all connected devices**.

---

## Firebase Analytics

Tracks user activity and system performance.

It helps analyze:

- Application usage  
- User engagement  
- Platform performance  

---

## Gmail API

Used to send automated notifications such as:

- Quiz announcements  
- Result notifications  
- Updates to users  

---

## Google Cloud Document AI API

Processes documents and extracts structured information from files such as:

- Quiz forms  
- Reports  
- Educational documents  

---

# Key Features

- Cloud-hosted architecture  
- Real-time quiz updates  
- Automatic result generation  
- Secure authentication system  
- Role-based user access  
- Scalable backend infrastructure  
- API-driven communication  

---

# Technologies Used

| Category | Technology |
|---|---|
| Cloud Platform | Google App Engine |
| Database | Firebase Realtime Database |
| Authentication | Firebase Authentication |
| APIs | Gmail API, Google Document AI |
| Analytics | Firebase Analytics |
| Backend | Google Cloud Services |


# Future Enhancements

Possible improvements include:

- Timer-based quizzes  
- Leaderboards and ranking system  
- AI-based performance analysis  
- Multi-course quiz management  
- Mobile application support  
- Advanced analytics dashboard  

# Conclusion

The **Online Quiz Application** demonstrates how **cloud computing and real-time databases** can be used to build scalable educational platforms.

By integrating **Google Cloud services and Firebase APIs**, the system provides a **secure, scalable, and efficient solution for digital assessments**.

---

# License

This project is developed for **academic purposes** as part of the CSI3001 Cloud Computing course.

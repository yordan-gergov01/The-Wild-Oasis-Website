# The Wild Oasis - Customer Booking Website

The Wild Oasis is a modern and seamless booking platform for hotel customers, designed as a companion to the internal hotel management system for The Wild Oasis resort. The platform enables customers to explore, reserve, and manage bookings of individual cabins through an intuitive interface with enhanced user experience.


## Table of contents

- **Features**
- **Technology Stack**
- **Architecture and Design Principles**
- **Setup and Installation**


## Features

- **User Authentication and Authorization:**
  - Google OAuth integration for secure, streamlined login and account creation.
  - Access control allows only registered users to view, book, or manage reservations.

- **Cabin Information and Gallery:**
  - Dynamic cabin pages display detailed descriptions, high-quality images, and pricing for each option.
  - Interactive availability check enables users to easily browse cabin options.

- **Booking Management:**
  - A dedicated reservation management page allows users to view, update, or delete existing bookings.
  - Date Selection with DayPicker: Users choose check-in and check-out dates using an intuitive, visual date picker for an efficient reservation process.

- **Responsive Multi-Page Navigation:**
  - Clearly defined navigation paths, allowing users to effortlessly switch between pages, including the home, cabins, reservations, and account settings.

![The Wild Oasis Website 1](https://github.com/user-attachments/assets/7f8986ea-2c5d-4518-8487-f426660c0349)
![The Wild Oasis Website 2](https://github.com/user-attachments/assets/c7ab2bca-fcc0-4121-b728-894f35cf6f3f)
![The Wild Oasis Website 3](https://github.com/user-attachments/assets/8da2c22f-3c1e-450f-8493-343953443372)
![The Wild Oasis Website 4](https://github.com/user-attachments/assets/2ac84221-0821-40af-9492-48e3c02413b0)
![The Wild Oasis Website 5](https://github.com/user-attachments/assets/c6328086-adbb-4649-8fe3-601a445037f4)
![The Wild Oasis Website 6](https://github.com/user-attachments/assets/9b0e3759-3d08-497e-937f-02c63c00e789)
![The Wild Oasis Website 7](https://github.com/user-attachments/assets/c09503bf-493d-4863-9d8f-132e03f2f5f1)
![The Wild Oasis Website 8](https://github.com/user-attachments/assets/79e4af23-b4b4-43b9-b443-da98cacd206f)
![The Wild Oasis Website 9](https://github.com/user-attachments/assets/375bc8af-4cb1-49e3-88d0-6492a39a7b0b)
 

## Technology stack

- **React and Next.js:** Provides efficient rendering, fast navigation, and SEO optimization.
- **Tailwind CSS:** Ensures responsive, accessible, and modern styling with minimal custom CSS.
- **DayPicker:** Simplifies the booking interface by enabling smooth date selection.
- **Supabase:** Real-time database and authentication service powering data storage, user authentication, and secure bookings.
- **Vercel:** Scalable, production-ready deployment with automatic optimizations for performance.


## Architecture and Design Principles

This project is designed with flexibility, scalability, and maintainability in mind, following several software engineering best practices:

- **Modular Component Structure:**
  - All components are isolated and reusable, ensuring a clean separation of concerns, improving code readability, and enhancing testing capabilities.

- **Client and Server Component Logic:**
  - Maintains a clear separation of responsibilities between client and server components to optimize performance and improve data flow.

- **Server Actions:**
  - Utilizes server-side actions for direct interaction with Supabase, enhancing security and reducing client-side processing for faster load times.

- **Authentication and Security:**
  - Uses OAuth 2.0 for secure access and Supabase for protected user data, ensuring privacy and reliability.

- **Responsive and Accessible Design:**
  - Tailwind CSS provides a responsive layout across devices, ensuring accessibility and a consistent user experience.


## Installation and setup

To set up the project locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/yordan-gergov01/The-Wild-Oasis-Website.git
cd The-Wild-Oasis-Website

2. Install dependencies:
   npm install

3. Environment Variables:

- **Create a .env file with the following variables:**
  - SUPABASE_URL
  - SUPABASE_ANON_KEY
  - NEXT_PUBLIC_GOOGLE_CLIENT_ID
- **These variables are required to connect to Supabase and Google OAuth.**

4. Run the Development server:
   npm run dev


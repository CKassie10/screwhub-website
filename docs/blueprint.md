# **App Name**: ScrewHub

## Core Features:

- Product Catalog & Display: Showcase a wide range of screws on the homepage, detailed category pages, and individual product view pages, including generic descriptions, images, and dynamic pricing. All product data is fetched from Firestore.
- Advanced Product Search & Filtering: Enable users to efficiently find screws using powerful filters by material, head style, drive type, length, diameter, finish, and price. Includes an intelligent search bar with autocomplete for quick discovery, all driven by Firestore product data.
- Screw Selector Assistant: An intuitive AI-powered tool that guides users through selecting the most appropriate screw type based on their specific application, materials, and environmental requirements.
- Shopping Cart & Checkout Flow: Allow users to add, remove, and manage items in their shopping cart. Features a multi-step checkout process with a Stripe payment gateway placeholder.
- User Authentication & Order History: Implement secure user registration and login functionality using Firebase Authentication, providing a foundation for persistent carts and future order history features.
- Dedicated Contact & Inquiry Form: A clear contact page displaying a primary call/WhatsApp contact ('Kamal – 083 460 0993') and a basic inquiry form for users to submit messages directly to a Firebase backend.

## Style Guidelines:

- Primary: #334155 (A sophisticated cool slate blue-gray, providing a professional and industrial foundation for headers, main buttons, and navigational links.)
- Secondary: #CA8A04 (A rich gold/brass tone, used to highlight 'Add to Cart' actions and featured badges, evoking a sense of quality and metallic materials.)
- Accent: #EA580C (A vibrant orange, strategically applied for 'sales' notifications, 'new arrivals', and urgent calls to action, drawing the user's eye effectively.)
- Background: #F9FAFB (A soft, light off-white that serves as the main page background, ensuring excellent readability and a clean, expansive aesthetic.)
- Text: #111827 (Dark primary text color for optimal contrast and legibility, complemented by #4B5563 for secondary text elements and muted details, maintaining WCAG AA compliance.)
- Headlines: 'Space Grotesk' (a sans-serif font that conveys a modern, precise, and tech-oriented feel, ideal for prominent titles and impactful statements.)
- Body Text: 'Inter' (a highly legible grotesque sans-serif chosen for its clean, objective appearance, ensuring readability for product descriptions, filtering options, and general content.)
- Sleek, minimalist line-art vector icons will be employed across the site. These icons will represent various screw types, categories, and core e-commerce functionalities, aligning with the app's clean, modern, and precise theme.
- A responsive, grid-based layout for product listings, designed for visual clarity and intuitive navigation. Features include prominent sidebar filters and a clean, spacious presentation, influenced by `screw-distributors.co.za` for an optimal e-commerce flow.
- Subtle and purposeful animations will be integrated, such as smooth transitions for content loading and filtering, and gentle hover effects on interactive elements, enhancing the user experience without being intrusive. Lazy loading will be applied to all images for performance.
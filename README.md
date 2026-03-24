# Traveller Choice

Traveller Choice is a React travel website UI with dedicated pages for flights, hotels, visa services, cruises, forex, and contact support. It includes a large landing-page hero section, promotional travel cards, an auth modal, and a responsive navigation flow for desktop and mobile screens.

## Features

- Responsive desktop navbar and mobile slide-in menu
- Full-screen hero section with flight, hotel, and rental search tabs
- Dedicated pages for flights, hotels, visas, cruises, forex, and contact
- Reusable cards, banners, filters, testimonial blocks, and footer sections
- Floating chat assistant and modal-based sign-in/join UI

## Tech Stack

- React 18
- React Router DOM 6
- React Scripts 5
- Plain CSS

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm start
```

The app runs locally at `http://localhost:3000`.

### Create a Production Build

```bash
npm run build
```

## Available Scripts

- `npm start` starts the development server
- `npm run build` creates an optimized production build

## Project Structure

```text
src/
  App.js
  index.js
  index.css
  components/
    AuthModal.jsx
    ChatBot.jsx
    Footer.jsx
    Navbar.jsx
  pages/
    Contact.jsx
    Cruise.jsx
    Flights.jsx
    Forex.jsx
    GoaPackages.jsx
    Home.jsx
    Hotels.jsx
    Visa.jsx
public/
  index.html
```

## Main Pages

- `Home` contains the hero banner, offers, destinations, testimonials, and travel content.
- `Flights` provides a flight enquiry layout with supporting promotional content.
- `Hotels` includes a hotel search strip and featured stays.
- `Visa` includes visa destination cards, an enquiry form, and related package sections.
- `Cruise`, `Forex`, and `Contact` extend the travel-services experience.

## Notes

- Images are loaded from external demo sources such as Unsplash and Random User.
- Some package dropdown entries are placeholders for future route expansion.

## Customization

- Update page content in `src/pages/`
- Adjust shared styling in `src/index.css`
- Extend shared UI from `src/components/`

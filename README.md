# My Portfolio App

This is a personal portfolio website built with React, React Router, and Tailwind CSS. The app showcases my projects, resume, recommendations, and contact details with a modern, responsive design. It features a full-screen background image with a neon flicker effect on the text and mobile-friendly navigation.

![Home Page Screenshot](./images/homepage-screenshot.png)

## Features

- **Responsive Design:**  
  Adaptable layout for both desktop and mobile devices with a side menu on desktop and a hamburger menu on mobile.
- **Client-side Routing:**  
  Navigates between pages using React Router with a custom 404 fallback for GitHub Pages.
- **Neon Flicker Effect:**  
  Custom CSS animations create a faulty neon light effect on key text elements.
- **Full-screen Background:**  
  Uses a background image that covers the entire viewport without scrolling.
- **Easy Navigation:**  
  Clickable areas and intuitive menus allow quick access to different sections of the portfolio.

## Technologies Used

- **[React](https://reactjs.org/)** – For building user interfaces.
- **[React Router](https://reactrouter.com/)** – For managing client-side routing.
- **[Tailwind CSS](https://tailwindcss.com/)** – For rapid styling with utility-first classes.
- **Custom CSS** – For animations and unique design effects (e.g., neon flicker).
- **[GitHub Pages](https://pages.github.com/)** – For deployment of the static site.


## Installation

1. **Clone the repository:**

   git clone https://github.com/yourusername/your-portfolio-app.git
   cd your-portfolio-app

### Install dependencies:

npm install
# or
yarn install

npm start
# or
yarn start

The app will run at http://localhost:3000.

## Deployment:

### To deploy this app to GitHub Pages:

npm run build
# or
yarn build

### Deploy using GitHub Pages:

You can use the gh-pages package to deploy your build folder. For more details, see the Create React App deployment documentation.

## Project Structure:

my-portfolio-app/
├── public/
│   ├── index.html
│   ├── 404.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   ├── Navbar/
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Projects.js
│   │   ├── Resume.js
│   │   ├── AboutMe.js
│   │   ├── Recommendations.js
│   │   └── ContactMe.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md

## Configuration:

### React Router Future Flags:

The app uses future flags for React Router to enable new relative splat path resolution and state updates wrapped in React.startTransition. These flags are set in index.js:

<BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
  <App />
</BrowserRouter>

## Neon Text Animation:

The neon flicker effect is implemented in a CSS file (e.g., Home.css). You can adjust the animation parameters to fine-tune the faulty neon effect.

## Contributing:

Contributions are welcome! Please fork the repository and submit a pull request with your improvements. For major changes, please open an issue first to discuss your ideas.

## License:

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments:

React

React Router

Tailwind CSS

Inspiration from modern, minimal portfolio designs.


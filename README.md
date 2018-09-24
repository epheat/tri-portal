# Triangle Portal
This is the repository for the Triangle Portal. To contribute get in contact with Evan: epheat07@gmail.com.

## Repository Info
The frontend code is located in the src/ directory. Entry point is index.js, which renders Main.jsx. Webpage components should be located src/pages/, while reusable components should be in src/components/. Styles for all components will be in corresponding directories in scss/. Don't forget to import all the partial scss files in their corresponding scss group files: i.e. import all component scss in _components.scss, pages in _pages.scss, etc.

## Getting Started
1. Clone the respository: `git clone https://github.com/epheat/tri-portal.git`.
2. Install dependencies: `npm install`. If you'll only be messing with the frontend, skip to step 4.
3. After making changes to the backend, publish those changes to AWS with `amplify push`.
4. Build and serve the frontend with hot reloading: `npm run start`.
5. In your browser, navigate to localhost:8080.

// scripts/generate.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import csv from "csv-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvFilePath = path.join(__dirname, "../websites.csv");
const buildDir = path.join(__dirname, "../build");

// পুরনো build ডিলিট
if (fs.existsSync(buildDir)) {
  fs.rmSync(buildDir, { recursive: true, force: true });
}
fs.mkdirSync(buildDir);

const heroWords = ["Quick", "Fast", "Speedy"];

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (row) => {
    const { domain, title,  phone, address } = row;
    if (!domain) return;

    const appDir = path.join(buildDir, domain);
    fs.mkdirSync(appDir, { recursive: true });
    fs.mkdirSync(path.join(appDir, "src"), { recursive: true });

    const packageJson = {
      name: domain.replace(/\W+/g, "-"),
      private: true,
      version: "0.0.0",
      scripts: {
        dev: "vite",
        build: "vite build",
        preview: "vite preview",
      },
      dependencies: {
        react: "^19.0.0",
        "react-dom": "^19.0.0",
      },
      devDependencies: {
        vite: "^5.0.0",
        "@vitejs/plugin-react": "^4.0.0",
        tailwindcss: "^3.4.0",
        daisyui: "^4.0.0",
      },
    };
    fs.writeFileSync(
      path.join(appDir, "package.json"),
      JSON.stringify(packageJson, null, 2)
    );

    // vite.config.js
    fs.writeFileSync(
      path.join(appDir, "vite.config.js"),
      `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});`
    );

    // index.html
    fs.writeFileSync(
      path.join(appDir, "index.html"),
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`
    );

    // tailwind.config.js
    fs.writeFileSync(
      path.join(appDir, "tailwind.config.js"),
      `module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
}`
    );

    // src/main.jsx
    fs.writeFileSync(
      path.join(appDir, "src/main.jsx"),
      `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
    );

    // src/index.css
    fs.writeFileSync(
      path.join(appDir, "src/index.css"),
      `@tailwind base;
@tailwind components;
@tailwind utilities;`
    );

    // src/App.jsx
    fs.writeFileSync(
      path.join(appDir, "src/App.jsx"),
      `import Hero from "./Hero";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Hero />
      <Contact />
    </div>
  );
}`
    );

    // Random Hero word pick
    const randomWord = heroWords[Math.floor(Math.random() * heroWords.length)];

    // src/Hero.jsx
    fs.writeFileSync(
      path.join(appDir, "src/Hero.jsx"),
      `export default function Hero() {
  return (
    <section className="flex items-center justify-center h-[60vh] bg-base-200">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-600">
        ${randomWord} delivery service in Dhaka.
      </h1>
    </section>
  );
}`
    );

    // src/Contact.jsx
    fs.writeFileSync(
      path.join(appDir, "src/Contact.jsx"),
      `export default function Contact() {
  return (
    <div className="mt-6 bg-white shadow-md rounded-lg p-4">
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
    </div>
  );
}`
    );

    console.log(`✅ Generated React app for: ${domain}`);
  })
  .on("end", () => {
    console.log("🎉 All apps generated successfully inside /build");
  });

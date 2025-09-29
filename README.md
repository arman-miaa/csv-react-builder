


# csv-react-builder

A small tool that reads a CSV file and generates individual React websites for each record. Built with **React**, **Tailwind CSS**, **DaisyUI**, and a Node.js script.

## Live Demo

[🚀 View Live Preview](https://csv-react-builder.vercel.app/)

## Features

- Reads `websites.csv` with: `domain`, `title`, `description`, `phone`, `address`.  
- Generates separate React apps (build folders) for each domain.  
- Each app includes:
  - **Hero** section: `[[Quick | Fast | Speedy]] delivery service in dhaka.`
  - **Contact** section: phone and address from CSV.  
- Minimal CSS with Tailwind for alignment and spacing.  

## Tech Stack

- **Frontend:** React + Vite  
- **Styling:** Tailwind CSS + DaisyUI  
- **Script:** Node.js (CSV parsing & scaffolding)  
- **Deployment:** Vercel  

## Folder Structure

```

csv-react-builder/
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public/
│   └── vite.svg
├── scripts/
│   └── generate.js
├── src/
│   ├── App.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── Navbar.jsx
│   ├── index.css
│   ├── main.jsx
│   └── page/
│       └── Home.jsx
├── vite.config.js
└── websites.csv

````

## Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/your-username/csv-react-builder.git
cd csv-react-builder
````

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. **Generate React apps from CSV**

```bash
npm start
```

Creates build folders for each domain:

```
/build
  /foodexpress.com
  /techhubbd.com
  /bookbazaar.com
```

## Scripts

| Script            | Description                                         |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Run development server (main interface)             |
| `npm run build`   | Bundle the project                                  |
| `npm run preview` | Preview the build locally                           |
| `npm start`       | Run `generate.js` to scaffold individual React apps |

## Notes

* Ensure `websites.csv` is correctly formatted.
* Each domain folder is unique.
* You can edit Hero & Contact components before generating apps.

---

**Author:** Arman Mia
📧 [arman.miaa36@gmail.com](mailto:arman.miaa36@gmail.com)

Made with ❤️ using React, Tailwind, DaisyUI, and Node.js.



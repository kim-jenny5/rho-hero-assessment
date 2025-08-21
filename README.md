# 🧪 Technical Assessment: Build a Reusable Hero Component (Next.js + CSS Modules)

Welcome! This technical assessment is designed to evaluate your ability to build a reusable, CMS-friendly Hero section in a modern Next.js codebase. You’ll be asked to create a scalable Hero component similar to one used in production at Rho. This challenge focuses on:

- Component-driven development
- Clean and scalable HTML/CSS architecture
- Dynamic layout logic
- Developer/Designer collaboration best practices

---

## 🧠 Objective

Create a reusable Hero component in **Next.js**. It should:

- Render a full-width image background
- Accept a title and description as content
- Allow flexible placement of text using CSS Grid

---

## ✅ Requirements

### 🔧 Tech

- Use **Next.js** with functional components
- Use **CSS Modules** for styling

### 📦 Functionality

Your component should:

1. Accept a background image (`src` + `alt`)
2. Accept a `title` and `description`
3. Support flexible placement via props (e.g. `placeTitle`, `placeDescription`)
4. Render content in a responsive layout with CSS Grid
5. Be visually clean, semantic, and accessible
6. **Work with CMS data** - Map over the provided `heroSections` array to render multiple hero variations

### 🏗️ Props

| Prop               | Type   | Description                                                   |
| ------------------ | ------ | ------------------------------------------------------------- |
| `src`              | string | URL of background image                                       |
| `alt`              | string | Alt text for image                                            |
| `title`            | string | Title text to display                                         |
| `placeTitle`       | string | Grid placement for the title (e.g. `"center"`, `"end start"`) |
| `description`      | string | Description text to display below the title                   |
| `placeDescription` | string | Grid placement for the description                            |

---

## 📁 Folder Structure Example

.
├── components
│ └── Hero
│ ├── Hero.jsx
│ └── Hero.module.css
├── data
│ └── heroData.js # CMS-like data structure
├── pages
│ └── demo.js
├── public
│ └── sample-image.jpg
├── README.md
└── package.json

---

## 🎯 Task

1. Fork this repo
2. **Build the `Hero` component from scratch** inside `components/Hero/Hero.jsx`
3. **Implement CSS styling** in `components/Hero/Hero.module.css`
4. **Create a demo page** at `/demo` that shows 2–3 different uses:
   - One with default placement
   - One using different `placeTitle` / `placeDescription` values
   - One with longer text to test layout flexibility
5. Submit a Pull Request when you're ready

**Note:** The starter files contain placeholder code only. You need to build the entire Hero component implementation from scratch!

### 🏁 What's Provided

- Basic Next.js project setup
- Folder structure with placeholder files
- Sample image in `/public`
- Empty component and CSS files with TODO comments
- **CMS-like data structure** in `/data/heroData.js` with 3 different hero configurations

### 🛠️ What You Need to Build

- Complete Hero component implementation
- CSS Grid-based layout system
- Flexible text positioning logic
- Responsive design
- **CMS data integration** - Map over `heroSections` array to render multiple heroes
- Demo page showing all hero variations from the data

---

## 🧩 Bonus (Optional)

- Add simple hover or fade-in animation
- Make sure it’s keyboard accessible

---

## ✅ Evaluation Criteria

- Code readability and structure
- Use of props and layout logic
- CSS organization (modularity, responsiveness, maintainability)
- Ability to follow detailed requirements
- Developer empathy and UX quality

---

Thanks for your time—we’re excited to see what you build!

— Rho Marketing Engineering Team

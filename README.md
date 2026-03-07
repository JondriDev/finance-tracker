# Finance Tracker

A personal finance web app for tracking income and expenses — built from scratch in 4 days using vanilla HTML, CSS, and JavaScript.

**[Live Demo](https://jondridev.github.io/finance-tracker)**

---

## Features

- Add, edit, and delete income and expense transactions
- Real-time balance calculation with financial health indicator
- Spending overview chart (income vs. expenses by category)
- Filter transactions by All Time, This Week, or This Month
- Dark and light mode with persistent theme preference
- Data persistence via localStorage — no backend required
- Fully responsive — works on mobile and desktop

## Tech Stack

- HTML5
- CSS3 (CSS custom properties, CSS Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- [Chart.js](https://www.chartjs.org/) for data visualization

## What I Learned Building This

- DOM manipulation and event handling without any framework
- localStorage for client-side data persistence
- Preventing XSS vulnerabilities by sanitizing user input before DOM injection
- Recalculating derived state (balance) from a single source of truth instead of tracking it manually
- Responsive layout using CSS Grid with `auto-fit` and `minmax`
- Managing UI state (edit mode, active filters, theme) with plain JavaScript

## Getting Started

No installation required. Open `index.html` in any browser.

Or view the live version: [jondridev.github.io/finance-tracker](https://jondridev.github.io/finance-tracker)

---

Built by [JondriDev](https://github.com/JondriDev) — Day 6 of a 365-day journey to become a remote developer.



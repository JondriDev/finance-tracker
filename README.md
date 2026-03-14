# 💰 Finance Tracker

A premium, full-stack personal finance application built with Vanilla JavaScript and Supabase. Designed with a custom hardware-accelerated "Liquid Glass" UI, this app features real-time cloud synchronization, adaptive bilingual support (EN/ID), and a Progressive Web App (PWA) architecture for native-like performance.

**Live Demo:** [jondridev.github.io/finance-tracker](https://jondridev.github.io/finance-tracker)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

---

## ✨ Core Features

* **Ecosystem Authentication:** Secure email/password and Google OAuth via Supabase. Shares authentication state across the domain (connects seamlessly with the [Kamus Dictionary](https://jondridev.github.io/kamus)).
* **Real-time Cloud Sync:** Transactions are saved locally and synced automatically to a PostgreSQL database, ensuring data is never lost.
* **Dynamic Data Visualization:** Integrates Chart.js for an interactive spending overview, intelligently filtering out baseline adjustments to maintain scale accuracy.
* **Accounting Ledger Principle:** Implements robust "Initial Balance" and "Adjustment" categories to maintain strict mathematical integrity over the total balance.
* **Smart Form Inputs:** Features real-time numeric formatting for IDR currency (e.g., `150.000`), secure string stripping, and automatic keyboard dismissal on mobile.
* **Bilingual & Adaptive:** Instant toggle between English and Bahasa Indonesia. System-aware Dark/Light mode tracking.
* **PWA Ready:** Installable directly to mobile home screens with a custom manifest and service worker.

## 🛠️ Architectural Highlights

* **Hardware-Accelerated UI:** The custom Liquid Glass design utilizes heavy `backdrop-filter: blur()` properties. To prevent paint lag on mobile devices, the CSS utilizes `transform: translateZ(0)` to force GPU hardware acceleration, resulting in 60fps scrolling.
* **Zero Render Blocking:** Third-party scripts (Supabase, Chart.js) are strategically placed at the bottom of the DOM, allowing the browser to paint the critical UI instantly using local storage data before initializing cloud protocols.
* **Vanilla Stack Focus:** Built entirely without massive frontend frameworks (React/Vue) to demonstrate deep understanding of DOM manipulation, CSS Grid, and browser APIs.

## 🚀 Quick Start

To run this project locally:

1. Clone the repository:
   ```bash
   git clone [https://github.com/JondriDev/finance-tracker.git](https://github.com/JondriDev/finance-tracker.git)

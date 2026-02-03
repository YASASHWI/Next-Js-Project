# 🧩 Floating Hero Section – Legal Work Platform

A modern, responsive **Floating Hero Section** built with **Next.js 14 (App Router)** and **Tailwind CSS**, inspired by a Legal Work Platform design.  
This project focuses on layout precision, component reusability, and visual polish using floating UI elements.

---

## 📌 Project Objective

Replicate the **“Legal Work Platform” hero section** as closely as possible, emphasizing:

- Split layout with text content on the left  
- Floating, rotated UI cards on the right  
- “Chaotic but organized” visual aesthetic  
- Clean component architecture and responsive behavior  

---

## ✨ Features

### 🎨 Layout & Visual Design
- Split hero layout: text + CTA on the left, floating elements on the right
- Rotated and positioned floating pills (Billing, Matters, Tasks, Documents)
- Blurred background shapes for depth and focus
- Clear typography hierarchy (headline vs subtext)

### 🧱 Component Architecture
- Reusable **FloatingCard** component with configurable props:
  - `color`
  - `rotation`
  - `icon`
  - `label`
- Special variant handling for the **“John Doe – Portal”** card
- Modular and scalable structure

### 📱 Responsive Design
- Fully responsive across devices
- Floating elements adapt, stack, or simplify on mobile screens
- Mobile-first Tailwind CSS approach

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Fonts:** Inter / Plus Jakarta Sans (Google Fonts)
- **Language:** TypeScript

---

- **FloatingCard:** Reusable floating UI component
- **HeroSection:** Manages layout, positioning, and variants

---

## 🎯 Design Highlights

- Uses Tailwind CSS arbitrary values like `rotate-[12deg]`
- Absolute positioning with layered z-index control
- Subtle rotations for a natural floating effect
- Clean color palette for visual clarity

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YASASHWI/Praava-Project.git

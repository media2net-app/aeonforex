# Aeon Forex Landing Page

A modern, dark mode landing page for Aeon Forex built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 **Dark Mode Design** - Beautiful dark theme optimized for readability
- ⚡ **Next.js 15** - Latest Next.js with App Router
- 🎯 **React Components** - Modern React with TypeScript
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🚀 **Performance Optimized** - Fast loading and smooth animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

### Building for Production

```bash
npm run build
npm start
```

## Adding Your Assets

### Logo

1. Place your logo file in the `public/` directory (e.g., `public/logo.png` or `public/logo.svg`)
2. Update the logo section in `app/page.tsx` (around line 20) to use your logo:

```tsx
<Image
  src="/logo.png"
  alt="Aeon Forex Logo"
  width={150}
  height={50}
  priority
/>
```

### Video

1. Place your video file in the `public/` directory (e.g., `public/hero-video.mp4`)
2. Update the video section in `app/page.tsx` (around line 45) to use your video:

```tsx
<video
  className="w-full h-full object-cover rounded-2xl"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>
```

Or if you're using an external video URL (YouTube, Vimeo, etc.), you can embed it directly.

## Project Structure

```
aeonforex/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles
├── public/             # Static assets (logo, video, etc.)
└── package.json
```

## Customization

- **Colors**: The color scheme uses yellow/orange gradients. You can modify these in `app/page.tsx` by changing the gradient classes (e.g., `from-yellow-500 to-orange-500`)
- **Content**: All content is in `app/page.tsx` and can be easily modified
- **Styling**: Uses Tailwind CSS - modify classes directly in components

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS


# 🎨 Tailwind Animation V4

A comprehensive animation plugin for **Tailwind CSS v4** with 135+ ready-to-use animations, utilities, and custom easings.


## ✨ Features

- 🎬 **72 Base Animations** - Fade, slide, zoom, rotate, flip, bounce, and more
- 🔄 **7 Loading Animations** - Spinners, skeletons, and progress indicators
- 📝 **7 Text Animations** - Typing, glitch, shine, and wave effects
- 🖱️ **6 Hover Animations** - Lift, press, glow, and 3D effects
- 🔔 **5 Notification Animations** - Toast, modal, drawer, and tooltip
- ⏱️ **14 Delay Utilities** - From 0ms to 1000ms
- ⏳ **14 Duration Utilities** - From 75ms to 3000ms
- 🎢 **10 Custom Easings** - Including spring, bounce, snappy, and dramatic

## 📦 Installation

```bash
# pnpm
pnpm add tailwind-animation-v4

# npm
npm install tailwind-animation-v4

# yarn
yarn add tailwind-animation-v4
```

## ⚙️ Configuration

Add the plugin to your main CSS file:

```css
@import "tailwindcss";
@import "tailwind-animation-v4/theme.css";
@plugin "tailwind-animation-v4";
```

That's it! You're ready to use all animations.

## 🎯 Quick Start

### Basic Animation

```html
<div class="animate-fade-in">
  This element fades in smoothly
</div>
```

### Animation with Delay

```html
<div class="animate-slide-in-top animate-delay-500">
  Slides in after 500ms delay
</div>
```

### Custom Duration

```html
<div class="animate-bounce animate-duration-2000">
  Bounces slowly over 2 seconds
</div>
```

### Custom Easing

```html
<div class="animate-pulse animate-ease-spring">
  Pulses with a spring-like effect
</div>
```

### Combined Animation

```html
<div class="animate-zoom-in animate-delay-300 animate-duration-1000 animate-ease-bounce">
  Zooms in with delay, custom duration, and bounce easing
</div>
```

## 📚 Animation Categories

### Base Animations (72)

Fade, slide, zoom, rotate, flip, bounce, swing, wobble, pulse, shake, tada, jump, hang, roll, float, sink, flash, jiggle, rubber-band, spin, blink, pop, expand, contract, sway, heartbeat, vibration, wave, skew, tilt, squeeze, and more.

```html
<div class="animate-fade-in-up">Fade and slide up</div>
<div class="animate-rotate-360">Full rotation</div>
<div class="animate-flip-horizontal">Horizontal flip</div>
<div class="animate-rubber-band">Elastic effect</div>
```

### Loading Animations (7)

```html
<div class="animate-spin">Classic spinner</div>
<div class="animate-ping">Pulsing ring</div>
<div class="animate-skeleton">Skeleton loader</div>
<div class="animate-dots-pulse">Three dots</div>
<div class="animate-barber-pole">Striped progress</div>
```

### Text Animations (7)

```html
<h1 class="animate-typing">Typing effect</h1>
<h1 class="animate-glitch">Glitch effect</h1>
<h1 class="animate-text-shine">Shining text</h1>
<h1 class="animate-gradient-text">Gradient animation</h1>
```

### Hover Animations (6)

```html
<button class="animate-lift">Lifts on hover</button>
<button class="animate-press">Press effect</button>
<button class="animate-glow-pulse">Glowing pulse</button>
<button class="animate-tilt-3d">3D tilt effect</button>
```

### Notification Animations (5)

```html
<div class="animate-toast-in">Toast notification</div>
<div class="animate-modal-zoom">Modal entrance</div>
<div class="animate-drawer-slide">Drawer slide-in</div>
<div class="animate-tooltip-pop">Tooltip popup</div>
```

## 🛠️ Utilities

### Animation Delay

Control when animations start:

```html
<div class="animate-fade-in animate-delay-100">Starts after 100ms</div>
<div class="animate-fade-in animate-delay-500">Starts after 500ms</div>
<div class="animate-fade-in animate-delay-1000">Starts after 1s</div>
```

Available delays: `0`, `100`, `150`, `200`, `250`, `300`, `350`, `400`, `500`, `600`, `700`, `800`, `900`, `1000`

### Animation Duration

Control how long animations last:

```html
<div class="animate-bounce animate-duration-500">Fast bounce</div>
<div class="animate-bounce animate-duration-1000">Normal bounce</div>
<div class="animate-bounce animate-duration-2000">Slow bounce</div>
```

Available durations: `75`, `100`, `150`, `200`, `300`, `500`, `700`, `1000`, `1500`, `2000`, `2500`, `3000`

### Animation Easing

Custom timing functions for natural motion:

```html
<div class="animate-bounce animate-ease-linear">Linear motion</div>
<div class="animate-bounce animate-ease-spring">Spring effect</div>
<div class="animate-bounce animate-ease-bounce">Bouncy effect</div>
<div class="animate-bounce animate-ease-snappy">Quick and precise</div>
<div class="animate-bounce animate-ease-smooth">Very fluid</div>
<div class="animate-bounce animate-ease-dramatic">Slow start, fast end</div>
```

Available easings:
- **Standard**: `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`
- **Custom**: `bounce`, `spring`, `snappy`, `smooth`, `dramatic`

## 💡 Examples

### React Component

```jsx
function AnimatedCard({ children, delay = 0 }) {
  return (
    <div 
      className={`
        animate-fade-in-up 
        animate-duration-700 
        animate-ease-spring
        ${delay ? `animate-delay-${delay}` : ''}
        p-6 bg-white rounded-lg shadow-lg
      `}
    >
      {children}
    </div>
  )
}

// Usage
<AnimatedCard delay={300}>
  <h2>Card Title</h2>
  <p>Animated content</p>
</AnimatedCard>
```

### Vue Component

```vue
<template>
  <div 
    :class="[
      'animate-fade-in-up',
      'animate-duration-700',
      'animate-ease-spring',
      delay && `animate-delay-${delay}`
    ]"
    class="p-6 bg-white rounded-lg shadow-lg"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  delay: {
    type: Number,
    default: 0
  }
})
</script>
```

### Staggered List

```html
<ul class="space-y-4">
  <li class="animate-fade-in animate-delay-100">Item 1</li>
  <li class="animate-fade-in animate-delay-200">Item 2</li>
  <li class="animate-fade-in animate-delay-300">Item 3</li>
  <li class="animate-fade-in animate-delay-400">Item 4</li>
  <li class="animate-fade-in animate-delay-500">Item 5</li>
</ul>
```

### Loading State

```html
<div class="flex items-center justify-center space-x-2">
  <div class="animate-bounce-loading w-3 h-3 bg-indigo-500 rounded-full"></div>
  <div class="animate-bounce-loading w-3 h-3 bg-indigo-500 rounded-full animate-delay-100"></div>
  <div class="animate-bounce-loading w-3 h-3 bg-indigo-500 rounded-full animate-delay-200"></div>
</div>
```

## 🎨 Customization

Override default values in your CSS:

```css
@theme {
  /* Custom delay */
  --animation-delay-500: 750ms;
  
  /* Custom duration */
  --animation-duration-1000: 1500ms;
  
  /* Custom easing */
  --animation-ease-custom: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## 📋 Requirements

- Tailwind CSS v4.0.0 or higher
- Node.js 18.0.0 or higher

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

MIT © [Felipe Silva](https://github.com/ssilvafelipe)

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/tailwind-animation-v4)
- [GitHub Repository](https://github.com/ssilvafelipe/tailwind-animation-v4)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)

---

**Made with ❤️ for the Tailwind CSS community**
 

## ⚙️ Scripts disponibles

- **Generar CSS**  
  ```bash
  pnpm run generate:css
  ```
  Genera el archivo CSS con las animaciones.

- **Build completo**  
  ```bash
  pnpm run build
  ```
  Compila el plugin para producción.

- **Build solo CSS**  
  ```bash
  pnpm run build:css
  ```
  Compila únicamente el CSS de las animaciones.

- **Debug CSS**  
  ```bash
  pnpm run debug:css
  ```
  Muestra el output del CSS generado para depuración.

- **Tests**  
  ```bash
  pnpm run test
  ```
  Ejecuta la suite de pruebas.

 
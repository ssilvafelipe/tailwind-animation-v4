// src/theme/hover.ts
export const hoverAnimations = {
    'lift': 'lift 0.3s ease-out',
    'press': 'press 0.1s ease-out',
    'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
    'shine-sweep': 'shine-sweep 2s linear infinite',
    'tilt-3d': 'tilt-3d 0.5s ease-out',
    'magnetic': 'magnetic 0.3s ease-out',
} as const;

export const hoverKeyframes = {
    'lift': { '0%': { transform: 'translateY(0) translateZ(0)', boxShadow: '0 0 0 rgba(0,0,0,0)' }, '100%': { transform: 'translateY(-8px) translateZ(20px)', boxShadow: '0 12px 24px rgba(0,0,0,0.15)' } },
    'press': { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(0.95)' } },
    'glow-pulse': { '0%, 100%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.5)' }, '50%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.8), 0 0 40px rgba(99, 102, 241, 0.4)' } },
    'shine-sweep': { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
    'tilt-3d': { '0%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' }, '100%': { transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)' } },
    'magnetic': { '0%': { transform: 'translate(0, 0)' }, '100%': { transform: 'translate(2px, 2px)' } },
} as const;
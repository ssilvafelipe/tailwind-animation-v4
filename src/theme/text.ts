// src/theme/text.ts
export const textAnimations = {
    'typing': 'typing 3.5s steps(40, end)',
    'blink-caret': 'blink-caret 0.75s step-end infinite',
    'text-shine': 'text-shine 2s linear infinite',
    'text-wave': 'text-wave 2s ease-in-out infinite',
    'gradient-text': 'gradient-text 3s ease infinite',
    'glitch': 'glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
    'text-flicker': 'text-flicker 1.5s linear infinite',
} as const;

export const textKeyframes = {
    'typing': { 'from': { width: '0' }, 'to': { width: '100%' } },
    'blink-caret': { 'from, to': { borderColor: 'transparent' }, '50%': { borderColor: 'currentColor' } },
    'text-shine': { '0%': { backgroundPosition: '-500%' }, '100%': { backgroundPosition: '500%' } },
    'text-wave': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
    'gradient-text': { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
    'glitch': { '0%': { transform: 'translate(0)' }, '20%': { transform: 'translate(-2px, 2px)' }, '40%': { transform: 'translate(-2px, -2px)' }, '60%': { transform: 'translate(2px, 2px)' }, '80%': { transform: 'translate(2px, -2px)' }, '100%': { transform: 'translate(0)' } },
    'text-flicker': { '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' }, '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' } },
} as const;
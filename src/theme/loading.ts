// src/theme/loading.ts
export const loadingAnimations = {
    'spin': 'spin 1s linear infinite',
    'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    'bounce-loading': 'bounce-loading 1.5s ease-in-out infinite',
    'dots-pulse': 'dots-pulse 1.4s ease-in-out infinite',
    'barber-pole': 'barber-pole 1s linear infinite',
    'skeleton': 'skeleton 1.5s ease-in-out infinite',
    'wave-loading': 'wave-loading 1.2s ease-in-out infinite',
} as const;

export const loadingKeyframes = {
    'spin': { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
    'ping': { '0%': { transform: 'scale(1)', opacity: '1' }, '75%, 100%': { transform: 'scale(2)', opacity: '0' } },
    'bounce-loading': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-25px)' } },
    'dots-pulse': { '0%, 80%, 100%': { transform: 'scale(0)', opacity: '0.5' }, '40%': { transform: 'scale(1)', opacity: '1' } },
    'barber-pole': { '0%': { backgroundPosition: '0 0' }, '100%': { backgroundPosition: '40px 0' } },
    'skeleton': { '0%': { backgroundPosition: '-200px 0' }, '100%': { backgroundPosition: 'calc(200px + 100%) 0' } },
    'wave-loading': { '0%, 40%, 100%': { transform: 'scaleY(0.4)' }, '20%': { transform: 'scaleY(1)' } },
} as const;
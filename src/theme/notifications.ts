// src/theme/notifications.ts
export const notificationAnimations = {
    'toast-in': 'toast-in 0.4s cubic-bezier(0.21, 1.02, 0.73, 1)',
    'toast-out': 'toast-out 0.3s ease-in',
    'modal-zoom': 'modal-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    'drawer-slide': 'drawer-slide 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
    'tooltip-pop': 'tooltip-pop 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const notificationKeyframes = {
    'toast-in': { '0%': { transform: 'translateY(-100%) scale(0.8)', opacity: '0' }, '100%': { transform: 'translateY(0) scale(1)', opacity: '1' } },
    'toast-out': { '0%': { transform: 'translateY(0) scale(1)', opacity: '1' }, '100%': { transform: 'translateY(-100%) scale(0.8)', opacity: '0' } },
    'modal-zoom': { '0%': { transform: 'scale(0.7)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
    'drawer-slide': { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(0)' } },
    'tooltip-pop': { '0%': { transform: 'scale(0.5)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
} as const;
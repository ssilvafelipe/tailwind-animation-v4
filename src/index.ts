// src/index.ts
import plugin from 'tailwindcss/plugin'
import { animationEasing } from './theme/easings'

export const myTailwindPlugin = plugin(function (api) {

    const { matchUtilities, theme, addUtilities } = api

    interface Options {
        css: string
        values: any
    }

    const dynamicUtils: Record<string, Options> = {
        'animate-delay': { css: 'animation-delay', values: theme('animationDelay') } as Options,
        'animate-duration': { css: 'animation-duration', values: theme('animationDuration') } as Options
    }

    Object.entries(dynamicUtils).forEach(([name, { css, values }]) => {
        matchUtilities({
            [name]: value => ({
                [css]: value
            })
        }, { values })
    })

    const easeUtilities = Object.fromEntries(
        Object.entries(animationEasing).map(([key, value]) => [
            `.animate-ease-${key}`,
            { 'animation-timing-function': String(value) }
        ])
    )
    addUtilities(easeUtilities)

})

export default myTailwindPlugin
export { animations, keyframes } from './theme/animations'
export { animationDelay, animationDuration } from './theme/delays'
export { animationEasing } from './theme/easings' 
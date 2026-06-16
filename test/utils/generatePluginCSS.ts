// test/utils/generatePluginCSS.ts
import tailwindcss from '@tailwindcss/postcss'
import postcss from 'postcss'
import { join } from 'path'

const TAILWIND_BASE = '@import "tailwindcss";'
const PLUGIN_IMPORT = `@plugin "${join(process.cwd(), 'dist/index.js')}";`
const THEME_IMPORT = `@import "${join(process.cwd(), 'dist/theme.css')}";`

interface OPTIONS {
    inline?: string
    content?: string
}

export function generatePluginCSS({ inline = '', content = '' }: OPTIONS = {}) {
    return postcss([
        tailwindcss({
            content: content ? [{ raw: content, extension: 'html' }] : undefined,
        } as any),
    ])
        .process(`${TAILWIND_BASE}\n${PLUGIN_IMPORT}\n${THEME_IMPORT}\n${inline}`, {
            from: join(process.cwd(), 'test/utils/generatePluginCSS.ts'),
        })
        .then(result => result.css)
}
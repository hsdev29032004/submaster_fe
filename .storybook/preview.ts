import { themes } from '@storybook/theming'
import type { Preview } from '@storybook/vue3'

export const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        parameters: {
            docs: {
                theme: themes.dark,
            },
        },
    },
}
// export const decorators = [
//     (story) => {
//         const isDark = ref(false)

//         watchEffect(() => {
//             if (isDark.value) {
//                 document.documentElement.classList.add('dark')
//             } else {
//                 document.documentElement.classList.remove('dark')
//             }
//         })

//         return h('div', { style: 'padding: 1rem;' }, [
//             h(
//                 'button',
//                 {
//                     style: 'margin-bottom: 1rem; padding: 0.5rem 1rem;',
//                     onClick: () => {
//                         isDark.value = !isDark.value
//                     },
//                 },
//                 () =>
//                     isDark.value
//                         ? 'Switch to Light Mode'
//                         : 'Switch to Dark Mode'
//             ),
//             story(),
//         ])
//     },
// ]

// export default preview

<template>
    <header class="shadow-sm shadow-[#848484] dark:shadow-white/20 px-1">
        <div class="inner-header">
            <UContainer class="flex justify-between items-center">
                <NuxtLink to="/">
                    <img src="/images/logo.png" alt="logo" width="120px" />
                </NuxtLink>
                <div class="flex items-center">
                    <UNavigationMenu color="neutral" variant="link" :items="items" class="w-full" />

                    <USwitch v-model="isDark" class="ml-4" checked-icon="i-lucide-moon" unchecked-icon="i-lucide-sun" />
                    <UDropdownMenu :items="itemsdropdown" :ui="{
                        content: 'w-48',
                        item: 'text-[#62748e]',
                        label: 'text-[#62748e]'
                    }">
                        <UButton color="neutral" class="bg-transparent hover:bg-transparent">
                            <UAvatar src="https://github.com/benjamincanac.png" />
                        </UButton>
                    </UDropdownMenu>
                </div>
            </UContainer>
        </div>
    </header>
</template>

<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui';

const colorMode = useColorMode()
const isDark = ref(false)

onMounted(() => {
    isDark.value = colorMode.value === 'dark'
})

watch(isDark, (val) => {
    colorMode.preference = val ? 'dark' : 'light'
})


const items = ref<NavigationMenuItem[][]>([
    [
        {
            label: 'Home',
            icon: 'material-symbols:house-outline',
            to: '#home',
        },
        {
            label: 'Features',
            icon: 'material-symbols:extension-outline-rounded',
            to: '#features'
        },
        {
            label: 'Pricing',
            icon: 'material-symbols:attach-money-rounded',
            to: '#pricing'
        }
    ]
])

const itemsdropdown = ref<DropdownMenuItem[][]>([
    [
        {
            label: 'Benjamin',
            avatar: {
                src: 'https://github.com/benjamincanac.png'
            },
            type: 'label'
        }
    ],
    [
        {
            label: 'Home',
            icon: 'material-symbols:house-outline',
            to: '#home',
        },
        {
            label: 'Features',
            icon: 'material-symbols:extension-outline-rounded',
            to: '#features'
        },
        {
            label: 'Pricing',
            icon: 'material-symbols:attach-money-rounded',
            to: '#pricing'
        }
    ],
    [
        {
            label: 'Theme',
            icon: 'i-lucide-users'
        },
        {
            label: 'Language',
            icon: 'ic:baseline-language',
            children: [
                [
                    {
                        label: 'English',
                    },
                    {
                        label: 'Vietnam',
                    }
                ]
            ]
        },
        {
            label: 'Logout',
            icon: 'ic:baseline-logout',
        }
    ]
])
</script>
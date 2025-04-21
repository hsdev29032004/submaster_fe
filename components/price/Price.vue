<template>
  <div class="mt-10 w-[70%] max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div class="bg-[#f8f8f8] dark:bg-[#0f172b] p-4 rounded-lg">
      <div class="mb-6">
        <h2 class="text-4xl font-bold mt-3">FREE</h2>
        <p>Try Submaster for free, no credit card required. Upgrade whenever you need.</p>
      </div>
      <ul class="space-y-2">
        <li
          v-for="(item, index) in freeFeatures"
          :key="'free-' + index"
          class="flex items-start gap-2"
        >
          <UIcon name="i-lucide:circle-check" class="text-green-500 mt-1" />
          <span>{{ item }}</span>
        </li>
      </ul>
      <ButtonPrimary class="mt-4">
        <NuxtLink to="#home">Try now</NuxtLink>
      </ButtonPrimary>
    </div>

    <div class="bg-[#f8f8f8] dark:bg-[#0f172b] p-4 rounded-lg">
      <div class="mb-6">
        <h2 class="text-4xl font-bold mt-3">Organization</h2>
        <p>Try Submaster for free, no credit card required. Upgrade whenever you need.</p>
      </div>
      <ul class="space-y-2">
        <li
          v-for="(item, index) in orgFeatures"
          :key="'org-' + index"
          class="flex items-start gap-2"
        >
          <UIcon name="i-lucide:circle-check" class="text-green-500 mt-1" />
          <span>{{ item }}</span>
        </li>
      </ul>
      <ButtonPrimary class="mt-4">Upgrade now</ButtonPrimary>
    </div>
  </div>
</template>

<script setup lang="ts">
const freeFeatures = [
  'One developer',
  'Unlimited projects',
  'Access to the GitHub repository',
  'Unlimited minor & patch updates',
  'Lifetime access',
]

const orgFeatures = [
  'Free features',
  'Up to 20 developers',
  'Unlimited projects',
  'Prioritized feature requests',
  'Unlimited minor & patch updates',
]
</script>

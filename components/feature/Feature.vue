<template>
  <div class="mt-10 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6">
    <div
      v-for="(i, index) in item"
      :key="index"
      class="flex flex-col items-center bg-white dark:bg-[#0b1121]"
      style="padding: 15px 20px; border-radius: 8px;"
    >
      <img :src="i.icon" :alt="i.title" width="40px" style="border-radius: 8px;"/>
      <div class="text-center">
        <h2 class="text-xl font-bold mt-3">{{ i.title }}</h2>
        <p class="text-[13x] mt-1">{{ i.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const item = [
  {
    icon: "/images/icon_code.png",
    title: "Real-Time Subtitles",
    description: "Translate subtitles on hover of tap in realtime",
  },
  {
    icon: "/images/icon_lang.png",
    title: "Bilingual",
    description: "Display subtitles in two languages at the same time for better understanding",
  },
  {
    icon: "/images/icon_integration.png",
    title: "Real-Time Subtitles",
    description: "Seamlessly works with popular video players",
  },
];
</script>

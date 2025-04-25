<template>
  <header class="shadow-sm shadow-[#848484] dark:shadow-white/20 px-1">
    <div class="inner-header">
      <UContainer class="flex justify-between items-center">
        <NuxtLink to="/">
          <img src="/images/logo.png" alt="logo" width="120px" />
        </NuxtLink>
        <div class="flex items-center">
          <!-- <UNavigationMenu
            color="neutral"
            variant="link"
            :items="items"
            class="w-full"
          /> -->

          <USwitch
            v-model="isDark"
            class="ml-4"
            unchecked-icon="i-lucide-moon"
            checked-icon="i-lucide-sun"
          />
          <!-- <UDropdownMenu
            :items="itemsdropdown"
            :ui="{
              content: 'w-48',
              item: 'text-[#62748e]',
              label: 'text-[#62748e]',
            }"
          >
            <UButton
              color="neutral"
              class="bg-transparent hover:bg-transparent"
            >
              <UAvatar src="https://github.com/benjamincanac.png" />
            </UButton>
          </UDropdownMenu> -->
        </div>
      </UContainer>
    </div>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const isDark = ref(false);
const items = ref([
  [
    {
      label: "Home",
      icon: "material-symbols:house-outline",
      to: "/",
    },
    {
      label: "Task",
      icon: "material-symbols:extension-outline-rounded",
      to: "/todo",
    },
  ],
]);

const itemsdropdown = ref([
  [
    {
      label: "Benjamin",
      avatar: {
        src: "https://github.com/benjamincanac.png",
      },
      type: "label",
    },
  ],
  [
    {
      label: "Home",
      icon: "material-symbols:house-outline",
      to: "#home",
    },
    {
      label: "Task",
      icon: "material-symbols:extension-outline-rounded",
      to: "/todo",
    },
  ],
  [
    {
      label: "Theme",
      icon: "i-lucide-users",
    },
    {
      label: "Language",
      icon: "ic:baseline-language",
      children: [
        [
          {
            label: "English",
          },
          {
            label: "Vietnam",
          },
        ],
      ],
    },
    {
      label: "Logout",
      icon: "ic:baseline-logout",
    },
  ],
]);

watch(isDark, (val) => {
  colorMode.preference = val ? "light" : "dark";
});

onMounted(() => {
  isDark.value = colorMode.value === "light";
});
</script>
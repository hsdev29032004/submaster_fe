<style>
section {
  padding: 15px 0px;
}

.light section:nth-of-type(even) {
  background-color: #f8f8f8;
}

.dark section:nth-of-type(odd) {
  background-color: #0b1121;
}

#home {
  background-image: url("/images/light_banner.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

.dark #home {
  background-image: url("/images/dark_banner.png");
}

#home::before {
  content: "";
  position: absolute;
  inset: 0;
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1;
}

.dark #home::before {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>

<template>
  <!---------------------- Home ---------------------->
  <section id="home">
    <UContainer class="flex flex-col items-center justify-center relative z-10">
      <div class="text-center sm:w-[70%] lg:w-1/2">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Are You Ready To Use <br />
          <span class="text-[#05df72]">Sub Master</span> Website?
        </h1>
        <p class="text-[11px] sm:text-[13px] lg:text-[15px] mt-2">
          Instantly bilingual subtitles from any youtube video. Improve your
          language skills while watching your favorite videos.
        </p>
      </div>
      <div class="w-full mt-6 flex justify-center">
        <form @submit.prevent="handleSubmit" class="flex w-full max-w-md">
          <UInput
            type="text"
            placeholder="Enter video URL..."
            class="flex-1 rounded-l-md text-black focus:outline-none"
            style="border-top-right-radius: 0; border-bottom-right-radius: 0"
            v-model="youtubeUrl"
          />
          <ButtonPrimary
            type="submit"
            style="border-top-left-radius: 0; border-bottom-left-radius: 0"
          >
            Get Subtitle
          </ButtonPrimary>
        </form>
      </div>
      <div
        v-if="embedUrl"
        class="mt-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-6"
      >
        <div class="md:col-span-3 w-full h-[400px]">
          <iframe
            :src="embedUrl"
            frameborder="0"
            allowfullscreen
            class="w-full h-full rounded-lg"
          ></iframe>
        </div>

        <div
          class="md:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-lg overflow-y-auto max-h-[400px]"
        >
          <div
            v-for="(sub, index) in subtitles"
            :key="index"
            class="mb-3 border-b border-gray-200 dark:border-gray-700 pb-2"
          >
            <p class="text-sm text-gray-600 dark:text-gray-400">
              ⏱️ {{ sub.time }}s
            </p>
            <p class="font-medium text-black dark:text-white">{{ sub.vi }}</p>
            <p class="italic text-gray-700 dark:text-gray-300">{{ sub.en }}</p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>

  <!---------------------- Features ---------------------->
  <section id="features" class="scroll-mt-[80px]">
    <UContainer class="flex flex-col items-center justify-center relative z-10">
      <div class="text-center sm:w-[70%] lg:w-1/2">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#05df72]">
          Features
        </h1>
        <p class="text-[11px] sm:text-[13px] lg:text-[15px] mt-2">
          Our designs are optimized to offer seamless interactions and
          efficiency, while integrating advanced functionalities that help you
          save time and improve productivity.
        </p>
      </div>
      <Feature />
      <div
        class="bg-[#e3f3e9] dark:bg-[#0b1121] mt-4 rounded-md flex items-center"
        style="padding: 15px"
      >
        <div>
          <h2 class="text-xl font-bold">Get Started Today</h2>
          <p class="text-[11px]">
            Download the app and start translating subtitles in seconds
          </p>
        </div>
        <div class="ml-3">
          <ButtonSecondary>Download App</ButtonSecondary>
        </div>
      </div>
    </UContainer>
  </section>

  <!---------------------- Pricing ---------------------->
  <section id="pricing" class="scroll-mt-[100px]">
    <UContainer class="flex flex-col items-center justify-center relative z-10">
      <div class="text-center sm:w-[70%] lg:w-1/2">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#05df72]">
          Pricing
        </h1>
        <p class="text-[11px] sm:text-[13px] lg:text-[15px] mt-2">
          Flexible pricing for language learners — Access bilingual subtitles
          with our free plan, and unlock advanced features as you grow. No
          credit card needed to get started.
        </p>
      </div>
      <Price />
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const youtubeUrl = ref("");
const embedUrl = ref("https://www.youtube.com/embed/dCxSsr5xuL8")
const subtitles = ref<{ time: number; vi: string; en: string }[]>([
  {
    time: 0,
    vi: "tiếp theo Một khuôn khổ bao gồm pin để",
    en: "next A batteries included framework for",
  },
  {
    time: 2,
    vi: "xây dựng bất kỳ loại ứng dụng web nào mà bạn",
    en: "building any type of web application you",
  },
  {
    time: 4,
    vi: "có thể tưởng tượng với vue.js mục đích của",
    en: "can imagine with vue.js the purpose of",
  },
  {
    time: 7,
    vi: "VJs là xây dựng giao diện người dùng front-end",
    en: "VJs is to build front-end user",
  },
  {
    time: 8,
    vi: "bằng JavaScript nhưng một",
    en: "interfaces with JavaScript but a true",
  },
  {
    time: 10,
    vi: "ứng dụng web đầy đủ thực sự cũng cần",
    en: "full stack web application also needs to",
  },
  {
    time: 12,
    vi: "xử lý dữ liệu định tuyến tìm nạp bộ nhớ đệm",
    en: "deal with routing data fetching caching",
  },
  {
    time: 14,
    vi: "triển khai và nhiều hơn nữa đó là nơi nux",
    en: "deployment and more that's where nux",
  },
  {
    time: 16,
    vi: "phát huy tác dụng nó hoạt động bằng cách buộc chặt",
    en: "comes in it works by strapping its Nitro",
  },
  {
    time: 19,
    vi: "công cụ máy chủ Nitro của nó để xem cho phép nhiều",
    en: "server engine to view enabling multiple",
  },
  {
    time: 21,
    vi: "chế độ hiển thị từ một",
    en: "rendering modes from a single",
  },
  {
    time: 22,
    vi: "ứng dụng theo mặc định nó thực hiện",
    en: "application by default it does Universal",
  },
  {
    time: 24,
    vi: "Hiển thị phổ quát trong đó chế độ xem trang ban đầu được",
    en: "rendering where the initial page view is",
  },
  {
    time: 26,
    vi: "hiển thị trên máy chủ sau đó JavaScript",
    en: "rendered on the server then JavaScript",
  },
  {
    time: 28,
    vi: "tiếp quản để xử lý tất cả các điều",
    en: "takes over to handle all subsequent",
  },
  {
    time: 30,
    vi: "hướng tiếp theo phía máy khách tuy nhiên nếu điều đó",
    en: "navigation client-side however if that's",
  }
]);

const extractYoutubeId = (url: string) => {
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|(?:v|e(?:mbed)?)\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const handleSubmit = async () => {
  const youtubeId = extractYoutubeId(youtubeUrl.value);

  if (youtubeId) {
    try {
      const response = await fetch(
        `https://submaster-be.onrender.com/api/get?id=${youtubeId}`
      );
      if (response.ok) {
        const data = await response.json();
        embedUrl.value = data.embed;
        subtitles.value = data.subtitles;
      }
    } catch (error) {
      console.error("API call error:", error);
    }
  } else {
    alert("Please enter a valid YouTube URL");
  }
};
</script>

<style>
section {
    padding: 15px 0px;
}

section:nth-of-type(odd) {
    background-color: #ebebeb;
}

.dark section:nth-of-type(odd) {
    background-color: #0b1121;
}

#home {
    background-image: url('/images/light_banner.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    padding-top: 100px;
}

.dark #home {
    background-image: url('/images/dark_banner.png');
}

#home::before {
    content: '';
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
    <section id="home">
        <UContainer class="flex flex-col items-center justify-center relative z-10">
            <div class="text-center sm:w-[70%] lg:w-1/2">
                <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold">
                    Are You Ready To Use <br>
                    <span class="text-[#05df72]">Sub Master</span> Website?
                </h1>
                <p class="text-[11px] sm:text-[13px] lg:text-[15px] mt-2">
                    Instantly bilingual subtitles from any youtube video. Improve your language skills while watching
                    your favorite videos.
                </p>
            </div>
            <div class="w-full mt-6 flex justify-center">
                <form @submit.prevent="handleSubmit" class="flex w-full max-w-md">
                    <UInput type="text" placeholder="Enter video URL..."
                        class="flex-1 rounded-l-md text-black focus:outline-none"
                        style="border-top-right-radius: 0; border-bottom-right-radius: 0;" v-model="youtubeUrl" />
                    <ButtonPrimary type="submit" style="border-top-left-radius: 0; border-bottom-left-radius: 0;">
                        Get Subtitle
                    </ButtonPrimary>
                </form>
            </div>
            <div v-if="embedUrl" class="mt-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-6">
                <div class="md:col-span-3 w-full h-[400px]">
                    <iframe :src="embedUrl" frameborder="0" allowfullscreen class="w-full h-full rounded-lg"></iframe>
                </div>

                <div class="md:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-lg overflow-y-auto max-h-[400px]">
                    <div v-for="(sub, index) in subtitles" :key="index"
                        class="mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                        <p class="text-sm text-gray-600 dark:text-gray-400">⏱️ {{ sub.time }}s</p>
                        <p class="font-medium text-black dark:text-white">{{ sub.vi }}</p>
                        <p class="italic text-gray-700 dark:text-gray-300">{{ sub.en }}</p>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
    <section id="features">
        <UContainer>
            <p>Features</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
        </UContainer>
    </section>
    <section id="pricing">
        <UContainer>
            <p>Pricing</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
            <p>ok</p>
        </UContainer>
    </section>
</template>

<script setup lang="ts">
const youtubeUrl = ref('')
const embedUrl = ref('https://www.youtube.com/embed/jNQXAC9IVRw')
const subtitles = ref<{ time: number; vi: string; en: string }[]>([
    {
        "time": 1,
        "vi": "Được rồi, vậy thì chúng ta đang ở đây, trước mặt những chú voi,",
        "en": "All right, so here we are, in front of the elephants"
    },
    {
        "time": 5,
        "vi": "điều thú vị về những chú voi này là chúng có vòi thực sự...",
        "en": "the cool thing about these guys is that they have really..."
    },
    {
        "time": 7,
        "vi": "thực sự rất dài",
        "en": "really really long trunks"
    },
    {
        "time": 12,
        "vi": "và điều đó thật tuyệt",
        "en": "and that's cool"
    },
    {
        "time": 14,
        "vi": "(baaaaaaaaaaahhh!!)",
        "en": "(baaaaaaaaaaahhh!!)"
    },
    {
        "time": 16,
        "vi": "và đó là tất cả những gì có thể nói",
        "en": "and that's pretty much all there is to say"
    }
])

const extractYoutubeId = (url: string) => {
    const regExp = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|(?:v|e(?:mbed)?)\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
};

const handleSubmit = async () => {
    const youtubeId = extractYoutubeId(youtubeUrl.value);

    if (youtubeId) {
        try {
            const response = await fetch(`http://localhost:3001/api/get?id=${youtubeId}`);
            if (response.ok) {
                const data = await response.json();
                embedUrl.value = data.embed
                subtitles.value = data.subtitles
            }
        } catch (error) {
            console.error('API call error:', error);
        }
    } else {
        alert('Please enter a valid YouTube URL');
    }
};
</script>

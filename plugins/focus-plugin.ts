import { defineNuxtPlugin } from '#app';
import focusDirective from '@/directives/v-focus';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.directive('focus', focusDirective);
});
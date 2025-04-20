export default {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        if (el instanceof HTMLInputElement) {
            el.focus();
        }
    }
};

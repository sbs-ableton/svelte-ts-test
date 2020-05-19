import App from './App.svelte';

export function createSvelteTemplate(element, ctx) {
    return new App({
        target: element,
        props: ctx
    });
}

window.sqg
    ? window.sqg["createSvelteTemplate"] = createSvelteTemplate
    : window.sqg = {"createSvelteTemplate": createSvelteTemplate};

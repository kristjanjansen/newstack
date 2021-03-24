import "vite/dynamic-import-polyfill";

import { createApp, h } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";
import Layout from "./Layout.vue";

import "./app.css";

const pages = import.meta.glob("./Pages/**/*.vue");

const el = document.getElementById("app");

createApp({
    render: () =>
        h(App, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => {
                const importPage = pages[`./Pages/${name}.vue`];
                return importPage().then(({ default: page }) => {
                    page.layout = Layout;
                    return page;
                });
            },
        }),
})
    .use(plugin)
    .mount(el);

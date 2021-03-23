import "../css/app.css";

import { createApp, h } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";

const pages = import.meta.glob("./Pages/**/*.vue");

const el = document.getElementById("app");

createApp({
    render: () =>
        h(App, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => {
                const importPage = pages[`./Pages/${name}.vue`];
                return importPage().then((module) => module.default);
            },
        }),
})
    .use(plugin)
    .mount(el);

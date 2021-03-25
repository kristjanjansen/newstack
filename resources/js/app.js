import "vite/dynamic-import-polyfill";

import { createApp, h, defineAsyncComponent } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";

import "../css/app.css";

const pages = import.meta.glob("./Pages/**/*.vue");
const layouts = import.meta.globEager("./Layouts/**/*.vue");

const el = document.getElementById("app");

createApp({
    render: () =>
        h(App, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => {
                const page = defineAsyncComponent(pages[`./Pages/${name}.vue`]);
                page.layout =
                    layouts[
                        `./Layouts/${page.layoutName || "Yellow"}.vue`
                    ].default;
                return page;
            },
        }),
})
    .use(plugin)
    .mount(el);

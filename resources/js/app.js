import "vite/dynamic-import-polyfill";

import { createApp, h } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";

import "../css/app.css";

const pages = import.meta.glob("./Pages/**/*.vue");
const layouts = import.meta.globEager("./Layouts/**/*.vue");
console.log(layouts);

const el = document.getElementById("app");

createApp({
    render: () =>
        h(App, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => {
                const importPage = pages[`./Pages/${name}.vue`];
                return importPage().then(({ default: page }) => {
                    page.layout =
                        layouts[
                            `./Layouts/${page.layoutName || "Yellow"}.vue`
                        ].default;
                    return page;
                });
            },
        }),
})
    .use(plugin)
    .mount(el);

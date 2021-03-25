import "vite/dynamic-import-polyfill";

import { createApp, h, defineAsyncComponent } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";

import "../css/app.css";

const pages = import.meta.glob("./pages/**/*.vue");
const layouts = import.meta.globEager("./layouts/**/*.vue");
const components = import.meta.glob("./components/**/*.vue");

const el = document.getElementById("app");

const app = createApp({
    render: () =>
        h(App, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => {
                const page = defineAsyncComponent(pages[`./pages/${name}.vue`]);
                page.layout =
                    layouts[
                        `./layouts/${page.layoutName || "Yellow"}.vue`
                    ].default;
                return page;
            },
        }),
});

Object.entries(components).forEach(([path, component]) => {
    const name = path.match(/\.\/components\/(.*)\.vue$/)[1];
    app.component(name, defineAsyncComponent(component));
});

app.use(plugin);
app.mount(el);

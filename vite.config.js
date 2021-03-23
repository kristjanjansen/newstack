import vue from "@vitejs/plugin-vue";
import liveReload from "vite-plugin-live-reload";
/**
 * @type {import('vite').UserConfig}
 */
export default {
    publicDir: "disable",
    plugins: [
        vue(),
        liveReload(
            "(app|config|database|public|resources|routes|tests)/**/*.php"
        ),
    ],
    build: {
        manifest: true,
        outDir: "public/dist",
    },
    resolve: {
        alias: {
            "@inertiajs/inertia-vue3":
                "@inertiajs/inertia-vue3/dist/index.umd.js",
            "@inertiajs/inertia": "@inertiajs/inertia/dist/index.umd.js",
        },
    },
};

import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import liveReload from "vite-plugin-live-reload";

/**
 * @type {import('vite').UserConfig}
 */
export default {
    publicDir: "disable",
    plugins: [
        vue(),
        WindiCSS(),
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

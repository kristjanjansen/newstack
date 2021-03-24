import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import liveReload from "vite-plugin-live-reload";

/**
 * @type {import('vite').UserConfig}
 */
export default ({ command }) => ({
    publicDir: "disable",
    base: command === "serve" ? "" : "/dist/",
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
        rollupOptions: {
            input: "resources/js/app.js",
        },
    },
});

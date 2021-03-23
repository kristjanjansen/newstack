import vue from "@vitejs/plugin-vue";
import tailwind from "vite-plugin-tailwind";
import liveReload from "vite-plugin-live-reload";

/**
 * @type {import('vite').UserConfig}
 */
export default {
    publicDir: "disable",
    plugins: [
        vue(),
        tailwind(),
        liveReload(
            "(app|config|database|public|resources|routes|tests)/**/*.php"
        ),
    ],
    build: {
        manifest: true,
        outDir: "public/dist",
    },
};

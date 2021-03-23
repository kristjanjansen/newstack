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
};

import vue from "@vitejs/plugin-vue";
import tailwind from "vite-plugin-tailwind";

/**
 * @type {import('vite').UserConfig}
 */
export default {
    publicDir: "disable",
    plugins: [vue(), tailwind()],
    build: {
        manifest: true,
        outDir: "public/dist",
    },
};

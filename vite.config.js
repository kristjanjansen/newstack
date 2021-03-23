import vue from "@vitejs/plugin-vue";
/**
 * @type {import('vite').UserConfig}
 */
export default {
    publicDir: "disable",
    plugins: [
        vue(),
    ],
    build: {
        manifest: true,
        outDir: "public/dist",
    }
};

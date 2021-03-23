import vue from "@vitejs/plugin-vue";

/**
 * @type {import('vite').UserConfig}
 */
export default {
    publicDir: "fake",
    plugins: [vue()],
    build: {
        manifest: true,
        outDir: "public/dist",
    },
};

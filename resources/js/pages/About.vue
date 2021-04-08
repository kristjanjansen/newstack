<script setup>
import { usePage } from "@inertiajs/inertia-vue3";
const { props } = usePage();
</script>

<script>
export default { layoutName: "Centered" };
</script>

<template>
    <div class="space-y-4">
        <h1 class="text-6xl">About</h1>
        <p class="text-gray-400">
            This is Vue page component
            <code class="text-gray-500">/resources/js/pages/About.vue</code> and
            it is using alternative layout
            <code class="text-gray-500"
                >/resources/js/layouts/Centered.vue</code
            >
        </p>
        <p class="text-gray-400">
            The text below is passed to the page as
            <code class="text-gray-500">props.about</code> via Inertia.
        </p>
        <div class="text-xl" v-html="props.about" />
    </div>
</template>

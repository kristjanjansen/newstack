<script setup>
import { usePage } from "@inertiajs/inertia-vue3";
const { props } = usePage();
</script>

<template>
    <div class="space-y-4">
        <h1 class="text-6xl">Users</h1>
        <p class="text-gray-400">
            This is Vue page component
            <code class="text-gray-500">/resources/js/pages/User.vue</code> and
            it is using default layout
            <code class="text-gray-500">/resources/js/layouts/Main.vue</code>
        </p>
        <p class="text-gray-400">
            The users data is passed to the page as
            <code class="text-gray-500">props.users</code> via Inertia.
        </p>
        <div class="grid grid-cols-3 gap-4">
            <user v-for="(user, i) in props.users" :key="i" :user="user" />
        </div>
    </div>
</template>

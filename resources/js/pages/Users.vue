<script setup>
import { usePage } from "@inertiajs/inertia-vue3";
const { props } = usePage();
</script>

<template>
    <div>
        <h1 class="text-6xl">Users</h1>
        <user v-for="(user, i) in props.users" :key="i" :user="user" />
    </div>
</template>

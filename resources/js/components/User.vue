<script setup>
import { defineProps } from "vue";
defineProps(["user"]);
</script>

<template>
    <h2 class="text-xl p-4 bg-gray-50 shadow">{{ user.name }}</h2>
</template>

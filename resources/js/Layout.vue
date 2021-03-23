<template>
    <main>
        <div class="p-4 mx-8 text-green-500 font-bold">
            <inertia-link href="/" class="hover:text-green-300">First</inertia-link>
            &nbsp;
            <inertia-link href="/second" class="hover:text-pink-300">Second</inertia-link>
        </div>
        <slot />
    </main>
</template>

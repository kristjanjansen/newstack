<template>
    <main>
        <div class="p-4 bg-gray-800 grid grid-cols-[auto,auto,1fr,auto] gap-4">
            <inertia-link href="/" class="text-gray-200">
                First page
            </inertia-link>
            <inertia-link href="/second" class="text-gray-200">
                Second page
            </inertia-link>
            &nbsp;
            <div class="text-green-500">Green layout</div>
        </div>
        <slot />
    </main>
</template>

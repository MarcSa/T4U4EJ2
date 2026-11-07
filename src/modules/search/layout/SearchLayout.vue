<script setup lang="ts">
import HeaderComponent from '@/common/components/HeaderComponent.vue';
</script>

<template>
    <div class="d-flex flex-column min-vh-100">
        <HeaderComponent />
        <main class="container">
            <RouterView />
        </main>
    </div>
</template>

<style scoped></style>

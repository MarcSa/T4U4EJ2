<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
import router from '@/router/index';

const term = ref<string>(typeof route.query.term === 'string' ? route.query.term : '');

const onSubmit = () => {
    router.push({
        path: '/search/results',
        query: { term: term.value },
    });
};
</script>

<template>
    <section class="container py-4">
        <h1>Búsqueda</h1>
        <form class="d-md-flex flex-md-row mb-3" @submit.prevent="onSubmit">
            <div class="mb-3 flex-md-grow-1 d-flex flex-column mb-md-0 pe-4">
                <label for="term" class="form-label">Producto</label>
                <input
                    type="text"
                    id="term"
                    name="term"
                    class="form-control form-control-lg"
                    v-model="term"
                />
            </div>
            <div class="btn-container align-self-md-end">
                <input type="submit" value="Search" class="btn btn-primary btn-lg" />
            </div>
        </form>
        <p>Cuando envíes, la aplicación navegará a /search/results?term=...</p>
    </section>
</template>

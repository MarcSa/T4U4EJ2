<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

import router from '@/router/index';
import { products } from '@/data/products';

const coincidences = () => {
    const term = route.query.term;
    if (typeof term !== 'string') {
        return [];
    }
    return products.filter((product) => product.name.includes(term));
};

const backToSearch = () => {
    router.push({
        path: '/search',
        query: { term: route.query.term },
    });
};
</script>
<template>
    <div class="container py-4">
        <h1>Resultados de búsqueda</h1>
        <p>
            Consulta actual: <strong>{{ route.query }}</strong>
        </p>
        <button @click.prevent="backToSearch">Volver al formulatio de búsqueda</button>
        <section>
            <h2>Resultados({{ coincidences().length }})</h2>
            <div class="filtered-products border rounded-1" v-if="coincidences().length !== 0">
                <div class="product" v-for="product in coincidences()" :key="product.id">
                    <p class="px-3 py-2 mb-0 border-bottom">{{ product.name }}</p>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
.product:last-child p {
    border-bottom: 0 !important;
}
</style>

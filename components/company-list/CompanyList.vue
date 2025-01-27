<template>
    <section>
        <!-- <div v-for="item in items" :key="item.id">
            <ChildComponent :item="item" />
        </div> -->
        <CompanyCard v-for="company in companies" :key="company.id" :company="company" />
    </section>
</template>

<script setup lang="ts">
import { getCompanies, getSingleCompany } from '~/composables/api';
import CompanyCard from './CompanyCard.vue';
let companies: any = [
    {
        ticker: '$AAPL',
        name: 'Apple',
        img: '/img/apple.png',
        data: []
    },
    {
        ticker: '$AMZN',
        name: 'Amazon',
        img: '/img/amazon.png',
        data: []
    },
    {
        ticker: '$GOOG',
        name: 'Google',
        img: '/img/google.png',
        data: []
    },
    {
        ticker: '$META',
        name: 'Meta',
        img: '/img/meta.png',
        data: []
    },
    {
        ticker: '$MSFT',
        name: 'Microsoft',
        img: '/img/microsoft.png',
        data: []
    },
    {
        ticker: '$NVDA',
        name: 'Nvidia',
        img: '/img/nvidia.png',
        data: []
    },
    {
        ticker: '$TSLA',
        name: 'Tesla',
        img: '/img/tesla.png',
        data: []
    }
];
for (let index = 0; index < companies.length; index++) {
    const element = companies[index];
    const response = getSingleCompany(element.ticker);
    element.data = toRaw(response.data.value);
}
// console.log(companies);
</script>

<style scoped>

section {
    display: flex;
    background-color: #023A6233;
    padding: 24px;
    border-radius: 20px;
    gap: 24px;
}


h1 {
    /* font-family: 'Rubik'; */
    color: white;
}
</style>
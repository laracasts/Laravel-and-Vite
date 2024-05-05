<template>
    <div class="text-center pt-10">
            <h1 class="text-3xl font-extrabold text-slate-200">
                {{title}}
            </h1>
            <h4 class="text-xl pt-3">
                {{subTitle}}
            </h4>
        </div>
        <div class="flex justify-center items-center pt-12">
            <img 
                class="object-fill h-96"
                :src="logo" alt="">
        </div>
</template>
<script setup>
import logo from '@images/logo.png';

defineProps({
    title: String,
    subTitle: String
});
</script>
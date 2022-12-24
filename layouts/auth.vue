<template>
    <div class="main-wrapper">
        <slot />
    </div>
</template>

<script setup>
let screenWidth = window.innerWidth;
const name = ref(window.innerWidth);
    watch(name, (currentValue, oldValue) => {
      console.log(currentValue);
      console.log(oldValue);
    });



</script>

<style>

</style>
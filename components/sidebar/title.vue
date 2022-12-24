<template>
    
    <li class="nav-small-cap"><span class="hide-menu">{{ titleName }}</span></li>

</template>
<script setup>
const props = defineProps({
    titleName: {
        type: String,
        required: true,
        default: 'App title'
    }
})
</script>
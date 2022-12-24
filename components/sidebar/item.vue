<template>
    <li class="sidebar-item">
        <NuxtLink class="sidebar-link sidebar-link" :to="link"
            aria-expanded="false">
            <span class="material-symbols-outlined" style="margin-right:5px; margin-bottom: 3px">
                {{ iconName }}
            </span>
            <span class="hide-menu">Dashboard</span>
        </NuxtLink>
    </li>
</template>
<script setup>
    const props = defineProps({
        itemName: {
            type: String,
            required: true,
            default: 'app'
        },
        link: {
            type: String,
            required: true,
            default: '/'
        },
        iconName: {
            type: String,
            required: true,
            default: 'home'
        }
    })
</script>
<template>
    <div class="col-7 align-self-center">
        <h4 class="page-title text-truncate text-dark font-weight-medium mb-1">{{ title }}</h4>
        <div class="d-flex align-items-center">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb m-0 p-0">
                    <li class="breadcrumb-item"><NuxtLink :to="link" class="text-muted">{{  root }}</NuxtLink></li>
                    <li class="breadcrumb-item text-muted active" aria-current="page">{{ child }}</li>
                    <slot />
                </ol>
            </nav>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true,
            default: 'Table title'
        },
        root: {
            type: String,
            default: 'Apps'
        },
        child: {
            type: String,
            required: true,
            default: 'child'
        },
        link: {
            type: String,
            default: '/'
        }
    })  
</script>
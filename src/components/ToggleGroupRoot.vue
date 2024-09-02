<script setup lang="ts" generic="T extends ToggleGroupType">
import type { ToggleGroupProps, ToggleGroupType } from './ToggleGroupRoot';

defineProps<ToggleGroupProps<T>>()
</script>

<template>
    <div>
        {{ type }}
    </div>
</template>

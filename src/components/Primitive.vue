<script setup lang="ts">
import { shallowRef } from 'vue'
import { useForwardElement } from './hooks/useForwardElement'
import type { PrimitiveProps } from './Primitive.ts'

defineOptions({
  name: 'Primitive',
})

withDefaults(
  defineProps<PrimitiveProps>(),
  {
    as: 'div',
  },
)

const $el = shallowRef<HTMLElement>()

const forwardElement = useForwardElement($el)

defineExpose({
  $el,
})
</script>

<template>
  <component :is="as" :ref="forwardElement">
    <slot />
  </component>
</template>

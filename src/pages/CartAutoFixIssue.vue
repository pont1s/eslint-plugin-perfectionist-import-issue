<script setup lang="ts">
import { useCartStore } from '~/stores/cartStore.ts'
import { useUserStore } from '~/stores/userStore.ts'

import { getCart } from '~/services/cartService.ts'

import { formattingDate } from '~/utils/dateTime.ts'
import { connect } from '~/utils/ws.ts'

import { useDebounce } from '~/composable/useDebounce.ts'
import { useFetch } from '~/composable/useFetch.ts'
import { useMouseMove } from '~/composable/useMouseMove.ts'

import ComponentA from '~/components/ComponentA.vue'
import ComponentB from '~/components/ComponentB.vue'
import ComponentC from '~/components/ComponentC.vue'

import CartComponentA from './cart/CartComponentA.vue'
import CartComponentB from './cart/CartComponentB.vue'

getCart()
connect()
formattingDate()
useUserStore()
useCartStore()
useMouseMove()
useFetch()
useDebounce()
</script>

<template>
  <div>
    <ComponentA />
    <ComponentB />
    <ComponentC />
    <CartComponentA />
    <CartComponentB />
  </div>
</template>

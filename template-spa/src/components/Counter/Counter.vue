<!-- Script import -->
<script setup lang="ts">
import useCounter from './Counter'
const { count, increment, decrement } = useCounter()
</script>

<!-- Component -->
 
<template>
	<button @click="increment">+</button>
	<p>{{count}}</p>
	<button @click="decrement">-</button>
</template>

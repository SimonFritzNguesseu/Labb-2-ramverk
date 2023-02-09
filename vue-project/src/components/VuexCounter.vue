<template>
  <input type="button" value="+" @click="$store.commit('incre')" />
  <input type="button" value="-" @click="$store.commit('decre')" />
</template>
<!-- increase and decrease button for the store value countcount -->

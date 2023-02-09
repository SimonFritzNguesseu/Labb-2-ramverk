<template>
  <input type="button" value="+" @click="$store.commit('incre')" />
  <input type="button" value="-" @click="$store.commit('decre')" />
</template>

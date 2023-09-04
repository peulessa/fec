<template>
  <q-layout
    style="
      background-image: url('./src/assets/images/bg-sidebar-mobile.svg');
      background-repeat: no-repeat;
    "
  >
    <router-view />
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from "vue";
</script>

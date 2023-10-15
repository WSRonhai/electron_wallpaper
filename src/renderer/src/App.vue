<script setup lang="ts">
import NavBar from '@renderer/components/NavBar.vue'
</script>

<template>
  <Suspense>
    <main class="flex flex-col h-screen">
      <NavBar />

      <RouterView #default="{ Component }">
        <component :is="Component" class="flex-1"></component>
      </RouterView>
    </main>
  </Suspense>
</template>

<style lang="scss"></style>

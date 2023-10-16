<script setup lang="ts">
import { Pic, SettingOne } from '@icon-park/vue-next'
</script>

<template>
  <main class="px-3 py-2 text-sm opacity-80 flex justify-between items-center drag">
    <section>荣喜桌面壁纸</section>
    <section class="flex justify-end items-center gap-2 nodrag">
      <pic theme="outline" size="18" fill="#333" @click="$router.push({ name: 'home' })" />
      <setting-one
        theme="outline"
        size="18"
        fill="#333"
        @click="$router.push({ name: 'setting' })"
      />
    </section>
  </main>
</template>
<style lang="scss"></style>

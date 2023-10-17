<script setup lang="ts">
import { Pic, SettingOne, Minus } from '@icon-park/vue-next'
const minimize = () => {
  window.api.minimizeWindow()
}
</script>

<template>
  <main class="px-3 py-2 text-sm opacity-80 flex justify-between items-center drag">
    <section>喜荣桌面壁纸</section>
    <section class="flex justify-end items-center gap-2 nodrag">
      <pic
        theme="outline"
        size="18"
        @click="$router.push({ name: 'home' })"
        class="cursor-pointer text-gray-500"
        :class="{ iconColor: $route.name == 'home' }"
      />
      <setting-one
        class="cursor-pointer text-gray-500"
        theme="outline"
        size="18"
        @click="$router.push({ name: 'setting' })"
        :class="{ iconColor: $route.name == 'setting' }"
      />
      <!-- <close-one
        theme="multi-color"
        size="18"
        @click="minimize"
        :fill="['#575151', '#ffffff', '#575151', '#ffffff']"
      /> -->
      <minus
        theme="multi-color"
        size="18"
        class="cursor-pointer"
        @click="minimize"
        :fill="['#575151', '#ffffff', '#575151', '#ffffff']"
      />
    </section>
  </main>
</template>
<style lang="scss">
.iconColor {
  color: #333 !important;
}
</style>

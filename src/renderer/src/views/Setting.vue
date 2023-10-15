<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
import useWallpaper from '@renderer/composable/useWallpaper'
import { ref } from 'vue'
const { config } = useConfigStore()
const { setImageSaveDirectory } = useWallpaper()
const a = ref('b')
</script>
<template>
  <main class="p-3 bg-[#34495e] text-white flex flex-col justify-between">
    <section>
      <h2 class="flex justify-center py-5 opacity-80">参数设置</h2>
      <div class="flex gap-1 items-center">
        <el-input
          v-model="config.saveDirectory"
          placeholder="请选择图片保存目录"
          size="normal"
          readonly
        ></el-input>
        <el-button type="primary" size="default" @click="setImageSaveDirectory"
          >选择图片保存目录</el-button
        >
      </div>
    </section>
    <div class="text-sm opacity-30 font-mono font-light flex flex-col items-center mb-5">
      <div class="">隆海技术站出品</div>
      <!-- <div class="">pythl.com</div> -->
    </div>
  </main>
</template>
<style lang="scss"></style>

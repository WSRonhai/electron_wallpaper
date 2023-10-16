<script setup lang="ts">
import http from '@renderer/http/'
import { ElLoading } from 'element-plus'
import { onMounted, ref } from 'vue'
import { useConfigStore } from '@renderer/store/useConfigStore'
import useWallpaper from '@renderer/composable/useWallpaper'
const { setWallpaper, downloadImage } = useWallpaper()
const img = ref<HTMLImageElement>()
const configStore = useConfigStore()
const load = async () => {
  const res = await http.get('/')
  const loading = ElLoading.service({ background: 'rgba(255, 255, 255, 0.2) ' })

  configStore.config.url = res.data
  img.value!.src = res.data
  img.value!.addEventListener('load', () => {
    loading.close()
  })
}
const setPaper = () => {
  setWallpaper()
}
onMounted(() => {
  if (!configStore.config.url) {
    load()
  }
})
</script>
<template>
  <main>
    <section>
      <img
        ref="img"
        :src="configStore.config.url"
        alt=""
        class="aspect-video nodrag cursor-pointer"
        @click="load"
      />
      <div
        @click="setPaper"
        class="bg-gray-50 text-center py-3 m-3 rounded-lg hover:bg-slate-300 cursor-pointer duration-300 opacity-80 shadow-sm nodrag"
      >
        设为壁纸
      </div>
      <div class="px-3 text-sm text-gray-700 flex justify-between items-center nodrag">
        <div class="">晚生隆海</div>
        <div class="hover:font-bold cursor-pointer" @click="downloadImage">下载壁纸</div>
      </div>
    </section>
  </main>
</template>
<style lang="scss"></style>

import { onMounted, Ref, ref } from '@vue/composition-api'
import { createGuid } from '@xizher/core/es/utils/base.utils'
import { Basemap, WebMap } from '@xizher/esri'
import '@arcgis/core/assets/esri/themes/light/main.css'

let webMap: WebMap
const loaded = ref(false)

export function useLoaded () : Ref<boolean> {
  return loaded
}

export function useCreate () : [WebMap, string] {
  const id = createGuid()
  loaded.value = false
  webMap = new WebMap(id, { viewOptions: { zoom: 5 }, assetsPath: './assets' })
    .use(new Basemap({}))
  webMap.on('loaded', () => loaded.value = true)
  onMounted(() => webMap.mount())
  return [webMap, id]
}

function getWebMap () : WebMap {
  return webMap
}

export default getWebMap

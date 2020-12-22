<template>
  <a-layout id="components-layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <LayoutAside/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
       <LayoutHeader/>
      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <LayoutMain/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import {reactive, toRefs, ref} from "vue"
import LayoutAside from './components/Aside'
import LayoutHeader from './components/Header'
import LayoutMain from './components/Main'

export default {
  name: "Layout",
  components: {
    LayoutAside,
    LayoutHeader,
    LayoutMain
  },
  setup(props) {
    const data = reactive({
      selectedKeys: ['1'],
      collapsed: false,
    })

    return {
      ...toRefs(data)
    }
  }
}
</script>

<style lang="scss" >
#components-layout{
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
  height: 100vh;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
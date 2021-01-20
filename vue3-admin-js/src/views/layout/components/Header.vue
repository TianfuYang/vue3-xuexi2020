<template>
  <div id="header">
    <div class="header-menu">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()"> 导航
          <img src="../../../assets/logo.png" height="20" width="20" alt="">
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <div class="menu-item">17612106175</div>
            </a-menu-item>
            <a-menu-divider/>
            <a-menu-item key="1">
             <div class="menu-item">
               <span>中文</span>
               <span>英文</span>
             </div>
            </a-menu-item>
            <a-menu-divider/>
            <a-menu-item key="3" disabled>
              <div class="menu-item">{{$t("header_menu.logout") }}</div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
#header {
  padding: 0 20px;
  height: 64px;
  .menu-item{
    padding: 5px 10px;
    font-size: 14px;
    font-family: SimSun;
  }
}
</style>
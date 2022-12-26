<template>
    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" :data-sidebartype="screenWidth > 768 ? 'full': 'mini-sidebar'"
          data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full" :class="[{'mini-sidebar': isScreen}]">
          <!-- Topbar header - style you can find in pages.scss -->
        <MainAppHeader />
          <!-- End Topbar header -->
          <!-- Left Sidebar - style you can find in sidebar.scss  -->
          <MainAppSideber />
          <!-- End Left Sidebar - style you can find in sidebar.scss  -->
          <!-- Page wrapper  -->
          <div class="page-wrapper" style="display: block">
              <!-- ============================================================== -->
              <slot />
              
              <!-- End Container fluid  -->
              <!-- footer -->
              <MainAppFooter />
              <!-- End footer -->
          </div>
      </div>
    </div>
</template>

<script setup>
    import { throttle } from 'lodash-es'

    const isScreen = ref(false)
    let screenWidth = window.innerWidth
    const watchResize = throttle(function () {
      
      screenWidth = window.innerWidth
      console.log('resized properly', window.innerWidth)
      if(screenWidth < 768){
        isScreen.value = true
      }else{
        isScreen.value = false
      }
     
    })

  onMounted(() => {
    window.addEventListener('resize', watchResize)
  })


</script>

<style>

</style>
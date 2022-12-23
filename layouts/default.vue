<template>
    <div>
      <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" :data-sidebartype="screenWidth > 768 ? 'full': 'mini-sidebar'"
          data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full" :class="screenWidth > 768 ? '': 'mini-sidebar'">
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
let screenWidth = window.innerWidth;
const name = ref(window.innerWidth);
    watch(name, (currentValue, oldValue) => {
      console.log(currentValue);
      console.log(oldValue);
    });



</script>

<style>

</style>
<script setup>
  import HeaderComponent from './components/HeaderComponent.vue'
  import BannerComponent from './components/BannerComponent.vue';
  import ArticleComponent from './components/ArticleComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <main class="flex flex-col items-center bg-violet h-full">
    <HeaderComponent />
    <div class="lg:flex lg:mt-6 lg:pl-[4.5rem]">
      <BannerComponent />
      <ArticleComponent />
    </div>
    <FooterComponent />
  </main>

</template>

<style scoped>
  main {
    background-image: url("./assets/bg-mobile.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
  }
  @media (min-width: 840px) {
    main {
      background-image: url("./assets/bg-desktop.svg");
      background-position: center;
      background-size: cover;
    }
  }
</style>
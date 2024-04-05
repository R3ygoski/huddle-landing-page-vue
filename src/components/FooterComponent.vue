<script setup>
const socialButtons = [
    { id:1, icon: 'fa-facebook-f'},
    { id:2, icon: 'fa-twitter'},
    { id:3, icon: 'fa-instagram'}
]
</script>

<template>
    <footer class="mt-16 lg:flex lg:flex-row lg:justify-end lg:w-full lg:h-16 lg:mt-8 lg:pr-20">
      <ul class="flex w-full h-12 mt-0 gap-[.6rem] lg:w-auto lg:h-full lg:items-center lg:gap-[.8rem]">
        <li v-for:="button in socialButtons" :key="button" class="flex justify-center items-center border-white rounded-full w-[28px] h-[28px] duration-500 hover:border-magenta lg:w-[42px] lg:h-[42px]">
          <v-icon class="text-white cursor-pointer duration-500 hover:text-magenta" :name="button.icon"/>
        </li>
      </ul>
    </footer>
</template>

<style scoped>
  li {
    border: 1px solid white;
  }
</style>
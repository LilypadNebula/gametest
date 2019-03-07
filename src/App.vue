<template>
  <transition>
    <component :is="current" name="fade" mode="out-in"></component>
  </transition>
</template>

<script>
export default {
  components: {
    Desktop: () => import("./views/Desktop"),
    Home: () => import("./views/Home")
  },
  data: () => ({
    current: "home"
  }),
  async mounted() {
    this.$store.dispatch("initGame");
  }
};
</script>


<style lang="postcss">
@import "assets/styles/tailwind.postcss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

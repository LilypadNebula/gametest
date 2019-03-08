<template>
  <transition>
    <component :is="current" name="fade" mode="out-in"></component>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Application",
  components: {
    Desktop: () => import("./views/Desktop"),
    Home: () => import("./views/Home")
  },
  computed: mapState({
    current: "currentScreen"
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

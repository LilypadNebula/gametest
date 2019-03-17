<template>
  <div class="main">
    <typer :strings="toType"></typer>
  </div>
</template>

<script>
import Typer from "../components/Typer";
export default {
  name: "SelfText",
  components: {
    Typer
  },
  computed: {
    /**@returns {string[]} */
    toType() {
      return this.$store.state.progress.storyText;
    }
  }
};
</script>


<style lang="postcss" scoped>
.main {
  height: 100vh;
  @apply bg-black;
}
</style>

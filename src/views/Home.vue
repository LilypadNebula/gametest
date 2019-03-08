<template>
  <div class="home text-center p-16">
    <div v-if="init">
      <p
        class="text-5xl"
      >This is the screen when you aren't on the computer, it will have a picture of the character's home</p>
      <button
        class="text-3xl font-sans bg-blue text-white p-8 rounded shadow"
        @click="setCurrentScreen('desktop')"
      >Get On Computer</button>
    </div>

    <div v-else>
      <p class="text-5xl font-sans">Welcome to the game!</p>
      <button
        class="text-3xl font-sans bg-blue text-white p-8 rounded shadow"
        @click="firstLoad"
      >Start!</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions(["firstLoad"]),
    ...mapMutations(["setCurrentScreen"])
  },
  computed: {
    init() {
      return this.$store.state.progress.initialized;
    }
  }
};
</script>

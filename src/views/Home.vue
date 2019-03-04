<template>
  <div class="home text-center">
    <p class="text-5xl" v-if="init">You have started!!</p>
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
import { mapActions } from "vuex";

export default {
  name: "Desktop",
  methods: {
    ...mapActions(["firstLoad"])
  },
  computed: {
    init() {
      return this.$store.state.progress.initialized;
    }
  }
};
</script>

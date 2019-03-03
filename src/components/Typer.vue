<template>
  <div class="flex flex-col">
    <div class="flex">
      <p>{{shownString}}</p>
      <p class="cursor">|</p>
    </div>
    <button @click="clear" v-if="this.current < this.strings.length">Next</button>
    <button @click="$emit('done')" v-else>Done</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.interval = setInterval(this.typing, 100);
  },
  data: () => ({
    shownString: "",
    interval: null,
    current: 0,
    stringSpot: 0,
    strings: ["I really wanna test things", "Can't wait to do more testing"]
  }),
  methods: {
    typing() {
      if (this.shownString === this.strings[this.current]) {
        this.current++;
      this.stringSpot = 0;
        clearInterval(this.interval);
      } else {
        this.shownString += this.strings[this.current].slice(
          this.stringSpot,
          this.stringSpot + 1
        );
        this.stringSpot++;
      }
    },
    clear() {
      
      this.interval = setInterval(this.removing, 100);
    },
    removing() {
      if (this.shownString.length < 1) {
        clearInterval(this.interval);

        if (this.current <= this.strings.length) {
          this.interval = setInterval(this.typing, 100);
        }
      } else {
        this.shownString = this.shownString.slice(0, -1);
      }
    }
  }
};
</script>

<style scoped>
@keyframes blinky {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.cursor {
  animation: blinky 0.8s infinite;
}
</style>


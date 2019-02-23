<template>
  <div class="h-most rounded bg-black text-white container mx-auto">
    <div class="w-full p-4 text-center border-b mb-4">Test Console</div>
    <console-line v-for="line in history" :key="line.id" :display="line.text"></console-line>
    <console-line><input type="text" class="text-white bg-black focus:outline-none w-full" @keyup.enter="send"></console-line>
  </div>
</template>

<script>
import ConsoleLine from '../components/ConsoleLine.vue'

export default {
  components: {ConsoleLine},
  data:() => ({
    history: []
  }),
  methods: {
    send(e){
      this.history.push({id:Math.floor(Math.random()*Math.random()*1000), text:e.target.value})
    }
  }
}
</script>


<style lang="postcss" scoped>
.h-most {
  height: 80vh;
}
</style>

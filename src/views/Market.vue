<template>
  <div class="container mx-auto flex flex-wrap justify-center">
    <div
      class="rounded h-64 w-1/3 m-8 border-black border font-sans shadow-md flex flex-col justify-around items-center"
      v-for="item in stock"
      :key="item.id"
    >
      <p class="text-3xl">{{item.name}}</p>
      <p class="text-2xl">${{item.price}}</p>
      <button class="text-xl bg-pink-dark rounded p-8">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Market",
  computed: {
    stock() {
      return this.$store.state.storeItems;
    }
  }
};
</script>

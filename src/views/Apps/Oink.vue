<template>
  <div class="text-center p-32">
    <font-awesome-icon icon="piggy-bank" class="text-pink-dark" size="10x"></font-awesome-icon>
    <p class="text-5xl font-sans mt-32">Funds: ${{funds}}</p>
  </div>
</template>

<script>
export default {
  name: "Oink",
  computed: {
    funds() {
      return this.$store.state.funds;
    }
  }
};
</script>


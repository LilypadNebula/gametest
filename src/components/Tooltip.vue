<template>
  <div>
    <p class="bg-black text-white fixed pin-t rounded">{{message}}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["message"],
  data: () => ({
    show: false
  })
};
</script>

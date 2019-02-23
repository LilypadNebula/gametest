<template>
  <p class="text-left px-4">test@home: {{display}}<slot></slot></p>
  
</template>

<script>
export default {
  props: ['display']
}
</script>

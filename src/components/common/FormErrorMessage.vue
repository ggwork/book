<template>
  <div class="help is-danger">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'FormErrorMessage'
}
</script>
<style scoped>
.help {
  font-size: 0.75rem;
  margin-top: 0.25rem;
  line-height: 0.75rem;
}

.help.is-danger {
  color: #ff3860;
}
</style>

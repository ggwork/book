<template>
  <div>这里是Index 页面，此时登录的用户是{{userName}}</div>
</template>
<style>
</style>
<script>
export default {
  name: 'Index',
  data() {
    return {
    }
  },
  computed: {
    userName() {
      return this.$store.state.name
    }
  },
}
</script>

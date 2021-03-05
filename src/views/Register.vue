<template>
  <div v-if="error" class="error">{{error.message}}</div>
  <form @submit.prevent="pressed">
    Register
    <div class="email">
      <input type="email" v-model="email" placeholder="email">
    </div>
    <div class="password">
      <input type="password" v-model="password" placeholder="password">
    </div>
    <button type="submit"> Register</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    }
  },
  setup () {
    

    return {}
  },
  methods: {
    pressed() {
      alert('submitted')
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 1.2rem;
}
</style>
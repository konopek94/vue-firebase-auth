<template>
  <div>
    login
    <form @submit.prevent="pressed">
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
    <span>need an accont? click here to <router-link to="/register">register</router-link></span>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  setup() {
    return {}
  },
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async pressed() {
      try {
        const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        console.log('val', val)
        this.$router.replace({ name: 'Secret'})

      } catch (error) {
        console.log('error', error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 1.2rem;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
</style>
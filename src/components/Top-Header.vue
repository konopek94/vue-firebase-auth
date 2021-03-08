<template>
  <div>
    loged id
    <span v-if="loggedIn">yes</span>
    <span v-else>no</span>
    <button @click="signOut">sign out</button>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
      loggedIn: false,
    }
  },
    setup() {
    firebase.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user
    })
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut()
        console.log('data', data)
        this.$router.replace({ name: 'Login' })
      } catch (err) {
        console.log('err', err)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
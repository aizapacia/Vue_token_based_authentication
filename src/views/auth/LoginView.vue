<template>
  <div>
    <form @submit.prevent="login">
      <label for="email"> Email: </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password"> Password: </label>
      <input v-model="password" type="password" name="password" value />

      <button type="submit" name="button">Login</button>

      <p>{{ error }}</p>
    </form>
    <router-link :to="{ name: 'Registration' }">
      Don't have an account? Register.
    </router-link>
  </div>
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
  methods: {
    login() {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: 'Dashboard' })
        })
        .catch((err) => {
          this.error = err.response.data.message
        })
    },
  },
}
</script>

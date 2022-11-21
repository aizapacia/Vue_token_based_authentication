<template>
  <div>
    <form @submit.prevent="register">
      <label for="first_name"> First Name: </label>
      <input v-model="first_name" type="text" name="first_name" value />

      <label for="last_name"> Last Name: </label>
      <input v-model="last_name" type="text" name="last_name" value />

      <label for="email"> Email: </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password"> Password: </label>
      <input v-model="password" type="password" name value />

      <button type="submit" name="button">Register</button>

      <p>{{ error }}</p>
    </form>
    <router-link :to="{ name: 'Login' }">
      Already have an account? Login.
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      error: null,
    }
  },
  methods: {
    register() {
      this.$store
        .dispatch('register', {
          first_name: this.first_name,
          last_name: this.last_name,
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

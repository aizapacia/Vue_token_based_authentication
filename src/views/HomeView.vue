<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <div v-if="!loggedIn">
      To use this app you'll need to
      <router-link :to="{ name: 'Login' }"> Login </router-link>
      or
      <router-link :to="{ name: 'Registration' }"> Register </router-link>
    </div>
  </div>
</template>

<script>
import { authComouted } from '@/store/helpers'
export default {
  computed: {
    ...authComouted,
  },
}
</script>

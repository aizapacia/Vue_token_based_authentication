<template>
  <div>
    <h1>User List</h1>
    <template v-if="!isLoading">
      <div class="row">
        <EventCard v-for="user in users" :key="user.id" :user="user" />
      </div>
    </template>
    <p v-else>Loading ...</p>
  </div>
</template>

<script>
import axios from 'axios'
import EventCard from '@/components/EventCard'

export default {
  components: { EventCard },
  data() {
    return {
      isLoading: true,
      users: [],
    }
  },
  created() {
    const apiLink = 'http://127.0.0.1:8000/api'
    axios.get(apiLink + '/user').then(({ data }) => {
      this.users = data
      this.isLoading = false
    })
  },
}
</script>

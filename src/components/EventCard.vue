<template>
  <div class="col-md-3 p-3 row justify-content-center">
    <div class="card-user">
      <div class="img">
        <img src="@/assets/img/profile.png" class="profile" />
      </div>
      <div class="info mt-2">
        <span class="text-break"
          >{{ user.first_name }} {{ user.last_name }}</span
        >
        <p class="me-2 ms-2 text-break">{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    user: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.card-user {
  width: 90%;
  height: 254px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2f3;
  border-radius: 12px;
  box-shadow: inset 5px 5px 10px #a9a9aa77, inset -5px -5px 10px #ffffff7e;
}

.card-user .img {
  height: 100px;
  margin-top: 2em;
  aspect-ratio: 1;
  border-radius: 30%;
  background: #f2f2f3;
  margin-bottom: 0.4em;
  box-shadow: -5px -5px 8px #ffffff7a, 5px 5px 8px #a9a9aa7a;
}
.card-user .info {
  text-align: center;
  margin-top: 0.4em;
  background: linear-gradient(
    120deg,
    rgba(0, 194, 255, 1) 0%,
    rgba(0, 86, 255, 1) 100%
  );
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-user .info > span {
  font-weight: bold;
  font-size: 1.2em;
}

.card-user a {
  margin-top: 1em;
  color: #fff;
  text-decoration: none;
  background: linear-gradient(
    90deg,
    rgba(0, 194, 255, 1) 0%,
    rgba(0, 86, 255, 1) 100%
  );
  padding: 0.5em 2em;
  border-radius: 0.7em;
}

.card-user a:active {
  box-shadow: inset 3px 3px 3px #0056ff, inset -3px -3px 3px #00c2ff;
}
.profile {
  width: 80%;
  margin-bottom: 5px;
}
</style>

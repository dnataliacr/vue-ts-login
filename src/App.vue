<template>
  <div class="container">
    <form-login v-if="!userStore.getters.isLoggedIn" />
    <div v-else>
      <h1>Hi, {{ userStore.state.name }} <span>👋</span> </h1>
      <button class="button" @click="userStore.logout">logout</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormLogin from "./components/FormLogin.vue";
import userStore from "./store/users";

export default defineComponent({
  name: "App",
  components: {
    FormLogin,
  },
  setup() {
    return { userStore };
  },
});
</script>

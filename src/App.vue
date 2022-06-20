<template>
<div class="container"> 
  <form-login v-if="!userStore.getters.isLoggedIn"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormLogin from './components/FormLogin.vue';
import userStore from './store/users'

export default defineComponent({
  name: 'App',
  components: {
    FormLogin
  },
  setup() {
    return {userStore}
  }
});
</script>

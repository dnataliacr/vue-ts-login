<template>
  <form @submit.prevent="onSubmit" class="card">
    <div class="top-row bg-top-row">👩‍💻</div>
    <div class="content">
      <div class="field">
      <label for="" class="font-extrabold">username</label>
      <input
        type="text"
        v-model="form.username"
        placeholder="username"
        required
        class="text input-fill"
      /></div>
      <div class="field"> 
      <label for="">password</label>
      <input
        type="password"
        v-model="form.password"
        placeholder="password"
        required
        class="text input-fill"
      />
      </div>
      <div>{{ userStore.state.error }}</div>
      <button type="submit" class="button">login</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import userStore from "../store/users";

export default defineComponent({
  setup() {
    const form = reactive({
      username: "",
      password: "",
    });
    const onSubmit = () => {
      userStore.login(form.username, form.password);
      console.log(form.username, form.password, userStore.getters.isLoggedIn);
      form.username = "";
      form.password = "";
    };
    return { form, userStore, onSubmit };
  },
});
</script>

<template>
  <form class="card">
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
      <button type="submit" class="button">login</button>
    </div>
  </form>
</template>

<script lang="ts">
</script>

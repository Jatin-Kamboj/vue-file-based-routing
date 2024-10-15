<script setup></script>

<template>
  <main>
    <div class="wrapper">
      <router-link to="/">Homepage</router-link>
      <router-link to="/about" class="pl-3">About</router-link>
      <router-link class="pl-3" to="/users/1">User 1</router-link>
    </div>
    <router-view />
  </main>
</template>

<style scoped>
.wrapper {
  padding: 10px;
}
.pl-3 {
  padding-left: 10px;
}
</style>

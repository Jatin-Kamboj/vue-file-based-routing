<!-- src/pages/users/[id].vue -->
<template>
  <h1>User ID: {{ id }}</h1>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    return { id: route.params.id };
  },
};
</script>

# **Vue 3 File-Based Routing Example**

This project demonstrates how to use file-based routing in Vue 3 with `vite-plugin-pages`. Routes are generated automatically from the structure of the `pages/` directory, simplifying route management.

---

## **Project Structure**

```
src/
├── App.vue
├── main.js
├── router/
│   └── index.js
├── pages/
│   ├── index.vue         // Route: "/"
│   ├── about.vue         // Route: "/about"
│   └── users/
│       ├── index.vue     // Route: "/users"
│       └── [id].vue      // Route: "/users/:id"
```

---

## **App.vue Navigation**

```vue
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

```

---

## **How to Run the Project**

1. Install dependencies:  
   ```bash
   npm install
   ```

2. Start the development server:  
   ```bash
   npm run dev
   ```

3. Open the app at `http://localhost:5173/`.

---
<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }}</p>
      <p class="email">Logged in {{ user.email }}</p>
    </div>
    <button @click="handleClick">logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
export default {
  setup() {
    const { error, logout } = useLogout();
    const { user } = getUser();
    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
      }
    };
    return { user, error, handleClick };
  },
};
</script>

<style>
</style>
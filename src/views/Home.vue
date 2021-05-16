<template>
  <div>
    <b-navbar-nav class="ml-auto">
      <b-button class="my-2 my-sm-0" @click="logout">Log out</b-button>
    </b-navbar-nav>
  </div>
</template>

<script>
import Firebase from "firebase"

export default {
  name: "Home",
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then((accept) => {
          console.log(accept);
          this.$router.push("login");
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-app id="wireframe">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center ml-5">
        <v-img
          src="/logo.png"
          width="50"
          height="50"
          contain
          class="mr-3"
        ></v-img>
        <v-toolbar-title class="text-h4">Restoz</v-toolbar-title>
      </div>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
}
</script>

<style lang="scss">
.v-application {
  font-family: 'Baloo Tamma 2', serif;
}
</style>

<template>
  <v-app>
    <Header />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
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

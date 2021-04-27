<template>
  <div id="Home">
    <div class="header">
      <v-container class="container">
        <v-row class="align-center">
          <v-col cols="6">
            <p class="text-h2 grey--text text--darken-3">
              find it quick, <br />
              find it better
            </p>
            <p class="subtitle-2">
              Use our powerful search engine to find restaurants nearby
            </p>
          </v-col class="hidden-md-and-down">
          <v-col cols="6">
            <img src="/plate.png" alt="" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <Search/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#Home {
  .header {
    height: 500px;
    background: url('/header.jpg');
  }

  .container {
    max-width: 960px;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 400px;
    }
  }
}
</style>

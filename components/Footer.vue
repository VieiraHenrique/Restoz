<template>
  <v-footer id="footer" color="darkgrey" padless class="mt-10">
    <v-row justify="center" no-gutters class="social">
      <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
        <v-icon size="24px" class="my-5">
          {{ icon }}
        </v-icon>
      </v-btn>

      <v-col class="white py-4 text-center black--text" cols="12">
        {{ new Date().getFullYear() }} — Henrique Vieira
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: 'home', path: '/' },
        { title: 'about', path: '/' },
      ],
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    }
  },
}
</script>

<style lang="scss">
#footer {
  background: #232323;
  .social {
    height: 100px;
    align-items: center;
  }
}
</style>

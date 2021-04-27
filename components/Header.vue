<template>
  <div id="Header">
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      class="hidden-md-and-up overflow-hidden"
    >
      <v-list class="mobile-menu">
        <v-icon class="mobile-menu-close" @click="drawer = !drawer"
          >mdi-close</v-icon
        >
        <div>
          <v-list-item v-for="item in menu" :key="item.title" link>
            <v-list-item-content>
              <v-btn nuxt plain text :to="item.path" class="text-center">{{
                item.title
              }}</v-btn>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-container grid-list-xs>
      <v-toolbar flat>
        <div class="d-flex align-center">
          <v-img src="/logo.png" width="50" class="mr-3"></v-img>
          <a href="/" class="logo grey--text text--darken-2">Restoz</a>
        </div>
        <v-spacer></v-spacer>
        <div class="menu hidden-sm-and-down">
          <v-btn
            v-for="(item, i) in menu"
            :key="i"
            text
            plain
            nuxt
            :to="item.path"
            >{{ item.title }}</v-btn
          >
        </div>
        <v-icon class="hidden-md-and-up" @click="drawer = !drawer"
          >mdi-dots-vertical</v-icon
        >
      </v-toolbar>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { title: 'home', path: '/' },

        { title: 'about', path: '/about' },
      ],
      drawer: false,
    }
  },
}
</script>

<style lang="scss">
#Header {
  .logo {
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 25px;
  }

  .mobile-menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    &-close {
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
}
</style>

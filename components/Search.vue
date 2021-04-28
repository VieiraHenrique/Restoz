<template>
  <div id="Search">
    <v-container justify-center class="pt-10">
      <v-card class="card">
        <v-img height="250" src="/city.jpg"></v-img>
        <v-form class="searchForm pa-5" v-model="valid">
          <v-text-field
            prepend-icon="mdi-city"
            label="Enter your city"
            class="center"
            v-model="location"
            @keydown.enter="submitSearch"
            :rules="cityRules"
          ></v-text-field>

          <v-slider
            v-model="radius"
            label="Distance in Km"
            thumb-label="always"
            class="mt-5"
            min="1"
            max="10"
          ></v-slider>
          <v-range-slider
            v-model="price"
            label="Price range in €"
            thumb-label="always"
            class="mt-3"
            min="10"
            max="150"
          ></v-range-slider>
          <v-btn :disabled="!valid" color="primary mx-0" @click="submitSearch"
            >Validate</v-btn
          >
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      radius: 5,
      price: [10, 150],
      location: '',
      cityRules: [
        (v) => !!v || 'City is required',
        (v) => v.length >= 3 || 'City entry must at least 3 letters long',
      ],
    }
  },
  methods: {
    submitSearch() {
      this.$store.commit('emptyMessage')
      this.$store.commit('launchLoader')
      this.$store.dispatch('fetchRestaurants', {
        location: this.location,
        radius: this.radius * 1000,
        price: this.price,
      })
    },
  },
}
</script>

<style lang="scss">
#Search {
  background: #f0f0f0;

  .card {
    width: 100%;
  }
}
</style>

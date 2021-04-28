<template>
  <div id="Results">
    <v-container>
      <v-row>
        <v-col></v-col>
        <v-col>
          <p>{{ message }}</p>
          <div class="text-center">
            <v-progress-circular
              class="mx-auto"
              v-if="loader"
              indeterminate
              color="primary"
            ></v-progress-circular>
          </div>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
    <v-container v-if="results.length">
      <v-btn text @click="sortByRating">sort by rating</v-btn>
      <v-btn text @click="sortByPriceAsc">sort by price (asc)</v-btn>
      <v-btn text @click="sortByPriceDes">sort by price (des)</v-btn>
    </v-container>
    <v-container>
      <v-row> </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
          v-for="result in results"
          :key="result.id"
        >
          <v-card max-width="374">
            <v-img height="250" :src="result.image_url"></v-img>
            <v-card-title>{{ result.name }}</v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="result.rating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4">
                  <span class="font-weight-bold text-h6">{{
                    result.rating
                  }}</span>
                  - {{ result.review_count }} reviews
                </div>
              </v-row>

              <div class="my-4 subtitle-1">
                {{ result.price }} • {{ result.categories[0].title }}
              </div>

              <div>
                {{ result.location.address1 }} <br />
                {{ result.location.zip_code }} - {{ result.location.city }}
                <br />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    results() {
      return this.$store.state.results
    },
    message() {
      return this.$store.state.message
    },
    loader() {
      return this.$store.state.loader
    },
  },
  methods: {
    sortByRating() {
      this.$store.commit('sortByRating')
    },
    sortByPriceAsc() {
      this.$store.commit('sortByPriceAsc')
    },
    sortByPriceDes() {
      this.$store.commit('sortByPriceDes')
    },
  },
}
</script>

<style lang="scss">
#Results {
  background: #f0f0f0;
}
</style>

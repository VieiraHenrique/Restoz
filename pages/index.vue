<template>
  <div id="Home">
    <div class="header">
      <v-container>
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
    <Results/>
    <Snackbar/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async created(){

    const BEARER_TOKEN =
      'DgalvLQMnhSLnm0Ygf-ZZx-KcCpWftpUMUQmFht4sM7xPSHpebD_JoWy621A_odzxGqGS0iP7wRW5PA97RUnjZTOaceIAz_040FIwlp3FcZFPRG_5P0i3tsqgSaHYHYx'
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    }
    const proxy = 'https://still-wildwood-25508.herokuapp.com/'
    const base_url = `https://api.yelp.com/v3/businesses/search?categories=restaurants&radius=10000&location=bruxelles&limit=12`

    let res = []

    try {
      res = await axios.get(proxy + base_url, config)
      console.log(res)
    } catch {
      console.log('bad request')
    }
  }
}
</script>

<style lang="scss">
#Home {
  .header {
    height: 500px;
    background: url('/header.jpg');
  }

  .container {
    max-width: 1024px;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;

    img {
      width: 400px;
    }
  }
}
</style>

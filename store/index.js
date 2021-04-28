// STATE
export const state = () => ({
  results: [],
  message: 'Perform a search to see the results ! :P',
  displayMsg: true,
  loader: false,
})

// GETTERS
export const getters = {
  // Functions used to return values from the store. Use these when comput­ations need to be performed on the state value before they are passed to the caller. (You can also access the state directly.) arguments : (state, getters)
}

// MUTATIONS
export const mutations = {
  // Functions that commit changes to the state, and can process the values being passed before saving them. arguments : (state, payload), to call : this.store.commit('nameOfMutation', payload)
  emptyMessage(state) {
    state.message = ''
  },
  loadResults(state, results) {
    state.results = results.data.businesses
  },
  noResults(state) {
    state.message = 'No results found with this keyword'
    state.results = []
    state.loader = false
  },
  sortByRating(state) {
    state.results.sort((a, b) => {
      return a.rating > b.rating ? -1 : 1
    })
  },
  sortByPriceAsc(state) {
    state.results.sort((a, b) => {
      return a.price.length > b.price.length ? 1 : -1
    })
  },
  sortByPriceDes(state) {
    state.results.sort((a, b) => {
      if (a.price | (b.price === undefined)) {
        a.price.push('€')
        b.price.push('€')
      }
      return a.price.length > b.price.length ? -1 : 1
    })
  },
  launchLoader(state) {
    state.loader = true
  },
  closeLoader(state) {
    state.loader = false
  },
}

import axios from 'axios'
// ACTIONS
export const actions = {
  // Similar to mutations, except they commit data typically using during asynch­ronous tasks. They're optional, but you should get into the habit of using these whenever mutations are present. We can call a specific mutation after having performed async code. arguments : (context, payload), to call : this.store.dispatch('nameOfAction')
  async fetchRestaurants(
    context,
    { location: location, radius: radius, price: price }
  ) {
    const BEARER_TOKEN =
      'DgalvLQMnhSLnm0Ygf-ZZx-KcCpWftpUMUQmFht4sM7xPSHpebD_JoWy621A_odzxGqGS0iP7wRW5PA97RUnjZTOaceIAz_040FIwlp3FcZFPRG_5P0i3tsqgSaHYHYx'
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    }
    const proxy = 'https://still-wildwood-25508.herokuapp.com/'
    const base_url = `https://api.yelp.com/v3/businesses/search?categories=restaurants&radius=${radius}&location=${location}&limit=12`

    let res = []

    try {
      res = await axios.get(proxy + base_url, config)
      context.commit('loadResults', res)
      context.commit('closeLoader')
    } catch {
      console.log('bad request')
      context.commit('emptyMessage')
      context.commit('noResults')
    }
  },
}

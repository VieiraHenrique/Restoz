<template>
  <v-snackbar v-model="snackbar" :multi-line="multiLine" :timeout="timeout">
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      timeout: 7000,
      multiLine: true,
      snackbar: true,
      text: `Welcome to Restoz app. This is still work in progress. "Price range" isn't working yet and other features will be available soon`,
    }
  },
}
</script>

<style></style>

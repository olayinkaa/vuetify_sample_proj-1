<template>
  <v-app>
    <Navbar/>
    <v-content transition="slide-x-transition">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {

        Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>

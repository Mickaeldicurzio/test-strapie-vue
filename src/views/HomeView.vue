<template>
  <div class="home">
    {{countFromStore}}
    <button @click="incrementCount">j'increment</button>
    <about-view></about-view>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'
import AboutView from './AboutView.vue'

export default {
  name: 'HomeView',
  components: {
    AboutView
  },

  mounted() {
  },

  computed: {
    ...mapGetters({countFromStore: 'getCount'})
  },

  methods: {
    ...mapActions(['setCount']),
    incrementCount() {
      console.log(this.countFromStore)
      return this.setCount(this.countFromStore + 1 )
    }
  }
}
</script>

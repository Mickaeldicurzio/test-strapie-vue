<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ countFromStore }}
  </div>
</template>


<script>

import {mapGetters} from 'vuex'


export default {
  name: 'HomeView',

  mounted() {
  },

  computed: {
    ...mapGetters({countFromStore: 'getCount'})
  },
}
</script>
<template>
  <div>
      <Item :allList="allList"/>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
import Item from '../../components/Item'
export default {
  created () {
    this.$store.dispatch('getShoopList')
  },
  computed: {
    ...mapState(['allList'])
  },
  components: {
    Item
  }
}
</script>

<style>

</style>
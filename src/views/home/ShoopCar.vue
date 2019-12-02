<template>
  <div>
      <ShoopItem :carList="carList"/>
  </div>
</template>

<script>
import ShoopItem from '../../components/ShoopItem'
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['carList'])
  },
  components: {
    ShoopItem
  }
}
</script>

<style>

</style>
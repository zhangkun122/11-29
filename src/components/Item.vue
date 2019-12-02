<template>
  <div class="wrap">
      <div class="wrap-item" v-for="(item,index) in allList" :key="index">
        <img :src="item.img" alt="">
        <p>{{item.title}}</p>
        <p>原价:{{item.oldPrice?'￥'+item.oldPrice:''}}</p>
        <p>现价:{{item.newPrice}}</p>
        <button @click="addShoopcar(item.id)">+</button>
      </div>
  </div>
</template>

<script>

export default {
  props:['allList'],
  methods: {
    addShoopcar(id){
      this.$store.commit('addCarList',{id})
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .wrap-item{
    margin-bottom:75px ;
    width: 33%;
    height: 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
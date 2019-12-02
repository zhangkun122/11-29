<template>
  <div class="shoop-wrap">
      <div class="shoop-item" v-for="(item,index) in carList" :key="index">
        <img :src="item.img" alt="">
        <p>{{item.title}}</p>
        <p>现价:{{item.newPrice}}</p>
        <p>
          <button @click="delCount(index,item)">-</button>
          {{item.count}}
          <button @click="addCount(index)">+</button>
        </p>
        <p>总数:{{allCount}}</p>
        <p>总价:{{allPrice.toFixed(2)}}</p>
        
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props:['carList'],
    computed: {
      ...mapGetters(['allCount','allPrice'])
    },
    methods: {
      addCount(index){
        this.$store.commit('newAddItem',{index})
      },
      delCount(index,item){
        if(item.count==1){
          this.$store.commit('delCarList',{index})
        }else{
          this.$store.commit('newDelItem',{index})
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.shoop-wrap{
  width: 100%;
  height: 100%;
  .shoop-item{
    display: flex;
    border-bottom: 1px solid;
    img{
      width: 100px;
      height: 200px;
    }
  }
}
</style>
<template>
  <div class="home">
    <main>
      <router-view />
    </main>
    <footer>
      <router-link v-for="(item,index) in list" active-class="active" :key="index" tag="div" :to="item.path">
        <ul>
          <li :class="item.icon"></li>
          <li>{{item.title}}</li>
        </ul>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[
        {
          title:"配送到家",
          path:'sendHome',
          icon:'iconfont icon-gongjijinchaxun',
          flag:false
        },
        {
          title:"分类",
          path:'classify',
          icon:'iconfont icon-tongguowancheng',
          flag:false
        },
        {
          title:"会员",
          path:'vip',
          icon:'iconfont icon-youjian',
          flag:false
        },
        {
          title:"购物车",
          path:'shoopcar',
          icon:'iconfont icon-sousuo',
          flag:false
        },
        {
          title:"我的",
          path:'my',
          icon:'iconfont icon-personalcenter',
          flag:false
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  main{
    width: 100%;
    overflow: auto;
    flex: 1;
  }
  footer{
    width: 100%;
    height: 46px;
    display: flex;
    div{
      flex: 1;
      text-align: center;
      line-height: 23px;
      &.active{
        color: orange;
      }
    }
  }
}
</style>
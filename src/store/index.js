import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allList:[],
    carList:[]
  },
  getters:{
    allCount(state){
      return state.carList.reduce((prve,next)=>{
          return prve+next.count
      },0)
    },
    allPrice(state){
      return state.carList.reduce((prve,next)=>{
          return prve+next.count*next.newPrice
      },0)
    }
  },
  mutations: {
    changeList(state,action){
      state.allList=action.list
    },
    addCarList(state,action){
      let goodss=state.carList.find(v=>v.id===action.id)
      if(goodss){
        alert('购物车已有此件商品')
        return false
      }
        let goods=state.allList.find(v=>v.id===action.id)
        state.carList.push(goods)
        alert('已添加购物车')  
    },
    newAddItem(state,action){
      state.carList[action.index].count++
    },
    newDelItem(state,action){
      state.carList[action.index].count--
    },
    delCarList(state,action){
      state.carList.splice(action.index,1)
    }
  },
  actions: {
    getShoopList(context){
      axios.get('/getlist').then((res)=>{
        // console.log(res);
        context.commit('changeList',{list:res.data})
       
      })
    }
  },
  modules: {
  }
})

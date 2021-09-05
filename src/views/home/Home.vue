<template>
  <div id="home">
    <short-cut :short-cut-list="shortCutList"/>
    <header-bar :hot-words="hotWords" />
    <nav-bar :category="category" :nav-list="navList" />


    <footer-bar />
  </div>
</template>

<script>
import ShortCut from './childComps/ShortCut.vue'
import HeaderBar from './childComps/HeaderBar.vue'
import NavBar from './childComps/NavBar'
import FooterBar from './childComps/FooterBar.vue'

export default {
  components: { ShortCut, HeaderBar, NavBar, FooterBar },
  name:"Home",
  data() {
    return {
      shortCutList:['我的订单','我的品优购','品优购会员','企业采购','客户服务','网站导航'],
      hotWords:['优惠购首发', '亿元优惠', '9.9元团购','每满99减30','办公用品', '电脑', '通信'],
      category:[
        {details :['家用电器']},{details :['手机','数码','通信']},{details :['电脑','办公']},
        {details :['家具','家居','家装','厨具']},{details :['男装','女装','童装','内衣']},
        {details :['个户化妆','清洁用品','宠物']},{details :['鞋靴','箱包','珠宝','奢侈品']},
        {details :['运动户外','钟表']},{details :['汽车','汽车用品']},
        {details :['母婴','玩具乐器']},{details :['食品','酒类','生鲜','特产']},
        {details :['医药保健']},{details :['图书','音像','电子书']},
        {details :['彩票','旅行','充值','票务']},{details :['理财','众筹','白条','保险']},],
      navList:['服装城', '美妆馆', '传智超市', '全球购','闪购', '团购', '拍卖', '有趣']
    }
  },
}
</script>
<style scoped>

</style>
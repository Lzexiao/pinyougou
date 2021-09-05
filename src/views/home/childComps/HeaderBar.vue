<template>
<div>
  <header class="header w">
    <div class="logo" @click="itemClick">
      <h1><a href="#" title="品优购商城">品优购商城</a></h1>
    </div>
    <form action="#" method="get">
      <div class="center">
        <div class="search">
          <input type="text" name="search" placeholder="潮牌装饰">
          <button class="btn">搜索</button>
        </div>
        <div class="hotwords">
          <ul>
            <li v-for="(item,index) in hotWords" class="active"><a href="#">{{item}}</a></li>
          </ul>
        </div>
      </div>
      <div class="shop-car">
        <i class="count">{{counts}}</i>
        <em class="cart-icon"></em>
        <a>我的购物车</a>
        <em class="arrow-icon"></em>
     </div>
    </form>
    
  </header>
</div>
  
</template>

<script>
export default {
  name:"HeaderBar",
  props:{
    hotWords:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex:0,
      count:125,
    }
  },
  computed:{
    counts(){
      return this.count<100?this.count:99;
    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  height: 55px;
  background-color: #fff;
  margin-top: 27px;
}
.logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 175px;
  height: 55px;
}
.logo a{
  display: block;
  width: 175px;
  height: 55px;
  background: url(~assets/img/logo.png) no-repeat center;
  font-size: 0;
}
.shop-car {
  position: absolute;
  top: 0px;
  right: 65px;
  width: 140px;
  height: 35px;
  background-color: #f7f7f7;
  text-align: center;
  line-height: 35px;
}
.shop-car .count {
  position: absolute;
  top: -5px;
  left: 105px;
  width: 16px;
  height: 16px;
  line-height: 16px;
  background-color: var(--color-dark-bgc);
  color: #fff;
  border-radius: 7px 7px 7px 0;
}
.cart-icon::before {
  content: '\e93a';
  padding-right: 15px;
  color: #de6b6b;
  font-size: 15px;
  font-family: 'icomoon';
}

.arrow-icon::after {
  content: '\e920';
  padding-left: 15px;
  color: #c4c4c4;
  font-family: 'icomoon';
}
.center {
  position: absolute;
  top:0;
  left: 50%;
  margin-left: -267.5px;
  width: 535px;
  height: 34px;
}
.center .search {
  width: 535px;
  height: 34px;
}
.center .search input {
  display: block;
  float: left;
  width: 442px;
  height: 32px;
  color: #666;
  padding-left: 10px;
  border: 1px solid var(--color-dark-bgc);
}
.btn {
  float: right;
  width: 81px;
  height: 34px;
  border: 0;
  background-color: var(--color-dark-bgc);
  color: #fff;
}

.hotwords ul li:nth-child(n-1){
  float: left;
}

.hotwords ul li:nth-child(n){
  padding-left: 25px;
}
.hotwords ul li a {
  display: block;
}
.active:hover {
  color: var(--color-hight-bgc);
  cursor: pointer;
}
</style>
<template>
  <nav class="nav">
    <div class="w">
      <div class="drop-down">
        <div class="dt">
          全部商品分类
        </div>
        <div class="dd">
          <ul>
            <li class="out-li" v-for="(item,index) in category" :key="index">
              <ul>
                <li class="inner-li" v-for="(item2,index2) in item.details" :key="index2"><a href="#">{{item2}}&nbsp;&nbsp;</a></li>
              </ul>
              <i class="arrow-icon"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav-item">
        <ul>
          <li v-for="item in navList"><a href="#">{{item}}</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name:"NavBar",
  props:{
    category:{
      type:Array,
      default(){
        return []
      }
    },
    navList:{
      type:Array,
      rdefault(){return []},
    }
  },
}
</script>
<style scoped>
.nav {
  height: 46px;
  margin-top: 24px;
  border-bottom: 2px solid var(--color-dark-bgc);
}
.drop-down {
  float: left;
  width: 209px;
  height: 46px;
  background-color: var(--color-dark-bgc);

}
.drop-down .dt {

  line-height: 46px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;;
  color: #fff;
}
.drop-down .dd {
  display: none;
  width: 209px;
  height: 494px;
  background-color: var(--color-hight-bgc);
}

.dd .out-li {
  position: relative;
  width: 100%;
  height: 31px;
  margin-left: 2px;
  margin-top: 2px;
  padding-left: 15px;
}
.dd .out-li .inner-li {
  float: left;
  margin-top: 2px;
}

.dd .out-li .inner-li a {
  color: #fff;
  font-size: 15px;
}
.dd .out-li:hover {
  background-color: #fff;
}

.dd .out-li:hover .inner-li a{
  color:var(--color-dark-bgc);
}

.arrow-icon::after {
  position: absolute;
  top: 5px;
  right: 20px;
  content: '\e920';
  color: #fff;
  font-size: 16px;
  font-family: 'icomoon';
}

.nav-item {
  float:left;
  height: 45.6px;
  width: 991px;
}
.nav-item ul li {
  float: left;
  height: 45.6px;
  color: #666;
  line-height: 45.6px;
  padding: 0 25px;
  font-size: 18px;
}

</style>
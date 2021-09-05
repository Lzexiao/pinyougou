<template>
  <div class="short-cut">
    <section>
      <div class="w">
        <div class="left">
          <ul>
            <li>品优购欢迎您!&nbsp;</li>
            <li><a href="#">&nbsp;请登录&nbsp;</a><a href="#" class="reg-red">&nbsp;免费注册</a></li>
          </ul>
        </div>
        <div class="right">
          <ul>
              <li v-for="(item,index) in shortCutList">
                <a>{{item}}&nbsp;&nbsp;</a>
                <em class="arrow-icon"></em>&nbsp;
                <em :class="{active: (index === shortCutList.length-1)}">|</em>
              </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name:"ShortCut",
  props:{
    shortCutList:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
.short-cut {
  height: 31px;
  background-color: #f1f1f1;
  line-height: 31px;
  font-size: 12px;
}
/* .w {
  width: 1200px;
  margin: 0 auto;
} */
.left {
  float: left;
}
.right {
  float: right;
}
.short-cut ul li{
  float: left;
}
.reg-red {
  color: var(--color-dark-bgc);
}
.right ul {
  height: 31px;
}
.right ul li {
  padding-left: 10px;
  padding-right: 10px;
}
.right ul li a{
  display: inline-block;
}
.active{
  display: none;
}

.arrow-icon::after {
  content: '\e91e';
  font-family: 'icomoon';
}


</style>
<template>
  <div>
    <footer class="footer">
      <div class="w">
        <div class="mod-service">
          <ul>
            <li>
              <h5></h5>
              <div class="service-text"><h4>正品保障</h4><p>正品保障，提供发票</p></div>
            </li>
            <li>
              <h5></h5>
              <div><h4>极速物流</h4><p>急速物流，急速送达</p></div>
            </li>
            <li>
              <h5></h5>
              <div><h4>无忧售后</h4><p>7天无理由退换货</p></div>
            </li>
            <li>
              <h5></h5>
              <div><h4>特色服务</h4><p>私人定制家电套餐</p></div>
            </li>
            
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name:"FooterBar"
}
</script>

<style scoped>
.footer {
  height: 415px;
  background-color: #f5f5f5;
  padding-top: 30px;
}
.mod-service {
  height: 80px;
  background-color: aqua;
  border-bottom: 1px solid #ccc;
}
.mod-service ul li {
  float: left;
  height: 50px;
  width: 300px;
  padding-left: 35px;
  box-sizing: border-box;
}
.mod-service ul li h5 {
  float: left;
  height: 50px;
  width: 50px;
  background-color: aquamarine;
}
.service-text h4{
  font-size: 14px;
}
.service-text p {
  font-size: 12px;
}
</style>
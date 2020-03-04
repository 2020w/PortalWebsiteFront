<template>
<div>
  <div class="preloader">
    <div class="preloader-img">
      <img src="./assets/img/loading-bars.svg" width="100" alt="Loading icon" />
    </div>
  </div>
    <!-- Navigation -->
  <nav class="navbar-default navbar-shrink" data-wow-delay="2s">
      <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header page-scroll">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="index.html">Smash</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">主页 <span class="caret"></span></a>
                      <ul class="dropdown-menu" role="menu">
                          <li><a href="#about-us" class="page-scroll">关于我们</a></li>
                          <li><a href="#team" class="page-scroll">团队</a></li>
                          <li><a href="#style" class="page-scroll">风采</a></li>
                          <li><a href="#services" class="page-scroll">服务</a></li>
                          <li><a href="#contact" class="page-scroll">联系我们</a></li>
                      </ul>
                  </li>
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">产品 <span class="caret"></span></a>
                      <ul class="dropdown-menu" role="menu">
                          <li><a href="#">产品方案</a></li>
                          <li><a href="#">产品介绍</a></li>
                      </ul>
                  </li>
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">技术 <span class="caret"></span></a>
                      <ul class="dropdown-menu" role="menu">
                          <li><a href="#">技术介绍</a></li>
                          <li><a href="#">资源</a></li>
                      </ul>
                  </li>
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">其他 <span class="caret"></span></a>
                      <ul class="dropdown-menu" role="menu">
                          <li><a href="404.html">404</a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
  </nav>

  <router-view></router-view>
</div>
</template>
<script>

</script>
<style scoped>
nav{
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9)!important;
  position: absolute;
  z-index: 100;
  color: white;
}
</style>

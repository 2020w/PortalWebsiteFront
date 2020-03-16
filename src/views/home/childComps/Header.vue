<template>
  <div>
    <header id="headerwrap" class="fullheight">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in wow bounceInDown" data-wow-delay="0.5s">
            We Can Help You
            <span class="wodry">Create|Design|Profit</span>
          </div>
          <div class="intro-heading wow bounceInUp" data-wow-delay="1s">
            SMASHCO
            <span class="thin">N.Y.C.</span>
          </div>
          <a
            href="#about-us"
            class="page-scroll btn btn-xl btn-negative wow bounceInDown"
            data-wow-delay="2s"
          >
            Tell Me More
            <i class="fa fa-angle-down fa-2x"></i>
          </a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import url from 'url';

export default {
  data(){
    return {
      bgs: [
        url.resolve(this.$http.defaults.baseURL, 'images/bg/bg1.jpg'),
        url.resolve(this.$http.defaults.baseURL, 'images/bg/bg2.jpg'),
        url.resolve(this.$http.defaults.baseURL, 'images/bg/bg3.jpg')
      ]
    };
  },
  mounted(){
    jQuery('#headerwrap').backstretch(this.bgs, { duration: 8000, fade: 500 });
  }
};
</script>

<style>

</style>

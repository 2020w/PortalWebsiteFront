<template>
  <div>
    <!-- Header Section -->
    <bc-header></bc-header>

    <!-- About Section -->
    <bc-about></bc-about>

    <!-- Team Section -->
    <bc-team></bc-team>

    <!-- Service Section -->
    <bc-service></bc-service>

    <!-- Style Section -->
    <bc-style></bc-style>

    <!-- Contact Section -->
    <bc-contact></bc-contact>

    <!-- Footer Section-->
    <bc-footer></bc-footer>
  </div>
</template>

<script>
// 导入组件
import Header from './bussiness/home/Header';
import About from './bussiness/home/About';
import Team from './bussiness/home/Team';
import Style from './bussiness/home/Style';
import Service from './bussiness/home/Service';
import Contact from './bussiness/home/Contact';
import Footer from './bussiness/home/Footer';

export default {
  components: {
    'bc-header': Header,
    'bc-about': About,
    'bc-team': Team,
    'bc-style': Style,
    'bc-service': Service,
    'bc-contact': Contact,
    'bc-footer': Footer
  }
};
</script>

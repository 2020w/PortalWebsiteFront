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
import Header from './childComps/Header';
import About from './childComps/About';
import Team from './childComps/Team';
import Style from './childComps/Style';
import Service from './childComps/Service';
import Contact from './childComps/Contact';
import Footer from './childComps/Footer';

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

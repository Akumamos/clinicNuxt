<template>
  <h1 class="red">{{ title }}!</h1>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'


export default {
  components: {
    AppLogo
  },
  asyncData (context) {
    // called every time before loading the component
    return {
      title: 'Contactos'
    }
  },
  fetch () {
    // The `fetch` method is used to fill the store before rendering the page
  },
  head () {
    return {
     title: this.title,
     meta: [
       { hid: 'contact', name: 'Contactos', content: 'Descrição Contactos' }
     ]
   }
    // Set Meta Tags for this Page
  },
  mounted() {
    //do something after mounting vue instance
    $(".tile-progress .tile-header").matchHeight();
    var footerHeight = jQuery("#footer-wrapper").outerHeight();
    jQuery("#content-wrapper").css("margin-bottom", footerHeight);

    var windowsHeight = jQuery(window).height();
    var navHeight = jQuery("navbar-fixed-top").outerHeight();
    var newHeight = windowsHeight + 30;

    jQuery("#main-slider").css("height", newHeight + "px");
    jQuery("#single-page-slider").css("min-height", windowsHeight / 3 + "px")
  }
}
</script>

<style>
.red {
  color: red;
}
</style>

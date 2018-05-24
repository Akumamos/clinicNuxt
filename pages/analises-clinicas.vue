<template>
  <div>
    <section id="single-page-slider" class="no-margin">
        <div class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="item active">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="center gap fade-down section-heading">
                                    <h2 class="main-title text-white">{{title}}</h2>
                                    <hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--/.item-->
            </div><!--/.carousel-inner-->
        </div><!--/.carousel-->
    </section><!--/#main-slider-->


    <div id="content-wrapper">
      <section id="aclinics" class="white">
        <div class="container">
            <div class="gap"></div>

            <div class="row">
                <div class="aclinics-section col-md-12 fade-up" v-html="aclinicsItem.description">
                </div>
            </div>

          </div>
      </section>



        </div>

  </div>

</template>

<script>
import { db } from '~/plugins/firebase.js'

export default {
  data () {
     return {
       aclinicsItem: {},
       title: 'Análises Clínicas'
      }
   },
  async asyncData (context) {
      let examsanalysis = {};
      await db.collection("analysis").get().then((querySnapshot) => {
          querySnapshot.docs.map(doc => {
              examsanalysis = doc.data();

          })
       })

    return { aclinicsItem: examsanalysis }
 },
  head () {
    return {
     title: 'Análises Clínicas - Clínica Médica Dos Álamos Lda',
     meta: [
       { hid: 'description', name: 'description', content: 'Análises Clínicas - Clínica Médica Dos Álamos Lda, possui um posto de recolha de análises clínicas, em parceria com os Laboratórios do Professor Germano de Sousa' },
       { hid: 'og:title', property: 'og:title', content: 'http://clinalamo.pt/analises-clinicas/' },
       { hid: 'og:description', property: 'og:description', content: 'Análises Clínicas - Clínica Médica Dos Álamos Lda, possui um posto de recolha de análises clínicas, em parceria com os Laboratórios do Professor Germano de Sousa' },
       { hid: 'og:site_name', property: 'og:site_name', content: 'www.clinalamo.pt/analises-clinicas/' },
       { hid: 'og:canonical_url', property: 'og:canonical_url', content:'http://clinalamo.pt/analises-clinicas/'}
     ],     
     link: [
       { rel: 'canonical', href:'http://clinalamo.pt/analises-clinicas/' }
     ]
   }
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

   $("#main-slider .carousel-content").flexVerticalCenter({
     cssAttribute: "padding-top",
     verticalOffset: '160px'
   });

   if (
     $(document).height() - $(window).height() - $(window).scrollTop() <
     1000
   ) {
     $("#footer-wrapper").css("z-index", "4");
   } else {
     $("#footer-wrapper").css("z-index", "1");
   }
 }
}
</script>

<style>
.fa-info-circle{

}
.red {
  color: red;
}
</style>

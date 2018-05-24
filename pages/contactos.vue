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
                                    <h2 class="main-title text-white">Contactos</h2>
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

        <section id="contact" class="white">
            <div class="container">
              <div class="row">
                    <div class="col-md-6">
                  <div id="mapwrapper" class="shadow">
                      <div id="map"></div>
                  </div>
                </div>
                <div class="col-md-6 fade-up">
                    <h3 >Informação</h3>
                    <button id="submit-email" style="display:none"> click</button>
                    <hr>
                        <span class="fa fa-home" style="margin-right: 10px;"></span>
                                            <span>Rua António José Couvinha, Lote 16 - R/C Esq.º
                                                        Urbanização dos Álamos<br/>
                                                        7005-296 Évora<br/>
                                                        Portugal
                                              </span><br/>
                        <span class="fa fa-phone" style="margin-right: 10px;"></span><span>266 745 990</span><br/>
                        <span class="fa fa-fax" style="margin-right: 10px;"></span><span>266 745 999</span><br/>
                        <span class="fa fa-mobile" style="margin-right: 10px;"></span><span>926 649 111</span><br/>
                        <span class="fa fa-envelope" style="margin-right: 10px;"></span><span>clinalamo@gmail.com</span><br/>
                        <span class="fa fa-facebook" style="margin-right: 10px;"></span> <a href="https://www.facebook.com/clinalamo.lda" target="_blank">Clinálamo</a> <br/>
                </div><!-- col -->
              </div>


                <div class="gap"></div>
            </div>
        </section>
    </div>

  </div>
 </template>

<script>

export default {
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

   $("#mapwrapper").gMap({
       controls: false,
       scrollwheel: true,
       markers: [{
           latitude:38.5744943,
           longitude: -7.8958701,
       html: "<strong>Clinálamo - Clínica Médica dos Álamos, Lda.</strong>",
       popup: true,
       icon: { image: require("assets/marker-logo.png"),
           iconsize: [54,54],
           iconanchor: [43,43],
           infowindowanchor: [0, 0] } }],
       icon: {
           image: "images/marker-logo.png",
           iconsize: [54, 54],
           iconanchor: [46, 46],
           infowindowanchor: [0, 0] },
       latitude:38.5744943,
       longitude: -7.8958701,
       zoom: 17 });

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
 },
  head () {
    return {
     title: 'Contactos - Clínica Médica Dos Álamos Lda',
     meta: [
       { hid: 'description', name: 'description', content: 'Contactos - Clínica Médica Dos Álamos Lda, caso tenho alguma dúvida não hesite em contactar nos através do 266 745 990 ou 926 649 111. Venha visitar nos em Évora ou faça uma marcação online' },
       { hid: 'og:title', property: 'og:title', content: 'http://clinalamo.pt/contactos/' },
       { hid: 'og:description', property: 'og:description', content: 'Contactos - Clínica Médica Dos Álamos Lda. Venha visitar nos ou faça uma marcação online' },
       { hid: 'og:site_name', property: 'og:site_name', content: 'www.clinalamo.pt/contactos/' },
       { hid: 'og:canonical_url', property: 'og:canonical_url', content:'http://clinalamo.pt/contactos/'}
     ],
     link: [
       { rel: 'canonical', href:'http://clinalamo.pt/contactos/' }
     ]
   }
  }
}
</script>

<style>

</style>

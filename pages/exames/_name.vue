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
                                    <h2 class="main-title text-white">{{exams_details.name}}</h2>
                                    <hr>
                                      <p>EXAMES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--/.item-->
            </div><!--/.carousel-inner-->
        </div><!--/.carousel-->
    </section><!--/#main-slider-->

    <div id="content-wrapper">
      <section id="item-content" class="white" style="padding-top: 0">
        <div class="container">
            <div class="gap"></div>
            <div class="row">
              <div class="exams-info col-md-12">
                <div class="col-md-6 exams-container">
                  <div class="exams-item col-md-12" v-for="(exam, index) in exams_details.exams" :key="exam.id" v-on:click="fetchDescription(exam.id, index)">
                    <div class="center team-member">
                      <div class="team-content" :class="{ active: exam.id === types_selected.id}">
                        <i class="fa fa-info-circle" aria-hidden="true"></i>
                        <h5 style="overflow: hidden;">
                          {{exam.name}}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 exams-description">
                  <div class= "animated">
                    <h3 class="upperCase">
                    {{types_selected.name}}
                    </h3>
                  <hr/>
                    <div v-html="types_selected.description"></div>
                  </div>
                </div>
              </div>
            </div>
            </div>


      </section>
    </div>

  </div>
</template>

<script>
import { db } from '~/plugins/firebase.js'

function capitalizeEachWord(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default {
  data () {
    return {
      exams_details: {},
      types_selected: {},
      types_name: '',
      exams_canonical_url: '',
      infoSelected: true,
      doctorsSelected: false
     }
   },
  async asyncData({ params, error }) {
    let name = params.name.split('-ou-').length > 1 ? params.name.split('-ou-').join(' / ') : params.name.split("-").join(" ");
    let exams = {};
    let names_list = [];

     await db.collection("exams_types").where("name", "==", capitalizeEachWord(name)).get().then((querySnapshot) => {
         querySnapshot.docs.map(doc => {
           exams = doc.data();
           exams.id = doc.id;

           exams.exams.forEach(function (value, key) {
             names_list.push(value.name);
            });

         });
      });

      return {
        exams_details: exams,
        types_selected: exams.exams[0],
        types_name: names_list.toString(),
        exames_canonical_url: params.name
       }
  },
  head () {
    return {
     title: this.exams_details.name + ' - Clínica Médica Dos Álamos Lda',
     meta: [
       { hid: 'description', name: 'description', content: 'Exame ' + this.exams_details.name + '. Tipos de Exame: ' + this.types_name + '. Venha visitar nos em Évora, faça a sua marcação através do 266 745 990 ou 926 649 111 ou online.' },
       { hid: 'og:title', property: 'og:title', content: 'http://clinalamo.pt/exames/' + this.exames_canonical_url+'/' },
       { hid: 'og:description', property: 'og:description', content: 'Estética ' + this.exams_details.name + '. Tipos de Exame: ' + this.types_name + '. Venha visitar nos em Évora, faça a sua marcação através do 266 745 990 ou 926 649 111 ou online.' },
       { hid: 'og:site_name', property: 'og:site_name', content: 'www.clinalamo.pt/exames/'+ this.exames_canonical_url+'/' },
       { hid: 'og:canonical_url', property: 'og:canonical_url', content:'http://clinalamo.pt/exames/' + this.exames_canonical_url+'/'}
     ],
     link: [
       { rel: 'canonical', href: 'http://clinalamo.pt/exames/' + this.exames_canonical_url+'/' }
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
 },
 methods: {
   fetchDescription(id, i) {
     this.types_selected = i ? this.exams_details.exams[i] : this.exams_details.exams[0];
   },
   toggleClassInfo(type){
     this.infoSelected = type === 'info';
     this.contentSelected = !this.infoSelected;
   }
 }
}
</script>

<style scoped>
.team-content.active {
    border-bottom: 4px solid #00b29e;
}

h3{
  font-size: 22px;
  font-weight: 300;
  color: #555;
  line-height: 30px;
}

.team-content {
  position:relative;
  box-shadow: 1px 3px 5px 0px #808080ad;
  height: 100%;
}

.team-content.active{
  border-bottom: 4px solid #00b29e;
}

.fa-info-circle{
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 20px;
  color: #32c5d5;
}

.exams-item{
  margin-bottom:25px;
  cursor:pointer;
}

.team-member{
  height: 100%;
}

</style>

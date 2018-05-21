<!--"<div id='" +
item.id +
"'' class='exams-item col-md-12' style='margin-bottom:25px; cursor:pointer;'>" +
"<div class='center' style='height: 100%'>" +
"<div class='team-content fade-up' style='position:relative; box-shadow: 1px 3px 5px 0px #808080ad; height: 100%;'>" +
"<i class='fa fa-info-circle' aria-hidden='true' style='position: absolute; top: 5px; right: 10px; font-size: 20px; color: #32c5d5;'></i>" +
"<h5 style='overflow: hidden;'>" +
item.name +
"</h5>" +
"</div>" +
"</div>" +
"</div>"; -->

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
      infoSelected: true,
      contentSelected: false
     }
   },
  async asyncData({ params, error }) {
    let name = params.name.split('-ou-').length > 1 ? params.name.split('-ou-').join(' / ') : params.name.split("-").join(" ");
    let exams = {};

     await db.collection("exams_types").where("name", "==", capitalizeEachWord(name)).get().then((querySnapshot) => {
         querySnapshot.docs.map(doc => {
           exams = doc.data();
           exams.id = doc.id;
         });
      });

      return {
        exams_details: exams,
        types_selected: exams.exams[0]
       }
  },
  head () {
    return {
     title: this.exams_details.name + ' - Clínica Médica Dos Álamos Lda',
     meta: [
       { hid: 'description', name: 'description', content: this.exams_details.name }
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

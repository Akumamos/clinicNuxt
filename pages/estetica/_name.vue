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
                                    <h2 class="main-title text-white">{{specialities_details.name}}</h2>
                                    <hr>
                                    <p class="schedule-spec">{{specialities_details.schedule}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--/.item-->
            </div><!--/.carousel-inner-->
        </div><!--/.carousel-->
    </section><!--/#main-slider-->

    <div id="content-wrapper">
      <section id="item-content" class="white">
        <div class="container">
            <div class="gap"></div>

            <div class="row">
              <div class="tabs col-md-12 fade-up" id="doctors-tag">
                <div class="tab-2 col-md-6">
                <label class="center tabs-controller tab-info upperCase"  :class="{active: infoSelected}" v-on:click="toggleClassInfo('info')" for="tab2-1">
                  Informação
                </label>
                <input id="tab2-1" name="tabs-two" type="radio" checked="checked">
                <div class="info-description col-md-12">
                  <div class="col-md-6 specialities-img">
                    <img :src="specialities_details.media[0].url" class='img-responsive img-blog shadow' style='margin-bottom: 20px;'/>
                  </div>
                  <div class="col-md-6 description" v-html="specialities_details.description">
                  </div>
                </div>
                </div>

                <div class="tab-2 col-md-6">
                <label class="center tabs-controller tab-doctors upperCase" for="tab2-2" :class="{active: doctorsSelected}" v-on:click="toggleClassInfo('doctor')">
                  Médicos
                </label>
                <input id="tab2-2" name="tabs-two" type="radio">
                <div class="doctors-info col-md-12">
                  <div class="col-md-6 doctors-container">
                      <div class="doctors-item col-md-12" v-for="(doctors, index) in specialities_details.doctors" :key="doctors.id" v-on:click="fetchDescription(doctors.id, index)">
                        <div class="center team-member">
                          <div class="team-content" :class="{ active: doctors.id === doctors_selected.id}">
                            <i class="fa fa-info-circle" aria-hidden="true"></i>
                            <h5 style="overflow: hidden;">
                              {{doctors.name}}
                            </h5>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div  class="col-md-6 doctors-description">
                    <div class= "animated">
                      <h3 class="upperCase">
                      {{doctors_selected.name}}
                      </h3>
                    <hr/>
                      <div v-html="doctors_selected.description"></div>
                    </div>
                  </div>
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
      specialities_details: {},
      title: 'Especialidades',
      doctors_selected: {},
      infoSelected: true,
      doctorsSelected: false
     }
   },
  async asyncData({ params, error }) {
    let name = params.name.split('-ou-').length > 1 ? params.name.split('-ou-').join(' / ') : params.name.split("-").join(" ");
    let specialities = {};

     await db.collection("specialities").where("name", "==", capitalizeEachWord(name)).get().then((querySnapshot) => {
         querySnapshot.docs.map(doc => {
           specialities = doc.data();
           specialities.id = doc.id;
         });
      });

      return {
        specialities_details: specialities,
        doctors_selected: specialities.doctors[0]
       }
  },
  head () {
    return {
     title: this.specialities_details.name + ' - Clínica Médica Dos Álamos Lda',
     meta: [
       { hid: 'description', name: 'description', content: this.specialities_details.description }
     ]
   }
 },
 methods: {
   fetchDescription(id, i) {
     this.doctors_selected = i ? this.specialities_details.doctors[i] : this.specialities_details.doctors[0];
   },
   toggleClassInfo(type){
     this.infoSelected = type === 'info';
     this.doctorsSelected = !this.infoSelected;
   }
 }
}
</script>

<style scoped>

.team-content {
  position:relative;
  box-shadow: 1px 3px 5px 0px #808080ad;
  height: 100%;
}

h3{
  font-size: 22px;
  font-weight: 300;
  color: #555;
  line-height: 30px;
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

.doctors-item{
  margin-bottom:25px;
  cursor:pointer;
}

.team-member{
  height: 100%;
}

</style>

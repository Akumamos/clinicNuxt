<template>
  <div>
  <section id="main-slider">
      <div class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
              <div class="item active">
                  <div class="container">
                      <div class="row">
                          <div class="col-sm-12">
                              <div class="carousel-content center centered">
                                  <h2 class="boxed animation animated-item-1">Bem vindo à Clinalamo</h2>
                                  <br>
                                  <a class="btn btn-md animation" href="#about-us">Sobre Nós</a>
                                  <br>
                                  <a class="btn btn-md animation" href="#" data-toggle="modal" data-target="#myModalHorizontal">Marcações Online</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div><!--/.item-->
          </div><!--/.carousel-inner-->
      </div><!--/.carousel-->
  </section><!--/#main-slider-->


  <div id="content-wrapper">

    <section id="about-us" class="white">
      <div class="container">
          <div class="gap"></div>
          <div class="row">
              <div class="col-md-12">
                  <div class="center gap section-heading">
                      <h2 class="main-title">Sobre Nós</h2>
                      <hr>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-12 fade-up about-description" v-html="details.description">
              </div>
          </div>
          <div class="row">
                <div class="col-md-4 col-xs-12">
                    <div class="tile-progress center tile-cyan">
                        <div class="tile-header">
                            <h3 class="upperCase">Marcações Online</h3>
                        </div>
                        <div class="tile-footer">
                            <h4>
                                <span class="onlineAppointments pct-counter text-white counter">{{details.online_appointments}}</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <div class="tile-progress center tile-cyan">
                        <div class="tile-header">
                            <h3 class="upperCase">Médicos</h3>
                        </div>
                        <div class="tile-footer">
                            <h4>
                                <span class="doctorsCount text-white pct-counter counter">{{details.doctors}}</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <div class="tile-progress center tile-cyan center bounce-in">
                        <div class="tile-header">
                            <h3 class="upperCase">Especialidades</h3>
                        </div>
                        <div class="tile-footer">
                            <h4>
                                <span class="specialitiesCount text-white pct-countercounter">{{details.specialities}}</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div><!--/.row-->
        </div>
    </section>


          <section id="testimonial-carousel" class="divider-section">
          <div class="gap"></div>
            <div class="container">
                <div class="row">
                    <div class="center gap fade-down section-heading">
                          <h2 class="main-title">O que dizem sobre nós</h2>
                          <hr>
                          <div class="gap"></div>
                      </div>
                    <div class='col-md-offset-2 col-md-8 fade-up'>
                        <div class="carousel slide" data-ride="carousel" id="quote-carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#quote-carousel" data-slide-to="0" class="active"></li>
                                <li data-target="#quote-carousel" data-slide-to="1"></li>
                                <li data-target="#quote-carousel" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="item active">
                                    <blockquote>
                                        <div class="row">
                                            <div class="col-sm-9">
                                                <p>Atendimento simpático muito próximo do centro histórico com uma boa variedade de especialistas e acordos.</p>
                                                <small>José Eduardo</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                <div class="item">
                                    <blockquote>
                                        <div class="row">
                                            <div class="col-sm-9">
                                                <p>Excelência na qualidade e no atendimento.</p>
                                                <small>Amilcar Custódio</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                <div class="item">
                                   <blockquote>
                                       <div class="row">
                                           <div class="col-sm-9">
                                               <p>Bons profissionais e sempre dispostos a ajudar.</p>
                                               <small>Ricardo Santos</small>
                                           </div>
                                       </div>
                                   </blockquote>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gap"></div>
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
      details: {}
     }
   },
  async asyncData({ params, error }) {
    let item = {},
        specialitiesItem = {},
        doctorsItem = {};


    let about =  await db.collection("aboutUs").get().then((querySnapshot) => {
         querySnapshot.docs.map(doc => {
           item = doc.data();
         });

         return item;
      });

    let specialitiesSize =  await db.collection("specialities").get().then((querySnapshot) => {
          return querySnapshot.size;
        });

    let doctorsSize =  await db.collection("doctors").get().then((querySnapshot) => {
          return querySnapshot.size;
        });


      return Promise.all([about, specialitiesSize, doctorsSize]).then(values => {
         return {
           details: {
             description: values[0].description,
             online_appointments:24,
             specialities: values[1],
             doctors: values[2]

           }
          }
       });


  },
  head () {
    return {
    title: 'Clinálamo - Clínica Médica Dos Álamos Lda'
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

<style>

</style>

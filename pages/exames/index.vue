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
      <section id="about-us" class="white">

        <div id="search-wrapper">
            <div class="container">
                <input id="search-box" placeholder="Pesquisar por Estética ou Médico">
            </div>
        </div>
        <div class="gap"></div>

          <div class="container">
            <ul>
              <li class="specialities-item col-md-3" style="margin-bottom:25px; cursor:pointer; height: 120px" v-for="elem in examsRows" :key="elem.id">
                <nuxt-link :to="'/exames/'+elem.url ">
                  <div class="center team-member" style="height: 100%">
                      <i class='fa fa-info-circle' aria-hidden='true' style='position: absolute; top: 10px; right: 10px; font-size: 20px; color: #32c5d5;'></i>
                      <div class="team-content" style="position:relative; box-shadow: 1px 3px 5px 0px #808080ad; height: 100%;"><i class="fa fa-info-circle" aria-hidden="true" style="position: absolute; top: 10px; right: 10px; font-size: 20px; color: #32c5d5;"></i>
                          <h5 style="overflow: hidden;">{{elem.name}}</h5>
                          <p></p>
                          <h5 v-for="item in elem.exams" :key="item.id">
                            <small class="role muted">{{item.name}}</small>
                          </h5>
                          <p></p>
                      </div>
                  </div>
                </nuxt-link>
              </li>
            </ul>
            <div class="gap"></div>
            <div class="gap"></div>
          </div>
      </section>
  </div>

  </div>

</template>

<script>
import { db } from '~/plugins/firebase.js'

function transformLink(name){
  return name.split('/').length > 1 ? name.replace(/ /g,"").split('/').join("-ou-") : name.split(" ").join("-");
}

export default {
  data () {
     return {
       examsRows: [],
       examsTypes: '',
       title: 'Exames por Especialidade'
      }
   },
  async asyncData (context) {
      let items = [],
          types = '';

      await db.collection("exams_types").orderBy("name").get().then((querySnapshot) => {
          querySnapshot.docs.map(doc => {
              let exams = doc.data(),
                  id = doc.id,
                  url = transformLink(doc.data().name);

              //id set
              exams.id = id;
              exams.url = url.toLowerCase();
              types += doc.data().name.toString() + ', ';

              items.push(exams);

          })

          console.log('items', items);
       })

       return {
         examsRows: items,
         examsTypes: types.slice(0, -2)
        }
  },
  head () {
    return {
     title: 'Exames - Clínica Médica Dos Álamos Lda',
     meta: [
       { hid: 'description', name: 'description', content: 'Na Clinálamo dispomos de vários exames: ' + this.examsTypes + '. Pode marcar um exame através do nosso contacto 266 745 990/926 649 111 ou marcação online' },
       { hid: 'og:title', property: 'og:title', content: 'http://clinalamo.pt/exames' },
       { hid: 'og:description', property: 'og:description', content: 'Na Clinálamo dispomos de vários exames: ' + this.examsTypes + '. Pode marcar um exame através do nosso contacto 266 745 990/926 649 111 ou marcação online' },
       { hid: 'og:image', property: 'og:image', content: 'http://clinalamo.pt/images/logo-smartTv.png' },
       { hid: 'og:site_name', property: 'og:site_name', content: 'www.clinalamo.pt/exames' },
       { hid: 'og:canonical_url', property: 'og:canonical_url', content:'http://clinalamo.pt/exames'}
     ]
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

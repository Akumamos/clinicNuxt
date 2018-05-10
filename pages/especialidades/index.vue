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
                <input id="search-box" placeholder="Pesquisar por Tipo de Exame">
            </div>
        </div>
        <div class="gap"></div>

          <div class="container">
            <ul>
              <li class="specialities-item col-md-3" style="margin-bottom:25px; cursor:pointer; height: 120px" v-for="elem in specialitiesRows" :key="elem.id">
                <nuxt-link to="/about">
                  <div class="center team-member" style="height: 100%">
                      <div class="team-content " style="position:relative; box-shadow: 1px 3px 5px 0px #808080ad; height: 100%;"><i class="fa fa-info-circle" aria-hidden="true" style="position: absolute; top: 10px; right: 10px; font-size: 20px; color: #32c5d5;"></i>
                          <h5 style="overflow: hidden;">{{elem.name}}</h5>
                          <p></p>
                          <h5 v-for="item in elem.doctors" :key="item.id">
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

function transformLink(test){
  console.log('transform', test );
}

export default {
  data () {
     return {
       specialitiesRows: [],
       title: 'Especialidades'
      }
   },
   asyncData (context) {
     let items = [];
     db.collection("specialities").get().then((querySnapshot) => {
        querySnapshot.docs.map(doc => {
         let specialities = doc.data(),
             id = doc.id;
            transformLink(id);
         //id set
         specialities.id = id;
         items.push(specialities);
        })
     })

     return { specialitiesRows: items }
   },
  fetch () {
    /*return db.collection("specialities").get().then((querySnapshot) => {
       querySnapshot.docs.map(doc => {
        let name = doc.data().name;
        return { specialitiesRowsObj : doc.data() }
        //console.log('fecth', doc.data(), this.specialitiesRows, this.title);
       })
    })*/
    // The `fetch` method is used to fill the store before rendering the page
  },
  head () {
    return {
     title: 'Especialidades',
     meta: [
       { hid: 'specialites', name: 'Especialidades Descrição', content: 'My custom description' }
     ]
   }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>

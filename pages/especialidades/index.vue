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
                <input id="search-box" placeholder="Pesquisar por Especialidade ou Médico">
            </div>
        </div>
        <div class="gap"></div>

          <div class="container">
            <ul>
              <li class="specialities-item col-md-3" v-for="elem in specialitiesRows" :key="elem.id">
                <nuxt-link :to="'/especialidades/'+elem.url ">
                  <div class="center team-member">
                      <div class="team-content " >
                        <i class="fa fa-info-circle" aria-hidden="true"></i>
                          <h5 style="overflow: hidden;">{{elem.name}}</h5>
                          <p></p>
                          <h5 v-for="item in elem.doctors" :key="item.id">
                            <small class="role muted">{{ item.name }}</small>
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
       specialitiesRows: [],
       title: 'Especialidades'
      }
   },
  async asyncData (context) {
     let items = [];
    await db.collection("specialities").orderBy("name").get().then((querySnapshot) => {
        querySnapshot.docs.map(doc => {
          if( doc.data().name !== 'Análises Clínicas' && ( doc.data().section === "Especialidades" || doc.data().section === 'Ambas')){
            let specialities = doc.data(),
                id = doc.id,
                url = transformLink(doc.data().name);

            //id set
            specialities.id = id;
            specialities.url = url.toLowerCase();

            specialities.doctors.forEach(function (doctor) {
              doctor.name = doctor.name.toString().replace(/,/g, "<br/>");
            });

            items.push(specialities);
          }
        })
     })

     return { specialitiesRows: items }
 },
  head () {
    return {
     title: 'Especialidades - Clínica Médica Dos Álamos Lda',
     meta: [
       { hid: 'description', name: 'description', content: 'My custom especialidades description' },

     ]
   }
  }
}
</script>

<style scoped>
.fa-info-circle{
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: #32c5d5;
}

li {
  list-style: none;
}

ul {
  width: 100%;
}

.team-content{
  position:relative;
  padding: 10px;
  box-shadow: 1px 3px 5px 0px #808080ad;
  min-height: 130px;
}

.team-member {
  min-height: 130px;
}

.specialities-item.col-md-3{
  margin-bottom:25px;
  cursor:pointer;
  min-height: 130px;
}
</style>

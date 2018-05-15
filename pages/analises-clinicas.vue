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
      console.log('asyncData');
      await db.collection("analysis").get().then((querySnapshot) => {
          querySnapshot.docs.map(doc => {
              console.log('Doc', doc.data());
              examsanalysis = doc.data();

          })
       })

    return { aclinicsItem: examsanalysis }
 },
  head () {
    return {
     title: 'Análises Clínicas - Clínica Médica Dos Álamos Lda',
     meta: [
       { hid: 'aclinics', name: 'Análises Descrição', content: 'My custom Análises description' }
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

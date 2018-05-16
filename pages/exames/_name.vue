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
  <div class="user">

    <h3 > {{ exams_details.name }}</h3>
    <p><nuxt-link to="/exames">Voltar à lista</nuxt-link></p>
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
      exams_details: {}
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

      return {  exams_details: exams }
  },
  head () {
    return {
     title: this.exams_details.name + ' - Clínica Médica Dos Álamos Lda',
     meta: [
       { hid: 'description', name: 'description', content: this.exams_details.name }
     ]
   }
  }
}
</script>

<style scoped>
.user {
  text-align: center;
  margin-top: 200px;
  font-family: sans-serif;
}
</style>

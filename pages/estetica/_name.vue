<template>
  <div class="user">
    <h3 > {{ specialities_details.name }}</h3>
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
      stetics_details: {}
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

      return {  specialities_details: specialities }
  },
  head () {
    return {
     title: this.specialities_details.name + ' - Clínica Médica Dos Álamos Lda',
     meta: [
       { hid: this.specialities_details.id, name: this.specialities_details.name, content: this.specialities_details.description }
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

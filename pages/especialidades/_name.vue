<template>
  <div class="user">
    <h3 > teste  - >{{ specialities_details.name }} - {{name}}</h3>
    <p><nuxt-link to="/especialidades">Voltar à lista</nuxt-link></p>
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
  /*validate({ params }) {
    return !isNaN(+params.name)
  },*/
  data () {
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client'),
      specialities_details: {},
      title: 'Especialidades'
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
  /*async fetch ({ params, error }){
    let name = params.name.split('-ou-').length > 1 ? params.name.split('-ou-').join(' / ') : params.name.split("-").join(" ");
    let specialities = {};

     await db.collection("specialities").where("name", "==", capitalizeEachWord(name)).get().then((querySnapshot) => {
         querySnapshot.docs.map(doc => {
           specialities = doc.data();
           specialities.id = doc.id;
         });
      });

      return { specialities_details : specialities }
  },*/
  async mounted() {
    console.log("params:", process, this.$route.params); // Works here
    //do something after mounting vue instance
    if( process.static){
      let name = this.$route.params.split('-ou-').length > 1 ? this.$route.params.split('-ou-').join(' / ') : this.$route.params.split("-").join(" ");
      let specialities = {};

      await db.collection("specialities").where("name", "==", capitalizeEachWord(name)).get().then((querySnapshot) => {
          querySnapshot.docs.map(doc => {
            specialities = doc.data();
            specialities.id = doc.id;
          });
       });

       return {  specialities_details: specialities }
    }

  },
  head () {
    return {
     title: this.specialities_details.name + ' | Clinálamo',
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

<template>
  <h1 class="red">{{ title }}!</h1>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'


export default {
  components: {
    AppLogo
  },
  asyncData (context) {
    // called every time before loading the component
    return {
      title: 'Contactos'
    }
  },
  fetch () {
    // The `fetch` method is used to fill the store before rendering the page
  },
  head () {
    return {
     title: this.title,
     meta: [
       { hid: 'contact', name: 'Contactos', content: 'Descrição Contactos' }
     ]
   }
    // Set Meta Tags for this Page
  },
}
</script>

<style>
.red {
  color: red;
}
</style>

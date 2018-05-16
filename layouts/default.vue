<template>
  <div>
      <header class="navbar navbar-inverse navbar-fixed-top" role="banner">
          <div class="">
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span class="sr-only">Toggle navigation</span>
                      <i class="fa fa-bars"></i>
                  </button>
                   <a class="navbar-brand" href="/">
                     <img class="logo-default" src="~/assets/logo-comp.png" width="250" alt="logo">
                   </a>
              </div>
              <div class="collapse navbar-collapse">
                  <ul class="nav navbar-nav navbar-right" itemtype="http://www.schema.org/SiteNavigationElement">
                      <li><nuxt-link class="nav-item" to="/">Início</nuxt-link></li>
                      <li itemprop="name"><a itemprop="url" href="#" data-toggle="modal" data-target="#myModalHorizontal">Marcações Online</a></li>
                      <li><nuxt-link class="nav-item" to="/especialidades/">Especialidades</nuxt-link></li>
                      <li><nuxt-link class="nav-item" to="/exames/">Exames</nuxt-link></li>
                      <li><nuxt-link class="nav-item" to="/analises-clinicas/">Análises Clínicas</nuxt-link></li>
                      <li><nuxt-link class="nav-item" to="/estetica/">Estética</nuxt-link></li>
                      <li><nuxt-link class="nav-item" to="/contactos/">Contactos</nuxt-link></li>
                  </ul>
              </div>
          </div>
      </header><!--/header-->
    <nuxt/>
  </div>
</template>

<style>

</style>

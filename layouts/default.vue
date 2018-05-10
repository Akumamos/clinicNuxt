<template>
  <div>
    <!--  <nav class="navbar navbar-expand-lg fixed-top bg-light">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">
            <img class="logo-default" src="~/assets/logo-comp.png" width="250" alt="logo">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="nav navbar-nav navbar-right" itemtype="http://www.schema.org/SiteNavigationElement">
              <nuxt-link to="/">Início</nuxt-link>
              <li itemprop="name"><a itemprop="url" href="#" data-toggle="modal" data-target="#myModalHorizontal">Marcações Online</a></li>
              <nuxt-link to="/specialities">Especialidades</nuxt-link>
              <li itemprop="name"><a itemprop="url" href="/especialidades">Especialidades</a></li>
              <li itemprop="name"><a itemprop="url" href="/exames">Exames</a></li>
              <li itemprop="name"><a itemprop="url" href="/analises-clinicas">Análises Clínicas</a></li>
              <li itemprop="name"><a itemprop="url" href="/estetica">Estética</a></li>
              <li itemprop="name"><a itemprop="url" href="/contactos">Contactos</a></li>
          </ul>
        </div>
      </nav> -->
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
                      <nuxt-link class="nav-item" to="/">Início</nuxt-link>
                      <li itemprop="name"><a itemprop="url" href="#" data-toggle="modal" data-target="#myModalHorizontal">Marcações Online</a></li>
                      <nuxt-link to="/especialidades">Especialidades</nuxt-link>
                      <li itemprop="name"><a itemprop="url" href="/exames">Exames</a></li>
                      <li itemprop="name"><a itemprop="url" href="/analises-clinicas">Análises Clínicas</a></li>
                      <li itemprop="name"><a itemprop="url" href="/estetica">Estética</a></li>
                      <li itemprop="name"><a itemprop="url" href="/contactos">Contactos</a></li>
                  </ul>
              </div>
          </div>
      </header><!--/header-->

      <!--  <div class="">
            <div class="navbar-header">
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <i class="fa fa-bars"></i>
                </button>
                 <a class="navbar-brand" href="/">
                   <img class="logo-default" src="~/assets/logo-comp.png" width="250" alt="logo">
                 </a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right" itemtype="http://www.schema.org/SiteNavigationElement">
                    <nuxt-link to="/">Início</nuxt-link>
                    <li itemprop="name"><a itemprop="url" href="#" data-toggle="modal" data-target="#myModalHorizontal">Marcações Online</a></li>
                    <nuxt-link to="/specialities">Especialidades</nuxt-link>
                    <li itemprop="name"><a itemprop="url" href="/especialidades">Especialidades</a></li>
                    <li itemprop="name"><a itemprop="url" href="/exames">Exames</a></li>
                    <li itemprop="name"><a itemprop="url" href="/analises-clinicas">Análises Clínicas</a></li>
                    <li itemprop="name"><a itemprop="url" href="/estetica">Estética</a></li>
                    <li itemprop="name"><a itemprop="url" href="/contactos">Contactos</a></li>
                </ul>
            </div>
        </div>/header-->
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

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

          <div class="container">

            <p>Todas as suas informações pessoais recolhidas, serão usadas para o ajudar a tornar a sua visita no nosso site o mais produtiva e agradável possível.</p>
            <p>A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para a Clinálamo - Clínica Médica Dos Álamos Lda.</p>
            <div class="gap"></div>

            <h2>Recolha e Tratamento de Dados</h2>
            <p>Todas as informações pessoais relativas a membros, assinantes, clientes ou visitantes que usem este site serão tratadas em
              concordância com a Lei da Proteção de Dados Pessoais de 26 de Maio de 2018.</p>
            <p>Os dados pessoais recolhidos podem incluir o seu nome, e-mail, número de telefone e/ou telemóvel.
              Este dados, serão tratados e armazenados informaticamente pela Clinálamo - Clínica Médica Dos Álamos Lda. ou pelas entidades por este subcontratadas e
              destinam-se a dar resposta aos seus pedidos de marcação de consultas</p>
            <p>Os dados pessoais recolhidos serão conservados de forma a permitir a sua identificação apenas durante o período necessário para a prossecução das finalidades de recolha ou do tratamento posterior, findo o qual os mesmos serão eliminados.</p>
            <div class="gap"></div>

            <h2>Direitos do Utilizador</h2>
            <p>Nos termos previstos na lei, é garantido ao Utilizador, a todo o tempo, o direito de acesso,
              atualização e retificação dos seus dados pessoais, bem como o direito de eliminação ou limitação do seu tratamento,
              a portabilidade dos seus dados e opor-se ao tratamento dos mesmos, verificadas as condições legalmente previstas. </p>
            <p>Poderá exercer estes direitos mediante pedido escrito dirigido a Clinálamo - Clínica Médica Dos Álamos Lda., para Rua António José Couvinha, Lote 16 - R/C Esq.º Urbanização dos Álamos
7005-296 Évora ou para clinalamo@gmail.com</p>
            <div class="gap"></div>

            <h2>Partilha de Dados</h2>

            <p>A Clinálamo - Clínica Médica Dos Álamos Lda. poderá comunicar os seus dados pessoais quando:</p>
              <ul>
                <li>A comunicação seja levada a cabo para proteger interesses vitais dos utilizadores ou qualquer outra finalidade legítima prevista na lei.</li>
              </ul>

            <div class="gap"></div>

            <h2>Alterações à Política de Privacidade</h2>
            <p>O uso do site pressupõe a aceitação deste Acordo de privacidade. A equipa da Clinálamo - Clínica Médica Dos Álamos Lda reserva-se ao direito de alterar
              este acordo sem aviso prévio. Deste modo, recomendamos que consulte a nossa política de privacidade com regularidade de forma a estar sempre atualizado.</p>
              <div class="gap"></div>

            <h2>Os Cookies e Web Beacons</h2>
            <p>Utilizamos cookies para armazenar informação, tais como as suas preferências pessoas quando visita o nosso website.
              Isto poderá incluir um simples popup, ou uma ligação em vários serviços que providenciamos, tais como fóruns.</p>
            <p>Você detém o poder de desligar os seus cookies, nas opções do seu browser.Se a configuração de privacidade do seu browser estiver definida como “Alta”,
              não conseguirá aceder a algumas das funcionalidades e poderá ser impedido de utilizar em pleno todas as funcionalidades dos nossos websites ou aplicações.
               Para solucionar esta questão, adicione o nosso endereço de Internet à lista de websites permitidos nas configurações de privacidade do seu browser.</p>
               <div class="gap"></div>

            <h2>Ligações a Sites de terceiros</h2>
            <p>A Clinálamo - Clínica Médica Dos Álamos Lda. possui ligações para outros sites, os quais, a nosso ver, podem conter informações / ferramentas úteis para os nossos visitantes. A nossa política de privacidade não é aplicada a sites de terceiros, pelo que, caso visite outro site a partir do nosso deverá ler a politica de privacidade do mesmo.</p>
            <p>Não nos responsabilizamos pela política de privacidade ou conteúdo presente nesses mesmos sites.</p>
            <div class="gap"></div>

            <h2>Medidas de Segurança</h2>

            <p>A Clinálamo - Clínica Médica Dos Álamos Lda. desenvolve os seus melhores esforços para proteger os dados pessoais dos Utilizadores
              contra acessos não autorizados através da Internet. Para o efeito utilizam sistemas de segurança, regras e outros procedimentos,
              de modo a garantir a proteção dos dados pessoais, bem como para prevenir o acesso não autorizado aos dados, o uso impróprio, a sua divulgação,
              perda ou destruição.</p>

            <div class="gap"></div>
            <div class="gap"></div>
          </div>
      </section>
  </div>

  </div>

</template>




<script>
export default {
    data () {
       return {
         title: 'Política de Privacidade',
     }
   },
   head () {
     return {
      title: 'Política de Privacidade - Clínica Médica Dos Álamos Lda',
      meta: [
        { hid: 'description', name: 'description', content: 'Política de Privacidade - Clínica Médica Dos Álamos Lda' },
        { hid: 'og:title', property: 'og:title', content: 'http://clinalamo.pt/politica-de-privacidade/' },
        { hid: 'og:description', property: 'og:description', content: 'Política de Privacidade - Clínica Médica Dos Álamos Lda' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'www.clinalamo.pt/politica-de-privacidade/' },
        { hid: 'og:canonical_url', property: 'og:canonical_url', content:'http://clinalamo.pt/politica-de-privacidade/'}
      ],
      link: [
        { rel: 'canonical', href:'http://clinalamo.pt/politica-de-privacidade/' }
      ]
    }
  }
}
</script>

<style scoped>

</style>

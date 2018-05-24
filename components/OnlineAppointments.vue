<template lang="html">
  <div class="modal fade" id="myModalHorizontal" tabindex="-1" role="dialog"
       aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
          <div class="modal-content">
              <!-- Modal Header -->
              <div class="modal-header">
                  <button type="button" class="close"
                     data-dismiss="modal">
                         <span aria-hidden="true">&times;</span>
                         <span class="sr-only">Close</span>
                  </button>
                  <h3 class="modal-title" id="myModalLabel"  style="text-transform:uppercase">
                      Marcar Consultas e Exames
                  </h3>
                  <p>Preencha o formulário com os seus dados, envie e aguarde o nosso contacto. </p>
                  <p style="color: gray; font-style: italic;">* Campos Obrigatórios </p>
              </div>

              <!-- Modal Body -->
              <div class="modal-body">
               <div class="row">
                   <div class="">
                    <form role="form" action="" method="post" class="f1">

                      <div class="f1-steps">
                        <div class="f1-progress">
                            <div class="f1-progress-line" data-now-value="16.66" data-number-of-steps="3" style="width: 16.66%;"></div>
                        </div>
                        <div class="f1-step active">
                          <div class="f1-step-icon"><i class="fa fa-calendar"></i></div>
                          <p>Marcação</p>
                        </div>
                        <div class="f1-step">
                          <div class="f1-step-icon"><i class="fa fa-user"></i></div>
                          <p>Dados Pessais</p>
                        </div>
                          <div class="f1-step">
                          <div class="f1-step-icon"><i class="fa fa-check"></i></div>
                          <p>Confirmação</p>
                        </div>
                      </div>
                    <fieldset>
                        <h4 style="font-style:italic">Tipo de Marcação</h4>
                        <hr style="margin-top:0" />

                            <div class="form-grup" style="margin-top: 25px; margin-bottom: 20px;">
                              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-secondary active">
                                  <input type="radio" name="apoint-choice" id="consults-choice" value="consults" autocomplete="off" checked> Consultas
                                </label>
                                <label class="btn btn-secondary">
                                  <input type="radio" name="apoint-choice" id="exams-choice" value="exams" autocomplete="off"> Exames
                                </label>
                              </div>
                            </div>

                            <div class="form-group consult-selected">
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="specialities-select">Especialidade*</label>
                                  <select class="form-control" id="specialities-select">
                                    <option id="null">Selecione uma Especialidade</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                  <label for="exampleFormControlSelect1">Médico/a*</label>
                                  <select class="form-control" id="doctors-select" disabled>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div class="form-group exams-selected" style="display: none">
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="exams-type">Tipo de Exame*</label>
                                  <select class="form-control" id="exams-type">
                                  <option id="null">Selecione um Tipo de Exame</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                  <label for="exams">Exame*</label>
                                  <select class="form-control" id="exams">
                                  </select>
                                </div>
                              </div>
                            </div>

                            <h4 style="font-style:italic">Data e Hora</h4>
                            <hr style="margin-top:0" />
                            <div class="form-group">
                              <div class="row">
                                <div class="col-md-6">
                                    <h4>Data*</h4>
                                    <div id="date-appointment"></div>
                                </div>

                                <div class="col-md-6">
                                      <h4>Horas*</h4>
                                    <div class="list-group hour">
                                      <a href="#" class="list-group-item list-group-item-action">8h às 10h</a>
                                      <a href="#" class="list-group-item list-group-item-action">10h às 12h</a>
                                      <a href="#" class="list-group-item list-group-item-action">12h às 14h</a>
                                      <a href="#" class="list-group-item list-group-item-action">16h às 18h</a>
                                      <a href="#" class="list-group-item list-group-item-action">18h às 20h</a>
                                    </div>
                                </div>
                              </div>
                            </div>
                            <div class="f1-buttons">
                                <button type="button" class="btn btn-next step-1">Seguinte</button>
                            </div>
                        </fieldset>

                        <fieldset>
                            <h4 style="font-style:italic">Dados Pessoais</h4>
                            <hr style="margin-top:0" />

                            <div class="form-group row">
                              <div class="form-group col-md-12">
                                  <label for="name">Nome e Apelido*</label>
                                  <input type="text" name="f1-facebook" placeholder="Nome Completo" class="f1-facebook form-control" id="name">
                              </div>
                              <div class="form-group col-md-6">
                                <label for="email">Email*</label>
                                  <input type="text" name="f1-twitter" placeholder="Email" class="f1-twitter form-control" id="email">
                              </div>
                              <div class="form-group col-md-6">
                                <label for="phone">Telefone*</label>
                                  <input type="text" name="f1-twitter" placeholder="Telefone" class="f1-twitter form-control" id="phone">
                              </div>
                            <!--  <div class="form-group col-md-6">
                                  <label for="name">Data de Nascimento*</label>
                                  <div class="input-group date">
                                    <input type="text" class="form-control" placeholder="DD/MM/AAAA"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                                  </div>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="phone">Localidade*</label>
                                  <input type="text" name="f1-twitter" placeholder="Localidade" class="f1-twitter form-control" id="local">
                              </div>
                              <div class="form-group col-md-6">
                                <label for="gender">Sexo*</label>
                                <div class="">
                                  <label class="radio-inline">
                                    <input type="radio" name="gender" value="Masculino"> Masculino
                                  </label>
                                  <label class="radio-inline">
                                    <input type="radio" name="gender" value="Feminino"> Feminino
                                  </label>
                                </div>
                              </div> -->
                            </div>
                            <div class="form-group row">
                              <div class="form-group col-md-12">
                                <label for="name">Observações</label>
                                <textarea class="f1-twitter form-control" rows="5" id="observations"></textarea>
                              </div>
                            </div>

                            <div class="f1-buttons">
                                <button type="button" class="btn btn-previous">Anterior</button>
                                <button type="button" class="btn btn-next step-2">Seguinte</button>
                            </div>
                        </fieldset>

                        <fieldset>
                            <h4 style="font-style:italic">Confirmar Marcação</h4>
                            <hr style="margin-top:0" />

                            <div class="form-group row">
                              <div class="form-group col-md-12">
                                  <label for="name">Nome e Apelido:</label>
                                  <span id="client-name"></span>
                              </div>
                              <div class="form-group col-md-4">
                                  <label for="name">Email:</label>
                                  <span id="client-email"></span>
                              </div>
                              <div class="form-group col-md-4">
                                  <label for="name">Telefone:</label>
                                  <span id="client-phone"></span>
                              </div>
                            <!--  <div class="form-group col-md-4">
                                  <label for="name">Data de Nascimento:</label>
                                  <span id="client-birth-day"></span>
                              </div>
                              <div class="form-group col-md-4">
                                  <label for="name">Sexo:</label>
                                  <span id="client-gender"></span>
                              </div> -->
                              <div class="form-group col-md-4">
                                  <label for="name">Data:</label>
                                  <span id="client-date"></span>
                                  <br>
                                  <label for="name">Hora:</label>
                                  <span id="client-time"></span>
                              </div>
                              <div class="form-group col-md-4">
                                  <label id="appoint-type-confirmation" for="name"></label>
                                  <span id="appoint-type-confirmation-name"></span>
                              </div>
                              <div class="form-group col-md-4">
                                  <label id="appoint-confirmation"></label>
                                  <span id="appoint-confirmation-name"></span>
                              </div>
                              <!--<div class="form-group col-md-4">
                                  <label for="name">Localidade:</label>
                                  <span id="client-local"></span>
                              </div> -->
                              <div class="form-group col-md-12">
                                  <label for="name">Observações:</label>
                                  <span id="client-observations"></span>
                              </div>
                            </div>
                            <div class="form-group row">
                              <div class="form-group col-md-12">
                                <div class="checkbox">
                                  <label class="agreement-lbl"><input type="checkbox" class="agreement" value="">Tomei conhecimento e aceito os termos legais. *</label>
                                </div>
                              </div>
                              <div class="form-group col-md-12">
                              <h4 style="font-style:italic">CONDIÇÕES E TERMOS LEGAIS *</h4>
                              <hr style="margin-top:0" />

                                  <p>A recolha dos dados tem por finalidade o agendamento do pedido aqui solicitado.
                                  Os dados recolhidos no presente formulário são de fornecimento obrigatório e serão processados e armazenados informaticamente.</p>
                              </div>
                            </div>
                            <div class="f1-buttons">
                                <button type="button" class="btn btn-previous">Anterior</button>
                                <button type="submit" class="btn btn-submit step-3">Confirmar</button>
                            </div>
                        </fieldset>

                      </form>
                   </div>

                 </div>

              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase.js'
import moment from 'moment';

export default {
 mounted() {
   //do something after mounting vue instance

   var ref = db,
     type,
     apointment = {
       name: null,
       email: null,
       phone: null,
       type_appointment: null,
       type_appointment_name: null,
       date_hour: null,
       hour: null,
       date: null,
       observations: null
     };

   function isEmail(email) {
     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     return regex.test(email);
   }

   function scroll_to_class(element_class, removed_height) {
     var scroll_to = $(element_class).offset().top - removed_height;
     if ($(window).scrollTop() != scroll_to) {
       $("html, body")
         .stop()
         .animate({ scrollTop: scroll_to }, 0);
     }
   }

   function bar_progress(progress_line_object, direction) {
     var number_of_steps = progress_line_object.data("number-of-steps");
     var now_value = progress_line_object.data("now-value");
     var new_value = 0;
     if (direction == "right") {
       new_value = now_value + 100 / number_of_steps;
     } else if (direction == "left") {
       new_value = now_value - 100 / number_of_steps;
     }
     progress_line_object
       .attr("style", "width: " + new_value + "%;")
       .data("now-value", new_value);
   }

   function getSpecialities() {
     //get specialities
     ref
       .collection("specialities")
       .orderBy("name")
       .onSnapshot(function(querySnapshot) {
           querySnapshot.docs.map(function(change) {
             var id = change.id,
               record = change.data(),
               selectItem = '<option id="' + id + '">' + record.name + "</option>";

             $(selectItem).appendTo("#specialities-select");
         });
       });
   }

   function getExamsTypes() {
     ref
       .collection("exams_types")
       .orderBy("name")
       .onSnapshot(function(querySnapshot) {
           querySnapshot.docs.map(function(change) {
             var id = change.id,
               record = change.data(),
               selectItem = '<option id="' + id + '">' + record.name + "</option>";

             $(selectItem).appendTo("#exams-type");
           });

       });
   }

   function loadData() {
     getSpecialities();
     getExamsTypes();
   }

     //init
     loadData();

     $("#date-appointment").datepicker({
       maxViewMode: 2,
       todayBtn: "linked",
       language: "pt",
       daysOfWeekDisabled: "0,6",
       //daysOfWeekHighlighted: "1,2,3,4,5",
       todayHighlight: true
     });

     $(".input-group.date").datepicker({
       //maxViewMode: 2,
       language: "pt"
     });

     $("input[name=apoint-choice]").change(function() {
       type = this.value;

       if (type === "consults") {
         //show specialities and doctors
         $(".consult-selected").fadeIn();
         $(".exams-selected").hide();
       } else if (type === "exams") {
         //show types and exams
         $(".consult-selected").hide();
         $(".exams-selected").fadeIn();
       }
     });

     $("#specialities-select").change(function() {
       var id = $(this)
         .find("option:selected")
         .attr("id");

       //clean select
       $("#doctors-select").empty();
       $("#doctors-select").prop("disabled", true);

       if (id !== "null") {
         ref
           .collection("specialities")
           .doc(id)
           .get()
           .then(function(doc) {
             setTimeout(function() {
               var id = doc.id,
                 records = doc.data().doctors,
                 selectItem = "";

               $.each(records, function(i, doctor) {
                 selectItem =
                   '<option id="' + doctor.id + '">' + doctor.name + "</option>";
                 $(selectItem).appendTo("#doctors-select");
               });

               if (records.length > 0) {
                 $("#doctors-select").prop("disabled", false);
               } else {
                 selectItem = "<option>Sem Médico</option>";
                 $(selectItem).appendTo("#doctors-select");
               }
             });
           });
       }
     });

     $("#exams-type").change(function() {
       var id = $(this)
         .find("option:selected")
         .attr("id");

       //clean select
       $("#exams").empty();
       $("#exams").prop("disabled", true);

       if (id !== "null") {
         ref
           .collection("exams_types")
           .doc(id)
           .get()
           .then(function(doc) {
             setTimeout(function() {
               var id = doc.id,
                 records = doc.data().exams,
                 selectItem = "";

               $.each(records, function(i, exam) {
                 selectItem =
                   '<option id="' + exam.id + '">' + exam.name + "</option>";
                 $(selectItem).appendTo("#exams");
               });

               if (records.length > 0) {
                 $("#exams").prop("disabled", false);
               } else {
                 selectItem = "<option>Sem Exame</option>";
                 $(selectItem).appendTo("#exams");
               }
             });
           });
       }
     });

     $(".hour > a").on("click", function(e) {
       e.preventDefault();
       $(this)
         .siblings("a")
         .removeClass("active");
       $(this).addClass("active");
     });

     $(".hour > a").on("click", function() {
       $(this)
         .siblings("a")
         .removeClass("active");
       $(this).addClass("active");
     });

     $(".f1 fieldset:first").fadeIn("slow");

     // next step
     $(".f1 .btn-next").on("click", function() {
       var parent_fieldset = $(this).parents("fieldset");
       var next_step = true;
       // navigation steps / progress steps
       var current_active_step = $(this)
           .parents(".f1")
           .find(".f1-step.active"),
         current_active_step_validation = $(this),
         progress_line = $(this)
           .parents(".f1")
           .find(".f1-progress-line");

       // fields validation
       if (current_active_step_validation.hasClass("step-1")) {
         var date = $("#date-appointment").datepicker("getDate");
         var $queryHour = $(".hour > a.active"),
             hour = $queryHour.length > 0 ? $queryHour[0].innerHTML : null;
         parent_fieldset
           .find("#specialities-select, #exams-types")
           .each(function() {
             var idSpecialities = $("#specialities-select")
                 .find("option:selected")
                 .attr("id"),
               idExams = $("#exams-types")
                 .find("option:selected")
                 .attr("id"),
               idMedics = $("#doctors-select")
                 .find("option:selected")
                 .attr("id"),
               idExamsType = $("#exams-type")
                 .find("option:selected")
                 .attr("id");

            var type = $("input[name=apoint-choice]:checked").val();

             if (type === "consults") {
               if (idSpecialities === "null") {
                 next_step = false;
                 $(this).addClass("input-error");
               } else if (idSpecialities !== "null" && idMedics === "null") {
                 next_step = false;
                 $(this).addClass("input-error");
               } else {
                 $(this).removeClass("input-error");
               }
             }

             if (type === "exams") {
               if (idExams === "null") {
                 next_step = false;
                 $(this).addClass("input-error");
               } else if (idExams !== "null" && idExamsType === "null") {
                 next_step = false;
                 $(this).addClass("input-error");
               } else {
                 $(this).removeClass("input-error");
               }
             }

             if (!date) {
               next_step = false;
             }

             if (!hour) {
               next_step = false;
             }

             if (next_step) {
               apointment.type_appointment = $(
                 type === "consults" ? "#specialities-select" : "#exams-type"
               ).val();
               apointment.type_appointment_name = $(
                 type === "consults" ? "#doctors-select" : "#exams"
               ).val();
               apointment.date = moment(date).format("DD/MM/YYYY");
               apointment.hour = hour;
             }
           });
       }

       if (current_active_step_validation.hasClass("step-2")) {
         var name = $("#name").val(),
           phone = $("#phone").val(),
           email = $("#email").val(),
           observations = $("#observations").val();

         parent_fieldset.find('input[type="text"]').each(function() {
           if ($(this).val() == "") {
             $(this).addClass("input-error");
             next_step = false;
           } else {
             $(this).removeClass("input-error");
           }
         });

         $('input[type="text"]').on("focus", function() {
           if ($(this).val() !== "") {
             $(this).removeClass("input-error");
           }
         });

         $('input[type="text"]').on("change", function() {
           if ($(this).val() !== "") {
             $(this).removeClass("input-error");
           }
         });

         if (name && phone && email) {
           apointment.name = name;
           apointment.email = email;
           apointment.phone = phone;
           apointment.observations = observations || "Sem Observações";

           if (!isEmail(email)) {
             $("#email").focus();
             $("#email").attr("placeholder", "Email preenchido incorrectamente!");
             $("#email").addClass("input-error");
             next_step = false;
           }

           if (next_step) {
             $("#client-name").text(apointment.name);
             $("#client-email").text(apointment.email);
             $("#client-phone").text(apointment.phone);
             $("#client-date").text(apointment.date);
             $("#client-time").text(apointment.hour);
             $("#appoint-type-confirmation").text(
               type === "consults" ? "Especialidade:" : "Tipo de Exame:"
             );
             $("#appoint-type-confirmation-name").text(
               apointment.type_appointment
             );
             $("#appoint-confirmation").text(
               type === "consults" ? "Médico/a:" : "Exame:"
             );
             $("#appoint-confirmation-name").text(
               apointment.type_appointment_name
             );
             $("#client-observations").text(apointment.observations);
           }
         } else {
           next_step = false;
         }
       }

       if (current_active_step_validation.hasClass("step-3")) {
         //save to firebase
       }

       if (next_step) {
         parent_fieldset.fadeOut(400, function() {
           // change icons
           current_active_step
             .removeClass("active")
             .addClass("activated")
             .next()
             .addClass("active");
           // progress bar
           bar_progress(progress_line, "right");
           // show next step
           $(this)
             .next()
             .fadeIn();
           // scroll window to beginning of the form
           scroll_to_class($(".f1"), 20);
         });
       }
     });

     // previous step
     $(".f1 .btn-previous").on("click", function() {
       // navigation steps / progress steps
       var current_active_step = $(this)
         .parents(".f1")
         .find(".f1-step.active");
       var progress_line = $(this)
         .parents(".f1")
         .find(".f1-progress-line");

       $(this)
         .parents("fieldset")
         .fadeOut(400, function() {
           // change icons
           current_active_step
             .removeClass("active")
             .prev()
             .removeClass("activated")
             .addClass("active");
           // progress bar
           bar_progress(progress_line, "left");
           // show previous step
           $(this)
             .prev()
             .fadeIn();
           // scroll window to beginning of the form
           scroll_to_class($(".f1"), 20);
         });
     });

     // submit
     $(".f1").on("submit", function(e) {
       e.preventDefault();

       // fields validation
       if($('.agreement').is(":checked")){
         $('.agreement-lbl').removeClass('red');
         ref
           .collection("onlineAppointments")
           .add({
             name: apointment.name,
             email: apointment.email,
             phone: apointment.phone,
             type_appointment: apointment.type_appointment,
             type_appointment_name: apointment.type_appointment_name,
             hour: apointment.hour,
             date: apointment.date,
             observations: apointment.observations,
             created_at: new Date()
           })
           .then(function(docRef) {
             var postForm = {
               name: apointment.name,
               email: apointment.email,
               phone: apointment.phone,
               type_appointment: apointment.type_appointment,
               type_appointment_name: apointment.type_appointment_name,
               hour: apointment.hour,
               date: apointment.date,
               observations: apointment.observations
             };

             //$.post("/sendemail.php", postForm).done(function(data) {});

             $("#myModalHorizontal").modal("hide");

             var span = document.createElement("div");
             span.innerHTML = "<span>Será contactado(a) brevemente para confirmar a data e hora da sua consulta/exame.</span><br><br><span>Irá receber um e-mail com os detalhes da sua consulta/exame.</span><br><br><span>Em caso de dúvida, não hesite em contatar-nos atráves do <strong>266 745 990 ou 926 649 111</strong> ou por e-mail <strong>clinalamo@gmail.com</strong> das  10h às 20h (dias úteis)</span>";

              swal("Pedido enviado com sucesso!",
                {
                content: {
                  element: span
                }
              });
           })
           .catch(function(error) {
             console.error("Error adding document: ", error);
           });
       }else{
          $('.agreement-lbl').addClass('red');
       }


     });

 }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 99999999999999;
}

.spinner {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;

  -webkit-animation: sk-rotate 2.0s infinite linear;
  animation: sk-rotate 2.0s infinite linear;
}

.red{
  color: red;
}

.dot1, .dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #333;
  border-radius: 100%;

  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
@keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>

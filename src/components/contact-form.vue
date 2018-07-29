<template>
  <div id="contact-form" class="component-content">

    <div class="container">
      <div class="col-md-11 col-sm-12 col-centered ">
        <h2>Besoin de renseignements ?</h2> <br/>

        <div class="row">
          <div class="col-lg-9 col-md-7 col-sm-12" style="width: 100%">
            <form id="contact_form" v-on:submit.prevent="submitForm" action="" v-show="!formSubmitted">
              <div class="form-group">
                <label>Nom : </label>
                <b-form-input v-model="name" class="form-control" name="name" type="text" required/>
              </div>
              <div class="form-group">
                <label>Addresse E-mail : </label>
                <b-form-input v-model="email" class="form-control" name="email" type="email"
                              required/>
              </div>

              <div class="form-group">
                <label>Numéro de téléphone <i>(optionnel)</i> : </label>
                <b-form-input v-model="phoneNumber" class="form-control" name="phone" type="tel" maxlength="15"/>

              </div>

              <label>Message
                <small>(<span>{{ message.length }}</span> / <span>{{ maxLength }}</span>)</small>
                :
              </label>
              <div class="form-group">
                <b-form-textarea v-model="message" class="form-control" name="message" type="text"
                                 :rows="4" required maxlength="500"/>
              </div>
              <button type="submit" class="btn btn-primary">Envoyer</button>

            </form>
            <div v-show="formSubmitted" class="confirmation-message">
              <div v-show="messageFailed" class="alert alert-danger">
                Le message n'a pas pu être envoyé.
              </div>
              <div v-show="!messageFailed" class="alert alert-success">
                Message envoyé avec succès !
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-5 col-sm-12">
            <div>
              <div class="box" style="padding-top: 25px">
                <img src="../assets/phone.svg" class="icon">
                <h6><p id=" icon-txt"><Strong><br/>0497 31 80 99</Strong></p></h6>
              </div>
            </div>
            <div class="box">
              <img src="../assets/house.svg" class="icon">
              <p class="icon-txt">Angélique Duchêne<br/> Rue Planesse 9<br/>5660 Couvin
              </p>
            </div>
            <div class="box">
              <a href="https://www.facebook.com/LUCKYzSTYLE/" target="_blank">
                <img class="icon" src="../assets/facebook.svg">
                <p class="icon-txt">Suivez-moi sur Facebook</p></a>
            </div>
          </div>

        </div>
      </div>
      <br/>
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ4e94Z4r4wUcRA5oRFLikn1g&key=AIzaSyBm6Wydfk6iDdBsVPDZA2-zC3aTbYjiCEk"
        width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>


</template>
<script>
  import * as console from "debug";
  import icons from 'glyphicons';
  export default {
    name: 'contact-form',
    data () {
      return {
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
        maxLength: 500,
        formSubmitted: false,
        messageFailed: false

      }
    },
    methods: {
      submitForm: function () {
        let contentWithNumber = this.message;
        if (this.phoneNumber) {
          contentWithNumber = contentWithNumber.concat("\n").concat("Numéro de téléphone : " + this.phoneNumber);
        }

        let contactForm = {
          from_email: this.email,
          from_name: this.name,
          content: contentWithNumber
        };
        this.$http.post('/sendEmail', contactForm).then(() => {
          console.log('Message Sent.');
        }, response => {
          console.log('An error occurred while sending the message.');
          console.log(response);
          this.messageFailed = true;
        }).then(() => {
          this.formSubmitted = true;
        });
      }
    }
  }


</script>

<style scoped>
  #contact-form {
    margin-bottom: 0px;
  }

  .confirmation-message {
    margin-top: 40px
  }

  .icon {
    width: 65px;
    text-align: left;
    float: left;
    shape-margin: 0px;
    margin-right: 5px;
  }

  .map {
    margin-top: 25px;
    line-height: 0%;
  }

  iframe {
    margin-right: 0;
    margin-left: 0;
  }

  .icon-txt {
    margin-top: 5px;
    display: block;
  }

  .component-content {
    padding-bottom: 0;
  }

  a {
    color: black;
  }

  .box {
    display: flex;
    align-items: center;
    padding-bottom: 15px;
  }

  h2 {

    text-transform: uppercase;
    text-align: left;
  }


</style>

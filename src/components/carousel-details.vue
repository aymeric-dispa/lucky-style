<template>
  <div>
    <div>
      <b-carousel id="carousel"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  :interval="6000"
                  v-model="slide">

        <!-- Text slides with image -->
        <b-carousel-slide caption=""
                          class="full-size-slide" id="slide-1">
          <div class="slide-txt" style="text-align: left">
            <h1>Lucky Style</h1>
            <h2>
              Salon de toilettage chiens et chats toutes races à Couvin
            </h2>
          </div>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide class="full-size-slide" id="slide-2">
          <div class="slide-txt" style="text-align: right">
            <h2>Vous ne pouvez pas vous déplacer ? <br/>
              Le transport de votre animal peut être pris en charge</h2>
          </div>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide class="full-size-slide" id="slide-3">
          <div class="slide-txt" style="text-align: right">
            <h2>Angélique, diplômée de l'école de toilettage “L'Art Canin”,
              se fera un plaisir de prendre soin de votre compagnon</h2>
          </div>
        </b-carousel-slide>


      </b-carousel>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'carousel-details'
  }

</script>

<style scoped>

  .full-size-slide {
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  #slide-1 {
    background-image: url("/static/img/slider/slide1-c.jpg");
  }

  #slide-2 {
    background-image: url("/static/img/slider/slide2-c.jpg");
  }

  #slide-3 {
    background-image: url("/static/img/slider/slide3-c.jpg");
  }

  h1 {
    text-transform: none;
  }

  h2 {
    text-transform: none;
    text-align: match-parent;
    padding-bottom: 0;
  }

  .slide-txt {
    padding-bottom: 50px;
  }

  @media screen and (max-width: 768px) {
    .slide-txt {
      padding-bottom: 20px;
    }

    h2 {
      font-size: 170% !important;
    }

    p {
      font-size: 120%;

    }

  }

  @media screen and (max-width: 768px) {

    #slide-2 {
      background-image: url("/static/img/slider/slide2-m.jpg");
    }

  }

  @media screen and (max-width: 768px) and (orientation: portrait) {

    #slide-1 {
      background-image: url("/static/img/slider/slide1-m.jpg");
    }

    #slide-3 {
      background-image: url("/static/img/slider/slide3-m.jpg");
    }
  }
</style>

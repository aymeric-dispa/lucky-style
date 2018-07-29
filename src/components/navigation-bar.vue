<template>

  <div id="navi">
    <b-navbar v-b-scrollspy="{offset:150}" toggleable="md" type="dark" sticky id="navigation-bar" class="navbar"
              :class="{classA:scrollPosition <= 1,classB: scrollPosition > 1}">

      <b-nav-toggle size="sm" target="nav_collapse" right></b-nav-toggle>
      <img id="small-screen-banner" src="/static/img/lucky-title-mobile.png">
      <b-nav-toggle size="sm" target="nav_collapse" id="second-toggle"></b-nav-toggle>

      <b-collapse size="sm" is-nav id="nav_collapse">
        <b-navbar-brand id="brand" size="sm" href="#" v-smooth-scroll>
          <img id="banner" src="/static/img/lucky-title.png">
        </b-navbar-brand>


        <div class="ml-auto"/>

        <div class="row">
          <b-nav pills id="navs">
            <a class="col-12 col-sm-3 col-md-auto" href="#home" v-smooth-scroll>
              <b-nav-item style="color: white" href="#home">Présentation</b-nav-item>
            </a>
            <a class="col-12 col-sm-3 col-md-auto" href="#a-propos" v-smooth-scroll>
              <b-nav-item href="#a-propos">À propos</b-nav-item>
            </a>
            <a class="col-12 col-sm-3 col-md-auto" href="#tarifs" v-smooth-scroll>
              <b-nav-item href="#tarifs">Tarifs</b-nav-item>
            </a>
            <a class="col-12 col-sm-3 col-md-auto" href="#contact" v-smooth-scroll id="contact-link">
              <b-nav-item href="#contact">Contact</b-nav-item>
            </a>
          </b-nav>
        </div>

      </b-collapse>
    </b-navbar>


    <div class="page-content">
      <Carousel id="home"></Carousel>
      <Presentation id="a-propos"></Presentation>
      <PricingGrid id="tarifs"></PricingGrid>
      <Contact id="contact"></Contact>
    </div>
  </div>


</template>

<script>
  import Carousel from "./carousel-details";
  import PricingGrid from "./pricing-grid";
  import Contact from "./contact-form";
  import Presentation from "./presentation-details";

  export default {
    data: function () {
      return {
        scrollPosition: 0
      }
    },
    methods: {
      handleScroll() {
        this.scrollPosition = window.scrollY;
      }

    },
    components: {
      Contact, Carousel, Presentation, PricingGrid
    },
    name: 'navigation-bar',
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style scoped>
  #navigation-bar {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: right;
    font-size: 140%;
    color: white;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99999;
  }

  .nav-pills > a > li.active > a {
    width: 100%;
    color: white;
    text-decoration: none;
    background-color: #c556e9 !important;
  }

  .nav-pills > a > li:hover > a {
    text-decoration: none;
    background-color: #ffb3fc;
    width: 100%;
  }

  a:hover {
    text-decoration: none;
  }

  #banner {
    width: 80%;
    display: block;
    left: 0 !important;

  }

  .page-content {
    opacity: 0.96;
  }

  .classA {
    transition: background-color 0.5s ease;
    background: rgba(0, 0, 0, 0.1);

  }

  .navbar {
    padding: 0px 0px 0px 0px;
  }

  .classB {
    transition: background-color 0.5s ease;
    background: rgba(0, 0, 0, 0.3);
  }

  a:any-link {
    color: white;
  }

  b-nav-item {
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  }

  .col-md-auto {
    padding-right: 5px;
    padding-left: 5px;
  }

  #second-toggle {
    visibility: hidden;
  }

  #small-screen-banner {
    display: none;
  }

  @media screen and (max-width: 915px) {
    .classA {
      background: rgba(0, 0, 0, 0.3);
    }

    .classB {
      background: rgba(0, 0, 0, 0.45);
    }

    #navigation-bar {
      text-align: center;
      font-size: 120%;

    }

    #contact-link {
      margin-right: 0;
    }

    #brand {
      display: block;
      width: 65%;
      /*#display: none;*/
    }

    #navs {
      width: 100%;
    }
  }

  @media screen and  (max-width: 915px) {

    #small-screen-banner {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 35%;
      opacity: 0.9;
      /*#display: none;*/
    }

    #brand {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {

    #contact-link {
      margin-right: 15px;
    }
  }


</style>

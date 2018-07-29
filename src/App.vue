<template>

  <div id="app">
    <meta name="viewport" content="width=device-width">
    <navigation-bar></navigation-bar>
    <app-footer></app-footer>
  </div>


</template>
<script>
  import NavigationBar from "./components/navigation-bar";
  import AppFooter from "./components/app-footer";

  export default {
    components: {
      NavigationBar, AppFooter
    },
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'GothamRounded-Light', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-bottom: 0px;
    text-align: justify;
    line-height: 1.6;
    color: #353b3f;
  }

  strong {
    font-family: 'GothamRounded-Bold', sans-serif;
  }

  p {
    font-size: 18px;
  }

  .justify {
    text-align: justify;
    color: #353b3f;
  }

  .component-content {
    padding-top: 85px;
    padding-bottom: 85px;

  }

  h1 {
    font-size: 48px !important;
  }

  h2 {
    font-size: 42px !important;
    padding-bottom: 10px !important;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 29px !important;
    }

    h3 {
      font-size: 23px !important;
    }

    .component-content {
      padding-top: 50px;
      padding-bottom: 50px;

    }

  }

  .col-centered {
    float: none;
    margin: 0 auto;
  }
</style>

<template>
  <div id="app-footer" class="component-content ">
    <footer>
      <div class="col-centered">
        <div class="copyright">
          © Lucky Style, 2017 - Tous droits réservés.
          <span id="made-by">
              	&#9829; Site créé par Aymeric Dispa </span><br/>
          Icons made by <a href="https://www.flaticon.com/authors/smashicons"
                           title="Smashicons">Smashicons</a> and <a href="https://www.flaticon.com/authors/freepik"
                                                                    title="Freepik">Freepik</a> from <a
          href="https://www.flaticon.com/" title="Freepik">www.flaticon.com</a> are licensed by <a
          href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
          target="_blank">CC 3.0 BY</a>
        </div>
      </div>

    </footer>
  </div>

</template>
<script>

  export default {
    name: 'app-footer'
  }

</script>


<!-- styling for the component -->
<style scoped>

  #app-footer {
    padding-top: 50px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 45px;
    background-color: rgba(11, 11, 11, 0.91);
    color: #9c9c9c;
    font-size: 12px;
    text-align: center;

  }

  #made-by {
    white-space: nowrap
  }

  a:any-link {
    text-decoration: none !important;
    color: rgba(180, 47, 229, 0.97);
  }

  a:hover {
    color: rgba(233, 93, 215, 0.89);
  }

</style>

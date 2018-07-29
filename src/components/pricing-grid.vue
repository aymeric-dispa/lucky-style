<template>
  <div id="pricing-grid" class="component-content">
    <div class="container pricing-txt justify">
      <div class="col-md-11 col-sm-12 col-centered ">
        <h2>Tarifs</h2>
        Tous les compagnons sont les bienvenus, du plus petit au plus grand.

        J'utilise des shampoings haut de gamme Diamex, prévus pour respecter le type de peau et poils de chaque chien.
        <p><br/>
          Vous ne savez pas vous déplacer?
          Je me charge du transport de votre animal gratuitement
          dans un rayon de 5 km. Au delà, un supplément pourra être demandé.
        </p>
        Les tarifs diffèrent en fonction de l'espèce de l'animal, du type de soin à effectuer ainsi que de sa race/taille :
        <ul>
          <li>Mini: York toy, Chihuahua</li>
          <li>Moyenne race: Bichon, Shih-tzu, Yorkshire, Jack Russel...</li>
          <li>Grande race: Retriever, Bergers, Colley, Border Collie, Husky...</li>
          <li>Très Grande race: Terre Neuve, Bouvier Bernois, Montagne des pyrénées...</li>
        </ul>
        <br/>
        <h3>Liste des prix</h3>
      </div>

      <div class="row pricing-txt">
        <div class="col-md-11 col-sm-12 col-centered">

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1 " role="tab">
              <b-btn block href="#" v-b-toggle.accordion1 variant="secondary">Tonte</b-btn>
            </b-card-header>
            <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-table striped hover :items="tonte"></b-table>
              </b-card-body>
            </b-collapse>
          </b-card>
          <!--</div>-->
          <!--<div class="col-md-6 col-sm-12">-->

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion2 variant="secondary">Bain et démelage</b-btn>
            </b-card-header>
            <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-table striped hover :items="bath"></b-table>
              </b-card-body>
            </b-collapse>
          </b-card>
          <!--</div>-->
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion3 variant="secondary">Coupe ciseaux</b-btn>
            </b-card-header>
            <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-table striped hover :items="cut"></b-table>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion4>Trimming</b-btn>
            </b-card-header>
            <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-table striped hover :items="trimming"></b-table>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion5 variant="secondary"> Cocker</b-btn>
            </b-card-header>
            <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-table striped hover :items="cocker"></b-table>
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion6>Autre</b-btn>
            </b-card-header>
            <b-collapse id="accordion6" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-table striped hover :items="other"></b-table>
                *Gratuit pour les clients réguliers.
              </b-card-body>
            </b-collapse>
          </b-card>
          <!--</b-card-group>-->
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  const dogSizes = {
    MINI: 'Mini race',
    SMALL: 'Petite race',
    MEDIUM: 'Moyenne race',
    BIG: 'Grande race',
    HUGE: 'Très grande race',
    COCKER: 'Cocker'

  };

  const tonte = [
    {taille: dogSizes.MINI.valueOf(), prix: "30€"},
    {taille: dogSizes.SMALL.valueOf(), prix: "35€"},
    {taille: dogSizes.MEDIUM.valueOf(), prix: "40€"},
    {taille: dogSizes.BIG.valueOf(), prix: "55€"},
    {taille: dogSizes.HUGE.valueOf(), prix: "65€"},
    {taille: dogSizes.COCKER.valueOf(), prix: "45€"},
  ];

  const bath = [
    {taille: dogSizes.MINI.valueOf(), prix: "25€/h"},
    {taille: dogSizes.SMALL.valueOf(), prix: "25€/h"},
    {taille: dogSizes.MEDIUM.valueOf(), prix: "25€/h"},
    {taille: dogSizes.BIG.valueOf(), prix: "25€ à 65€"},
    {taille: dogSizes.HUGE.valueOf(), prix: "25€ à 75€"}
  ];

  const cut = [
    {taille: dogSizes.SMALL.valueOf(), prix: "40€ à 50€"},
    {taille: dogSizes.MEDIUM.valueOf(), prix: "50€ à 60€"},
    {taille: dogSizes.BIG.valueOf(), prix: "75€"},
    {taille: dogSizes.HUGE.valueOf(), prix: "90€"}
  ];
  const trimming = [
    {taille: dogSizes.SMALL.valueOf(), prix: "40€ à 50€"},
    {taille: dogSizes.MEDIUM.valueOf(), prix: "50€ à 60€"},
    {taille: dogSizes.BIG.valueOf(), prix: "75€"},
    {taille: dogSizes.HUGE.valueOf(), prix: "90€"}
  ];
  const other = [
    {"service": "Coupe des ongles à domicile*", prix: "8€"},
    {"service": "Coupe des ongles au salon*", prix: "5€"},
    {"service": "Chat et autre toilettage", prix: "25€/h"}
  ];

  const cocker = [
    {"type": "Dos trimmer", prix: "40€ à 50€"},
    {"type": "Dos tondu", prix: "50€ à 60€"}
  ];

  export default {
    name: 'pricing-grid',
    data () {
      return {
        animal: null,
        ssize: null,
        sizes: dogSizes,
        tonte: tonte,
        bath: bath,
        cut: cut,
        trimming: trimming,
        cocker: cocker,
        other: other


      }
    }
  }
</script>

<style scoped>


  .component-content {
    background-color: rgba(166, 6, 255, 0.12);
  }

  .col-centered {
    float: none;
    margin: 0 auto;
  }

  .justify {
    text-align: justify;
    color: #353b3f;
  }

  .pricing-txt {
    font-size: 18px;
    font-family: 'GothamRounded-Light', sans-serif;
  }

  h2, h3 {
    text-transform: uppercase;
    color: #36104a;
  }

</style>

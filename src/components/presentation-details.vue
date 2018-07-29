<template>
  <div id="presentation-details" class="component-content">
    <div id="presentation">
      <div class="container">
        <div class="row" id="a-propos">
          <div class="col-md-5 ">
            <div class="container d-flex h-100">
              <!--<div class="row justify-content-center align-self-center" style="width: 100%; height: 100%">-->
              <img src="../assets/dog-y.svg">
            </div>
          </div>
          <!--</div>-->
          <div class="col-md-7 text-md-left text-center">
            <div class="col-md-11" id="a-propos-content">
              <h2>À propos</h2>
              <div class="justify">
                <p>
                  Je m'appelle Angélique.
                  Amoureuse des animaux depuis mon plus jeune âge, j'ai appris à les aimer et à les respecter.
                  Cependant, la vie faisant, il arrive que nous oublions nos rêves d'enfant...</p>
                <p>
                  … Mais pas tant que ça ! En 2013, je décide de prendre les choses en mains et je saisis l’opportunité de vivre enfin de ma passion.
                  C’est alors que débute ma formation dans l'une des meilleures écoles de toilettage : “L'art Canin” situé à Hanzinne.
                  Après avoir suivi cette formation agrémentée d'un stage régulier, j'obtiens mon diplôme avec succès et j'ouvre enfin mon propre salon de toilettage le 14 octobre 2014 à Couvin.
                </p>
                <p>
                  J'ai le contact facile avec les animaux, avec qui je travaille toujours dans le calme, le respect et les besoins de chacun.
                  J'adapte ma façon de travailler par rapport à l'âge, au caractère et surtout au vécu de votre chien ou votre chat.
                  Mais je ne m'arrête pas là, puisque récemment j'ai ajouté à ma petite clientèle des poilus bien différents : lapins et cochons d'Inde à qui je coupe régulièrement les ongles.
                  C'est donc avec plaisir que je vous recevrais, vous et votre compagnon à quatre pattes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'about'
  }


</script>
<style scoped>

  h2 {
    text-transform: uppercase;
  }

  .class paragraph {
    min-width: 50%;
  }

  #presentation {
    background-color: white;
    color: #d455c4;
  }

  #a-propos {
    color: #c556e9;
    height: 100%
  }

  .container img {
    width: 100%;
  }

  #page-content h2 {
    color: #545454;
    font-size: 30px;
    padding-top: 20px;
    padding-bottom: 0px;
  }

  @media screen and  (max-width: 768px) {

    h2 {
      margin-top: 20px;
    }

  }

</style>

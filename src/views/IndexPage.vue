<template>
  <div>
    <div class="intro" id="intro">
      <div class="container">
        <div class="intro__inner">
          <h1 class="intro__title">АнтиТокс</h1>
          <h2 class="intro__subtitle">
            Сервис для проверки текста сочинений на "токсичность"
          </h2>
          <a class="btn btn--red" href="#">Found Out More</a>
        </div>
      </div>
    </div>

    <div class="container" id="features">
      <div class="features">
        <div class="features__item">
          <img
            src="@/assets/images/toxic.png"
            class="features__icon"
            alt="Features-1"
          />
          <h4 class="features__title">Токсичность в тексте</h4>
          <div class="features__text">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam
            quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper
            nulla
          </div>
        </div>
        <div class="features__item">
          <img
            src="@/assets/images/assistent.png"
            class="features__icon"
            alt="Features-2"
          />
          <h4 class="features__title">Интелектуальный ассистент</h4>
          <div class="features__text">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam
            quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper
            nulla
          </div>
        </div>
        <div class="features__item">
          <img
            src="@/assets/images/text.png"
            class="features__icon"
            alt="Features-3"
          />
          <h4 class="features__title">Идентичность текста</h4>
          <div class="features__text">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam
            quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper
            nulla
          </div>
        </div>
      </div>
      <!--/.features-->
    </div>
    <v-footer padless class="footer">
      <v-col class="text-center" cols="12"> &copy; АнтиТокс 2022 </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 750px;
  padding-top: 100px;
  background: #31344e url("../assets/images/main.png") no-repeat center;
  background-size: cover;
  &__inner {
    width: 100%;
    max-width: 970px;
    margin: 0 auto;
    line-height: 1.1;
    text-align: center;
  }
  &__title {
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 65px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  &__subtitle {
    color: #fff;
    font-size: 22px;
    line-height: 1.5;
    font-weight: regular;
    margin-bottom: 60px;
  }
}

.features {
  display: flex;
  margin: 95px 0;
  flex-wrap: wrap;
  &__item {
    width: 33.3333%;
    text-align: center;
    padding: 0 40px;
    margin: 25px 0;
  }
  &__icon {
    margin-bottom: 25px;
    height: 33.3333%;
  }
  &__title {
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    color: #2d3033;
  }
  &__text {
    line-height: 1.5;
  }
}

@media (max-width: 1300px) {
  /* Works */
  .works__item {
    width: 50%;
  }
}

@media (max-width: 991px) {
  /* Nav */
  .nav {
    display: none;
    width: 100%;
    position: absolute;
    top: 100%;
    right: 0;
    flex-direction: column;
    text-align: right;
    background-color: #31344e;
  }

  .nav__link {
    padding: 9px 15px;
  }

  /* Burger */
  .burger {
    display: block;
  }

  /* Intro */
  .intro__title {
    font-size: 40px;
  }

  /* Features */
  .features__item {
    width: 50%;
  }

  /* Team */
  .person {
    width: 50%;
    text-align: center;
  }
  .person__img {
    margin-left: auto;
    margin-right: auto;
  }

  /* Socail */
  .social {
    justify-content: center;
  }

  /* Reviwes */
  .reviews__photo {
    overflow: hidden;
    margin: 15px 0 40px;
    width: 100%;
  }

  .reviews__content {
    width: 100%;
    padding-left: 0;
    padding-bottom: 40px;
  }
  .reviews__img {
    right: -15px;
  }
}

@media (max-width: 767px) {
  /* Intro */
  .intro {
    height: auto;
    padding-top: 130px;
    padding-bottom: 30px;
  }

  .intro__title {
    font-size: 30px;
  }

  .intro__subtitle {
    font-size: 16px;
    margin-bottom: 30px;
  }

  /* Features */
  .features {
    margin: 40px 0;
  }
  .features__item {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }

  /* Works */

  .works_1 .works__item {
    width: 100%;
    height: 300px;
  }
  .works_2 .works__item {
    width: 100%;
    height: 300px;
  }

  .works_3 .works__item {
    width: 100%;
    height: 300px;
  }

  .works_4 .works__item {
    width: 100%;
    height: 300px;
  }

  .works__item {
    width: 100%;
    height: 300px;
  }

  /* Team */
  .team {
    margin: 60px 0 30px;
  }
  .person {
    width: 100%;
    text-align: center;
  }
  /* Reviwes */
  .reviews__text {
    font-size: 25px;
  }
  /* Btn */
  .btn--long {
    min-width: 260px;
  }
  /* Download */
  .download {
    margin: 50px;
  }
  .download__title {
    font-size: 24px;
  }
  /* Footer */

  .footer__inner {
    padding: 30px 0;
  }
  .footer__item {
    width: 100%;
    margin-bottom: 30px;
    padding-left: 0;
    padding-right: 0;
  }
  .footer__item:last-child {
    margin-bottom: 0;
  }
}

@media (max-width: 414px) {
  /* Reviwes */
  .reviews__img {
    right: -100px;
  }
}
</style>

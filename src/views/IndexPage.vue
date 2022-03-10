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
</style>

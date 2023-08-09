<template>
  <div id="app" :class="{'warm': isWarmWeather}">
    <main>
      <div class="search-tab">
        <input 
          type="text" 
          class="search-tab__inner" 
          placeholder="Enter your search here..."
          v-model="query"
          @keypress.enter="fetchWeather">
      </div>
      <div class="weather-info" v-if="weather.main">
        <div class="location">
          <div class="location__info">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="location__date">{{ dateBuilder() }}</div>
        </div>
        <div class="weather-box">
          <div class="weather-box__temperature">{{ Math.round(weather.main.temp) }}°C</div>
          <div class="weather-box__status">{{ weather.weather[0].main }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      api_key: "b639b877de396c513e4bcde82bf2bda0",
      url_base: 'https://api.openweathermap.org/data',
      query: '',
      weather: {}
    }
  },
  computed: {
    isWarmWeather() {
      return this.weather.main && this.weather.main.temp > 16;
    }
  },
  methods: {
    async fetchWeather() {
      try {
        const res = await fetch(`${this.url_base}/weather?q=${this.query}&units=metric&appid=${this.api_key}`);
        this.weather = await res.json();
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    },
    dateBuilder() {
      const d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      const day = days[d.getDay()];
      const date = d.getDate();
      const month = months[d.getMonth()];
      const year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    }
  }
}
</script>

<style lang="scss" scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  background-image: url('./assets/cold-bg.jpeg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  &warm{
    background-image: url('./assets/warm-bg.jpeg');
  }
}

main{
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.75));
}

.search-tab{
  width: 100%;
  margin-bottom: 30px;

&__inner{
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
} 
&__inner:focus{
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 16px rgba(0,0,0,0.25);
  border-radius: 16px 0px 16px 0px;
}}

.location{
  &__info{
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0,0,0,0.25);
  }
  &__date{
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
  }
}

.weather-box{
  text-align: center;
  &__temperature{
    display: inline-block;
    padding: 10px 25px;
    color: #fff;
    font-size: 100px;
    font-weight: 900;
    text-shadow: 3px 6px rgba(0,0,0,0.25);
    background-color: rgba(255,255,255,0.25);
    border-radius: 16px;
    margin: 30px 0px;
    box-shadow: 3px 6px rgba(0,0,0,0.25);
  }
  &__status{
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rgba(0,0,0,0.25);
  }
}

</style>

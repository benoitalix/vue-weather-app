<template>
  <div id="weather-app" class="weather-app" :class="appBackground">
    <main class="weather-app__main">
      <transition name="fade">
        <div class="weather-app__form" v-if="!submitted">
          <h1 class="weather-app__title">Ma météo</h1>
          <SearchForm
            :getWeather="getWeather"
            :error="error" />
        </div>
      </transition>
      <transition name="fade">
        <WeatherDashboard v-if="submitted"
          :resetForm="resetForm"
          :cityName="cityName"
          :countryName="countryName"
          :weatherCurrentDay="weatherCurrentDay"
          :weatherForecast="weatherForecast" />
      </transition>
    </main>
  </div>
</template>

<script>
  import SearchForm from './components/SearchForm';
  import WeatherDashboard from './components/WeatherDashboard';
  import './WeatherApp.scss';

  export default {
    name: 'WeatherApp',
    components: {
      SearchForm,
      WeatherDashboard
    },
    data() {
      return {
        cityName: '',
        countryName: '',
        weatherForecast: '',
        weatherCurrentDay: '',
        submitted: false,
        error: false,
        appBackground: ''
      }
    },
    methods: {
      getWeather(searchValue) {
        const keyAPI = 'c6e570470e964a01bb24eb7e956e6a30';
        const baseAPI = 'http://api.weatherbit.io/v2.0/forecast/daily?';

        this.$axios
          .get(`${baseAPI}lang=fr&city=${searchValue}&days=6&key=${keyAPI}`)
          .then(response => {
            const results = response.data;

            this.cityName = results.city_name;
            this.countryName = results.country_code;

            const newData = this.formatDay(results.data);
            this.weatherCurrentDay = newData[0]; // Current day
            this.weatherForecast = newData.slice(1); // Following days
            this.appBackground = this.weatherCurrentDay.weather.icon; // Update background color

            this.submitted = true;
            this.error = false;
          })
          .catch(error => {
            console.log(error);
            this.error = true;
          });
      },

      formatDay(data){
        const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

        let newData = data.map(function(num){
          const date = new Date(num.datetime);
          const day = days[date.getDay()];
          const dayNum = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
          const month = months[date.getMonth()];

          num.day = day;
          num.litteralDate = `${day} ${dayNum} ${month}`;

          return num;
        });

        return newData;
      },

      resetForm(){
        this.submitted = false;
        this.appBackground = '';
      }
    }
  }
</script>
<template>
  <div class="weather-dashboard">
    <div class="weather-dashboard__inner">
      <WeatherTileBig 
          :cityName="cityName"
          :countryName="countryName"
          :weatherCurrentDay="weatherCurrentDay" />  
      <WeatherTileForecast
        :weatherForecast="weatherForecast"/>
      <div class="weather-dashboard__action">
        <button type="button" @click="resetForm()">Nouvelle recherche</button>
      </div>
    </div>
  </div>
</template>

<script>
  import WeatherTileBig from './WeatherTileBig';
  import WeatherTileForecast from './WeatherTileForecast';
  import './WeatherDashboard.scss';

  export default {
    name: 'WeatherDashboard',
    components: {
      WeatherTileBig,
      WeatherTileForecast
    },
    props: ['resetForm','cityName','countryName','weatherCurrentDay','weatherForecast']
  }
</script>
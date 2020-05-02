<template>
  <div class="weather-tile-forecast">
    <h3 class="weather-tile-forecast__title">Les prochains jours</h3>
    <ul class="weather-tile-forecast__list">
      <li v-for="(item, index) in weatherForecast" :key="index">
        <WeatherTile :item="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import WeatherTile from './WeatherTile';
  import './WeatherTileForecast.scss';

  export default {
    name: 'WeatherTileForecast',
    components: {
      WeatherTile
    },
    props: ['weatherForecast']
  }
</script>
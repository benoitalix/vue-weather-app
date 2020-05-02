<template>
  <div class="weather-tile-big">
    <header class="weather-tile-big__header">
      <div class="weather-tile-big__city">{{ cityName}}, {{ countryName }}</div>
      <div class="weather-tile-big__day">{{ weatherCurrentDay.litteralDate }}</div>
    </header>
    <div class="weather-tile-big__main">
      <img
        :src="`https://www.weatherbit.io/static/img/icons/${weatherCurrentDay.weather.icon}.png`"
        class="weather-tile-big__visual" />
      <div class="weather-tile-big__situation">
        <div class="weather-tile-big__temperature">{{ Math.round(weatherCurrentDay.temp) }}°</div>
        <div class="weather-tile-big__description">{{ weatherCurrentDay.weather.description }}</div>
      </div>
    </div>
    <div class="weather-tile-big__details">
      <ul class="weather-tile-big__list">
        <li>
          {{ Math.round(weatherCurrentDay.app_max_temp) }}°
          <span>Température maximum</span>
        </li>
        <li>
          {{ Math.round(weatherCurrentDay.app_min_temp) }}°
          <span>Température minimum</span>
        </li>
        <li>
          {{ Math.round(weatherCurrentDay.precip) }}%
          <span>Précipitations</span>
        </li>
        <li>
          {{ Math.round(weatherCurrentDay.wind_spd) }} mph
          <span>Vitesse du vent</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import './WeatherTileBig.scss';

  export default {
    name: 'WeatherTileBig',
    props: ['cityName','countryName','weatherCurrentDay']
  }
</script>
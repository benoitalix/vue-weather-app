<template>  
  <article class="weather-tile">
    <time class="weather-tile__date">{{ item.day }}</time>
    <div class="weather-tile__description">
      <img :src="`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`" alt="" />
      <span>{{ item.weather.description }}</span>
    </div>
    <div class="weather-tile__temperature">
      <span class="min-temp">{{ Math.round(item.app_min_temp) }}°</span>
      <span class="max-temp">{{ Math.round(item.app_max_temp) }}°</span>
    </div>
  </article>
</template>

<script>
  import './WeatherTile.scss';

  export default {
    name: 'WeatherTile',
    props: ['item']
  }
</script>
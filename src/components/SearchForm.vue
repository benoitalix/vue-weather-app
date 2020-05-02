<template>
  <form action="/" class="search-form" @submit.prevent>
    <div class="form-entry" :class="{ 'error': error }">
      <label
        for="search-form-value">
          Ville {{ search }}
      </label>
      <input
        placeholder="Saisissez le nom d'une ville"
        id="search-form-value"
        type="text"
        class="search-form__input"
        v-model="search">
      <button
        type="submit"
        class="search-form__submit"
        @click="getWeather(search)">
          Rechercher
        </button>
    </div>
    <div class="form-error" v-if="error">Résultat introuvable. Veuillez réessayez.</div>
  </form>
</template>

<script>
  import './SearchForm.scss';

  export default {
    name: 'SearchForm',
    props: ['getWeather', 'error'],
    data() {
      return {
        search: ''
      }
    }
  }
</script>
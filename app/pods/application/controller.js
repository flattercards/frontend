import Ember from 'ember';
const {
  Controller,
  on
} = Ember;

export default Controller.extend({
  i18n: Ember.inject.service(),
  alert: false,

  saveLocale(locale) {
    const language = locale.toLowerCase();
    this.set('i18n.locale', language);
    if (!window.localStorage || !window.localStorage.setItem) return;
    window.localStorage.setItem('language', language);
  },

  getUserData() {
    return fetch('https://freegeoip.net/json/').then(response => {
      return response.json();
    });
  },

  checkLocale: on('init', function() {
    if (!window.localStorage || !window.localStorage.setItem) return;
    const language = window.localStorage.getItem('language');
    if (language) return this.set('i18n.locale', language);

    this.getUserData().then(user => {
      if (user.country_code === 'NL') return this.saveLocale('nl');
      if (user.country_code === 'BE') return this.saveLocale('nl');
      return this.saveLocale('en');
    });
  }),

  actions: {
    changeLang(language) {
      this.set('alert', false);
      this.set('i18n.locale', language);
      if (!window.localStorage || !window.localStorage.setItem) return;
      window.localStorage.setItem('language', language);
    }
  }
});

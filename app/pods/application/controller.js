import Ember from 'ember';
const {
  Controller,
  on
} = Ember;

export default Controller.extend({
  i18n: Ember.inject.service(),
  alert: false,

  checkLocale: on('init', function() {
    if (!window.localStorage || !window.localStorage.setItem) return;
    const language = window.localStorage.getItem('language');
    if (language) return this.set('i18n.locale', language);
    this.set('alert', true);
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

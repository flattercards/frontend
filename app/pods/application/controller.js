import Ember from 'ember';
import fetch from 'ember-network/fetch';
const {
  Controller,
  on
} = Ember;

export default Controller.extend({
  i18n: Ember.inject.service(),
  alert: null,
  from: null,

  fetchCountry: on('init', function() {
    if (this.get('i18n.locale') === 'en') return;
    fetch('http://ipinfo.io', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      const user = JSON.parse(response._bodyText);
      if (user.country !== 'NL') {
        this.showChangeToEnglish(user);
      }
    });
  }),

  showChangeToEnglish(user) {
    const from = user.region || 'outside The Netherlands'
    this.set('alert', true);
    this.set('from', from);
  },

  actions: {
    changeLang(language) {
      this.set('alert', false);
      this.set('i18n.locale', language);
    }
  }
});

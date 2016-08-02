import Ember from 'ember';
const {
  observer
} = Ember;

export default Ember.Controller.extend({
  code: null,
  card: null,

  onCodeChange: observer('code', function() {
    Ember.run.debounce(this, this.checkCode, 300);
  }),

  checkCode() {
    const code = this.get('code');
    this.store.query('card', { filter: { code } }).then(cards => {
      const card = cards.get('firstObject');
      if (!card) return this.set('card', null);
      return this.set('card', card);
    });

  }
});

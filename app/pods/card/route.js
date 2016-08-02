import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('card', { filter: { code: params.code } }).then(cards => {
      return cards.get('firstObject');
    });
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('card', { filter: { code: params.code } }).then(cards => {
      const card = cards.get('firstObject');
      return (card) ? card : false;
    });
  }
});

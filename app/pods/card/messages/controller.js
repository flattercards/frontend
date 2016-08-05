import Ember from 'ember';

export default Ember.Controller.extend({

  message: null,
  oldMessage: null,
  success: null,

  save() {
    this.set('oldMessage', this.get('message'));
    this.set('message', null);
    this.store.createRecord('message', {
      card: this.get('model.card'),
      message: this.get('oldMessage'),
      from: 'sender'
    }).save().then(() => {
      this.set('success', true);
      this.set('oldMessage', null);
      this.set('message', null);
    }, () => {
      this.set('success', false);
      this.set('message', this.get('oldMessage'));
    })
  },

  actions: {
    save() {
      return this.save();
    }
  }
});

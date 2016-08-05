import Ember from 'ember';

export default Ember.Controller.extend({

  message: null,
  messageHolder: null,
  success: null,

  save() {
    // Saving the message temporarily and clear the original message so it
    // seems faster. The field will be cleared while the users hits save.
    this.set('messageHolder', this.get('message'));
    this.set('message', null);

    // Create and save the message
    this.store.createRecord('message', {
      card: this.get('model.card'),
      message: this.get('messageHolder'),
      from: 'sender'
    }).save().then(() => {
      this.set('success', true);
      this.set('messageHolder', null);
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

import Ember from 'ember';
const { observer } = Ember;

export default Ember.Controller.extend({

  message: null,
  messageHolder: null,
  error: null,

  updateSuccess: observer('error', function() {
    const error = this.get('error');
    if (error === true) this.set('error', 'general.error');
    if (error) {
      window.setTimeout(() => {
        this.set('error', null);
      }, 1500);
    }
  }),

  save() {
    // Saving the message temporarily and clear the original message so it
    // seems faster. The field will be cleared while the users hits save.
    this.set('messageHolder', this.get('message'));
    this.set('message', null);

    // Create and save the message
    this.store.createRecord('message', {
      from: this.get('model.from'),
      card: this.get('model.card'),
      message: this.get('messageHolder'),
    }).save().then(() => {
      this.set('error', false);
      this.set('messageHolder', null);
      this.set('message', null);
    }, () => {
      this.set('error', 'saving.message.failed');
      this.set('message', this.get('oldMessage'));
    })
  },

  actions: {
    save() {
      return this.save();
    }
  }
});

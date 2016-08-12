import Ember from 'ember';

export default Ember.Component.extend({
  showingForm: false,

  actions: {
    showForm() {
      this.set('showingForm', true);
    }
  }
});

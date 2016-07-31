export default Ember.Route.extend({
  fastboot: Ember.inject.service(),

  model(params) {
    const code = params['sender-code'];
    if (!code) return;

    let shoebox = this.get('fastboot.shoebox');
    let shoeboxStore = shoebox.retrieve('my-store');

    if (this.get('fastboot.isFastBoot')) {
      return this.store.query('card', {
        filter: {
          senderCode: code
        }
      }).then(cards => {
        const card = cards.get('firstObject');
        if (!shoeboxStore) {
          shoeboxStore = {};
          shoebox.put('my-store', shoeboxStore);
        }
        shoeboxStore.code = card;
        return card;
      }, (error) => {
        console.log(error);
      });
    } else {
      return shoeboxStore && shoeboxStore.code;
    }
  }
});

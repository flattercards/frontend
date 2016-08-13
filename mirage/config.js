export default function() {
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  // this.namespace = 'api'
  this.get('cards', function (db, request) {
      let cards = [];

      if (Object.keys(request.queryParams).length === 0) {
        cards = db.cards.all();
      } else {
        const code = request.queryParams['filter[code]'];
        cards = db.cards.where({code: code});
      }

      return cards;
  });

  this.get('messages/:id');
  this.post('messages');
  this.passthrough('https://freegeoip.net/json/');
}

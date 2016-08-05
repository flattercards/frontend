import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  card: 1,
  message() { return faker.lorem.sentence(); },
});

import DS from 'ember-data';

export default DS.Model.extend({
  from: DS.attr('string'),
  body: DS.attr('string'),
  card: DS.belongsTo('card')
});

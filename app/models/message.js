import DS from 'ember-data';

export default DS.Model.extend({
  from: DS.attr('string'),
  message: DS.attr('string'),
  card: DS.belongsTo('card')
});

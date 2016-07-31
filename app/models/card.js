import DS from 'ember-data';

export default DS.Model.extend({
  senderCode: DS.attr('string'),
  receiverCode: DS.attr('string')
});

import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('choose-action', 'Integration | Component | choose action', {
  integration: true
});

test('it renders with and without card', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('card', Ember.Object.create({
    code: 'kj3k3ljk3'
  }));

  this.render(hbs`{{choose-action}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#choose-action}}
      template block text
    {{/choose-action}}
  `);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{choose-action card=card}}
  `);

  assert.equal(this.$('a:first').text().trim(), 'Ik heb een kaartje gekregen');
  assert.equal(this.$('a:last').text().trim(), 'Ik heb een kaartje gegeven');
});

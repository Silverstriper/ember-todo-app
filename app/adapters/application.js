import DS from 'ember-data';

//For FixtureAdapter AKA variables in your code use this
// export default DS.FixtureAdapter.extend({
// });

export default DS.LSAdapter.extend({
    namespace: 'ember-todo-app'
});

Meteor.startup(function () {
  if (Meteor.users.findOne()) return

  Accounts.createUser({
    username: 'demo',
    password: 'demo',
  })
})

Meteor.publish('test', function () {
  console.log(this._name)
})

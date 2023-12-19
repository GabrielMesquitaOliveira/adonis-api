import Route from '@ioc:Adonis/Core/Route'

Route.post('/users/register', 'Users/Register.store')
Route.post('/users/register/:key', 'Users/Register.show')
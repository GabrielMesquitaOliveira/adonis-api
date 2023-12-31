import Route from '@ioc:Adonis/Core/Route'

Route.post('/users/register', 'Users/Register.store')
Route.post('/users/register/:key', 'Users/Register.show')
Route.put('/users/register', 'Users/Register.update')

Route.get('/users', 'Users/Main.show').middleware('auth')
Route.put('/users', 'Users/Main.update').middleware('auth')

Route.put('/users/avatar', 'Users/Avatar.update').middleware('auth')
'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/users', 'UserController.index');
Route.post('/users', 'UserController.store');
Route.put('users/:id', 'UserController.update');
Route.delete('/users/:id', 'UserController.destroy');
'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/listUsers', 'userController.index');

Route.post('/createUsers', 'UserController.store');
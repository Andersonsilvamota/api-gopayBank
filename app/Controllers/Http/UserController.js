'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ response }) {
    const user = await User.all();
    
    return response.status(200).json(user);
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'name', 
      'surname', 
      'email', 
      'password', 
      'cpf', 
      'phone'
    ])
  
    const user = await User.create(data);

    return response.status(201).json(user);
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ params, request, response }) {
    
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */






  async update ({ request, params, response }){
    const user = await User.findOrFail(params.id);
    
    const data = request.only([
      'name',
      'surname',
      'email',
      'password',
      'cpf',
      'phone'
    
   ]);
    
    user.merge(data);
    await user.save();
    return response.status(201).json(user);
    
  }
   //async update ({ params, request, response }) {
  //   const user = await User.findOrFail(params.id);

  //   const data = await User.request.only([
  //     'name',
  //     'surname',
  //     'email',
  //     'password',
  //     'cpf',
  //     'phone'

  //   ])

    //   console.log("CHEGUEI AQUI");
  //   //user.merge(data);
      
  //   //await user.save();
    
  //   //return response.status(200).json(user)
  //}

  async destroy({ params }){
    const user = await User.findOrFail(params.id);
    
    await user.delete();

  }
  
}

module.exports = UserController

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Transfer extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  account () {
    return this.belongsTo('App/Models/Account')
  }

}

module.exports = Transfer

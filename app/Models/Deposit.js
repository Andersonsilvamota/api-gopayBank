'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Deposit extends Model {
  account () {
    return this.belongsTo('App/Models/Account')
  }
}

module.exports = Deposit

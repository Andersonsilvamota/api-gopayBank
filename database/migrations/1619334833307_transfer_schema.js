'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransferSchema extends Schema {
  up () {
    this.create('transfers', (table) => {
      table.increments()
      table.double('value').notNullable()    
      table.string('key', 10).notNullable()
      table
        .integer('account_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('accounts')
        .onUpdate('CASCADE')
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('transfers')
  }
}

module.exports = TransferSchema

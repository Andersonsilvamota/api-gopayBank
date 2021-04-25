'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DepositSchema extends Schema {
  up () {
    this.create('deposits', (table) => {
      table.increments()
      table.string('type', 20).notNullable()
      table.double('value').notNullable()
      table
        .integer('account_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('accounts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('deposits')
  }
}

module.exports = DepositSchema

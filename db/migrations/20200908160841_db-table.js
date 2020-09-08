exports.up = function (knex) {
  return knex.schema
    .createTable('patientTable', (table) => {
      table.increments('patient_id').primary()
      table.string('name', 256).notNullable()
      table.string('surname', 256).notNullable()
      table.string('age', 256).notNullable()
      table.string('height', 256).notNullable()
      table.string('notes', 256).notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
    })
    .createTable('employeeTable', (table) => {
      table.increments('doctor_id').primary()
      table.string('name', 256).notNullable()
      table.string('surname', 256).notNullable()
      table.text('username', 128).notNullable().unique()
      table.text('token').notNullable()
      table.text('password').notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('patients').dropTableIfExists('doctors')
}

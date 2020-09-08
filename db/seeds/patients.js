exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('patientTable')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('patientTable').insert([
        {
          name: 'Harry',
          surname: ' Dune',
          age: 15,
          height: 50,
          notes: 'Gave paracetamol',
          created_at: '2020-05-18 22:45:34.416717+01',
        },
        {
          name: 'sally',
          surname: ' Dune',
          age: 15,
          height: 50,
          notes: 'waiting for ctscan',
          created_at: '2020-05-18 22:45:34.416717+01',
        },
      ])
    })
}

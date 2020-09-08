exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('employeeTable')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('employeeTable').insert([
        {
          name: 'Amita',
          surname: ' Ghale',
          username: 'QUEDR123',
          token: 'J8RW1+vXmZFZm8XtoSeEcA==',
          password:
            '$2b$10$X6Q6XL2KMTNpyePv1l/CEub6FXSMYwOio2s4Epnk0GpDd.sGFu32i',
          created_at: '2020-05-18 22:46:44.720129+01',
        },
        {
          name: 'Lele',
          surname: ' Ghale',
          username: 'QUEDR111',
          token: 'GqxHWP8s5KjFI6galSaLhg==',
          password:
            '$2b$10$ddQbMhRJ5PwTiRQ.vnNYqOkMUNNuWZQ91TzPxAn.J8.Rk.ITilOUS',
          created_at: '2020-05-18 22:46:44.720129+01',
        },
      ])
    })
}

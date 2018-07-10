// const initOptions = {

// pg-promise initialization options...

//   connect(client, dc, useCount) {
//       const cp = client.connectionParameters;
//       console.log('Connected to database:', cp.database);
//   },
//   error(err, e) {

//     if (e.cn) {
//         // this is a connection-related error
//         // cn = safe connection details passed into the library:
//         //      if password is present, it is masked by #
//     }
//     if (e.query) {
//         // query string is available
//         if (e.params) {
//             // query parameters are available
//         }
//     }
//     if (e.ctx) {
//         // occurred inside a task or transaction
//     }
//   }
// };

// const pgp = require("pg-promise")(initOptions);
// const cn = {
//   host: 'localhost',
//   port: 5432,
//   database: 'mobyapp5',
//   user: 'moby_admin',
//   password: '2hN8-h%DY%FeY6Bx'
// };
// const db = pgp(cn);

// db.many("SELECT * FROM public.ventas_article ORDER BY id ASC ")
//   .then(function (data) {
//     global.articles = data;
//   })
//   .catch(function (error) {
//     console.log("ERROR:", error);
//   }
// );

// db.connect()
//   .then(function (obj) {
//     obj.done(); // success, release connection;
//   })
//   .catch(function (error) {
//     console.log("ERROR:", error.message);
//   });
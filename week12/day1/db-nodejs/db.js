const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "tyke.db.elephantsql.com",
    port: "5432",
    user: "txrtgyfj",
    password: "a8pcHeRpGv5vr_MSAt_brFu3PC4ub3Hn",
    database: "txrtgyfj",
  },
});

// db.select('id', 'name', 'price')
//     .from('products')
//     .update({name:'iphone14pro', price:6999})
//     .where({ id: 1 })
//     .returning('*')
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     })

// db("products")
//   .insert([
//     { id: 5, name: "ikey", price: 1299 },
//     { id: 6, name: "iglasses", price: 12399 },
//   ])
//   .returning("*")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

db.raw('select * from products')
    .then(data => {
    console.log(data.rows);
    }).catch(err=>{
    console.log(err);
})

const { db, Gardener, Plot, Vegetable } = require('./models');



db.sync({force: true})
  .then(() => {
    console.log('database synced!')
  })
  .then(() => {
    const carrot = Vegetable.create({
      name: 'carrot',
      color: 'orange',
      planted_on: new Date
    });
    const beans = Vegetable.create({
      name: 'beans',
      color: 'green',
      planted_on: new Date
    });
    const potato = Vegetable.create({
      name: 'potato',
      color: 'brown',
      planted_on: new Date
    });
    const tomato = Vegetable.create({
      name: 'tomato',
      color: 'red',
      planted_on: new Date
    });
    let vegRows = Promise.all([carrot, beans, potato, tomato]);
    return vegRows;
  })
  .then(() => {
    const plot1 = Plot.create({
      size: 1000,
      shaded: true,
      gardnerID: gardener.id
    })
  })
  // .then(() => {
  //   return Gardener.create({
  //     name: 'monica',

  //   })
  // })
  .catch( (err) => {
    console.log('Something went wrong!');
    console.log(err)
  })
  .finally( () => {
    db.close()
  })


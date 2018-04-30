const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {logging:false});

const Gardener = db.define('gardener', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  // allowNull: false
})

const Plot = db.define('plot', {
  size: {
    type: Sequelize.INTEGER
  },
  shaded: {
    type: Sequelize.BOOLEAN
  }
})

const Vegetable = db.define('vegetable', {
  name: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  planted_on: {
    type: Sequelize.DATE
  }
})


Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);

Vegetable.belongsToMany(Plot, {through: 'veggiesAndPlots'});
Plot.belongsToMany(Vegetable, {through: 'veggiesAndPlots'});

Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});


module.exports = { db, Gardener, Plot, Vegetable }

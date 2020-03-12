module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'petshop_db',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

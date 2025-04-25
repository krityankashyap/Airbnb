module.exports = {
  async up (queryInterface) {

    // up -> contains the code that will mke new changes in the db

    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS hotels (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
      `);
  },

  async down (queryInterface) {
   
    // down -> contains the code that helps to rollback/revert the previous changes done by migration up
    await queryInterface.sequelize.query(`
      DROP TABLE IF EXITS hotels;`);
  }
};


// create this migration :- npx sequelize-cli migration:generate --name create-hotel-table
// apply this migration :- npx sequelize-cli db:migrate
// revert migration :- npx sequelize-cli db:migrate:undo
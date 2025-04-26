import { Sequelize } from "sequelize";
import { DBConfig } from "../../config/index";

const sequelize = new Sequelize({
    dialect: "mysql",
    host: DBConfig.DB_HOST,
    username: DBConfig.DB_USER,
    database: DBConfig.DB_NAME,
    password: DBConfig.DB_PASSWORD,
    logging: true
});

export default sequelize;


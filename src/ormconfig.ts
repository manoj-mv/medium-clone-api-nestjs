import { DataSourceOptions } from "typeorm";
import { TagEntity } from "./tag/tag.entity";

const config: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'medium_clone_admin',
    password: 'password',
    database: 'medium_clone',
    entities: [TagEntity],
    synchronize: true
}

export default config;

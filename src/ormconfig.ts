import { DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'medium_clone_admin',
    password: 'password',
    database: 'medium_clone',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
}

export default config;

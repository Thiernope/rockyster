import { ConfigService } from '@nestjs/config';
import { DbOptions } from 'src/config/db.options';
import { DataSource } from 'typeorm';

const configService = new ConfigService();
const options = new DbOptions(configService);
const dataSource = new DataSource(options.createTypeOrmOptions());
export default dataSource;

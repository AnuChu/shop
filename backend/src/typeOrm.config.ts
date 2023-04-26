import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Cart1682191222669 } from './migration/1682191222669-Cart';
import { CartEntity } from './entity/cart.entity';
import { configService } from './config/config.service';
import { Product1682193040613 } from './migration/1682193040613-Product';
import { ProductEntity } from './entity/product.entity';

config();

export default new DataSource({
  type: 'postgres',
  host: configService.getValue('POSTGRES_HOST'),
  port: Number(configService.getValue('POSTGRES_PORT')),
  username: configService.getValue('POSTGRES_USER'),
  password: configService.getValue('POSTGRES_PASSWORD'),
  database: configService.getValue('POSTGRES_DATABASE'),
  entities: [CartEntity, ProductEntity],
  migrations: [Cart1682191222669, Product1682193040613],
});

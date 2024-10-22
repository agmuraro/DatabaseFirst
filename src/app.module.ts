import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './products/products.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'junction.proxy.rlwy.net',   
      port: 47731,                        
      username: 'postgres',               
      password: 'nxZcKGacggYWUTWSnbOsGJgndHPJiXwX',  
      database: 'railway',                
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true,  
    }),
    ProductModule,
    UserModule,
  ],
})
export class AppModule {}


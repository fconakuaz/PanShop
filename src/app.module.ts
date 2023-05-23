import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST, // Cambia a la dirección IP o nombre de host de tu instancia de SQL Server
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME, // Cambia al nombre de tu base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Solo para desarrollo, asegúrate de desactivarlo en producción
      extra: {
        trustServerCertificate: true,
      },
    }),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL || "postgresql://test_bcsr_user:rfWk4PnQAYZLQ5WsSA6Pzn2xwfO0lD2w@dpg-d4c9q2ggjchc73d8rdfg-a.oregon-postgres.render.com/test_bcsr",
      entities: [User],
      synchronize: true, 
      ssl: { rejectUnauthorized: false }, 
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

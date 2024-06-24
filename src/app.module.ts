import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

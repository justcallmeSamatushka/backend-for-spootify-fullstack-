import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static'


@Module({
  controllers: [],
  providers: [],
  imports: [
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.oi22l.mongodb.net/my-spootify-project?retryWrites=true&w=majority'),
    TrackModule,
    FileModule,
  ]
})
export class AppModule {}
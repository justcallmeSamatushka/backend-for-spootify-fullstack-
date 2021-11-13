import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from "./track/track.module";


@Module({
  controllers: [],
  providers: [],
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.oi22l.mongodb.net/my-spootify-project?retryWrites=true&w=majority'),
    TrackModule
  ]
})
export class AppModule {}
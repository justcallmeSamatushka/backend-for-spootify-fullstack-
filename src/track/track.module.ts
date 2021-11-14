import { Module } from "@nestjs/common";
import { Track, TrackSchema } from "./schemas/track.schema";
import { TrackController } from "./track.controller";
import { TrackService } from "./track.service";
import { MongooseModule } from '@nestjs/mongoose'
import { Comment, CommentSchema } from "./schemas/comments.schema";
import { FileServices } from "src/file/file.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }])
  ],
  providers: [TrackService, FileServices],
  controllers: [TrackController]
})
export class TrackModule {}
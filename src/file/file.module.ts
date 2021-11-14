import { Module } from "@nestjs/common";
import { FileServices } from "./file.service";


@Module({
  providers: [FileServices]
})

export class FileModule {}
import { Controller, Delete, Get, Post } from "@nestjs/common";


@Controller('/tracks')
export class TrackController {


  constructor() {}
  @Post()
  create() {

  }

  @Get()
  getAll() {
    return 'get all tracks'
  }
  
  @Get('/:id')
  getOne() {
    
  }

  @Delete('/:id')
  delete() {
    
  }
}
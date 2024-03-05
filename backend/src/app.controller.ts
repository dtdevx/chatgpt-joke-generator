import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GetJokeDto } from './get-joke.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getJoke(@Body() getJokeDto: GetJokeDto) {
    return await this.appService.getJoke(getJokeDto);
  }
}

import { ApiProperty } from '@nestjs/swagger';

export class GetJokeDto {
  @ApiProperty()
  content: string;
}

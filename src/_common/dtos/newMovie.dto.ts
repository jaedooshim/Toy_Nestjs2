import { newUserDto } from './newUser.dto';

export interface NewMovieDto extends newUserDto {
  name: string;
  content: string;
  comment: string;
  stars: number;
}

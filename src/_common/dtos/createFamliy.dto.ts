import { CreatePostDto } from './createPost.dto';

export interface CreateFamliyDto extends CreatePostDto {
  father: string;
  mother: string;
  bro: string;
  sister: string;
  baby: string;
}

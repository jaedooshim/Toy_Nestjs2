import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateUserDto } from 'src/_common/dtos/createUser.dto';
import { CreatePostDto } from 'src/_common/dtos/createPost.dto';
import { CreateFamliyDto } from 'src/_common/dtos/createFamliy.dto';
import { newUserDto } from 'src/_common/dtos/newUser.dto';
import { newItemDto } from 'src/_common/dtos/newItem.dto';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  /**@get__5개만들기 */
  @Get()
  getBoard(): string {
    return this.boardService.getBoard();
  }

  @Get()
  newUser(): string {
    return this.boardService.newUser();
  }

  @Get()
  phoneNumber(): number {
    return this.boardService.phoneNumber();
  }

  @Get()
  newMessage(): string {
    return this.boardService.newMessage();
  }

  @Get()
  Post(): string {
    return this.boardService.Post();
  }

  /**@Post_5개만들기 */
  @Post('1')
  resisterUser(@Body() resisterUserData: CreateUserDto): CreateUserDto {
    return this.boardService.resisterUser(resisterUserData);
  }

  @Post('2')
  resisterPost(@Body() resisterPostData: CreatePostDto): CreatePostDto {
    return this.boardService.resisterPost(resisterPostData);
  }

  @Post('3')
  resisterFamliy(@Body() resisterFamliyData: CreateFamliyDto): CreateFamliyDto {
    return this.boardService.resisterFamliy(resisterFamliyData);
  }

  @Post('4')
  createUser(@Body() userData: newUserDto): newUserDto {
    return this.boardService.createUser(userData);
  }

  @Post('5')
  createItem(@Body() itemData: newItemDto): newItemDto {
    return this.boardService.createItem(itemData);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateFamliyDto } from 'src/_common/dtos/createFamliy.dto';
import { CreatePostDto } from 'src/_common/dtos/createPost.dto';
import { CreateUserDto } from 'src/_common/dtos/createUser.dto';
import { newItemDto } from 'src/_common/dtos/newItem.dto';
import { newUserDto } from 'src/_common/dtos/newUser.dto';

@Injectable()
export class BoardService {
  getBoard(): string {
    return '안녕하세요';
  }

  newUser(): string {
    return '새로운 유저입니다.';
  }

  phoneNumber(): number {
    return 1012341233;
  }

  newMessage(): string {
    return 'test입니다.';
  }

  Post(): string {
    return '메모를 작성해주세요';
  }
  /** 여기서 부터는 Post 입니다. */
  resisterUser(resisterUserData: CreateUserDto): CreateUserDto {
    return resisterUserData;
  }

  resisterPost(resisterPostData: CreatePostDto): CreatePostDto {
    return resisterPostData;
  }

  resisterFamliy(resisterFamliyData: CreateFamliyDto): CreateFamliyDto {
    return resisterFamliyData;
  }

  createUser(userData: newUserDto): newUserDto {
    return userData;
  }

  createItem(itemData: newItemDto): newItemDto {
    return itemData;
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { newPeopleDto } from 'src/_common/dtos/newPeople.dto';
import { newAgeDto } from 'src/_common/dtos/newAge.dto';
import { newGameDto } from 'src/_common/dtos/newGame.dto';
import { mapleStoryDto } from 'src/_common/dtos/mapleStory.dto';
import { NewMovieDto } from 'src/_common/dtos/newMovie.dto';
import { newFriendDto } from 'src/_common/dtos/newFriend.dto';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  /** @Get6개_만들기입니다 */

  @Get('test2')
  getTest(): string {
    return this.testService.getTest();
  }

  @Get('test3')
  getTest2(): string {
    return this.testService.getTest2();
  }

  @Get('test4')
  newTest(): string {
    return this.testService.newTest();
  }

  @Get('test5')
  Order(): string {
    return this.testService.Order();
  }

  @Get('test6')
  reQuest(): string {
    return this.testService.reQuest();
  }

  @Get('test7')
  movieActor(): string {
    return this.testService.movieActor();
  }

  /** @Post_6개_만들기입니다 */

  @Post('1')
  newPeople(@Body() peopleDate: newPeopleDto): newPeopleDto {
    return this.testService.newPeople(peopleDate);
  }

  @Post('2')
  newAge(@Body() ageData: newAgeDto): newAgeDto {
    return this.testService.newAge(ageData);
  }

  @Post('3')
  newGame(@Body() gameData: newGameDto): newGameDto {
    return this.testService.newGame(gameData);
  }

  @Post('4')
  mapleStroy(@Body() mapleStoryData: mapleStoryDto): mapleStoryDto {
    return this.testService.mapleStory(mapleStoryData);
  }

  @Post('5')
  newMovie(@Body() movieData: NewMovieDto): NewMovieDto {
    return this.testService.newMovie(movieData);
  }

  @Post('6')
  newFriend(@Body() friendData: newFriendDto): newFriendDto {
    return this.testService.newFriend(friendData);
  }
}

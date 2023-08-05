import { Injectable } from '@nestjs/common';
import { mapleStoryDto } from 'src/_common/dtos/mapleStory.dto';
import { newAgeDto } from 'src/_common/dtos/newAge.dto';
import { newFriendDto } from 'src/_common/dtos/newFriend.dto';
import { newGameDto } from 'src/_common/dtos/newGame.dto';
import { NewMovieDto } from 'src/_common/dtos/newMovie.dto';
import { newPeopleDto } from 'src/_common/dtos/newPeople.dto';

@Injectable()
export class TestService {
  getTest(): string {
    return 'test입니다!';
  }

  getTest2(): string {
    return 'test22222입니다!!!!';
  }

  newTest(): string {
    return '세번째 테스트입니다!';
  }

  Order(): string {
    return '주문신청 입니다.';
  }

  reQuest(): string {
    return '새로운 요청사항입니다.';
  }

  movieActor(): string {
    return '영화배우 심재두입니다!';
  }

  /** 여기서 부터는 Post 입니다. */

  newPeople(peopleDate: newPeopleDto): newPeopleDto {
    return peopleDate;
  }

  newAge(ageData: newAgeDto): newAgeDto {
    return ageData;
  }

  newGame(gameData: newGameDto): newGameDto {
    return gameData;
  }

  mapleStory(mapleStoryData: mapleStoryDto): mapleStoryDto {
    return mapleStoryData;
  }

  newMovie(movieData: NewMovieDto): NewMovieDto {
    return movieData;
  }

  newFriend(friendData: newFriendDto): newFriendDto {
    return friendData;
  }
}

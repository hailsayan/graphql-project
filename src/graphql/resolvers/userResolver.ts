import { Resolver, Query } from '@nestjs/graphql';
import { User } from '../models/user';

@Resolver()
export class UserResolver {
  @Query((returns) => User)
  getUser() {
    return {
      id: 1,
      username: 'Psyon',
      displayName: 'former employee',
    };
  }
}

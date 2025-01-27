import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDTO } from '../dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  public async registerUser(@Body() body: UserDTO) {
    return await this.usersService.createUser(body);
  }
  @Get('all') 
  public async getAllUsers() {
    return await this.usersService.findAllUsers();
  }
  @Get(':id')
  public async getUserById(id: string) {
    return await this.usersService.findUserById(id);
  }
}

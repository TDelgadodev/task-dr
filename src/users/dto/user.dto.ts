import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ProjectsEntity } from 'src/projects/entities/projects.entity';
import { UsersEntity } from '../entities/users.entity';
import { ACCESS_LEVELS, Roles } from 'src/constants/role';

export class UserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Roles)
  role: Roles;
}

export class UserUpdateDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  firstName: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  lastName: string;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  age: number;
  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  password: string;
  @ApiProperty()
  @IsOptional()
  @IsEnum(Roles)
  role: Roles;
}

export class UserToProjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  user: UsersEntity;
  @ApiProperty()
  @IsOptional()
  @IsUUID()
  project: ProjectsEntity;
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ACCESS_LEVELS)
  accessLevel: ACCESS_LEVELS;
}

import { Body, Controller, Get, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";

@Controller()
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Post('users')
    async createUser(@Body('user') createUserDto: CreateUserDto): Promise<UserEntity> {
        return await this.userService.createUser(createUserDto);
    }
}
import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Patient } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('')
  getUsers() {
    return this.userService.findMany();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/patient')
  getPatient(): Promise<Patient[]> {
    return this.userService.findPatient();
  }
}

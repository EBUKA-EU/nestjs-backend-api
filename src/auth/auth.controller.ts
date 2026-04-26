// Controller that handles authentication endpoints (register, login, users)
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { Role } from './roles.enum';

/**
 * AuthController handles user authentication requests
 * Provides endpoints for user registration and login
 * Routes are at the root path: /register and /login
 */
@Controller()
export class AuthController {
  // Inject the AuthService to access authentication business logic
  constructor(private readonly authService: AuthService) {}

  /**
   * POST endpoint for user registration
   * Route: POST /register
   * Creates a new user account with email and password
   * @param {RegisterDto} dto - Registration data transfer object containing email and password
   * @returns User registration response with JWT token and success message
   */
  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  /**
   * POST endpoint for user login
   * Route: POST /login
   * Authenticates an existing user and returns a JWT token
   * @param {LoginDto} dto - Login data transfer object containing email and password
   * @returns User login response with JWT token and success message
   */
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  /**
   * GET endpoint for retrieving all users
   * Route: GET /users
   * Admin-only - requires valid JWT and admin role
   * @returns Array of user documents (passwords excluded)
   */
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('users')
  async findAllUsers() {
    return this.authService.findAllUsers();
  }
}

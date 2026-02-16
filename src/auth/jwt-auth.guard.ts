// JWT authentication guard that protects endpoints from unauthorized access
import { Injectable } from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";

/**
 * JwtAuthGuard is used to protect routes that require JWT authentication
 * Automatically validates JWT tokens using the JwtStrategy
 * Can be applied to route handlers with @UseGuards(JwtAuthGuard) decorator
 * Rejects requests without valid JWT token with 401 Unauthorized response
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {}
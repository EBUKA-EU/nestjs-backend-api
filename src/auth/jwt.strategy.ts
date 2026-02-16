// JWT strategy for Passport authentication - validates JWT tokens from requests
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";

/**
 * JwtStrategy implements Passport's JWT authentication strategy
 * Extracts JWT tokens from the Authorization header and validates them
 * Used by JwtAuthGuard to protect routes that require authentication
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * Constructor configures the JWT strategy with extraction method and secret
   * @param {ConfigService} configService - Service to access environment variables
   */
  constructor(configService: ConfigService) {
    // Retrieve JWT secret from environment variables
    const secret = configService.get<string>("JWT_SECRET");
    if (!secret) {
      throw new Error("JWT_SECRET is not defined");
    }

    // Call parent constructor with Passport JWT configuration
    super({
      // Extract JWT from "Authorization: Bearer <token>" header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Do not ignore expired tokens - throw error if token is expired
      ignoreExpiration: false,
      // Secret key used to verify the JWT signature
      secretOrKey: secret,
    });
  }

  /**
   * Validate method is called after JWT has been successfully verified
   * Extracts user information from the JWT payload
   * 
   * @param {any} payload - The decoded JWT payload containing user info
   * @returns {Object} User object with userId and email to attach to request
   */
  async validate(payload: any) {
    // Return user object with userId from JWT 'sub' claim and email claim
    return { userId: payload.sub, email: payload.email };
  }
}
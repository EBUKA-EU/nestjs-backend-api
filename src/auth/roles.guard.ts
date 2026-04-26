// Guard that enforces role-based access control on protected routes
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { Role } from './roles.enum';

/**
 * RolesGuard checks whether the authenticated user has the required role
 * to access a route. Must be used AFTER JwtAuthGuard so that request.user
 * is already populated from the validated JWT token.
 *
 * If no @Roles() decorator is present on the route, access is granted.
 * Returns 403 Forbidden if the user's role does not match the required role(s).
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Read the required roles from the route metadata set by @Roles()
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // If no roles are required, allow access
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    // Extract user from request (populated by JwtAuthGuard / JwtStrategy)
    const { user } = context.switchToHttp().getRequest();

    // Verify user exists and has one of the required roles
    if (!user || !requiredRoles.includes(user.role)) {
      throw new ForbiddenException(
        'You do not have permission to perform this action',
      );
    }

    return true;
  }
}

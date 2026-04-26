// Custom decorator to attach required roles metadata to a route handler
import { SetMetadata } from '@nestjs/common';
import { Role } from './roles.enum';

export const ROLES_KEY = 'roles';

/**
 * @Roles decorator marks a route as requiring specific user role(s)
 * Used together with RolesGuard to restrict access to admin-only endpoints
 *
 * @example
 * @Roles(Role.Admin)
 * @UseGuards(JwtAuthGuard, RolesGuard)
 * @Delete(':id')
 * deleteOne(...) {}
 */
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

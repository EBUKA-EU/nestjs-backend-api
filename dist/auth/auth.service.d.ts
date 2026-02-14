import { Model } from "mongoose";
import { JwtService } from "@nestjs/jwt";
import { User } from "./user.schema";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    private isStrongPassword;
    register(dto: RegisterDto): Promise<{
        message: string;
        token: string;
    }>;
    login(dto: LoginDto): Promise<{
        message: string;
        token: string;
    }>;
}

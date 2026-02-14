import {
    Injectable,
    UnauthorizedException,
    BadRequestException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

import { User } from "./user.schema";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private jwtService: JwtService,
    ) {}

    private isStrongPassword(password: string): boolean {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return strongPasswordRegex.test(password);
    }

    async register(dto: RegisterDto){
        const email = dto.email.toLowerCase().trim();
        const existingUser = await this.userModel.findOne({email}).exec();
        if (existingUser) {
            throw new BadRequestException("User with this email already exists");
        }
        if (!this.isStrongPassword(dto.password)) {
            throw new BadRequestException("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character");
        }
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const newUser = await this.userModel.create({
            email,
            password: hashedPassword,
        });

        const token = await this.jwtService.signAsync({ 
            sub: newUser._id,
            email: newUser.email,
        });

        return { message: "User registered successfully", token };
    }

    async login(dto: LoginDto) {
        const email = dto.email.toLowerCase().trim();
        const user = await this.userModel.findOne({email}).exec();
        if (!user) {
            throw new UnauthorizedException("Invalid email or password");
        }
        const isPasswordValid = await bcrypt.compare(dto.password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException("Invalid email or password");
        }
        const token = await this.jwtService.signAsync({ 
            sub: user._id,
            email: user.email,
        });
        return { message: "Login successful", token };
    }
}
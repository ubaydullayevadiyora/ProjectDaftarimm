import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateAdminDto } from "src/admins/dto/create-admin.dto";
import { Admin } from "src/admins/model/admin.model";
import { AdminsService } from "src/admins/admins.service";
import { SignInDto } from "./dto/sign-in.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class AdminAuthService {
  constructor(
    private readonly adminService: AdminsService,
    private readonly jwtService: JwtService
  ) {}

  private async generateToken(admin: Admin) {
    const payload = {
      id: admin.id,
      email: admin.email,
    };
    return { token: this.jwtService.sign(payload) };
  }

  async signUp(createAdminDto: CreateAdminDto) {
    const condidate = await this.adminService.findByEmail(createAdminDto.email);

    if (condidate) {
      throw new HttpException(
        "bunday emaili foydalanuvchi mavjud emas",
        HttpStatus.BAD_REQUEST
      );
    }
    const hashedPassword = await bcrypt.hash(createAdminDto.password, 7);
    createAdminDto.password = hashedPassword;

    const newAdmin = await this.adminService.create(createAdminDto);
    return newAdmin;
  }

  async signIn(signInDto: SignInDto) {
    const admin = await this.adminService.findByEmail(signInDto.email);
    if (!admin) {
      throw new UnauthorizedException("email yoki password notori");
    }

    const validPassword = await bcrypt.compare(
      signInDto.password,
      admin.password
    );

    if (!validPassword) {
      throw new UnauthorizedException("email yoki password notori");
    }
    return this.generateToken(admin);
  }
}

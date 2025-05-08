import { IsEmail, IsNotEmpty } from 'class-validator';

// dto/login.dto.ts
export class LoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

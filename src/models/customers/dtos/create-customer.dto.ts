import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateCustomerDto {

    @IsString()
    full_name: string;

    @IsString()
    surname: string;

    @IsInt()
    @Min(18)
    @Max(100)
    age: number;
}

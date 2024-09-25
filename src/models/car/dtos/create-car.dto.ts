import { IsString, IsInt, IsNumber, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCarDto {

    @IsString()
    brand: string;

    @IsString()
    model: string;

    @IsString()
    year: string;

    @IsInt()
    @Min(2)
    @Max(5)
    doors: number;

    @IsInt()
    vehicles: number;

    @IsNumber()
    @Type(() => Number) 
    daily_price: number;
}

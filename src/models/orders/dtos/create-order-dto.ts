import { IsInt, IsNumber, IsDateString } from 'class-validator';

export class CreateOrderDto {

    @IsInt()
    car_id: number;

    @IsInt()
    customer_id: number;

    @IsDateString()
    start_time: string;

    @IsDateString()
    finish_time: string;

    @IsNumber()
    total_amount: number;
}

import { Body, Controller,Delete,Get, Param, Patch, Post } from "@nestjs/common";
import { CarService } from "./car.service";
import { CreateCarDto } from "./dtos";

@Controller('cars')
export class CarController {
    constructor(private readonly carService: CarService) {}

    @Get("/")
    async getAllCars():Promise<any> {
        return await this.carService.getAllCars();
    }

    @Get('/:carId')
    async getSingleCar(@Param('carId') carId: string): Promise<any> {
        return await this.carService.getSingleCar(+carId)
    }

    @Post('/add')
    async createCar(@Body() carData: CreateCarDto): Promise<any> {
        return await this.carService.createCar(
            carData.brand,
            carData.model,
            Number(carData.year),
            carData.doors,
            carData.vehicles,
            carData.daily_price
        );
    }

    

    @Delete('/delete/:carId')
    async deleteCar(@Param('carId') carId:string):Promise<any> {
        return await this.carService.deleteCar(+carId)
    }
}   
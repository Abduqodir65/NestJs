import { Injectable } from "@nestjs/common";
import { PgService } from "src/postgres/pg.servis";



@Injectable()
export class CarService {

    constructor(private readonly postgres : PgService) {}

    async getAllCars(): Promise<any> {
        return await this.postgres.fetchData('SELECT * FROM cars');
    }

    async getSingleCar(carId: number): Promise<any> {
        return await this.postgres.fetchData(
            'SELECT * FROM cars WHERE id = $1',
            carId
        )
    }

    async createCar(brand:string,model:string,year:number,doors:number,vehicles:number,daily_price:number) {
        return await this.postgres.fetchData(
            'INSERT INTO cars(brand,model,year,doors,vehicles,daily_price) VALUES($1,$2,$3,$4,$5,$6) RETURNING *',
            brand,model,year,doors,vehicles,daily_price
        )
    }

    async deleteCar(carId: number): Promise<any> {
        return await this.postgres.fetchData(
            'DELETE FROM cars where id = $1 RETURNING *;',
            carId
        )
    }
}
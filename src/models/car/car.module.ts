import { Module } from "@nestjs/common";
import { CarController } from "./car.controller";
import { CarService } from "./car.service";
import { PgService } from "src/postgres/pg.servis";

@Module({
    providers:[PgService,CarService],
    controllers:[CarController]
})

export class CarModule {}
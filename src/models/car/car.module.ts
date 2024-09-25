import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CarController } from "./car.controller";
import { CarService } from "./car.service";
import { PgService } from "src/postgres/pg.servis";
import { LoggerMiddelware } from "src/middlewares/logger.middleware";

@Module({
    providers:[PgService,CarService],
    controllers:[CarController]
})

export class CarModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddelware).forRoutes('/cars')
    }
}
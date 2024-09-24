import { Module } from "@nestjs/common";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";
import { PgService } from "src/postgres/pg.servis";

@Module({
    providers:[PgService,OrderService],
    controllers:[OrderController]
})

export class OrderModule {}
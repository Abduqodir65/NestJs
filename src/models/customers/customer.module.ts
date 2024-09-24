import { Module } from "@nestjs/common";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { PgService } from "src/postgres/pg.servis";

@Module({
    providers:[PgService,CustomerService],
    controllers:[CustomerController]
})

export class CustomerModule {}
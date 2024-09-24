import { Injectable } from "@nestjs/common";
import { PgService } from "src/postgres/pg.servis";


@Injectable()
export class OrderService {

    constructor(private readonly postgres : PgService) {}

    async getAllOrders(): Promise<any> {
        return await this.postgres.fetchData('SELECT * FROM orders');
    }

    async getSingleOrder(orderId: number): Promise<any> {
        return await this.postgres.fetchData(
            'SELECT * FROM orders WHERE id = $1',
            orderId
        )
    }

    async createOrder(car_id: number, customer_id: number, start_time: string, finish_time: string, total_amount: number) {
        return await this.postgres.fetchData(
            'INSERT INTO orders(car_id, customer_id, start_time, finish_time, total_amount) VALUES($1, $2, $3, $4, $5) RETURNING *',
            car_id, customer_id, start_time, finish_time, total_amount
        );
    }

    async deleteOrder(orderId: number): Promise<any> {
        return await this.postgres.fetchData(
            'DELETE FROM orders WHERE id = $1 RETURNING *;',
            orderId
        )
    }
}
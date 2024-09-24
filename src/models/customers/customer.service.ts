import { Injectable } from "@nestjs/common";
import { PgService } from "src/postgres/pg.servis";



@Injectable()
export class CustomerService {

    constructor(private readonly postgres : PgService) {}

    async getAllCustomers(): Promise<any> {
        return await this.postgres.fetchData('SELECT * FROM customers');
    }

    async getSingleCustomer(customerId: number): Promise<any> {
        return await this.postgres.fetchData(
            'SELECT * FROM customers WHERE id = $1',
            customerId
        )
    }

    async createCustomer(full_name:String,surname:string,age:number) {
        return await this.postgres.fetchData(
            'INSERT INTO customers(full_name,surname,age) VALUES($1,$2,$3) RETURNING *',
            full_name,surname,age
        )
    }

    async deleteCustomer(customerId: number): Promise<any> {
        return await this.postgres.fetchData(
            'DELETE FROM customers WHERE id = $1 RETURNING *;',
            customerId
        )
    }
}
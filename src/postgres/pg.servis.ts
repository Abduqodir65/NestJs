import { ConflictException, Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { Client } from "pg";

@Injectable()
export class PgService implements OnModuleInit, OnModuleDestroy {
    #_client: Client

    constructor() {
        this.#_client = new Client({
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: 'a',
            database: 'rentcar'
        })
    }

    async fetchData(query: string, ...params: any[]): Promise<any> {
        try {
            const { rows } = await this.#_client.query(query, params)
            return rows
        } catch (error) {
            throw new ConflictException('DB error')
        }
    }

    async onModuleInit() {
        await this.#_client.connect()
    }

    async onModuleDestroy() {
        await this.#_client.end()
    }
    
}
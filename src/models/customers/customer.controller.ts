import { Body, Controller,Delete,Get, Param, Patch, Post } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./dtos/create-customer.dto";

@Controller('customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Get("/")
    async getAllCustomers():Promise<any> {
        return await this.customerService.getAllCustomers();
    }

    @Get('/:customerId')
    async getSingleCustomer(@Param('customerId') customerId: string): Promise<any> {
        return await this.customerService.getSingleCustomer(+customerId)
    }

    @Post('/add')
    async createCustomer(@Body() customerData: CreateCustomerDto): Promise<any> {
        return await this.customerService.createCustomer(
            customerData.full_name,
            customerData.surname,
            customerData.age
        );
    }

    @Delete('/delete/:customerId')
    async deleteCustomer(@Param('customerId') customerId: string): Promise<any>{
        return await this.customerService.deleteCustomer(+customerId)
    }
}   
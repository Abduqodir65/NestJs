import { Body, Controller,Delete,Get, Param, Patch, Post } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dtos/create-order-dto";

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Get("/")
    async getAllOrders():Promise<any> {
        return await this.orderService.getAllOrders();
    }

    @Get('/:orderId')
    async getSingleOrder(@Param('orderId') orderId: string): Promise<any> {
        return await this.orderService.getSingleOrder(+orderId)
    }

    @Post('/add')
    async createOrder(@Body() orderData: CreateOrderDto): Promise<any> {
        return await this.orderService.createOrder(
            orderData.car_id,
            orderData.customer_id,
            orderData.start_time,
            orderData.finish_time,
            orderData.total_amount
        );
    }

    @Delete('/delete/:orderId')
    async deleteoRDER(@Param('orderId') orderId: string): Promise<any>{
        return await this.orderService.deleteOrder(+orderId)
    }
}   
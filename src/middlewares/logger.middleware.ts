import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class LoggerMiddelware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const requestTime = new Date().toString();

        console.log(
            {
                url: req.url,
                method: req.method,
                time: requestTime
            }
        )

        next()
    }
}
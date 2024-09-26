import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

export class LogginInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> | Promise<Observable<any>> {
        console.log("sorov keldi");
        const requestTime = Date.now();

        return next.handle().pipe(
            tap(() => {
                console.log(`Javob ketdi. Vaqt farqi : ${Date.now() - requestTime}`);
            }),
        )
    }
}

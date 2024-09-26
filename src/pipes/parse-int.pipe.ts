import { ArgumentMetadata, NotAcceptableException, PipeTransform } from "@nestjs/common";
import { number } from "joi";

export class ParseIntCustomPipe implements PipeTransform {
    #defaultNumber = number

    transform(value: any, metadata: ArgumentMetadata) {
        if (!value) return this.#defaultNumber

        const number = parseInt(value, 10)

        console.log(metadata.data, metadata.type, metadata.metatype)

        if (isNaN(number)) {
            throw new NotAcceptableException(`${metadata.data} should be valid number`)

            return number
        }
        
    }
}
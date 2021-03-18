import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayus'
}) 

export class MayusculasPipe implements PipeTransform {
    transform(value: string, formato: boolean = true): string {
        return (formato) ? value.toUpperCase() : value.toLocaleLowerCase();
    }

}
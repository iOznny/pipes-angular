import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'flypipe'
})

export class FlyPipe implements PipeTransform {
    transform(fly: boolean): string {
        return (fly) ? 'si vuela' : 'no vuela';
    }
}
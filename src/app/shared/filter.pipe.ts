import { Pipe, PipeTransform } from "@angular/core";
import { reduce } from "rxjs/operators";

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform{
    transform(values: any[], filterString: string, propName: string): any {
        if(values.length === 0 || filterString === undefined || filterString === '') {
            return values;
        }
        const arrayTemp = [];
        for(const item of values) {
            if(item[propName].toLowerCase().includes(filterString.toLowerCase())) {
                arrayTemp.push(item);
            }
        }
        // return values.reduce((acc, item, index) => 
        //     item[propName].toLowerCase().includes(filterString.toLowerCase()) ? 
        //     [...acc, {index, item}] : acc, []
        //     );
        return arrayTemp;
    }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name:'perso'
})

export class PersoPipe implements PipeTransform {
	transform(value: string): string {
		value = value.toLowerCase();
		let palabras = value.split(' ');
		
		for(let i in palabras){
			palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
		}

		return palabras.join(' ');
	}
}
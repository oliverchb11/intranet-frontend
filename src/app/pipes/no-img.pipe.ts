import { Pipe, PipeTransform } from '@angular/core';
import { Personas } from '../interface/personas';

@Pipe({
  name: 'noImg'
})
export class NoImgPipe implements PipeTransform {
public url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png  ";
  transform(faculta_ing:Personas):string {
    console.log(faculta_ing.Cedula)
    if(faculta_ing.Cedula){
      return faculta_ing.Cedula
    }else{
      return this.url;
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtroPorDescricao'
})
export class FiltroPorDescricao implements PipeTransform{
    transform(produtos, valorDigitado){
        return produtos.filter(produto => produto.descricao.toLowerCase().includes(valorDigitado.toLowerCase()));
    }    
}
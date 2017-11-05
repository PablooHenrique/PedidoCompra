import {Component} from '@angular/core';
import {TabResumo} from './tab-resumo/tab-resumo';
import {TabCarrinhoCompra} from './tab-carrinho-compra/tab-carrinho-compra';



@Component({
    selector: 'resumo-compra',
    templateUrl: 'resumo-compra.html'
})
export class ResumoCompra{

    tabResumo : any;
    tabCarrinhoCompra : any;

    constructor(){
        this.tabResumo = TabResumo;
        this.tabCarrinhoCompra = TabCarrinhoCompra;
    }
}
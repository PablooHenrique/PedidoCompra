import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {TabResumo} from './tab-resumo/tab-resumo';
import {TabCarrinhoCompra} from './tab-carrinho-compra/tab-carrinho-compra';



@Component({
    selector: 'resumo-compra',
    templateUrl: 'resumo-compra.html'
})
export class ResumoCompra{

    tabResumo : any;
    tabCarrinhoCompra : any;

    produtos: any;

    constructor(private _navCtrl : NavController){
        this.tabResumo = TabResumo;
        this.tabCarrinhoCompra = TabCarrinhoCompra;
    }
}
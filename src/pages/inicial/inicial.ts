import {Component} from '@angular/core';
import {NavController} from 'ionic-angular'

import {ResumoCompra} from '../resumo-compra/resumo-compra'


@Component({
    selector: 'page-inicial',
    templateUrl : 'inicial.html'
})
export class Inicial{
    constructor(public navCtrl : NavController){

    }

    inicializarPedido(){
        this.navCtrl.push(ResumoCompra);
    }
}
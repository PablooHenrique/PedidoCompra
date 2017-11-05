import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {DetalhesProduto} from '../../detalhes-produto/detalhes-produto'


@Component({
    selector : 'tab-resumo',
    templateUrl:'tab-resumo.html'
})
export class TabResumo{
    constructor(public navCtrl : NavController){

    }

    detalhesProduto(){
        this.navCtrl.push(DetalhesProduto);
    }
}

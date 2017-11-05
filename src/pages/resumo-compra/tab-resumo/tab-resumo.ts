import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetalhesProduto} from '../../detalhes-produto/detalhes-produto';
import {ProdutoService} from '../../../domain/produto/produto-service';
import {ProdutoEntity} from '../../../domain/produto/produto-entity';

import {BarcodeScanner} from '@ionic-native/barcode-scanner';


@Component({
    selector : 'tab-resumo',
    templateUrl:'tab-resumo.html'
})
export class TabResumo{

    public produtos;
    public produto: ProdutoEntity;
    

    constructor(public navCtrl : NavController, private _produtoService: ProdutoService, private _barcode: BarcodeScanner){
        this.produto = this._produtoService.obterUltimoProdutoAdicionadoAoCarrinho();

        this.produtos = [
            {codigo: this.produto.codigo,descricao: this.produto.descricao, preco: this.produto.preco}
        ];
    }

    detalhesProduto(){
        this.navCtrl.push(DetalhesProduto);
    }

    async scanBarcode(){
        const result = await this._barcode.scan();
        console.log(result);
    }
}

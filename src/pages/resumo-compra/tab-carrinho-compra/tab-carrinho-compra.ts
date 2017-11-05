import {Component} from '@angular/core'
import {NavController} from 'ionic-angular';

import {DetalhesProduto} from '../../detalhes-produto/detalhes-produto';

import {ProdutoService} from '../../../domain/produto/produto-service';
import {ProdutoEntity} from '../../../domain/produto/produto-entity';


import {BarcodeScanner} from '@ionic-native/barcode-scanner';

@Component({
    selector : 'tab-carrinho-compra',
    templateUrl : 'tab-carrinho-compra.html'
})
export class TabCarrinhoCompra{
    public carrinhoCompras : ProdutoEntity[];

    constructor(private _produtosService : ProdutoService, public navCtrl : NavController, private _barcode : BarcodeScanner){
        this.carrinhoCompras = this._produtosService.listarCarrinhoCompras();
    }

    async scanBarcode(){
        let result = this._barcode.scan();
        result.then(x=>{
            let produto = this._produtosService.pesquisarProdutoPorCodigo(x.text);
            this.navCtrl.push(DetalhesProduto, {produto: produto, acao: 'INSERIR'});
        });
    }

    editarProduto(produto: ProdutoEntity){
        this.navCtrl.push(DetalhesProduto, {produto: produto, acao: 'EDITAR'})
    }
}
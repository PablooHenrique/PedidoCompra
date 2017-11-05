import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetalhesProduto} from '../../detalhes-produto/detalhes-produto';
import {FinalizarPedido} from '../../finalizar-pedido/finalizar-pedido'
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
    

    constructor(public navCtrl : NavController, private _produtoService: ProdutoService, private _barcode : BarcodeScanner){
        this.produto = this._produtoService.obterUltimoProdutoAdicionadoAoCarrinho();

        this.produtos = [
            {codigo: this.produto.codigo,descricao: this.produto.descricao, preco: this.produto.preco}
        ];
    }

    detalhesProduto(){
        this.navCtrl.push(FinalizarPedido);
    }

    async scanBarcode(){
        let result = this._barcode.scan();
        result.then(x=>{
            let produto = this._produtoService.pesquisarProdutoPorCodigo(x.text);
            this.navCtrl.push(DetalhesProduto, {produto: produto, acao: 'INSERIR'});
        });
    }
}

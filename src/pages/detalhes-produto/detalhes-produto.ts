import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {TabCarrinhoCompra} from '../resumo-compra/tab-carrinho-compra/tab-carrinho-compra'

import {ProdutoEntity} from '../../domain/produto/produto-entity';
import {ProdutoService} from '../../domain/produto/produto-service';

@Component({
    selector: 'detalhes-produto',
    templateUrl: 'detalhes-produto.html'
})
export class DetalhesProduto{
    public produto : ProdutoEntity;
    private _acao : string;
    public descricaoBotao: string;

    constructor(private _produtoService : ProdutoService, private _navCtrl : NavController, private _navParams : NavParams){
        this.produto = this._navParams.get('produto');
        this._acao = this._navParams.get('acao');

        if(this._acao == 'INSERIR'){
            this.descricaoBotao = 'Inserir Produto';
        }else{
            this.descricaoBotao = 'Remover Produto';
        }
    }

    actionBotao(){
        console.log('ACAO:' + this._acao)
        if(this._acao == 'INSERIR'){
            console.log('inserindo');
            this.inserirProduto();
        }else{
            console.log('removendo');
            this.removerProduto();
        }
    }

    inserirProduto(){
        this._produtoService.adicionarProdutoAoCarrinho(this.produto);
        this._navCtrl.push(TabCarrinhoCompra);
        console.log(this._produtoService.listarCarrinhoCompras());
    }

    removerProduto(){
        this._produtoService.removerProdutoCarrinhoCompras(this.produto);
    }
}

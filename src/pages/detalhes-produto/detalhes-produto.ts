import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

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

    constructor(private _produtoService : ProdutoService, private _navParams : NavParams){
        this.produto = this._navParams.get('produto');
        this._acao = this._navParams.get('acao');

        if(this._acao == 'INSERIR'){
            this.descricaoBotao = 'Inserir Produto';
            this._produtoService.adicionarProdutoAoCarrinho(this.produto);
        }else{
            this.descricaoBotao = 'Remover Produto';
        }
    }
}

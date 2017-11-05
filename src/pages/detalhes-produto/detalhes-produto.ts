import {Component} from '@angular/core';
import {ProdutoEntity} from '../../domain/produto/produto-entity';
import {ProdutoService} from '../../domain/produto/produto-service';

@Component({
    selector: 'detalhes-produto',
    templateUrl: 'detalhes-produto.html'
})
export class DetalhesProduto{
    public produto : ProdutoEntity;

    constructor(private _produtoService : ProdutoService){
        this.produto = this._produtoService.obterUltimoProdutoAdicionadoAoCarrinho();
    }
}

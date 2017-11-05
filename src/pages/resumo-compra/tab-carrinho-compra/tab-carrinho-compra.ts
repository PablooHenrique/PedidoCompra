import {Component} from '@angular/core'

import {ProdutoService} from '../../../domain/produto/produto-service';
import {ProdutoEntity} from '../../../domain/produto/produto-entity';

@Component({
    selector : 'tab-carrinho-compra',
    templateUrl : 'tab-carrinho-compra.html'
})
export class TabCarrinhoCompra{
    public carrinhoCompras : ProdutoEntity[];

    constructor(private _produtosService : ProdutoService){
        this.carrinhoCompras = this._produtosService.listarCarrinhoCompras();
    }
}
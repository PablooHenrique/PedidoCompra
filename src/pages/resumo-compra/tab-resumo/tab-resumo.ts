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

    public quantidadeItens: number;
    public valorTotalItens: number;
    public produtos;
    public produto: ProdutoEntity;
    

    constructor(public navCtrl : NavController, private _produtoService: ProdutoService, private _barcode : BarcodeScanner){
        this.produto = this._produtoService.obterUltimoProdutoAdicionadoAoCarrinho();

        if(this.produto != null){
            this.produtos = [
                {codigo: this.produto.codigo,descricao: this.produto.descricao, preco: this.produto.preco}
            ];
        }
    }

    ngOnInit() {
        this.quantidadeItens = this.calcularQuantidadeItensCarrinho();
        this.valorTotalItens = this.calcularValorTotalItens();
        console.log('OnInit');
    }

    ionViewWillLeave(){
        this.quantidadeItens = this.calcularQuantidadeItensCarrinho();
        this.valorTotalItens = this.calcularValorTotalItens(); 
        console.log('WillLeave');
    }

    ionViewDidLoad(){
        console.log('DidLoad');
    }

    calcularQuantidadeItensCarrinho(){
        let carrinho = this._produtoService.listarCarrinhoCompras();
        if(carrinho != null){
            return carrinho.length;
        }

        return 0;
    }

    calcularValorTotalItens(){
        let carrinhoCompras = this._produtoService.listarCarrinhoCompras();
        let valorTotal = 0;

        if (carrinhoCompras != null){
            carrinhoCompras.forEach(element => {
                valorTotal = valorTotal + (element.preco);    
            });
        }

        return valorTotal;
    }

    detalhesProduto(){
        console.log(this._produtoService.listarCarrinhoCompras());
        this.navCtrl.push(FinalizarPedido);
    }

    editarProduto(produto: ProdutoEntity){
        this.navCtrl.push(DetalhesProduto, {produto: produto, acao: 'EDITAR'})
    }

    async scanBarcode(){
        let result = this._barcode.scan();
        result.then(x=>{
            let produto = this._produtoService.pesquisarProdutoPorCodigo(x.text);
            this.navCtrl.push(DetalhesProduto, {produto: produto, acao: 'INSERIR'});
        });
    }
}

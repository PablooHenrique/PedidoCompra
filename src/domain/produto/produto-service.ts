import {ProdutoEntity} from '../produto/produto-entity';

export class ProdutoService{
    private produtos : ProdutoEntity[];
    private ultimoProdutoAdicionadoAoCarrinho : ProdutoEntity;
    private carrinhoCompras : ProdutoEntity[];

    constructor(){
        this.produtos = [
                {codigo: 1, descricao:'Arroz',          preco:15.00},
                {codigo: 2, descricao:'Feijão',         preco:3.50},
                {codigo: 3, descricao:'Açucar',         preco:7.00},
                {codigo: 4, descricao:'Coca Coca',      preco:6.50},
                {codigo: 5, descricao:'Pizza Congelada',preco:11.00},
                {codigo: 6, descricao:'Frango',         preco:9.00},
                {codigo: 7, descricao:'Batata Doce',    preco:4.00},
                {codigo: 8, descricao:'Peixe',          preco:12.00},
                {codigo: 9, descricao:'Bolacha',        preco:2.00},
                {codigo: 10,descricao:'Café',           preco:8.50},
                {codigo: 11,descricao:'Maça',           preco:15.00}
            ];

        this.carrinhoCompras = [
                {codigo: 1, descricao:'Arroz',          preco:15.00},
                {codigo: 2, descricao:'Feijão',         preco:3.50},
                {codigo: 3, descricao:'Açucar',         preco:7.00}
            ];

        this.ultimoProdutoAdicionadoAoCarrinho = {codigo: 5, descricao:'Pizza Congelada',preco:11.00};
    }

    listarCarrinhoCompras(){
        return this.carrinhoCompras;
    }

    listarProdutos(){
        return this.produtos;
    }

    obterUltimoProdutoAdicionadoAoCarrinho(){
        return this.ultimoProdutoAdicionadoAoCarrinho;
    }
}
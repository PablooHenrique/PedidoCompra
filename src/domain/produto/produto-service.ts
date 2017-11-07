import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';

import {ProdutoEntity} from '../produto/produto-entity';

@Injectable()
export class ProdutoService{
    private produtos : ProdutoEntity[];
    private ultimoProdutoAdicionadoAoCarrinho : ProdutoEntity;
    private carrinhoCompras = [];

    constructor(private _http: Http){
        this.produtos = [
                {codigo: 1,
                 descricao:'Arroz',
                 preco:15.00,
                 urlImagem:'http://www.redebem.com/loja/redebem/components/com_virtuemart/shop_image/product/Arroz_Tio_Jorge__4bcef2ef679d2.png'},

                {codigo: 2,
                 descricao:'Feijão',
                 preco:3.50,
                 urlImagem:'http://www.natashopping.com.br/lojas/supermercadonata/produtos/18391/galeria/fjao%20tj.jpg'},

                {codigo: 3,
                 descricao:'Açucar',
                 preco:7.00,
                 urlImagem:'https://www.paodeacucar.com/img/uploads/1/542/458542.jpg?type=product'},

                {codigo: 4,
                 descricao:'Coca Coca',
                 preco:6.50,
                 urlImagem:'https://mambo.vteximg.com.br/arquivos/ids/211087/135707.jpg?v=636366880526730000'},

                {codigo: 5,
                 descricao:'Pizza Congelada',
                 preco:11.00,
                 urlImagem:'http://coopsp.vteximg.com.br/arquivos/ids/156195-804-804/7893000672109_Pizza-congelada-frango-com-catupiry-mussarela-Sadia---460g.jpg?v=636132678634830000'},

                {codigo: 6,
                 descricao:'Frango',
                 preco:9.00, 
                 urlImagem:'http://fofinho.net/imgs/imagens/frango-raw.png'},

                {codigo: 7,
                 descricao:'Batata Doce',
                 preco:4.00,
                 urlImagem:'https://www.google.com.br/search?q=batata+doce&source=lnms&tbm=isch&sa=X&ved=0ahUKEwimu6iS8KfXAhWKPpAKHSJPCdgQ_AUICigB&biw=1536&bih=759#imgrc=e4y4EkhIOC-y-M:'},

                {codigo: 8,
                 descricao:'Peixe',
                 preco:12.00,
                 urlImagem:'http://conteudo.imguol.com.br/c/noticias/2013/12/10/10dez2013---o-aracu-e-um-dos-peixes-processado-pelo-frigorifico-maues-de-maues-am-e-vendido-por-r-69-o-kg-para-ser-servido-como-merenda-na-rede-publica-de-ensino-de-manaus-em-2013-a-1386703929792_956x500.jpg'},

                {codigo: 9,
                 descricao:'Bolacha',
                 preco:2.00,
                 urlImagem:'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/3/13/enhanced/webdr09/edit-7905-1425407900-5.jpg'},

                {codigo: 10,
                 descricao:'Café',
                 preco:8.50,
                 urlImagem:'http://www.lmv10news.com.br/wp-content/uploads/2017/04/xicara-de-cafe-2.jpg'},

                {codigo: 11,
                 descricao:'Maça',
                 preco:15.00,
                 urlImagem:'http://www.belezaesaude.net.br/fotos/mega_noticias/mid/157.jpg'}
            ];

        // this.ultimoProdutoAdicionadoAoCarrinho = 
        //     {codigo: 5,
        //      descricao:'Pizza Congelada',
        //      preco:11.00,
        //      urlImagem:'http://coopsp.vteximg.com.br/arquivos/ids/156195-804-804/7893000672109_Pizza-congelada-frango-com-catupiry-mussarela-Sadia---460g.jpg?v=636132678634830000'};
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

    pesquisarProdutoPorCodigo(codigo){
        return this.produtos.find(produto=>produto.codigo == codigo);
    }

    adicionarProdutoAoCarrinho(produto : ProdutoEntity){
        this.carrinhoCompras.push(produto);
        this.ultimoProdutoAdicionadoAoCarrinho = produto;
    }

    removerProdutoCarrinhoCompras(produto : ProdutoEntity){
        let ar = [];

        this.carrinhoCompras.forEach( x=>{
            if(produto.codigo != x.codigo){
                ar.push(x);
            }
        });

        this.carrinhoCompras = ar;
    }

    enviarPedido(){
        let body = {
	                "cabecalho": {
		            "numero": 1,
		            "codigoRca": 10,
		            "cgcCliente": "86.760.972/0001-08",
		            "dataAbertura": "2017-10-26T15:56:28.291",
		            "dataFechamento": "2017-10-26T15:56:28.291",
		            "codigoFilial": "1",
		            "codigoCobranca": "D",
		            "codigoPlanoPagamento": 1,
		            "tipoDeVenda": "1"},
                    "itens": [{
                            "codigoProduto": 1,
                            "quantidade": {
                                "valor": 10.000000
                            },
                            "precoVenda": {
                                "valor": 12.000000
                            },
                            "numeroSequencial": 1
                        }]
                   }

            let url = 'http://localhost:8080/winthor/integracao/v0/'
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            return this._http.post(url, body, {headers}).toPromise();
    }
}
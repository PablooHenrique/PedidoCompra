export class ProdutoEntity{
    constructor(
        public codigo: number,
        public descricao: string,
        public preco: number,
        public urlImagem: string){}
}
import {Component} from '@angular/core';
import {ToastController} from 'ionic-angular';

import {ProdutoService} from '../../domain/produto/produto-service';

@Component({
    selector:'finalizar-pedido',
    templateUrl:'finalizar-pedido.html'
})
export class FinalizarPedido{
    constructor(private _produtoService: ProdutoService, private _toastCtrl : ToastController){}

    enviarPedido(){
        this._produtoService.enviarPedido()
        .then(response => {
                console.log(response);
                let toast = this.criarToast("Pedido Enviado Com Sucesso");
                toast.present();
            }
        ).catch(err=>{
            console.log(err);
            let toast = this.criarToast("Erro ao enviar pedido");
            toast.present();
        });
    }

    criarToast(msg : string){
        let toast = this._toastCtrl.create({
            message: msg,
            showCloseButton: true,
            position: 'middle',
            closeButtonText: 'Ok'
        });

        return toast;
    }    
}
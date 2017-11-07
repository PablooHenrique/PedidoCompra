import {Component} from '@angular/core';
import {ToastController, LoadingController} from 'ionic-angular';

@Component({
    selector:'finalizar-pedido',
    templateUrl:'finalizar-pedido.html'
})
export class FinalizarPedido{
    constructor(private _toastCtrl : ToastController, private _loadingCtrl : LoadingController){}

    enviarPedido(){
        let loading = this.criarLoading();
        loading.present();
        setTimeout(x=>{
            loading.dismiss();
            let toast = this.criarToast("Pedido Criado Com Sucesso");
            toast.present();
        }, 2000)
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

    criarLoading(){
        let loading = this._loadingCtrl.create({});
        return loading;
    } 
}
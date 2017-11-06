import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Inicial } from '../pages/inicial/inicial';
import { ResumoCompra } from '../pages/resumo-compra/resumo-compra';

import { TabResumo } from '../pages/resumo-compra/tab-resumo/tab-resumo';
import { TabCarrinhoCompra } from '../pages/resumo-compra/tab-carrinho-compra/tab-carrinho-compra';
import { DetalhesProduto } from '../pages/detalhes-produto/detalhes-produto';
import { FinalizarPedido} from '../pages/finalizar-pedido/finalizar-pedido';

import { ProdutoService } from '../domain/produto/produto-service';

import { FiltroPorDescricao } from '../pages/resumo-compra/tab-carrinho-compra/tab-carrinho-compra.pipes'

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Inicial,
    ResumoCompra,
    TabResumo,
    TabCarrinhoCompra,
    DetalhesProduto,
    FiltroPorDescricao,
    FinalizarPedido
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Inicial,
    ResumoCompra,
    TabResumo,
    TabCarrinhoCompra,
    DetalhesProduto,
    FinalizarPedido
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProdutoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}

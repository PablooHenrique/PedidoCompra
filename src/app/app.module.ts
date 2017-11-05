import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Inicial } from '../pages/inicial/inicial';
import { ResumoCompra } from '../pages/resumo-compra/resumo-compra';

import { TabResumo } from '../pages/resumo-compra/tab-resumo/tab-resumo';
import { TabCarrinhoCompra } from '../pages/resumo-compra/tab-carrinho-compra/tab-carrinho-compra';
import {DetalhesProduto} from '../pages/detalhes-produto/detalhes-produto';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Inicial,
    ResumoCompra,
    TabResumo,
    TabCarrinhoCompra,
    DetalhesProduto
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Inicial,
    ResumoCompra,
    TabResumo,
    TabCarrinhoCompra,
    DetalhesProduto
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

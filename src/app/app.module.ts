import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environments/environment.prod';
import {AngularFirestore,AngularFirestoreDocument, AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    
   
    
   ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, BarcodeScanner ],
  bootstrap: [AppComponent],
})
export class AppModule {}

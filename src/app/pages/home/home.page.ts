
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs'; 
import { Usuario } from '../../interfaces/usuario';
import { FirestoreService } from '../../services/firestore.service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuarios: Usuario[]=[];




  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;

  constructor(
    public database: FirestoreService,
    private barcodeScanner: BarcodeScanner
    ) {
      
    }
  ngOnInit(){
    
    this.getUsuarios()
    console.log('this.usuarios -> ' + this.usuarios)
  }
  
  getUsuarios(){
    const enlace= '/usuarios';
    this.database.getCollectionChanges<Usuario>(enlace).subscribe( res=>{
      this.usuarios=res;
    })
  }

  scanBarcode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData;

    }).catch(err => {
      console.log('Error', err);
    });
  }

  
}


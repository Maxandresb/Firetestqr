
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs'; 
import { Usuario } from '../../interfaces/usuario';
import { FirestoreService } from '../../services/firestore.service';






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuarios: Usuario[]=[];


  constructor(
    public database: FirestoreService,
    
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


  
}


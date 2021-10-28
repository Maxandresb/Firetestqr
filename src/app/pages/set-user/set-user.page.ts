import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-set-user',
  templateUrl: './set-user.page.html',
  styleUrls: ['./set-user.page.scss'],
})
export class SetUserPage implements OnInit {
  usuario:Usuario={
    nombre:'',
    clave:'',
  }
  constructor(
    public database: FirestoreService, 
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    const data= this.usuario;
    const enlace ='usuarios/';
    this.database.crearDocuemt<Usuario>(data,enlace).then( (_) =>{
      console.log('Guardado usuario   '+ this.usuario.nombre)
      this.router.navigate(['/home'])
    })
  }
}

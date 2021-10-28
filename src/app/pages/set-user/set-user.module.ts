import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetUserPageRoutingModule } from './set-user-routing.module';

import { SetUserPage } from './set-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetUserPageRoutingModule
  ],
  declarations: [SetUserPage]
})
export class SetUserPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PosteListPage } from './poste-list';

@NgModule({
  declarations: [
    PosteListPage,
  ],
  imports: [
    IonicPageModule.forChild(PosteListPage),
  ],
})
export class PosteListPageModule {}

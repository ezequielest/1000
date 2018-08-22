import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultsListPage } from './results-list';

@NgModule({
  declarations: [
    ResultsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultsListPage),
  ],
})
export class ResultsListPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyCrudComponent } from './survey-crud/survey-crud.component';
import { SurveyListComponent } from './survey-list/survey-list.component';



@NgModule({
  declarations: [SurveyCrudComponent, SurveyListComponent],
  imports: [
    CommonModule
  ]
})
export class SurveyManagementModule { }

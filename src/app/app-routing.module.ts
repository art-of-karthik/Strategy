import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RatioAnalysisComponent } from './ratio-analysis/ratio-analysis.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, 
  {
    path: 'ratio',
    component: RatioAnalysisComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

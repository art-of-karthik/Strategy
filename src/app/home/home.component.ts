import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  strategyOptions: SOption[] = [
    
];
  constructor(private router: Router) { }

  ngOnInit(): void {
    let ratioAnalysis = new SOption();
    ratioAnalysis.title = 'Ratio Analysis';
    ratioAnalysis.description = "Key Finaicial Analysis, How to Calculate Them and What they mean.";
    ratioAnalysis.exploreOption = "/ratio";
    this.strategyOptions.push(ratioAnalysis);
  }

  onClickExplore(goTo: string) {
    this.router.navigate([goTo]);
  }

}


export class SOption {
  title: string = 'Title';
  description: string = 'Description';
  exploreOption: string = '/home' 
}
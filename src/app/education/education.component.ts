import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  ukznURL: string = "https://ukzn.ac.za/";
  derivcoURL: string = "https://www.derivco.co.za";
  astelURL: string = "http://astel.info";
  refcheckURL: string = "https://www.refcheck.co.za";
  expandCompany: string = "";
  constructor() { }


  ngOnInit(): void {
  }

  public toggleCompanyDetails(company: string): void {
    this.expandCompany = company;
  }

}

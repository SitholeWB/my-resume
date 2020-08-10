import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  lexisnexisURL: string = "https://www.lexisnexis.co.za";
  derivcoURL: string = "https://www.derivco.co.za";
  astelURL: string = "http://astel.info";
  constructor() { }

  ngOnInit(): void {
  }

}

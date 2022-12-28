import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.css']
})
export class CandidateInfoComponent implements OnInit {
  panelOpenState = false;

  goals = [
    {
      name: 'ahmed',
      des: 'Business Alignment',
      type: 'Business Alignment',
      goolObject: '1. Define business needs. 2. Define IT Capability to address needs 3. Define Gap 4. Determine ways to close gap 5. Plan implementation for roadmap 6. Ensure alignment with ADSIC EA 7. Publish roadmap and IT Strategy',
    },
    {
      name: 'ahmed',
      des: 'Business Alignment',
      type: 'Business Alignment',
      goolObject: '1. Define business needs. 2. Define IT Capability to address needs 3. Define Gap 4. Determine ways to close gap 5. Plan implementation for roadmap 6. Ensure alignment with ADSIC EA 7. Publish roadmap and IT Strategy',
    },
    {
      name: 'ahmed',
      des: 'Business Alignment',
      type: 'Business Alignment',
      goolObject: '1. Define business needs. 2. Define IT Capability to address needs 3. Define Gap 4. Determine ways to close gap 5. Plan implementation for roadmap 6. Ensure alignment with ADSIC EA 7. Publish roadmap and IT Strategy',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

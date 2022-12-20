import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-library',
  templateUrl: './knowledge-library.component.html',
  styleUrls: ['./knowledge-library.component.css']
})
export class KnowledgeLibraryComponent implements OnInit {

  constructor() { }
  dummy = [];
  ngOnInit(): void {
    for(let i = 0; i < 10; i++) {
      this.dummy.push({})
    }
    console.log('knowledge is here', this.dummy)
  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule ,RouterOutlet],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  constructor(private route : Router){}

  ngOnInit(): void {
    throw new Error('method not omplemented');
  }

  doSearch(value:String){
    console.log(`value=${value}`);
    this.route.navigateByUrl(`/search/${value}`);

  }

}

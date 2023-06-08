import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  eductionOption:string[]=[
    'Bechlor of Technology',
    'B.a',
    'B.sc',
    'M.a',
    'M.sc'
  ]
}

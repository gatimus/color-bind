import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss'],
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['someProp']
})
export class SomeComponent {

  public someProp: string;

}

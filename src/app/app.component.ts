import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public color = 'primary';

  public disabled = false;

  public label = 'button';

  public click(event: MouseEvent): void { }

}

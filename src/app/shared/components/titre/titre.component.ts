import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.scss']
})
export class TitreComponent {

  @Input()

  titre!: string


}

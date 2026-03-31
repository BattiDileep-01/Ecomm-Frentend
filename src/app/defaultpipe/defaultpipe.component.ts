import { Component } from '@angular/core';
import { ReversePipe } from '../reverse.pipe';

@Component({
  selector: 'app-defaultpipe',
  standalone: true,
  imports: [ReversePipe],
  templateUrl: './defaultpipe.component.html',
  styleUrl: './defaultpipe.component.css'
})
export class DefaultpipeComponent {

   name: String = "dileep singh";

}

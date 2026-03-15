import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { tools } from '../../data/constant.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  tools = tools;
}

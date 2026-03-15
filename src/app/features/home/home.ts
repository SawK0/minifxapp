import { Component } from '@angular/core';
import { categories, tools } from '../../shared/data/constant.data';
import { Tool } from '../../shared/models/common.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  categories = categories;
  tools = tools;

  getToolsByCategory(categoryId: number): Tool[] {
    return this.tools.filter(tool => tool.categoryIds.includes(categoryId));
  }

  getFeaturedTools(): Tool[] {
    return this.tools.slice(0, 4);
  }
}

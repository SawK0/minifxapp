export interface Tool {
  id: string;
  name: string;
  description: string;
  icon?: string;
  categoryIds: number[];
  route: string;
  favorite?: boolean;
}

export interface Category {
  id: number;
  name: string;
  icon?: string;
  description?: string;
}

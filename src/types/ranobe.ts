export interface Ranobe {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  tags: Tag[];
}

interface Tag {
  id: number;
  name: string;
}

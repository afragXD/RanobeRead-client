export interface RanobeTop {
  id: number;
  name: string;
  rating: number;
  image: string;
}
export interface Ranobe extends RanobeTop {
  description: string;
  country: Country;
  tags: Tag[];
}

interface Tag {
  id: number;
  name: string;
}

interface Country {
  id: number;
  name: string;
}

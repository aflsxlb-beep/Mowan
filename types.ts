
export interface MenuItem {
  name: string;
  price: number;
  note?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface ShopInfo {
  name: string;
  line: string;
  phone: string;
  address: string;
  note: string;
}

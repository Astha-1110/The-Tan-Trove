export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string | { [key: string]: any };
  category: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

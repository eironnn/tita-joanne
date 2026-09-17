export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
  category: string;
  popular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export type OrderType = 'delivery' | 'pickup';

export interface OrderDetails {
  orderType: OrderType;
  name: string;
  phone: string;
  address: string;
  notes: string;
  payment: 'cash' | 'card' | 'gcash';
}

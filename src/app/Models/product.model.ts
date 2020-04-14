export class Product {
  id?: number;
  name?: string;
  preco?: number;

  constructor(productform) {
    Object.assign(this, productform);
}
}

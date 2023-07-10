class Product{
 

  constructor(title, img, desc, price){
    this.title = title;
    this.imageUrl = img;
    this.description = desc;
    this.price = price;
  }

}

class elementAttribute{
  constructor(attrName, attrValue){
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component{

  constructor(renderHookId){
    this.hookId = renderHookId
  }

  createRootElement(tag, cssClasses, attribute){
    const rootElement = document.createElement(tag);
    if(cssClasses){
      rootElement.className = cssClasses
    }

    if(attribute && attribute.length > 0){
      for(const atrr of attribute){
        rootElement.setAttribute(atrr.name, atrr.value)
      }
    }
    document.getElementById(this.hookId).append(rootElement)
    return rootElement
  }
}

class ShoppingCart extends Component{
  items = [];


  set curtItems(value){
    this.items = value
    this.totalCartPrice.innerHTML = ` <h2>Total: \$${this.totalAmount.toFixed(2)}</h2>
    `
  }

  get totalAmount(){
    const sum = this.items.reduce((prevValue, curItem) =>{
      return prevValue + curItem.price;
    } , 0)
    return sum;
  }

  constructor(renderHookId){
    super(renderHookId)
  }
  
  addItem(item){
    const updatedItems = [...this.items]
    updatedItems.push(item)
    this.curtItems = updatedItems
    
  }

  render(){
    const cartEl = this.createRootElement('section', 'cart')
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    this.totalCartPrice = cartEl.querySelector('h2');
    return cartEl;
  }
}



class ProductItem extends Component{
  constructor(product) {
    this.product = product
  }

  addToCart(){
    App.addProductToCart(this.product)
  }

  render(){
    const prodEl = this.createRootElement('li', 'product-item')
    
      prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;

      const addToCartBtn = prodEl.querySelector('button');
      addToCartBtn.addEventListener('click', this.addToCart.bind(this));
      return prodEl;
  }
}



class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'A carpet which you might like - or not.',
      89.99
    )
  ];

  constructor(){}

  render(){
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const product of this.products) {
      const productItem = new ProductItem(product);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}


class Shop{
  render(){
    const renderHook = document.getElementById('app');

    this.cart = new ShoppingCart('app');
    this.cart.render();

    const productList = new ProductList();
    const prodEl = productList.render()
    renderHook.append(prodEl)
  }
}

class App{
  static init(){

    const myShop = new Shop();
    myShop.render();
    this.cart = myShop.cart // Make instace property "this.cart" assign it to "cart" property from Shop class  
  }

  static addProductToCart(product){
    this.cart.addItem(product)
  }
}

App.init()

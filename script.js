// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 
// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

const sectionItems = document.querySelector('.items');
const olCartItems = document.querySelector('.cart__items');
const buttonEmptyCart = document.querySelector('.empty-cart');
const totalPrice = document.querySelector('.total-price');

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */

const totalNewSon = () => {
const allItemsCart = document.querySelectorAll('.cart__item');
let total = 0;
allItemsCart.forEach((item) => {
total += item.price;
});
totalPrice.innerText = total;
};
 
const buttonEmpty = () => {
olCartItems.innerHTML = '';
localStorage.removeItem('cartItems');
totalNewSon();
};
buttonEmptyCart.addEventListener('click', buttonEmpty);
 
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
 const cartItemClickListener = (event, id) => {
 event.target.remove();
 const getSaved = JSON.parse(getSavedCartItems()); 
 const indexCart = getSaved.findIndex((cart) => cart.id === id);
 getSaved.splice(indexCart, 1);
 saveCartItems(JSON.stringify(getSaved));
 totalNewSon();
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.price = price;
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', (event) => cartItemClickListener(event, id));
  return li;
};

const addCartItemLocalStorage = (product) => {
 if (localStorage.cartItems) {
  const getSavedCart = JSON.parse(getSavedCartItems());
  getSavedCart.push(product);
  saveCartItems(JSON.stringify(getSavedCart));
 } else {
  saveCartItems(JSON.stringify([product]));
 }
};

const addCartItem = async (id) => {
 const product = await fetchItem(id);
 olCartItems.appendChild(createCartItemElement(product));
 addCartItemLocalStorage(product);
 totalNewSon();
};
/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  const buttonCartItem = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  buttonCartItem.addEventListener('click', () => addCartItem(id));
  section.appendChild(buttonCartItem);

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

window.onload = async () => {
  const products = await fetchProducts();
  products.results.forEach((product) => {
    sectionItems.appendChild(createProductItemElement(product));
  });
  if (localStorage.cartItems) {
  const getSavedCart = JSON.parse(getSavedCartItems());
  getSavedCart.forEach((item) => {
    olCartItems.appendChild(createCartItemElement(item));
  });
  }
  totalNewSon();
};

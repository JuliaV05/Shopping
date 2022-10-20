const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Verifica se ao executar saveCartItems() com o argumento  "cartItem", o método localStorage.setItem é chamado', async () => {
    expect.assertions(1);
   await saveCartItems('cartItem')

   expect(localStorage.setItem).toHaveBeenCalled();
}) 

it('Verifica se ao executar saveCartItems() com o argumento  "cartItem", o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems()', async () => {
  expect.assertions(1);
 await saveCartItems('cartItem')

 expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'cartItem');
}) 

});

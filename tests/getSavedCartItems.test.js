const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Verifica se ao executar getSavedCartItems(), o método localStorage.setItem é chamado', async () => {
    expect.assertions(1);
   await getSavedCartItems()

   expect(localStorage.getItem).toHaveBeenCalled();
}) 

it('Verifica se ao executar saveCartItems() com o argumento  "cartItem", o método localStorage.setItem é chamado com o "cartItems" como parâmetro', async () => {
  expect.assertions(1);
 await getSavedCartItems('cartItems')

 expect(localStorage.getItem).toHaveBeenCalled();
}) 
  
});

require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('fetchProducts() deve ser uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })

  it('Execute a função com o argumento "computador" e teste se fetch foi chamada', async () => {
    expect.assertions(1);
   await fetchProducts('computador');

     expect(fetch).toHaveBeenCalled();
  });
});

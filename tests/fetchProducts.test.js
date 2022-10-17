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

  it('Verifica se a função fetchProducts() com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    expect.assertions(1);
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })

  it('Verifica se o retorno da função fetchProducts() com o argumento "computador" é uma estrutura de dados igual ao objeto "computadorSearch"', async () => {
    expect.assertions(1);
   expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })

  it('Verifica se ao chamar a função fetchProducts() sem argumento, retorna um erro com a mensagem "You must provide an url"', async () => {
    try {
       throw (fetchProducts);
   } catch(e) {
       console.log('You must provide an url');
   }
})
})
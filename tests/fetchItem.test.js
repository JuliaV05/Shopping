require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se fetchItem() é uma função', async () => {
    expect.assertions(1);   
    expect(await typeof fetchItem).toBe('function');
  })
  
  it('Executa fetchItem() com o  argumento "MLB1615760527", e se fetch foi chamada', async () => {
    expect.assertions(1);
   await fetchItem('MLB1615760527')

   expect(fetch).toHaveBeenCalled();
}) 

  it('Verifica se ao chamar a função fetchitem(), com o argumento "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    expect.assertions(1);  
  await fetchItem('MLB1615760527')

    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })

  it('Verifica se o retorno da função fetchItem() com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto "item"', async () => {
    expect.assertions(1);
   expect(await fetchItem('MLB1615760527')).toEqual(item);
  })

  it('Verifica se ao chamar a função fetchItem() sem argumento, retorna um erro com a mensagem "You must provide an url"', async () => {
    try {
      throw (fetchItem);
  } catch(e) {
      console.log('You must provide an url');
  }
  })
 });

const fetchProducts = async () => {
 const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
 
  const result = await fetch(url); 
  const resultJson = await result.json();

  return resultJson;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

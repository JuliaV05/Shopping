const fetchItem = async (ItemID) => {
  const url = `https://api.mercadolibre.com/items/${ItemID}`;
 
  const result = await fetch(url); 
  const resultJson = await result.json();

  return resultJson;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

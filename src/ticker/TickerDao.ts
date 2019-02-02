const tickerDao = {
  async selectTicker(): Promise<string> {
    return await fetch('https://blockchain.info/ticker?cors=true', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).catch((error: Error) => {
      throw error;
    }).then(response => {
      if (!response.ok) {
        throw response.json();
      }
      return response.json()
    });
  }
};

export default tickerDao;
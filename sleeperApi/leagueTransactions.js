const axios = require('axios');
const createFile = require('./helper/createFile');

module.exports = async () => {
  let transactions = [];
  let i = 1;
  while (i < 17) {
    const { data } = await axios.get(`https://api.sleeper.app/v1/league/320982275422429184/transactions/${i}`)

    const transactionObject = {
      week: `week ${i}`,
      transactions: data
    }

    transactions.push(transactionObject);

    i++
  }
  createFile('leagueTransactions.json', transactions);
}

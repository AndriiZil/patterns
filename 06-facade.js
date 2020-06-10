const SalesforceData = {
  Contacts: [
    { FirstName: 'Tom', id: 1, LastName: 'example', account: 1 },
    { FirstName: 'Jared', id: 2, LastName: 'example', account: 2 }
  ],
  Accounts: [{ Name: 'Example ltd', id: 1 }, { Name: 'Test ltd', id: 2 }]
};

class SalesforceFacade {
  constructor() {
    this._getContact = () => {};

    this._getAccounts = () => {
      return SalesforceData.Accounts.map(item => {
        return { name: item.Name, id: item.id };
      });
    };

    this._get = () => {};
  }

  get Accounts() {
    return this._getAccounts();
  }

  set Accounts(data) {

  }
}

const data = new SalesforceFacade();

data._getAccounts();

console.log(`Accounts: ${JSON.stringify(data.Accounts)}`);
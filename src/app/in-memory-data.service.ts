import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let wallets = [
      {
        name: "Test 1",
        code: 5413,
        currency: "eur",
        balance: 100,
        id: 1
      },
      {
        name: "Test 2",
        code: 4317,
        currency: "usd",
        balance: 267.88,
        id: 2
      },
      {
        name: "Test 3",
        code: 3741,
        currency: "uah",
        balance: 23,
        id: 3
      }
    ];
    let cards = [
      {
        name: "Card1",
        balance: 100,
        selected: false,
        id: 1
      },
      {
        name: "Card2",
        balance: 200,
        selected: false, 
        id: 2
      },
      {
        name: "Card3",
        balance: 300,
        selected: false, 
        id: 3
      },
      {
        name: "Card1",
        balance: 100,
        selected: false,
        id: 1
      },
      {
        name: "Card2",
        balance: 200,
        selected: false, 
        id: 2
      },
      {
        name: "Card3",
        balance: 300,
        selected: false, 
        id: 3
      },
      {
        name: "Card1",
        balance: 100,
        selected: false,
        id: 1
      },
      {
        name: "Card2",
        balance: 200,
        selected: false, 
        id: 2
      },
      {
        name: "Card3",
        balance: 300,
        selected: false, 
        id: 3
      },
      {
        name: "Card1",
        balance: 100,
        selected: false,
        id: 1
      }
    ];
    let currencies = [
      {
        name: "eur"
      },
      {
        name: "usd"
      },
      {
        name: "uah"
      }
    ]
    return { wallets, cards, currencies };
  }
}

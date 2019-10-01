const initState = {
  
  beer: [
    {
      id: "b1",
      name: "PBR",
      brewery: "Pabst Brewing",
      style: "Lager",
      abv: "2.4",
      price: 3,
      soldOut: false,
    },

    {
      id: "b2",
      name: "SuperFuzz",
      brewery: "Elysian Brewing",
      style: "Blood Orange Pale",
      abv: "5.2",
      price: 7,
      soldOut: false,
    },

    {
      id: "b3",
      name: "Apocalypse IPA",
      brewery: "10 Barrel Brewing",
      style: "India Pale Ale",
      abv: "2.4",
      price: 3,
      soldOut: false,
    }
  ],

  food: [
    {
      id: "f1",
      name: "Hamachi Sashimi",
      description: "Eight pieces of wild caught yellowtail tuna",
      price: 13,
      soldOut: false,
    },

    {
      id: "f2",
      name: "Hamachi Sashimi",
      description: "Eight pieces of wild caught yellowtail tuna",
      price: 13,
      soldOut: false,
    },

    {
      id: "f3",
      name: "Hamachi Sashimi",
      description: "Eight pieces of wild caught yellowtail tuna",
      price: 13,
      soldOut: false,
    },
  ]
}

const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_FOOD':
      console.log('created food', action);
    return state;

    case 'CREATE_BEER':
      console.log('created beer', action)
    return state
    
    default: 
    return state;
  }

}

export default menuReducer
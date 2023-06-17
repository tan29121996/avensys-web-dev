const { createStore, combineReducers } = require("redux")

//State
const chocolateData = {
    noOfChocolates: 20
}

const iceCreamData = {
    noOfIceCreams: 20
}

const cakeData = {
    noOfCakes: 30
}

//Action
function buyChocolate() {
    return {
        type: "BUY_CHOCOLATE"
    }
}

function buyIceCream() {
    return {
        type: "BUY_ICECREAM"
    }
}

function buyCake() {
    return {
        type: "BUY_CAKE"
    }
}

//Reducer
const chocolateReducer = (state = chocolateData, action) => {
  if (action.type === "BUY_CHOCOLATE") {
    return {
      noOfChocolates: state.noOfChocolates - 1
    };
  } else {
    return state;
  }
}

const iceCreamReducer = (state = iceCreamData, action) => {
    if (action.type === "BUY_ICECREAM") {
      return {
        noOfIceCreams: state.noOfIceCreams - 1
      };
    } else {
      return state;
    }
  };

  const cakeReducer = (state = cakeData, action) => {
    if (action.type === "BUY_CAKE") {
      return {
        noOfCakes: state.noOfCakes - 1
      };
    } else {
      return state;
    }
  };
  
const rootReducer = combineReducers({
  chocolate:chocolateReducer,
  iceCream: iceCreamReducer,
  cake:cakeReducer
})

//Redux Store
const bakery = createStore(rootReducer)

bakery.subscribe(() => {
    console.log(bakery.getState())
})

//Execute action
bakery.dispatch(buyChocolate())
bakery.dispatch(buyIceCream())
bakery.dispatch(buyCake())


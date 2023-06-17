const { createStore } = require("redux")

//State
const initialData = {
    noOfLaptops: 40
}

//Action
function buyLaptop() {
    return {
        type: "BUY_LAPTOP"
    }
}

function sellOldLaptop() {
    return {
        type: "SELL_OLD_LAPTOP"
    }
}

//Reducer
const shopkeeper = (state = initialData, action) => {
    if (action.type === "BUY_LAPTOP") {
      return {
        noOfLaptops: state.noOfLaptops - 1
      };
    } else if (action.type === "SELL_OLD_LAPTOP") {
      return {
        noOfLaptops: state.noOfLaptops + 1
      };
    } else {
      return state;
    }
  };
  
//Redux Store
const mobileStore = createStore(shopkeeper)

mobileStore.subscribe(() => {
    console.log(mobileStore.getState())
})

//Execute action
mobileStore.dispatch(buyLaptop())
mobileStore.dispatch(sellOldLaptop())


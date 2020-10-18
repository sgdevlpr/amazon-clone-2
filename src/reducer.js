export const initialState = {
    basket: [],
  };
  
  // Selector
  export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
              };

        case "REMOVE_FROM_BASKET":
            // There is a code which will remove all the items that 
            // matches with the id. Such as if I add 3 books in
            // the basket and decides to remove 1 from the 
            // basket I will click the button and it should heve
            // just remove that particular book, But the thing 
            // that will be happen here is that it will remove
            // all 3 books from the basket as I have said that
            // remove the item from the basket that matches
            // with the id.......here goes the code

            // return {...state, 
            //( basket.filter(item => item.id !== action.id)}

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    'Cant remove product (id: ${action.id}) as its not in basket!'
                )
            }

            return{
                ...state,
                basket: newBasket
            }
              default:
                return state;
            }
          };
  
          export default reducer;
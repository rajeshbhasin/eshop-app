

export const initialState={
    basket:[]
}

export const getBasketTotal= (basket)=>{
    let s = 0
    let i = 0
    while (i<basket.length){
        s=s+ parseFloat(basket[i].price);
        i+=1
    }
    return s

}


const reducer = (state,action)=>{

    switch (action.type){
        case "ADD_TO_BASKET":
               return{
                   ...state,
                   basket:[...state.basket, action.item ]
               };
        case "REMOVE_FROM_BASKET":
            let i =0;
            let index = -1
            while (i<state.basket.length){
                
                if ((state.basket[i].id) === action.item.id){
                    index=i}
                i+=1
            }

            let newBasket = [...state.basket];
            if (index>=0){
                newBasket.splice(index,1);
            } else{
                console.warn("Cant remove product");
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }


}

export default reducer;
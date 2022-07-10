
export const initialCart = localStorage.cart ? JSON.parse(localStorage.cart) : [];

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            const item = state.find((i) => i.id === action.payload.id)
            if (item !== undefined) {
                item.qnt += 1;
                return state.map((i) => {
                    if (i.id === item.id) return item
                    return i
                })
                
            }
            return [
                ...state,
                action.payload
            ];
            
        case 'remove':
            return state.filter((i) =>
                i.id !== action.payload.id
            );

            
        case 'clear':
            return [];
            
        default:
            return state;
            
    }
}
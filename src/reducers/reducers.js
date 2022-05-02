const reducers = (state = [],action)=>{
    switch (action.type) {
        case 'ADD_CART':
            if(state.length===0)
            {   
                console.log('ว่าง')
                return [...state, action.data]
            }
            else{
                let check = 0
                state.map((value, index) => {
                        if (value.detail._id === action.data.detail._id) {

                            check = 1
                            value.amount += action.data.amount
                        }
                        return true
                    })

                if(check===1)
                {   
                    console.log('ตรง')
                    return state
                }
                else{
                    console.log('ไม่ตรง')
                    return [...state, action.data]
                }
                
                // if (state.indexOf(action.data.detail._id) !== -1) {
                //     return state
                // }
                // else{
                //     return state
                // }
                // state.map((value ,index) => {
                //     value.amount = 2
                // })
                // return [...state, action.data]
            }
        default:
            return state
    }
    // switch (action.type) {
    //     case 'ADD_CART':
    //         if (state.indexOf(action.data) !== -1) {
    //             return state
    //         }
    //         return [...state, action.data];
    //     case 'RESET_LIST':
    //       return [...state.items, []]
    //     default:
    //       return state;
    //   }

}

export default reducers
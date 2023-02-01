import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch(
                'https://redux-test-301ae-default-rtdb.firebaseio.com/cart.json',
            )

            if (!response.ok) {
                throw new Error('Could not fetch cart data')
            }

            return await response.json()
        }

        try {
            const cartData = await fetchData()
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error...',
                    message: 'Fetching cart data failed!'
                })
            )
        }
    }
}
export const sendCartData = (cart) => {
    return async (dispatch) => {
        // first setting loading message using dispatch in normal way
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data'
            }))

        // define request function
        const sendRequest = async () => {
            const response = await fetch(
                'https://redux-test-301ae-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT', //update
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity
                    })
                })

            if (!response.ok) {
                throw new Error('Sending Cart data failed')
            }
        }

        // making request
        try {
            await sendRequest()
            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!'
                }))
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error...',
                    message: 'Sending cart data failed!'
                })
            )
        }


    }
}
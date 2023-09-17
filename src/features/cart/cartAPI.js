export function addToCart(item) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/cart', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: { 'content-type': 'application/json' }
        })
        const data = await response.json()
        resolve({ data })
    }
    );
}
export function fetchItemsByUserId(userId) {
    return new Promise(async (resolve) => {
        //TODO- we will not hard-code our server URL here 
        const response = await fetch('http://localhost:8080/cart?user=' + userId)
        const data = await response.json()
        resolve({ data })
    }
    );
}
export function updateCart(update) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/cart/' + update.id, {
            method: 'PATCH',
            body: JSON.stringify(update),
            headers: { 'content-type': 'application/json' }
        })
        const data = await response.json()
        resolve({ data })
    }
    );
}
export function deleteItemFromCart(itemId) {
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/cart/' + itemId, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
        const data = await response.json()
        resolve({ data: { id: itemId } })
    }
    );
}
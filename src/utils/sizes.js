

export const sizes = {"Small": "S", "Medium": "M", "Large": "L", "Xtra-Large": "XL"};

export function addToCart (sku, size) {
    cartProducts.push(
        {"SKU": sku,
        "size": size}
    )
}

// export const useInventory

// export const isInInventory = (product) => {
//     const 
//     // inventory[product.sku] === product.sku

// }

// manage cart with state
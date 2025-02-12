const productList = document.getElementById('productList');

function addProduct() {
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const imageFile = document.getElementById('productImage').files[0];

    if (!name || !price || !imageFile) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    const productImage = document.createElement('img');
    productImage.src = URL.createObjectURL(imageFile);
    productImage.alt = name;
    productItem.appendChild(productImage);

    const productDetails = document.createElement('p');
    productDetails.textContent = `${name} - $${price}`;
    productItem.appendChild(productDetails);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.onclick = () => productList.removeChild(productItem);
    productItem.appendChild(deleteButton);

    productList.appendChild(productItem);

    document.getElementById('addProductForm').reset();
}

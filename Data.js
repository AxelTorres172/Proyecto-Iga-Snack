$(document).ready(function() {
    $('#productsTable').DataTable();
});

function editProduct(id) {
    alert(`Editando producto con ID: ${id}`);
}

function deleteProduct(id) {
    if (confirm(`¿Estás seguro de que deseas eliminar el producto con ID: ${id}?`)) {
        alert(`Producto con ID: ${id} eliminado.`);
    }
}

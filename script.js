document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelectorAll('.card');
    const totalPriceElement = document.querySelector('.total');

    function updateTotalPrice() {
        let total = 0;
        cartItems.forEach(item => {
            const unitPrice = parseFloat(item.querySelector('.unit-price').textContent.replace('$', '').trim());
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += unitPrice * quantity;
        });
        totalPriceElement.textContent = `${total.toFixed(2)} $`;
    }

    cartItems.forEach(item => {
        const plusBtn = item.querySelector('.fa-plus-circle');
        const minusBtn = item.querySelector('.fa-minus-circle');
        const deleteBtn = item.querySelector('.fa-trash-alt');
        const likeBtn = item.querySelector('.fa-heart');
        const quantitySpan = item.querySelector('.quantity');

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantitySpan.textContent = quantity + 1;
            updateTotalPrice();
        });

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 0) {
                quantitySpan.textContent = quantity - 1;
                updateTotalPrice();
            }
        });

        deleteBtn.addEventListener('click', () => {
            quantitySpan.textContent = 0;
            updateTotalPrice();
        });

        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('liked');
        });
    });

    updateTotalPrice();
});

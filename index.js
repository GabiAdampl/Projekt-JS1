const budgetForm = document.getElementById('budgetForm');
const amountInput = document.getElementById('amountInput');
const typeSelect = document.getElementById('typeSelect');
const budgetList = document.getElementById('budgetList');

// Funkcja do dodawania nowej pozycji na liście przychodów/wydatków
function addBudgetItem(amount, type) {
	const listItem = document.createElement('div');
	listItem.classList.add('budget-item');
	listItem.innerHTML = `
    <span class="amount">${amount} PLN</span>
    <span class="type">${type === 'income' ? 'Przychód' : 'Wydatek'}</span>
    <button class="edit">Edytuj</button>
    <button class="delete">Usuń</button>
  `;
	budgetList.appendChild(listItem);
}

budgetForm.addEventListener('submit', event => {
	event.preventDefault();
	const amount = parseFloat(amountInput.value);
	const type = typeSelect.value;

	if (!isNaN(amount) && amount > 0) {
		addBudgetItem(amount, type);
		amountInput.value = '';
	} else {
		alert('Wprowadź poprawną kwotę (wartość dodatnią).');
	}
});

// Funkcja do usuwania pozycji z listy przychodów/wydatków
budgetList.addEventListener('click', event => {
	if (event.target.classList.contains('delete')) {
		const listItem = event.target.parentElement;
		budgetList.removeChild(listItem);
	}
});

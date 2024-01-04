document.addEventListener('DOMContentLoaded', function() {
    const processorNames = ['Intel Core i7', 'AMD Ryzen 5', 'Intel Core i9', 'AMD Ryzen 7', 'Intel Xeon', 'AMD Threadripper'];
    const inputField = document.getElementById('processorName');
    const suggestionsContainer = document.getElementById('suggestions');

    inputField.addEventListener('input', function() {
        const input = inputField.value.toLowerCase();
        suggestionsContainer.innerHTML = '';
        if (input.length > 0) {
            const filteredSuggestions = processorNames.filter(name => name.toLowerCase().includes(input));
            filteredSuggestions.forEach(suggestion => {
                const div = document.createElement('div');
                div.textContent = suggestion;
                div.className = 'suggestion-item';
                div.onclick = function() {
                    inputField.value = suggestion;
                    suggestionsContainer.innerHTML = '';
                };
                suggestionsContainer.appendChild(div);
            });
            suggestionsContainer.style.display = filteredSuggestions.length > 0 ? 'block' : 'none';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });
});

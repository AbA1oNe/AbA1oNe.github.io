const options = {
    fruits: [
        {value: 'apple', text: 'Apple'},
        {value: 'banana', text: 'Banana'},
        {value: 'cherry', text: 'Cherry'}
    ],
    vegetables: [
        {value: 'carrot', text: 'Carrot'},
        {value: 'lettuce', text: 'Lettuce'},
        {value: 'spinach', text: 'Spinach'}
    ]
};

function updateSecondary() {
    const primarySelect = document.getElementById('primary');
    const secondarySelect = document.getElementById('secondary');
    const selectedValue = primarySelect.value;

    // Clear the secondary select list
    secondarySelect.innerHTML = '<option value="">Select an option</option>';

    if (options[selectedValue]) {
        options[selectedValue].forEach(option => {
            const newOption = document.createElement('option');
            newOption.value = option.value;
            newOption.text = option.text;
            secondarySelect.appendChild(newOption);
        });
    }
}

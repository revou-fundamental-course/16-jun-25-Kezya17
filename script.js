document.addEventListener('DOMContentLoaded', () => {
    // --- Area Calculation Elements ---
    const baseInput = document.getElementById('base');
    const heightInput = document.getElementById('height');
    const calculateAreaBtn = document.getElementById('calculateAreaBtn');
    const resetAreaBtn = document.getElementById('resetAreaBtn');
    const areaResultDiv = document.getElementById('areaResult');
    const baseError = document.getElementById('base-error');
    const heightError = document.getElementById('height-error');

    // --- Perimeter Calculation Elements ---
    const sideAInput = document.getElementById('sideA');
    const sideBInput = document.getElementById('sideB');
    const sideCInput = document.getElementById('sideC');
    const calculatePerimeterBtn = document.getElementById('calculatePerimeterBtn');
    const resetPerimeterBtn = document.getElementById('resetPerimeterBtn');
    const perimeterResultDiv = document.getElementById('perimeterResult');
    const sideAError = document.getElementById('sideA-error');
    const sideBError = document.getElementById('sideB-error');
    const sideCError = document.getElementById('sideC-error');

    // --- Helper Functions ---

    /**
     * Displays an error message for a given input field.
     * @param {HTMLElement} errorElement - The DOM element to display the error.
     * @param {string} message - The error message to show.
     */
    function showError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    /**
     * Clears the error message for a given input field.
     * @param {HTMLElement} errorElement - The DOM element whose error to clear.
     */
    function clearError(errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    /**
     * Validates a numerical input field.
     * @param {HTMLInputElement} inputElement - The input DOM element.
     * @param {HTMLElement} errorElement - The DOM element to display the error.
     * @returns {number|null} The parsed number if valid, otherwise null.
     */
    function validateInput(inputElement, errorElement) {
        const value = parseFloat(inputElement.value);
        if (isNaN(value) || value <= 0) {
            showError(errorElement, 'Input harus angka positif.');
            return null;
        }
        clearError(errorElement);
        return value;
    }

    // --- Area Calculation Logic ---

    calculateAreaBtn.addEventListener('click', () => {
        // Clear previous results and errors
        areaResultDiv.textContent = '';
        clearError(baseError);
        clearError(heightError);

        // Validate inputs
        const base = validateInput(baseInput, baseError);
        const height = validateInput(heightInput, heightError);

        // Proceed with calculation if both inputs are valid
        if (base !== null && height !== null) {
            const area = 0.5 * base * height;
            areaResultDiv.textContent = `Luas Segitiga: ${area}`;
        } else {
            areaResultDiv.textContent = 'Harap perbaiki input yang salah.';
            areaResultDiv.style.color = '#e74c3c'; // Make result text red for errors
        }
    });

    resetAreaBtn.addEventListener('click', () => {
        baseInput.value = '';
        heightInput.value = '';
        areaResultDiv.textContent = '';
        clearError(baseError);
        clearError(heightError);
        areaResultDiv.style.color = '#2e7d32'; // Reset result text color
    });

    // Add input event listeners to clear errors as user types
    baseInput.addEventListener('input', () => clearError(baseError));
    heightInput.addEventListener('input', () => clearError(heightError));

    // --- Perimeter Calculation Logic ---

    calculatePerimeterBtn.addEventListener('click', () => {
        // Clear previous results and errors
        perimeterResultDiv.textContent = '';
        clearError(sideAError);
        clearError(sideBError);
        clearError(sideCError);

        // Validate inputs
        const sideA = validateInput(sideAInput, sideAError);
        const sideB = validateInput(sideBInput, sideBError);
        const sideC = validateInput(sideCInput, sideCError);

        // Proceed with calculation if all inputs are valid
        if (sideA !== null && sideB !== null && sideC !== null) {
            // Triangle inequality theorem: the sum of the lengths of any two sides of a triangle must be greater than the length of the third side.
            if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
                const perimeter = sideA + sideB + sideC;
                perimeterResultDiv.textContent = `Keliling Segitiga: ${perimeter}`;
            } else {
                perimeterResultDiv.textContent = 'Sisi-sisi ini tidak dapat membentuk segitiga yang valid.';
                perimeterResultDiv.style.color = '#e74c3c'; // Make result text red for errors
            }
        } else {
            perimeterResultDiv.textContent = 'Harap perbaiki input yang salah.';
            perimeterResultDiv.style.color = '#e74c3c'; // Make result text red for errors
        }
    });

    resetPerimeterBtn.addEventListener('click', () => {
        sideAInput.value = '';
        sideBInput.value = '';
        sideCInput.value = '';
        perimeterResultDiv.textContent = '';
        clearError(sideAError);
        clearError(sideBError);
        clearError(sideCError);
        perimeterResultDiv.style.color = '#2e7d32'; // Reset result text color
    });

    // Add input event listeners to clear errors as user types
    sideAInput.addEventListener('input', () => clearError(sideAError));
    sideBInput.addEventListener('input', () => clearError(sideBError));
    sideCInput.addEventListener('input', () => clearError(sideCError));
});

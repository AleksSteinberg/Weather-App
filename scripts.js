document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    const clearIcon = document.querySelector('.clear-icon');

    // Функция для отображения/скрытия иконок
    function toggleIcons() {
        if (searchInput.value !== '') {
            searchIcon.style.display = 'none';
            clearIcon.style.display = 'block';
        } else {
            searchIcon.style.display = 'block';
            clearIcon.style.display = 'none';
        }
    }

    // Обработчик события ввода текста в поле ввода
    searchInput.addEventListener('input', function() {
        toggleIcons();
        console.log(searchInput.value);
    });

    // Обработчик события клика по иконке очистки
    clearIcon.addEventListener('click', function() {
        searchInput.value = '';
        toggleIcons();
    });
});

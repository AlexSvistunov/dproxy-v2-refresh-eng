let elementsToFix1 = document.querySelectorAll('.guide-content__field-json, .guide-content__header, .guide-content__body');

elementsToFix1.forEach(function (element) {
    element.innerHTML = element.innerHTML.replace(/«/g, '"').replace(/»/g, '"').replace(/"'/g, '"').replace(/'"/g, '"');
});

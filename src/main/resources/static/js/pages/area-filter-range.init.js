var slider1 = document.getElementById("slider1");
noUiSlider.create(slider1, { start: [1], step: 1, range: { min: [1], max: [1000] } });
var slider1Value = document.getElementById("slider1-span");
slider1.noUiSlider.on("update", function (e, r) { slider1Value.innerHTML = e[r] });
slider1.noUiSlider.on("update", function (e, r) { document.getElementById("calorie").value = e[r] });
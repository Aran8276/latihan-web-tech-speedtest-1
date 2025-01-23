const imageValue = document.getElementById("imageValue");
const imageValue2 = document.getElementById("imageValue2");
const imageInput = document.getElementById("imageInput");
const payload = document.getElementById("payload");
const filterValue = document.getElementById("filterValue");

function handleImageChange() {
  console.log(imageValue.value);
  imageInput.src = `./assets/${imageValue.value}`;
  imageValue2.src = `./assets/${imageValue.value}`;
}

function removePayloadClasses() {
  payload.classList.remove("lighten");
  payload.classList.remove("darken");
  payload.classList.remove("default");
}

function handleFilterChange() {
  console.log(filterValue.value);
  removePayloadClasses();
  if (filterValue.value == "lighten") {
    payload.classList.add("lighten");
  } else if (filterValue.value == "darken") {
    payload.classList.add("darken");
  } else {
    payload.classList.add("default");
  }
}

//change these to update store
//lashgrid array

const state = {
  loading: false,
  visible: false,
  popupText: "Checking Inventory Level...",
  name: "",
  email: "",
  submitted: false,
};

const selectors = {
  openPopup: document.querySelector(".test-btn"),
  section: document.querySelector(".section"),
  loader: document.querySelector(".loading_container"),
  form: document.querySelector(".form"),
  close: document.querySelectorAll(".close"),
  lashGrid: document.querySelector(".lash_grid"),
  inventoryContainer: document.querySelector(".inventory_container"),
};

//loading state
function changeText(text, time) {
  const loaderText = document.querySelector(".loading_text");
  setTimeout(() => {
    loaderText.textContent = state.popupText;
  }, time);
}

function removeLoader() {
  state.loading = false;
  state.popupText = "Checking Inventory Level...";
  changeText("", 0);
  clearForm();
  const loader = selectors.loader;
  if (!loader.classList.contains("hidden")) {
    loader.classList.toggle("hidden");
  }
}

function showLoader() {
  const loader = selectors.loader;
  if (loader.classList.contains("hidden")) {
    loader.classList.toggle("hidden");
    setTimeout(() => {
      removeLoader();
    }, 5000);
  }
}
/////////////////////////

//form state
function showForm() {
  const form = selectors.form;
  if (form.classList.contains("hidden")) {
    form.classList.toggle("hidden");
  }
}
function hideForm() {
  const form = selectors.form;
  if (!form.classList.contains("hidden")) {
    form.classList.toggle("hidden");
  }
}

function clearForm() {
  state.name = "";
  state.email = "";
}

function onChange(e) {
  if (e.target.name === "name") {
    state.name = e.target.value;
  }
  if (e.target.name === "email") {
    state.email = e.target.value;
  }
}

function handleSubmit(e) {
  e.preventDefault();

  console.log("email", state.email);
  if (state.name !== "" && state.email !== "") {
    state.loading = true;
    hideForm();
    showLoader();
    state.popupText = "Saving Account Info...";
    changeText("Saving Account Info...", 0);
    console.log(state.loading);
    setTimeout(() => {
      if (!state.loading) handleInventory();
    }, 5000);
  }
}
////////////////////////////

//inventory state
function handleInventory() {
  const inventory = selectors.inventoryContainer;
  if (inventory.classList.contains("hidden")) {
    inventory.classList.toggle("hidden");
  } else {
    inventory.classList.toggle("hidden");
  }
}
////

//popup state
function closePopup() {
  state.loading = false;
  state.visible = false;
  state.submitted = false;
  state.popupText = "Checking Inventory Level...";
  state.name = "";
  state.email = "";
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  clearTimeout();
  if (this.closest("form")) {
    hideForm();
  }
  if (this.closest(".inventory_container")) {
    handleInventory();
  }
}

const handlePopup = () => {
  selectors.openPopup.addEventListener("click", () => {
    handleState();
  });
  selectors.close.forEach((btn) => btn.addEventListener("click", closePopup));
};

const handleDate = () => {
  const dateDisplay = document.querySelectorAll(".date-display");
  const tenDaysFromNow = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
  console.log(tenDaysFromNow.toString().split(" "));
  const splitDate = tenDaysFromNow.toString().split(" ");
  dateDisplay.forEach(
    (display) => (display.textContent = splitDate.slice(0, 3).join(" "))
  );
};
////////////////////////////////////////////

//initial state
const handleState = () => {
  state.loading = true;
  state.visible = true;

  //initial popup
  if (state.loading && state.visible) {
    showLoader();
    state.popupText = "Reserving Inventory...";
    changeText("Reserving Inventory...", 2500);
  }
  //handle text change in beginning
  setTimeout(() => {
    console.log(state.loading);
    if (!state.loading && state.visible) showForm();
  }, 5000);
};

const main = () => {
  console.log("loaded");
  handlePopup();
  handleDate();
};

window.addEventListener("load", main);

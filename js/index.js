//change these to update store
//lashgrid array
const inventoryArray = [
  {
    name: "milf",
    type: "lash set",
    text: `Whether you're a hot mama or a 
          lash enthusiast, these MILF lashes 
          will have you looking hot af on the 
          daily made with all natural fibers 
          for that effortless look.`,
    offer: `IN STORE: $39 \n 
          THIS OFFER $24`,
    img: "milf.png",
    bestSeller: true,
    imgs: ["framewave-left.png", "framewave-right.png"],
    tab: "best-seller-pink.png",
  },
  {
    name: "whisper",
    type: "lash set",
    text: `Shhh... You'll be looking sexy in 
      the most subtle of ways with our 
      Whisper Lash set. Don't Worry 
      Your secret's safe with us.`,
    offer: `IN STORE: $39 \n 
          THIS OFFER $24`,
    img: "whisper.png",
    bestSeller: true,
    imgs: ["frame-wave-blk-left.png", "frame-wave-blk-right.png"],
    tab: "best-seller-blk.png",
  },
  {
    name: "coy",
    type: "lash set",
    text: `Get the lash where simplicity 
      meets glamour to form the perfect 
      everyday look - hand-crafted 
      with all natural fibers.`,
    offer: `IN STORE: $39 \n 
          THIS OFFER $24`,
    img: "coy.png",
    bestSeller: false,
    imgs: [],
    tab: "",
  },
  {
    name: "high maintenance",
    type: "lash set",
    text: `Take it from day to night instantly 
      with our high maintenance lashes, 
      perfect for all those boujee babes 
      wanting to level up their lash game.`,
    offer: `IN STORE: $39 \n 
          THIS OFFER $24`,
    img: "highmaintenance.png",
    bestSeller: false,
    imgs: [],
    tab: "",
  },
  {
    name: "electric",
    type: "lash set",
    text: `Bring on some girly glamour 
      with our Electric Lashes, curated with 
      premium color for a stunning look.`,
    offer: `IN STORE: $39 \n 
          THIS OFFER $24`,
    img: "electric.png",
    bestSeller: false,
    imgs: [],
    tab: "",
  },
  {
    name: "housewife",
    type: "lash set",
    text: `Our Housewife set will have you 
      married to glamour in seconds, 
      made with all natural materials 
      that'll have him calling 
      your wifey on the daily.`,
    offer: `IN STORE: $39 \n 
          THIS OFFER $24`,
    img: "housewife.png",
    bestSeller: false,
    imgs: [],
    tab: "",
  },
  {
    name: "bombshell brow pen",
    type: "special",
    text: `This Microblading Pen is super 
      easy to use and all you need to get 
      beautiful brows at home. Give 
      your brows the ultimate makeover 
      and compliment all your 
      makeup looks.`,
    offer: `IN STORE: $30 \n 
      THIS OFFER $14`,
    img: "pen.png",
    bestSeller: false,
    imgs: [],
    tab: "",
  },
  
].reverse();

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

function loadLashGrid() {
  inventoryArray.map((item) => {
    const markup = `<div
        class="${item.bestSeller ? "column best_seller" : "column"}"
      >
        ${
          item.bestSeller
            ? //add a tab for best seller frame
              `<div class="best_seller_tab_container">
              <h4>best seller</h4>
            </div>`
            : ""
        }
  
        ${
          item.bestSeller
            ? item.imgs
                .map((img) => {
                  //adding a frame to best seller column
                  return `<img
                    src="../imgs/${img}"
                    alt="wave"
                    class="wave"
                  />`;
                })
                .join(" ")
            : ""
        }
        <div class="heading">
          <h3>${item.name}</h3>
          <h5>${item.type}</h5>
        </div>
        <div class="img_container">
          <img src="../imgs/${item.img}" alt="${item.name}" />
        </div>
        <div class="offer">
          <p>${item.offer}</p>
        </div>
        <div class="text_container">
          <p>${item.text}</p>
        </div>
        <button>Add To Bag</button>
      </div>`;

    const altMarkup = `<div class="two_col_container" >
      <div class="tab">
        <h4>People Also Add</h4>
      </div>
      <div class="two_col">
        <div class="col">
          <div class="img_container">
            <div class="bg_block"></div>
            <img src="../imgs/${item.img}" alt=${item.name} />
          </div>
        </div>
        <div class="col">
          <div class="heading">
            <h3>${item.name}</h3>
          </div>
          <div class="offer">
            <p>${item.offer}</p>
          </div>
          <div class="text_container">
            <p>${item.text}</p>
          </div>
          <button>Add To Bag</button>
        </div>
      </div>
    </div>`;

    return item.type === "lash set"
      ? selectors.lashGrid.insertAdjacentHTML("afterbegin", markup)
      : selectors.lashGrid.insertAdjacentHTML("afterbegin", altMarkup);
  });
}

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
  loadLashGrid();
};

window.addEventListener("load", main);

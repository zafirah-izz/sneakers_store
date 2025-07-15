
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/Product/air.png",
      },
      {
        code: "darkblue",
        img: "./img/Product/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/Product/jordan.png",
      },
      {
        code: "green",
        img: "./img/Product/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/Product/blazer.png",
      },
      {
        code: "green",
        img: "./img/Product/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/Product/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/Product/crater2.png",
      },
    ],
  },
  {
  id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/Product/hippie.png",
      },
      {
        code: "black",
        img: "./img/Product/hippie2.png",
      },
    ],
  },
  {
  id: 6,
    title: "Dunk",
    price: 120,
    colors: [
      {
        code: "brown",
        img: "./img/Product/hippie.png",
      },
      {
        code: "green",
        img: "./img/Product/hippie2.png",
      },
    ],
  },
    
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Ubah slider
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Produk yang dipilih
    choosenProduct = products[index];

    // Ubah kandungan produk utama
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // Ubah warna
    currentProductColors.forEach((colorEl, i) => {
      if (choosenProduct.colors[i]) {
        colorEl.style.backgroundColor = choosenProduct.colors[i].code;
        colorEl.style.display = "inline-block";
      } else {
        colorEl.style.display = "none"; // sembunyikan jika tiada warna kedua
      }
    });
  });
});

// Tukar imej ikut warna
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    if (choosenProduct.colors[index]) {
      currentProductImg.src = choosenProduct.colors[index].img;
    }
  });
});

// Tukar saiz dipilih
currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => {
      s.style.backgroundColor = "white";
      s.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// Paparkan borang pembayaran
const productButton = document.querySelector(".productButton");
const sliderButtons = document.querySelectorAll(".buyButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// Klik butang utama (bawah)
if (productButton) {
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });
}

// Klik mana-mana butang BUY NOW pada slider
sliderButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    payment.style.display = "flex";
  });
});

// Tutup borang
if (close) {
  close.addEventListener("click", () => {
    payment.style.display = "none";
  });
}


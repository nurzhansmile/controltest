const cardsData = [
  {
    id: 1,
    title: "Ноутбук Lenovo",
    description: "Мощный ноутбук для работы и учебы",
    image: "https://cdn.27.ua/original/1f/2d/1187629_13.jpeg",
  },
  {
    id: 2,
    title: "Смартфон Samsung",
    description: "Современный смартфон с отличной камерой",
    image:
      "https://dicentre.ru/wa-data/public/shop/products/05/28/22805/images/31528/31528.970.jpg",
  },
  {
    id: 3,
    title: "Наушники Sony",
    description: "Беспроводные наушники с шумоподавлением",
    image:
"https://sonycenter.kz/image/cache/catalog/products/new_img/audio/whch520/naushniki-sony-whch520-26-600x600.png"  },
  {
    id: 4,
    title: "Часы Apple Watch",
    description: "Умные часы для спорта и повседневной жизни",
    image:
      "https://object.pscloud.io/cms/cms/Photo/img_0_911_977_0_1_k806wv.jpg",
  },
  {
    id: 5,
    title: "Планшет Xiaomi",
    description: "Легкий и удобный планшет для развлечений",
    image: "https://img.myipadbox.com/upload/store/product_l/EDA005901901A.jpg",
  },
  {
    id: 3,
    title: "Наушники Sony",
    description: "Беспроводные наушники с шумоподавлением",
    image:"https://sonycenter.kz/image/cache/catalog/products/new_img/audio/whch520/naushniki-sony-whch520-26-600x600.png"
  },
  {
    id: 1,
    title: "Ноутбук Lenovo",
    description: "Мощный ноутбук для работы и учебы",
    image: "https://cdn.27.ua/original/1f/2d/1187629_13.jpeg",
  },
  {
    id: 2,
    title: "Смартфон Samsung",
    description: "Современный смартфон с отличной камерой",
    image:
      "https://dicentre.ru/wa-data/public/shop/products/05/28/22805/images/31528/31528.970.jpg",
  },
  {
    id: 2,
    title: "Смартфон Samsung",
    description: "Современный смартфон с отличной камерой",
    image:
      "https://dicentre.ru/wa-data/public/shop/products/05/28/22805/images/31528/31528.970.jpg",
  },
  {
    id: 4,
    title: "Часы Apple Watch",
    description: "Умные часы для спорта и повседневной жизни",
    image:
      "https://object.pscloud.io/cms/cms/Photo/img_0_911_977_0_1_k806wv.jpg",
  },
  {
    id: 5,
    title: "Планшет Xiaomi",
    description: "Легкий и удобный планшет для развлечений",
    image: "https://img.myipadbox.com/upload/store/product_l/EDA005901901A.jpg",
  },
  {
    id: 1,
    title: "Ноутбук Lenovo",
    description: "Мощный ноутбук для работы и учебы",
    image: "https://cdn.27.ua/original/1f/2d/1187629_13.jpeg",
  },
  
];

const cards = document.querySelector(".cards");

for (let i = 0; i < cardsData.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.alignItems = "center";
  card.style.justifyContent = "space-around";

  cards.appendChild(card);
  const title = document.createElement("h3");
  title.textContent = cardsData[i].title;
  title.classList.add("title");
  card.appendChild(title);

  const imgElement = document.createElement("img");
  imgElement.src = cardsData[i].image;
  imgElement.style.width = "250px";
  card.appendChild(imgElement);

  const descriptionCard = document.createElement("p");
  descriptionCard.classList.add = "descriptionCard";
  descriptionCard.textContent = cardsData[i].description;
  descriptionCard.style.textAlign = "center";
  card.appendChild(descriptionCard);
}

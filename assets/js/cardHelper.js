const cardData = [
  {
    imgSrc: "./assets/images/png/case-63.png",
    altText: "case-63",
    description: "Mindful Voices Conversations that Inspire.",
    category: "Marketing",
  },
  {
    imgSrc: "./assets/images/png/marketing.png",
    altText: "marketing",
    description: "Mindful Voices",
    category: "Marketing",
  },
  {
    imgSrc: "./assets/images/png/digress.png",
    altText: "digress",
    description:
      "Mindful Voices Conversations that Inspire, Inform, and Ignite Change",
    category: "Startups",
  },
  {
    imgSrc: "./assets/images/png/hustle.png",
    altText: "hustle",
    description: "Mindful Voices Conversations that Inspire.",
    category: "Startups",
  },
  {
    imgSrc: "./assets/images/png/stolen.png",
    altText: "stolen",
    description: "Mindful Voices Conversations that Inspire.",
    category: "Customer Success",
  },
  {
    imgSrc: "./assets/images/png/heavyweight.png",
    altText: "heavyweight",
    description: "Mindful Voices ",
    category: "Customer Success",
  },
  {
    imgSrc: "./assets/images/png/create-like.png",
    altText: "create-like",
    description: "Mindful Voices ",
    category: "Customer Success",
  },
  {
    imgSrc: "./assets/images/png/science-vs.png",
    altText: "science-vs",
    description: "Mindful Voices Conversations that Inspire.",
    category: "Science",
  },
  {
    imgSrc: "./assets/images/png/another-bite.png",
    altText: "another-bite",
    description:
      "Mindful Voices Conversations that Inspire, Inform, and Ignite Change",
    category: "Science",
  },
  {
    imgSrc: "./assets/images/png/ballon-women.png",
    altText: "ballon-women",
    description: "Mindful Voices Conversations that Inspire.",
    category: "Science",
  },
  {
    imgSrc: "./assets/images/png/business.png",
    altText: "business",
    description:
      "Mindful Voices Conversations that Inspire, Inform, and Ignite Change",
    category: "Science",
  },
  {
    imgSrc: "./assets/images/png/manful-voice.png",
    altText: "manful-voice",
    description: "Mindful Voices Conversations that Inspire.",
    category: "Science",
  },
  {
    imgSrc: "./assets/images/png/the-lost-sister.png",
    category: "Science",
    altText: "the-lost-sister",
    description: "Mindful Voices ",
  },
  {
    imgSrc: "./assets/images/png/experiments.png",
    altText: "experiments",
    category: "Sales",
    description: "Mindful Voices Conversations that Inspire.",
  },
  {
    imgSrc: "./assets/images/png/ignite-change.png",
    altText: "ignite-change",
    category: "Sales",
    description:
      "Mindful Voices Conversations that Inspire, Inform, and Ignite Change",
  },
];

const renderCards = (category) => {
  return cardData
    .filter((card) => category === "All" || card.category === category)
    .map((card, index) => {
      return `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 inspiration_card" key=${index}>
      <div class="gradient_border h-100">
        <div class="card_box overflow-hidden h-100">
          <img src="${card.imgSrc}" class="common_card_img w-100" alt="${card.altText}">
          <div class="card_txt lh_110 text-center fw-medium color_secondary">
            ${card.description}
          </div>
        </div>
        </div>
      </div>
    `;
    })
    .join("");
};

document.addEventListener("DOMContentLoaded", () => {
  const cardsRow = document.querySelector(".cards_row");
  const categoryButtons = document.querySelectorAll(".nav-link");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.textContent; // Get the category name from button text
      cardsRow.innerHTML = renderCards(category);
    });
  });

  // Initial render of all cards
  cardsRow.innerHTML = renderCards("All");
});

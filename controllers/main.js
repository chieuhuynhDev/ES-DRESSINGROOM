document.addEventListener("DOMContentLoaded", () => {
  const data = {
    topClothes: [
      {
        name: "Top Cloth 1",
        img: "../assets/images/clothes/topcloth1.png",
        thumb: "../assets/images/clothes/topcloth1_show.jpg",
      },
      {
        name: "Top Cloth 2",
        img: "../assets/images/clothes/topcloth2.png",
        thumb: "../assets/images/clothes/topcloth2_show.jpg",
      },
    ],
    botClothes: [
      {
        name: "Bot Cloth 1",
        img: "../assets/images/clothes/botcloth1.png",
        thumb: "../assets/images/clothes/botcloth1_show.jpg",
      },
      {
        name: "Bot Cloth 2",
        img: "../assets/images/clothes/botcloth2.png",
        thumb: "../assets/images/clothes/botcloth2_show.jpg",
      },
    ],
    shoes: [
      {
        name: "Shoes 1",
        img: "../assets/images/clothes/shoes1.png",
        thumb: "../assets/images/clothes/shoes1_show.jpg",
      },
      {
        name: "Shoes 2",
        img: "../assets/images/clothes/shoes2.png",
        thumb: "../assets/images/clothes/shoes2_show.jpg",
      },
    ],
    handBags: [
      {
        name: "HandBag 1",
        img: "../assets/images/clothes/handbag1.png",
        thumb: "../assets/images/clothes/handbag1_show.jpg",
      },
      {
        name: "HandBag 2",
        img: "../assets/images/clothes/handbag2.png",
        thumb: "../assets/images/clothes/handbag2_show.jpg",
      },
    ],
    necklaces: [
      {
        name: "Necklace 1",
        img: "../assets/images/clothes/necklace1.png",
        thumb: "../assets/images/clothes/necklace1_show.jpg",
      },
      {
        name: "Necklace 2",
        img: "../assets/images/clothes/necklace2.png",
        thumb: "../assets/images/clothes/necklace2_show.jpg",
      },
    ],
    hairStyle: [
      {
        name: "Hair Style 1",
        img: "../assets/images/clothes/hairstyle1.png",
        thumb: "../assets/images/clothes/hairstyle1_show.jpg",
      },
      {
        name: "Hair Style 2",
        img: "../assets/images/clothes/hairstyle2.png",
        thumb: "../assets/images/clothes/hairstyle2_show.jpg",
      },
    ],
    backgrounds: [
      {
        name: "Background 1",
        img: "../assets/images/background/background1.jpg",
        thumb: "../assets/images/background/background1_thumb.jpg",
      },
      {
        name: "Background 2",
        img: "../assets/images/background/background2.jpg",
        thumb: "../assets/images/background/background2_thumb.jpg",
      },
    ],
  };

  function renderItems(category, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    data[category].forEach((item) => {
      const card = `
                <div class="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src="${item.thumb}" alt="${item.name}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${item.name}</h5>
                            <button class="btn btn-primary try-btn" data-img="${item.img}" data-category="${category}">Thử đồ</button>
                        </div>
                    </div>
                </div>
            `;
      container.insertAdjacentHTML("beforeend", card);
    });
  }

  function applyItem(imgSrc, category) {
    const modelImage = document.getElementById("modelImage");
    modelImage.src = imgSrc;
  }

  document.querySelectorAll(".try-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const imgSrc = event.target.getAttribute("data-img");
      const category = event.target.getAttribute("data-category");
      applyItem(imgSrc, category);
    });
  });

  // Render items when DOM is loaded
  renderItems("topClothes", "topClothes");
  renderItems("botClothes", "botClothes");
  renderItems("shoes", "shoes");
  renderItems("handBags", "handBags");
  renderItems("necklaces", "necklaces");
  renderItems("hairStyle", "hairStyle");
  renderItems("backgrounds", "backgrounds");

  // Add event listener to dynamically added buttons
  document.addEventListener("click", function (event) {
    if (event.target.matches(".try-btn")) {
      const imgSrc = event.target.getAttribute("data-img");
      const category = event.target.getAttribute("data-category");
      applyItem(imgSrc, category);
    }
  });
});

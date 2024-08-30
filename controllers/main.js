document.addEventListener("DOMContentLoaded", function () {
  // Fetch dữ liệu từ file JSON
  fetch("../data/Data.json")
    .then((response) => response.json())
    .then((data) => {
      renderNavPills(data.navPills);
      renderItems("topclothes");
    })
    .catch((error) => console.error("Error fetching data:", error));
});

// render title clothes
let renderNavPills = (navPills) => {
  const navContainer = document.getElementById("nav-pills-container");
  navPills.forEach((pill) => {
    const navItem = document.createElement("a");
    navItem.classList.add("nav-item", "nav-link");
    navItem.setAttribute("id", pill.tabName);
    navItem.setAttribute("data-toggle", "tab");
    navItem.setAttribute("href", `#${pill.tabName}`);
    navItem.innerText = pill.showName;

    navItem.addEventListener("click", () => {
      // Lấy type từ data-type của pill
      const type = pill.type;
      console.log("🚀 ~ navItem.addEventListener ~ id:", type);

      // Gọi hàm renderItems với type tương ứng
      renderItems(type);
    });

    navContainer.appendChild(navItem);
  });
};

let renderItems = (type) => {
  console.log("🚀 ~ renderItems ~ type:", type);

  fetch("../data/Data.json")
    .then((response) => response.json())
    .then((data) => {
      const items = data.tabPanes.filter((item) => item.type === type);
      const container = document.getElementById("tab-content-container");
      container.innerHTML = ""; // Clear nội dung hiện tại

      items.forEach((item) => {
        const itemHtml = `
      <div class="col-md-4">
                      <div class="card">
                          <img src="${item.imgSrc_jpg}" alt="${item.name}">
                          <div class="card-body text-center">
                             <h3>${item.name}</h3>
                              <button class="btn btn-primary try-btn" onclick="tryOnItem('${item.imgSrc_png}','${item.type}')">Thử đồ</button>
                          </div>
                      </div>
                  </div>
      `;
        container.innerHTML += itemHtml;
      });
    });
};

let tryOnItem = (imgSrc, type) => {
  console.log("🚀 ~ tryOnItem ~ imgSrc:", imgSrc, " ~ type:", type);

  // Xác định phần tử HTML dựa trên type
  const modelPart = document.querySelector(`.${type}`);

  console.log("🚀 ~ tryOnItem ~ modelPart:", modelPart);
  if (modelPart) {
    modelPart.style.backgroundImage = `url(${imgSrc})`;
  }
};

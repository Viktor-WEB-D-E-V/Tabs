const tabsParentEl = document.querySelector(".header-items"),
  tabs = document.querySelectorAll(".header-item"),
  tabsContent = document.querySelectorAll(".tab-content");

function hiddenTab() {
  tabsContent.forEach((e) => {
    e.classList.add("hidden");
    e.classList.remove("show");
  });
  tabs.forEach((e) => {
    e.classList.remove("active");
  });
}

function showTab(i = 0) {
  tabsContent[i].classList.add("show");
  tabs[i].classList.add("active");
}
hiddenTab();
showTab();

tabsParentEl.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.classList.contains("header-item")) {
    tabs.forEach((e, i) => {
      if (target == e) {
        console.log(e);
        hiddenTab();
        showTab(i);
      }
    });
  }
});

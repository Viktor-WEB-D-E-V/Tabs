const tabsParentEl = document.querySelector(".header-items"),
  tabs = document.querySelectorAll(".header-item"),
  tabsContent = document.querySelectorAll(".tab-content");

console.log(tabsContent);

function hiddenTab() {
  tabsContent.forEach((e) => {
    e.classList.add("hidden");
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

//============================================================TAB-START
const tabBtn = document.querySelectorAll('.services__tab-btn')
const tabItem = document.querySelectorAll('.services__tab-item')

tabBtn.forEach(tabClick);

function tabClick(item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('tab-active')) {

      tabBtn.forEach(function (item) {
        item.classList.remove('tab-active');
      });

      tabItem.forEach(function (item) {
        item.classList.remove('tab-active');
      });

      currentBtn.classList.add('tab-active');
      currentTab.classList.add('tab-active');
    }
  })
}
//============================================================TAB-END
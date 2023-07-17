var sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');
sideLinks.forEach(function (item) {
    var li = item.parentElement;
    item.addEventListener('click', function () {
        sideLinks.forEach(function (i) {
            i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
    });
});
var menuBar = document.querySelector('.content nav .bx.bx-menu');
var sideBar = document.querySelector('.sidebar');
menuBar === null || menuBar === void 0 ? void 0 : menuBar.addEventListener('click', function () {
    sideBar === null || sideBar === void 0 ? void 0 : sideBar.classList.toggle('close');
});
var searchBtn = document.querySelector('.content nav form .form-input button');
var searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
var searchForm = document.querySelector('.content nav form');
searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm === null || searchForm === void 0 ? void 0 : searchForm.classList.toggle('show');
        if (searchForm === null || searchForm === void 0 ? void 0 : searchForm.classList.contains('show')) {
            searchBtnIcon === null || searchBtnIcon === void 0 ? void 0 : searchBtnIcon.classList.replace('bx-search', 'bx-x');
        }
        else {
            searchBtnIcon === null || searchBtnIcon === void 0 ? void 0 : searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});
window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
        sideBar === null || sideBar === void 0 ? void 0 : sideBar.classList.add('close');
    }
    else {
        sideBar === null || sideBar === void 0 ? void 0 : sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon === null || searchBtnIcon === void 0 ? void 0 : searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm === null || searchForm === void 0 ? void 0 : searchForm.classList.remove('show');
    }
});
var toggler = document.getElementById('theme-toggle');
toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    }
    else {
        document.body.classList.remove('dark');
    }
});

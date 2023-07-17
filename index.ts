const sideLinks = document.querySelectorAll<HTMLAnchorElement>('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement!;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement!.classList.remove('active');
        });
        li.classList.add('active');
    });
});

const menuBar = document.querySelector<HTMLElement>('.content nav .bx.bx-menu');
const sideBar = document.querySelector<HTMLElement>('.sidebar');

menuBar?.addEventListener('click', () => {
    sideBar?.classList.toggle('close');
});

const searchBtn = document.querySelector<HTMLButtonElement>('.content nav form .form-input button');
const searchBtnIcon = document.querySelector<HTMLElement>('.content nav form .form-input button .bx');
const searchForm = document.querySelector<HTMLElement>('.content nav form');

searchBtn?.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm?.classList.toggle('show');
        if (searchForm?.classList.contains('show')) {
            searchBtnIcon?.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon?.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar?.classList.add('close');
    } else {
        sideBar?.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon?.classList.replace('bx-x', 'bx-search');
        searchForm?.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle') as HTMLInputElement;

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});
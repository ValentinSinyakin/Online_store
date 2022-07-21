import * as noUiSlider from 'nouislider';
import './global.css';
import data from './data'
import { setTheme } from 'colors';




/* -------------------slider------------------ */

const slider: noUiSlider.Instance = document.getElementById('range_clider') as noUiSlider.Instance;

if (slider) {
noUiSlider.create(slider!, {
    start: [500, 50000],
    connect: true,
    step: 1,
    range: {
        'min': [500],
        'max': [5000]
    }
});

const input0: HTMLElement | null = document.getElementById("input_0");
const input1: HTMLElement | null = document.getElementById("input_1");
const inputs: (HTMLElement | null)[] = [input0, input1];

slider.noUiSlider.on('update', function(values: number, handle: number){
        inputs[handle].value = Math.round(values[handle]);
    });

    const setSlider = (i, value) => {
        let arr= [null, null];
        arr[i] = value;

        slider.noUiSlider.set(arr)
    }
    inputs.forEach((el, index) => {
        el?.addEventListener('change', (e) => {
            setSlider(index,e.currentTarget.value)
        })
    })
}

/* ---------------------slider2-------------- */

const slider2: noUiSlider.Instance = document.getElementById('range_clider2') as noUiSlider.Instance;

if (slider2) {
noUiSlider.create(slider2, {
    start: [2000, 2022],
    connect: true,
    step: 1,
    range: {
        'min': [2000],
        'max': [2022]
    }
});

const input2: HTMLElement | null = document.getElementById("input_2");
const input3: HTMLElement | null = document.getElementById("input_3");
const inputs2: (HTMLElement | null)[] = [input2, input3];

slider2.noUiSlider.on('update', function(values: number, handle: number){
        inputs2[handle].value = Math.round(values[handle]);
    });

    const setSlider2 = (i, value) => {
        let arr= [null, null];
        arr[i] = value;

        slider2.noUiSlider.set(arr)
    }
    inputs2.forEach((el, index) => {
        el?.addEventListener('change', (e) => {
            setSlider2(index,e.currentTarget.value)
        })
    })
}




/* ----------------------------Активные кнопки для карточек--------------------------------- */


/* -------------------------------localStorage-------------------- */
class LocalStorageUtil {
    constructor() {
        this.KeyName = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.KeyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    putProducts(num) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(num);

        if(index === -1) {
            products.push(num);  
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }
    
        localStorage.setItem(this.KeyName, JSON.stringify(products));
        return {pushProduct, products}

    }
}
const localStorageUtil = new LocalStorageUtil();

/* ----------------------карточки---------------- */

const ROOT_PRODUCTS=document.getElementById('card');
const ROOT_HEADER=document.getElementById('header');
class Products {
   constructor() {
    this.classNameActive = 'products-element__btn_active';
    this.labelAdd = 'Добавить в корзину';
    this.labelRemove = 'Удалить из карзины';
   }
   
  handleSetlocationStorage(element, num) {
    const {pushProduct,products} = localStorageUtil.putProducts(num);

    if (pushProduct) {
        element.classList.add(this.classNameActive);
        element.innerHTML = this.labelRemove;
    } else {
        element.classList.remove(this.classNameActive);
        element.innerHTML = this.labelAdd;
    }
    headerPage.render(products.length);
  }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        data.forEach(({num, name, count, year, shape, color, size, favorite,src}) => {
            let activClass = '';
            let activeText = '';

            if (productsStore.indexOf(num) === -1) {
                activeText = this.labelAdd;
            } else {
                activClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

         htmlCatalog += `<li class = "products_card ${color} ${size} ${shape}">
         <img src="${src}" alt="img" >
            <span >${name}</span>
            <span>на складе:${count}</span>
            <span>${year}</span>
            <span>${shape}</span>
            
            <span>${size}</span>
            
            <button class = "products-element__btn${activClass}" onclick="productsPage.handleSetlocationStorage(this, '${num}');">
            ${activeText}
            </button>
                        </li> `;


        })
        const html = `
        <ul class = "products_container">
        ${htmlCatalog}
        </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}
const productsPage = new Products();
window.productsPage = productsPage;
productsPage.render();

/* ----------------------------------------corzina-------------------------- */
class Header {
    render(num) {
        const html = `
        <div class = "header_container">
        <div class = "header_title">Магазин Игрушек</div>
        <div class="search-box">
		<input type="text" class="search-txt" placeholder="Поиск">
		<a href="#" class="search-btn"><i class="fa fa-search" aria-hidden="true">💬</i></a>
	</div>
            <div class = "header_counter">
             Корзина💼: ${num} шт
            </div>
        </div>
        `;
        ROOT_HEADER.innerHTML = html;
    }
}
const headerPage = new Header();
const productsStore = localStorageUtil.getProducts();
window.headerPage = headerPage;
headerPage.render(productsStore.length);


/* ---------------------------фильтр по цветам---------------------------- */

const list = document.querySelector('.filtres_color');
const items = document.querySelectorAll('.products_card');

function filter() {
    list.addEventListener('click', event =>{
        const targetId = event.target.dataset.id
        console.log(targetId);

        switch(targetId) {
            case 'красный':
            getItems(targetId)
                break

            case 'синий':
                getItems(targetId)
                    break

                case 'белый':
                    getItems(targetId)
                    break

                    case 'зелёный':
                        getItems(targetId)
                    break
                    
        }
    } )
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
        item.style.display = 'flex'

    } else {
        item.style.display = 'none'
    }
    })
}

/* ----------------------фильтр по размеру--------------------------- */

const listSize = document.querySelector('.filtres_size');

function filterSize() {
    listSize.addEventListener('click', event =>{
        const targetIdSize = event.target.dataset.id
        console.log(targetIdSize);

        switch(targetIdSize) {
            case 'малый':
                getItemsSize(targetIdSize)
                break

            case 'средний':
                getItemsSize(targetIdSize)
                    break

                case 'большой':
                    getItemsSize(targetIdSize)
                    break

                    
        }
    } )
}
filterSize()

function getItemsSize(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
        item.style.display = 'flex'

    } else {
        item.style.display = 'none'
    }
    })
}

/* --------------------фильтр по типу------------------------- */

const listType = document.querySelector('.filtres_type');

function filterType() {
    listType.addEventListener('click', event =>{
        const targetIdType = event.target.dataset.id
        console.log(targetIdType);

        switch(targetIdType) {
            case 'шар':
                getItemsType(targetIdType)
                break

            case 'колокольчик':
                getItemsType(targetIdType)
                    break

                case 'шишка':
                    getItemsType(targetIdType)
                    break

                    
        }
    } )
}
filterType()

function getItemsType(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
        item.style.display = 'flex'

    } else {
        item.style.display = 'none'
    }
    })
}

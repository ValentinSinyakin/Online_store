import * as noUiSlider from 'nouislider';
import './global.css';
import data from './data'




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


/* ----------------------карточки---------------- */

const ROOT_PRODUCTS=document.getElementById('card');
class Products {
 /*  constructor() {
    this.classNameActive = 'products-element__btn_active';
    this.labelAdd = 'Добавить в корзину';
    this.labelRemove = 'Удалить из корзины';
}

handlerSetLocatStorage(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);

    if (pushProduct) {
        element.classList.add(this.classNameActive);
        element.innerText = this.labelRemove;
    } else {
        element.classList.remove(this.classNameActive);
        element.innerText = this.labelAdd;
    }

    headerPage.render(products.length);
} */

    render() {
        let htmlCatalog = '';
        data.forEach(({num, name, count, year, shape, color, size, favorite}) => {

         htmlCatalog += `<li class = "products_card">
            <span class = "">${num}</span>
            <span >${name}</span>
            <span>${count}</span>
            <span>${year}</span>
            <span>${shape}</span>
            <span>${color}</span>
            <span>${size}</span>
            <span>${favorite}</span>
            <button class = "products-element__btn">Добавить в корзину</button>
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
productsPage.render();

/* ----------------------------Активные кнопки для карточек--------------------------------- */


alert("Доброго времени суток,прошу вас проверить работу в четверг,попал в неприятную жизненую ситуацию и не успел сделать работу.Заранее извиняюсь перед вами и благодарен за понимание");

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
        products.push(num);
        localStorage.setItem(this.KeyName, JSON.stringify(products));
        return {pushProduct,products}

    }
}
const localStorageUtil = new LocalStorageUtil();
localStorageUtil.putProducts('1');
localStorageUtil.putProducts('2');
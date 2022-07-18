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


/* document.querySelector('.content').innerHTML = `<div class = "card"></div>`
for(key in data) {
     let row = document.createElement('div')
    row.innerHTML =`<h1>${key}</h1>`
    document.querySelector('.card').appendChild(row);
} 
for( let i=0; i<data[key].lenght;i++){
    let row = document.createElement("p")
    row.innerHTML = `<p>${data}[key]</p>`
    document.querySelector('.card').appendChild(row);
} */

/* const data2 = {
   "number1": {
      "num": '1',
      "name": 'Большой шар с рисунком',
      "count": '2',
      "year": '1960',
      "shape": 'шар',
      "color": 'желтый',
      "size": 'большой',
      "favorite": false,
    },
    "number2": {
        "num": '2',
        "name": 'Большой шар с рисунком2',
        "count": '2',
        "year": '19602',
        "shape": 'шар2',
        "color": 'желтый2',
        "size": 'большой2',
        "favorite": false,
      },
 
}

let out = '';
for(let key in data2){
    out += 'Название ' + data2[key].name + '<br>';
}
document.getElementById('card')?.innerHTML = out;


console.log(data2); 
 */
const ROOT_PRODUCTS=document.getElementById('card');
/* const data = [
    {
      num: '1',
      name: 'Большой шар с рисунком',
      count: '2',
      year: '1960',
      shape: 'шар',
      color: 'желтый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '2',
      name: 'Зелёный шар с цветами',
      count: '5',
      year: '2000',
      shape: 'шар',
      color: 'зелёный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '3',
      name: 'Красный матовый шар',
      count: '3',
      year: '1990',
      shape: 'шар',
      color: 'красный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '4',
      name: 'Сосулька красная',
      count: '2',
      year: '1980',
      shape: 'фигурка',
      color: 'красный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '5',
      name: 'Красный виноград',
      count: '4',
      year: '1980',
      shape: 'фигурка',
      color: 'красный',
      size: 'средний',
      favorite: true,
    },
    {
      num: '6',
      name: 'Красный шар с рисунком',
      count: '6',
      year: '2010',
      shape: 'шар',
      color: 'красный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '7',
      name: 'Молочно-белый шар',
      count: '12',
      year: '1960',
      shape: 'шар',
      color: 'белый',
      size: 'средний',
      favorite: true,
    },
    {
      num: '8',
      name: 'Красный шар',
      count: '10',
      year: '2010',
      shape: 'шар',
      color: 'красный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '9',
      name: 'Колокольчик старинный',
      count: '2',
      year: '1950',
      shape: 'колокольчик',
      color: 'белый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '10',
      name: 'Белый шар ретро',
      count: '7',
      year: '1960',
      shape: 'шар',
      color: 'белый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '11',
      name: 'Шишка еловая белая',
      count: '11',
      year: '1960',
      shape: 'шишка',
      color: 'белый',
      size: 'малый',
      favorite: false,
    },
    {
      num: '12',
      name: 'Белый шар с цветами',
      count: '5',
      year: '1980',
      shape: 'шар',
      color: 'белый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '13',
      name: 'Шар расписной Река',
      count: '3',
      year: '1970',
      shape: 'шар',
      color: 'синий',
      size: 'большой',
      favorite: true,
    },
    {
      num: '14',
      name: 'Шар расписной Деревня',
      count: '4',
      year: '1970',
      shape: 'шар',
      color: 'синий',
      size: 'большой',
      favorite: true,
    },
    {
      num: '15',
      name: 'Колокольчик расписной',
      count: '3',
      year: '1970',
      shape: 'колокольчик',
      color: 'синий',
      size: 'средний',
      favorite: false,
    },
    {
      num: '16',
      name: 'Шишка расписная Пейзаж',
      count: '3',
      year: '1970',
      shape: 'шишка',
      color: 'синий',
      size: 'средний',
      favorite: true,
    },
    {
      num: '17',
      name: 'Шишка расписная',
      count: '7',
      year: '1970',
      shape: 'шишка',
      color: 'красный',
      size: 'средний',
      favorite: false,
    },
    {
      num: '18',
      name: 'Желтый шар с бантом',
      count: '2',
      year: '2010',
      shape: 'шар',
      color: 'желтый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '19',
      name: 'Желтый шар с паетками',
      count: '12',
      year: '1980',
      shape: 'шар',
      color: 'желтый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '20',
      name: 'Красный шар с бантом',
      count: '8',
      year: '1950',
      shape: 'шар',
      color: 'красный',
      size: 'средний',
      favorite: true,
    },
    {
      num: '21',
      name: 'Красный шар с звёздами',
      count: '4',
      year: '1970',
      shape: 'шар',
      color: 'красный',
      size: 'большой',
      favorite: true,
    },
    {
      num: '22',
      name: 'Шишка еловая золотая',
      count: '11',
      year: '1990',
      shape: 'шишка',
      color: 'желтый',
      size: 'малый',
      favorite: false,
    },
    {
      num: '23',
      name: 'Колокольчик старинный',
      count: '9',
      year: '1950',
      shape: 'колокольчик',
      color: 'желтый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '24',
      name: 'Снежинка изящная',
      count: '1',
      year: '1940',
      shape: 'снежинка',
      color: 'белый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '25',
      name: 'Розовый шар с блёстками',
      count: '12',
      year: '2010',
      shape: 'шар',
      color: 'красный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '26',
      name: 'Рубиново-золотой шар',
      count: '8',
      year: '1960',
      shape: 'шар',
      color: 'желтый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '27',
      name: 'Красный шар с узором',
      count: '4',
      year: '2010',
      shape: 'шар',
      color: 'красный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '28',
      name: 'Бордовый шар с узором',
      count: '10',
      year: '2010',
      shape: 'шар',
      color: 'красный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '29',
      name: 'Старинный шар с цветами',
      count: '5',
      year: '1950',
      shape: 'шар',
      color: 'желтый',
      size: 'большой',
      favorite: true,
    },
    {
      num: '30',
      name: 'Старинный шар с узором',
      count: '8',
      year: '1950',
      shape: 'шар',
      color: 'желтый',
      size: 'большой',
      favorite: true,
    },

  ]; */

class Products {
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
            <button>Добавить в корзину</button>
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

/* ------------------------------------------------------------- */
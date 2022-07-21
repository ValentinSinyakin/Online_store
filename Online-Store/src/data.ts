const data = [
    {
      num: '1',
      name: 'Большой шар с рисунком',
      count: '2400',
      year: '2001',
      shape: 'шар',
      color: 'желтый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '2',
      name: 'Зелёный шар с цветами',
      count: '5500',
      year: '2000',
      shape: 'шар',
      color: 'зелёный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '3',
      name: 'Красный матовый шар',
      count: '3500',
      year: '2002',
      shape: 'шар',
      color: 'красный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '4',
      name: 'Сосулька красная',
      count: '2500',
      year: '2004',
      shape: 'фигурка',
      color: 'красный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '5',
      name: 'Красный виноград',
      count: '4800',
      year: '2021',
      shape: 'фигурка',
      color: 'красный',
      size: 'средний',
      favorite: true,
    },
    {
      num: '6',
      name: 'Красный шар с рисунком',
      count: '4600',
      year: '2010',
      shape: 'шар',
      color: 'красный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '7',
      name: 'Молочно-белый шар',
      count: '1200',
      year: '2012',
      shape: 'шар',
      color: 'белый',
      size: 'средний',
      favorite: true,
    },
    {
      num: '8',
      name: 'Красный шар',
      count: '1000',
      year: '2010',
      shape: 'шар',
      color: 'красный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '9',
      name: 'Колокольчик старинный',
      count: '2800',
      year: '2005',
      shape: 'колокольчик',
      color: 'белый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '10',
      name: 'Белый шар ретро',
      count: '740',
      year: '2007',
      shape: 'шар',
      color: 'белый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '11',
      name: 'Шишка еловая белая',
      count: '11',
      year: '2007',
      shape: 'шишка',
      color: 'белый',
      size: 'малый',
      favorite: false,
    },
    {
      num: '12',
      name: 'Белый шар с цветами',
      count: '5555',
      year: '2008',
      shape: 'шар',
      color: 'белый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '13',
      name: 'Шар расписной Река',
      count: '3300',
      year: '2013',
      shape: 'шар',
      color: 'синий',
      size: 'большой',
      favorite: true,
    },
    {
      num: '14',
      name: 'Шар расписной Деревня',
      count: '4400',
      year: '2014',
      shape: 'шар',
      color: 'синий',
      size: 'большой',
      favorite: true,
    },
    {
      num: '15',
      name: 'Колокольчик расписной',
      count: '3333',
      year: '1970',
      shape: 'колокольчик',
      color: 'синий',
      size: 'средний',
      favorite: false,
    },
    {
      num: '16',
      name: 'Шишка расписная Пейзаж',
      count: '2300',
      year: '2006',
      shape: 'шишка',
      color: 'синий',
      size: 'средний',
      favorite: true,
    },
    {
      num: '17',
      name: 'Шишка расписная',
      count: '3700',
      year: '2002',
      shape: 'шишка',
      color: 'красный',
      size: 'средний',
      favorite: false,
    },
    {
      num: '18',
      name: 'Желтый шар с бантом',
      count: '2000',
      year: '2010',
      shape: 'шар',
      color: 'желтый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '19',
      name: 'Желтый шар с паетками',
      count: '1200',
      year: '2002',
      shape: 'шар',
      color: 'желтый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '20',
      name: 'Красный шар с бантом',
      count: '800',
      year: '2009',
      shape: 'шар',
      color: 'красный',
      size: 'средний',
      favorite: true,
    },
    {
      num: '21',
      name: 'Красный шар с звёздами',
      count: '4000',
      year: '2009',
      shape: 'шар',
      color: 'красный',
      size: 'большой',
      favorite: true,
    },
    {
      num: '22',
      name: 'Шишка еловая золотая',
      count: '1100',
      year: '2009',
      shape: 'шишка',
      color: 'желтый',
      size: 'малый',
      favorite: false,
    },
    {
      num: '23',
      name: 'Колокольчик старинный',
      count: '900',
      year: '2011',
      shape: 'колокольчик',
      color: 'желтый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '24',
      name: 'Снежинка изящная',
      count: '1000',
      year: '2013',
      shape: 'снежинка',
      color: 'белый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '25',
      name: 'Розовый шар с блёстками',
      count: '1200',
      year: '2017',
      shape: 'шар',
      color: 'красный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '26',
      name: 'Рубиново-золотой шар',
      count: '800',
      year: '2018',
      shape: 'шар',
      color: 'желтый',
      size: 'большой',
      favorite: false,
    },
    {
      num: '27',
      name: 'Красный шар с узором',
      count: '900',
      year: '2019',
      shape: 'шар',
      color: 'красный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '28',
      name: 'Бордовый шар с узором',
      count: '1000',
      year: '2019',
      shape: 'шар',
      color: 'красный',
      size: 'большой',
      favorite: false,
    },
    {
      num: '29',
      name: 'Старинный шар с цветами',
      count: '500',
      year: '2009',
      shape: 'шар',
      color: 'желтый',
      size: 'большой',
      favorite: true,
    },
    {
      num: '30',
      name: 'Старинный шар с узором',
      count: '800',
      year: '2022',
      shape: 'шар',
      color: 'желтый',
      size: 'большой',
      favorite: true,
    },

  ];
  
  export default data;
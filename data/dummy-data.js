import Category from "../models/category";
import Gadget from "../models/gadget";

export const CATEGORIES = [
   new Category('c1', 'Phones', 'Samsung', '#283D3B'),
   new Category('c2', 'Televisions', 'Hisense', '#197278'),
   new Category('c3', 'Refrigerators', 'Beko', '#EDDDD4'),
   new Category('c4', 'Dispensers', 'Cool', '#C44536'),
   new Category('c5', 'Laptops', 'Lenovo', '#772E25')
];

export const GADGETS = [
    new Gadget(
        'g1',
        'i-phone 8',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fiphone.html&psig=AOvVaw2Et_mgc5-bIo7PMQ-3ao6N&ust=1693311335629000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCNCVr7eq_4ADFQAAAAAdAAAAABAE',
        '5000',
        ' This is a state of the art phone with alot of pixels',
        'c1'
    ),
    new Gadget(
        'g2',
        'Samsung Tv',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ftv&psig=AOvVaw0vXqJVzEPubpTN6mnEltwb&ust=1693311653433000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCMjT3dGr_4ADFQAAAAAdAAAAABAE',
        '55000',
        ' This is a state of the art smart tv',
        'c2'
    ),
    new Gadget(
        'g3',
        'Panasonic',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Frefrigerator.html&psig=AOvVaw1MFCwAOiIgtfRE2mlTxyz4&ust=1693311760125000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCIji2oGs_4ADFQAAAAAdAAAAABAE',
        '75000',
        ' This is a state of the art Fridge with two doors',
        'c3'
    ),
    new Gadget(
        'g4',
        'Cool',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ramtons.com%2Fhot-and-cold-free-standing-water-dispenser-rm-419&psig=AOvVaw2RGjLd9fn-iUsUIAxcAgRe&ust=1693311889505000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCNDs6L6s_4ADFQAAAAAdAAAAABAE',
        '8000',
        ' This is a state of the art water dispenser with more outlets',
        'c4'
    ),
    new Gadget(
        'g5',
        'Lenovo 500',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Flaptop&psig=AOvVaw32bjDQjNGFXYPkJFvluG9w&ust=1693312002365000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCOjev_as_4ADFQAAAAAdAAAAABAE',
        '35000',
        ' This is a state of the art Laptop with alot of pixels',
        'c5'
    )
];
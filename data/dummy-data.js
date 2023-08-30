import Category from "../models/category";
import Gadget from "../models/gadget";

export const CATEGORIES = [
   new Category('c1', 'Phones', 'Samsung', '#283D3B'),
   new Category('c2', 'Televisions', 'Hisense', '#197278'),
   new Category('c3', 'Refrigerators', 'Beko', '#EDDDD4'),
   new Category('c4', 'Dispensers', 'Cool', '#C44536'),
   new Category('c5', 'Laptops', 'Lenovo', '#772E25'),
   new Category('c6', 'Mount', 'One touch', '#1AFFD5'),
   new Category('c7', 'Chargers', 'Mi', '#007FFF'),
   new Category('c8', 'SSD', 'Vaim', '#590925'),
   new Category('c9', 'Screens', 'Dama', '#D4DCFF'),
   new Category('c10', 'Ports', 'Jaymo', '#FA198B'),

];

export const GADGETS = [
    new Gadget(
        'g1',
        'i-phone 8',
        'https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80',
        '5000',
        ' This is a state of the art phone with alot of pixels',
        ['c1', 'c3']
    ),
    new Gadget(
        'g2',
        'Samsung Tv',
        'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        '55000',
        ' This is a state of the art smart tv',
        ['c2', 'c5']
    ),
    new Gadget(
        'g3',
        'Panasonic',
        'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80',
        '75000',
        ' This is a state of the art Fridge with two doors',
        ['c3']
    ),
    new Gadget(
        'g4',
        'Cool',
        'https://images.unsplash.com/photo-1601293251531-a81cd6add70f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1418&q=80',
        '8000',
        ' This is a state of the art water dispenser with more outlets',
        ['c4']
    ),
    new Gadget(
        'g5',
        'Lenovo 500',
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        '35000',
        ' This is a state of the art Laptop with alot of pixels',
        ['c5', 'c1']
    )
];
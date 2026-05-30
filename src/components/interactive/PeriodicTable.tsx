import React, { useState, useCallback } from 'react';

type Category =
  | 'alkali-metal'
  | 'alkaline-earth'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'nonmetal'
  | 'halogen'
  | 'noble-gas'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

interface ElementData {
  number: number;
  symbol: string;
  name: string;
  mass: string;
  category: Category;
  row: number;
  col: number;
  electronConfig: string;
}

const CATEGORY_COLORS: Record<Category, string> = {
  'alkali-metal': '#ff1493',
  'alkaline-earth': '#ffa500',
  'transition-metal': '#4169e1',
  'post-transition-metal': '#2e8b57',
  metalloid: '#9370db',
  nonmetal: '#00ced1',
  halogen: '#7fff00',
  'noble-gas': '#9932cc',
  lanthanide: '#ff69b4',
  actinide: '#fa8072',
  unknown: '#808080',
};

const CATEGORY_LABELS: Record<Category, string> = {
  'alkali-metal': 'Alkali Metal',
  'alkaline-earth': 'Alkaline Earth',
  'transition-metal': 'Transition Metal',
  'post-transition-metal': 'Post-Transition Metal',
  metalloid: 'Metalloid',
  nonmetal: 'Nonmetal',
  halogen: 'Halogen',
  'noble-gas': 'Noble Gas',
  lanthanide: 'Lanthanide',
  actinide: 'Actinide',
  unknown: 'Unknown',
};

const ELEMENTS: ElementData[] = [
  { number: 1, symbol: 'H', name: 'Hydrogen', mass: '1.008', category: 'nonmetal', row: 1, col: 1, electronConfig: '1s\u00B9' },
  { number: 2, symbol: 'He', name: 'Helium', mass: '4.003', category: 'noble-gas', row: 1, col: 18, electronConfig: '1s\u00B2' },
  { number: 3, symbol: 'Li', name: 'Lithium', mass: '6.941', category: 'alkali-metal', row: 2, col: 1, electronConfig: '[He] 2s\u00B9' },
  { number: 4, symbol: 'Be', name: 'Beryllium', mass: '9.012', category: 'alkaline-earth', row: 2, col: 2, electronConfig: '[He] 2s\u00B2' },
  { number: 5, symbol: 'B', name: 'Boron', mass: '10.81', category: 'metalloid', row: 2, col: 13, electronConfig: '[He] 2s\u00B2 2p\u00B9' },
  { number: 6, symbol: 'C', name: 'Carbon', mass: '12.01', category: 'nonmetal', row: 2, col: 14, electronConfig: '[He] 2s\u00B2 2p\u00B2' },
  { number: 7, symbol: 'N', name: 'Nitrogen', mass: '14.01', category: 'nonmetal', row: 2, col: 15, electronConfig: '[He] 2s\u00B2 2p\u00B3' },
  { number: 8, symbol: 'O', name: 'Oxygen', mass: '16.00', category: 'nonmetal', row: 2, col: 16, electronConfig: '[He] 2s\u00B2 2p\u2074' },
  { number: 9, symbol: 'F', name: 'Fluorine', mass: '19.00', category: 'halogen', row: 2, col: 17, electronConfig: '[He] 2s\u00B2 2p\u2075' },
  { number: 10, symbol: 'Ne', name: 'Neon', mass: '20.18', category: 'noble-gas', row: 2, col: 18, electronConfig: '[He] 2s\u00B2 2p\u2076' },
  { number: 11, symbol: 'Na', name: 'Sodium', mass: '22.99', category: 'alkali-metal', row: 3, col: 1, electronConfig: '[Ne] 3s\u00B9' },
  { number: 12, symbol: 'Mg', name: 'Magnesium', mass: '24.31', category: 'alkaline-earth', row: 3, col: 2, electronConfig: '[Ne] 3s\u00B2' },
  { number: 13, symbol: 'Al', name: 'Aluminium', mass: '26.98', category: 'post-transition-metal', row: 3, col: 13, electronConfig: '[Ne] 3s\u00B2 3p\u00B9' },
  { number: 14, symbol: 'Si', name: 'Silicon', mass: '28.09', category: 'metalloid', row: 3, col: 14, electronConfig: '[Ne] 3s\u00B2 3p\u00B2' },
  { number: 15, symbol: 'P', name: 'Phosphorus', mass: '30.97', category: 'nonmetal', row: 3, col: 15, electronConfig: '[Ne] 3s\u00B2 3p\u00B3' },
  { number: 16, symbol: 'S', name: 'Sulfur', mass: '32.07', category: 'nonmetal', row: 3, col: 16, electronConfig: '[Ne] 3s\u00B2 3p\u2074' },
  { number: 17, symbol: 'Cl', name: 'Chlorine', mass: '35.45', category: 'halogen', row: 3, col: 17, electronConfig: '[Ne] 3s\u00B2 3p\u2075' },
  { number: 18, symbol: 'Ar', name: 'Argon', mass: '39.95', category: 'noble-gas', row: 3, col: 18, electronConfig: '[Ne] 3s\u00B2 3p\u2076' },
  { number: 19, symbol: 'K', name: 'Potassium', mass: '39.10', category: 'alkali-metal', row: 4, col: 1, electronConfig: '[Ar] 4s\u00B9' },
  { number: 20, symbol: 'Ca', name: 'Calcium', mass: '40.08', category: 'alkaline-earth', row: 4, col: 2, electronConfig: '[Ar] 4s\u00B2' },
  { number: 21, symbol: 'Sc', name: 'Scandium', mass: '44.96', category: 'transition-metal', row: 4, col: 3, electronConfig: '[Ar] 3d\u00B9 4s\u00B2' },
  { number: 22, symbol: 'Ti', name: 'Titanium', mass: '47.87', category: 'transition-metal', row: 4, col: 4, electronConfig: '[Ar] 3d\u00B2 4s\u00B2' },
  { number: 23, symbol: 'V', name: 'Vanadium', mass: '50.94', category: 'transition-metal', row: 4, col: 5, electronConfig: '[Ar] 3d\u00B3 4s\u00B2' },
  { number: 24, symbol: 'Cr', name: 'Chromium', mass: '52.00', category: 'transition-metal', row: 4, col: 6, electronConfig: '[Ar] 3d\u2075 4s\u00B9' },
  { number: 25, symbol: 'Mn', name: 'Manganese', mass: '54.94', category: 'transition-metal', row: 4, col: 7, electronConfig: '[Ar] 3d\u2075 4s\u00B2' },
  { number: 26, symbol: 'Fe', name: 'Iron', mass: '55.85', category: 'transition-metal', row: 4, col: 8, electronConfig: '[Ar] 3d\u2076 4s\u00B2' },
  { number: 27, symbol: 'Co', name: 'Cobalt', mass: '58.93', category: 'transition-metal', row: 4, col: 9, electronConfig: '[Ar] 3d\u2077 4s\u00B2' },
  { number: 28, symbol: 'Ni', name: 'Nickel', mass: '58.69', category: 'transition-metal', row: 4, col: 10, electronConfig: '[Ar] 3d\u2078 4s\u00B2' },
  { number: 29, symbol: 'Cu', name: 'Copper', mass: '63.55', category: 'transition-metal', row: 4, col: 11, electronConfig: '[Ar] 3d\u00B9\u2070 4s\u00B9' },
  { number: 30, symbol: 'Zn', name: 'Zinc', mass: '65.38', category: 'transition-metal', row: 4, col: 12, electronConfig: '[Ar] 3d\u00B9\u2070 4s\u00B2' },
  { number: 31, symbol: 'Ga', name: 'Gallium', mass: '69.72', category: 'post-transition-metal', row: 4, col: 13, electronConfig: '[Ar] 3d\u00B9\u2070 4s\u00B2 4p\u00B9' },
  { number: 32, symbol: 'Ge', name: 'Germanium', mass: '72.63', category: 'metalloid', row: 4, col: 14, electronConfig: '[Ar] 3d\u00B9\u2070 4s\u00B2 4p\u00B2' },
  { number: 33, symbol: 'As', name: 'Arsenic', mass: '74.92', category: 'metalloid', row: 4, col: 15, electronConfig: '[Ar] 3d\u00B9\u2070 4s\u00B2 4p\u00B3' },
  { number: 34, symbol: 'Se', name: 'Selenium', mass: '78.97', category: 'nonmetal', row: 4, col: 16, electronConfig: '[Ar] 3d\u00B9\u2070 4s\u00B2 4p\u2074' },
  { number: 35, symbol: 'Br', name: 'Bromine', mass: '79.90', category: 'halogen', row: 4, col: 17, electronConfig: '[Ar] 3d\u00B9\u2070 4s\u00B2 4p\u2075' },
  { number: 36, symbol: 'Kr', name: 'Krypton', mass: '83.80', category: 'noble-gas', row: 4, col: 18, electronConfig: '[Ar] 3d\u00B9\u2070 4s\u00B2 4p\u2076' },
  { number: 37, symbol: 'Rb', name: 'Rubidium', mass: '85.47', category: 'alkali-metal', row: 5, col: 1, electronConfig: '[Kr] 5s\u00B9' },
  { number: 38, symbol: 'Sr', name: 'Strontium', mass: '87.62', category: 'alkaline-earth', row: 5, col: 2, electronConfig: '[Kr] 5s\u00B2' },
  { number: 39, symbol: 'Y', name: 'Yttrium', mass: '88.91', category: 'transition-metal', row: 5, col: 3, electronConfig: '[Kr] 4d\u00B9 5s\u00B2' },
  { number: 40, symbol: 'Zr', name: 'Zirconium', mass: '91.22', category: 'transition-metal', row: 5, col: 4, electronConfig: '[Kr] 4d\u00B2 5s\u00B2' },
  { number: 41, symbol: 'Nb', name: 'Niobium', mass: '92.91', category: 'transition-metal', row: 5, col: 5, electronConfig: '[Kr] 4d\u2074 5s\u00B9' },
  { number: 42, symbol: 'Mo', name: 'Molybdenum', mass: '95.95', category: 'transition-metal', row: 5, col: 6, electronConfig: '[Kr] 4d\u2075 5s\u00B9' },
  { number: 43, symbol: 'Tc', name: 'Technetium', mass: '[98]', category: 'transition-metal', row: 5, col: 7, electronConfig: '[Kr] 4d\u2075 5s\u00B2' },
  { number: 44, symbol: 'Ru', name: 'Ruthenium', mass: '101.1', category: 'transition-metal', row: 5, col: 8, electronConfig: '[Kr] 4d\u2077 5s\u00B9' },
  { number: 45, symbol: 'Rh', name: 'Rhodium', mass: '102.9', category: 'transition-metal', row: 5, col: 9, electronConfig: '[Kr] 4d\u2078 5s\u00B9' },
  { number: 46, symbol: 'Pd', name: 'Palladium', mass: '106.4', category: 'transition-metal', row: 5, col: 10, electronConfig: '[Kr] 4d\u00B9\u2070' },
  { number: 47, symbol: 'Ag', name: 'Silver', mass: '107.9', category: 'transition-metal', row: 5, col: 11, electronConfig: '[Kr] 4d\u00B9\u2070 5s\u00B9' },
  { number: 48, symbol: 'Cd', name: 'Cadmium', mass: '112.4', category: 'transition-metal', row: 5, col: 12, electronConfig: '[Kr] 4d\u00B9\u2070 5s\u00B2' },
  { number: 49, symbol: 'In', name: 'Indium', mass: '114.8', category: 'post-transition-metal', row: 5, col: 13, electronConfig: '[Kr] 4d\u00B9\u2070 5s\u00B2 5p\u00B9' },
  { number: 50, symbol: 'Sn', name: 'Tin', mass: '118.7', category: 'post-transition-metal', row: 5, col: 14, electronConfig: '[Kr] 4d\u00B9\u2070 5s\u00B2 5p\u00B2' },
  { number: 51, symbol: 'Sb', name: 'Antimony', mass: '121.8', category: 'metalloid', row: 5, col: 15, electronConfig: '[Kr] 4d\u00B9\u2070 5s\u00B2 5p\u00B3' },
  { number: 52, symbol: 'Te', name: 'Tellurium', mass: '127.6', category: 'metalloid', row: 5, col: 16, electronConfig: '[Kr] 4d\u00B9\u2070 5s\u00B2 5p\u2074' },
  { number: 53, symbol: 'I', name: 'Iodine', mass: '126.9', category: 'halogen', row: 5, col: 17, electronConfig: '[Kr] 4d\u00B9\u2070 5s\u00B2 5p\u2075' },
  { number: 54, symbol: 'Xe', name: 'Xenon', mass: '131.3', category: 'noble-gas', row: 5, col: 18, electronConfig: '[Kr] 4d\u00B9\u2070 5s\u00B2 5p\u2076' },
  { number: 55, symbol: 'Cs', name: 'Caesium', mass: '132.9', category: 'alkali-metal', row: 6, col: 1, electronConfig: '[Xe] 6s\u00B9' },
  { number: 56, symbol: 'Ba', name: 'Barium', mass: '137.3', category: 'alkaline-earth', row: 6, col: 2, electronConfig: '[Xe] 6s\u00B2' },
  { number: 57, symbol: 'La', name: 'Lanthanum', mass: '138.9', category: 'lanthanide', row: 9, col: 4, electronConfig: '[Xe] 5d\u00B9 6s\u00B2' },
  { number: 58, symbol: 'Ce', name: 'Cerium', mass: '140.1', category: 'lanthanide', row: 9, col: 5, electronConfig: '[Xe] 4f\u00B9 5d\u00B9 6s\u00B2' },
  { number: 59, symbol: 'Pr', name: 'Praseodymium', mass: '140.9', category: 'lanthanide', row: 9, col: 6, electronConfig: '[Xe] 4f\u00B3 6s\u00B2' },
  { number: 60, symbol: 'Nd', name: 'Neodymium', mass: '144.2', category: 'lanthanide', row: 9, col: 7, electronConfig: '[Xe] 4f\u2074 6s\u00B2' },
  { number: 61, symbol: 'Pm', name: 'Promethium', mass: '[145]', category: 'lanthanide', row: 9, col: 8, electronConfig: '[Xe] 4f\u2075 6s\u00B2' },
  { number: 62, symbol: 'Sm', name: 'Samarium', mass: '150.4', category: 'lanthanide', row: 9, col: 9, electronConfig: '[Xe] 4f\u2076 6s\u00B2' },
  { number: 63, symbol: 'Eu', name: 'Europium', mass: '152.0', category: 'lanthanide', row: 9, col: 10, electronConfig: '[Xe] 4f\u2077 6s\u00B2' },
  { number: 64, symbol: 'Gd', name: 'Gadolinium', mass: '157.3', category: 'lanthanide', row: 9, col: 11, electronConfig: '[Xe] 4f\u2077 5d\u00B9 6s\u00B2' },
  { number: 65, symbol: 'Tb', name: 'Terbium', mass: '158.9', category: 'lanthanide', row: 9, col: 12, electronConfig: '[Xe] 4f\u2079 6s\u00B2' },
  { number: 66, symbol: 'Dy', name: 'Dysprosium', mass: '162.5', category: 'lanthanide', row: 9, col: 13, electronConfig: '[Xe] 4f\u00B9\u2070 6s\u00B2' },
  { number: 67, symbol: 'Ho', name: 'Holmium', mass: '164.9', category: 'lanthanide', row: 9, col: 14, electronConfig: '[Xe] 4f\u00B9\u00B9 6s\u00B2' },
  { number: 68, symbol: 'Er', name: 'Erbium', mass: '167.3', category: 'lanthanide', row: 9, col: 15, electronConfig: '[Xe] 4f\u00B9\u00B2 6s\u00B2' },
  { number: 69, symbol: 'Tm', name: 'Thulium', mass: '168.9', category: 'lanthanide', row: 9, col: 16, electronConfig: '[Xe] 4f\u00B9\u00B3 6s\u00B2' },
  { number: 70, symbol: 'Yb', name: 'Ytterbium', mass: '173.0', category: 'lanthanide', row: 9, col: 17, electronConfig: '[Xe] 4f\u00B9\u2074 6s\u00B2' },
  { number: 71, symbol: 'Lu', name: 'Lutetium', mass: '175.0', category: 'lanthanide', row: 9, col: 18, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u00B9 6s\u00B2' },
  { number: 72, symbol: 'Hf', name: 'Hafnium', mass: '178.5', category: 'transition-metal', row: 6, col: 4, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u00B2 6s\u00B2' },
  { number: 73, symbol: 'Ta', name: 'Tantalum', mass: '180.9', category: 'transition-metal', row: 6, col: 5, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u00B3 6s\u00B2' },
  { number: 74, symbol: 'W', name: 'Tungsten', mass: '183.8', category: 'transition-metal', row: 6, col: 6, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u2074 6s\u00B2' },
  { number: 75, symbol: 'Re', name: 'Rhenium', mass: '186.2', category: 'transition-metal', row: 6, col: 7, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u2075 6s\u00B2' },
  { number: 76, symbol: 'Os', name: 'Osmium', mass: '190.2', category: 'transition-metal', row: 6, col: 8, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u2076 6s\u00B2' },
  { number: 77, symbol: 'Ir', name: 'Iridium', mass: '192.2', category: 'transition-metal', row: 6, col: 9, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u2077 6s\u00B2' },
  { number: 78, symbol: 'Pt', name: 'Platinum', mass: '195.1', category: 'transition-metal', row: 6, col: 10, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u2079 6s\u00B9' },
  { number: 79, symbol: 'Au', name: 'Gold', mass: '197.0', category: 'transition-metal', row: 6, col: 11, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u00B9\u2070 6s\u00B9' },
  { number: 80, symbol: 'Hg', name: 'Mercury', mass: '200.6', category: 'transition-metal', row: 6, col: 12, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u00B9\u2070 6s\u00B2' },
  { number: 81, symbol: 'Tl', name: 'Thallium', mass: '204.4', category: 'post-transition-metal', row: 6, col: 13, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u00B9\u2070 6s\u00B2 6p\u00B9' },
  { number: 82, symbol: 'Pb', name: 'Lead', mass: '207.2', category: 'post-transition-metal', row: 6, col: 14, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u00B9\u2070 6s\u00B2 6p\u00B2' },
  { number: 83, symbol: 'Bi', name: 'Bismuth', mass: '209.0', category: 'post-transition-metal', row: 6, col: 15, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u00B9\u2070 6s\u00B2 6p\u00B3' },
  { number: 84, symbol: 'Po', name: 'Polonium', mass: '[209]', category: 'post-transition-metal', row: 6, col: 16, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u00B9\u2070 6s\u00B2 6p\u2074' },
  { number: 85, symbol: 'At', name: 'Astatine', mass: '[210]', category: 'metalloid', row: 6, col: 17, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u00B9\u2070 6s\u00B2 6p\u2075' },
  { number: 86, symbol: 'Rn', name: 'Radon', mass: '[222]', category: 'noble-gas', row: 6, col: 18, electronConfig: '[Xe] 4f\u00B9\u2074 5d\u00B9\u2070 6s\u00B2 6p\u2076' },
  { number: 87, symbol: 'Fr', name: 'Francium', mass: '[223]', category: 'alkali-metal', row: 7, col: 1, electronConfig: '[Rn] 7s\u00B9' },
  { number: 88, symbol: 'Ra', name: 'Radium', mass: '[226]', category: 'alkaline-earth', row: 7, col: 2, electronConfig: '[Rn] 7s\u00B2' },
  { number: 89, symbol: 'Ac', name: 'Actinium', mass: '[227]', category: 'actinide', row: 10, col: 4, electronConfig: '[Rn] 6d\u00B9 7s\u00B2' },
  { number: 90, symbol: 'Th', name: 'Thorium', mass: '232.0', category: 'actinide', row: 10, col: 5, electronConfig: '[Rn] 6d\u00B2 7s\u00B2' },
  { number: 91, symbol: 'Pa', name: 'Protactinium', mass: '231.0', category: 'actinide', row: 10, col: 6, electronConfig: '[Rn] 5f\u00B2 6d\u00B9 7s\u00B2' },
  { number: 92, symbol: 'U', name: 'Uranium', mass: '238.0', category: 'actinide', row: 10, col: 7, electronConfig: '[Rn] 5f\u00B3 6d\u00B9 7s\u00B2' },
  { number: 93, symbol: 'Np', name: 'Neptunium', mass: '[237]', category: 'actinide', row: 10, col: 8, electronConfig: '[Rn] 5f\u2074 6d\u00B9 7s\u00B2' },
  { number: 94, symbol: 'Pu', name: 'Plutonium', mass: '[244]', category: 'actinide', row: 10, col: 9, electronConfig: '[Rn] 5f\u2076 7s\u00B2' },
  { number: 95, symbol: 'Am', name: 'Americium', mass: '[243]', category: 'actinide', row: 10, col: 10, electronConfig: '[Rn] 5f\u2077 7s\u00B2' },
  { number: 96, symbol: 'Cm', name: 'Curium', mass: '[247]', category: 'actinide', row: 10, col: 11, electronConfig: '[Rn] 5f\u2077 6d\u00B9 7s\u00B2' },
  { number: 97, symbol: 'Bk', name: 'Berkelium', mass: '[247]', category: 'actinide', row: 10, col: 12, electronConfig: '[Rn] 5f\u2079 7s\u00B2' },
  { number: 98, symbol: 'Cf', name: 'Californium', mass: '[251]', category: 'actinide', row: 10, col: 13, electronConfig: '[Rn] 5f\u00B9\u2070 7s\u00B2' },
  { number: 99, symbol: 'Es', name: 'Einsteinium', mass: '[252]', category: 'actinide', row: 10, col: 14, electronConfig: '[Rn] 5f\u00B9\u00B9 7s\u00B2' },
  { number: 100, symbol: 'Fm', name: 'Fermium', mass: '[257]', category: 'actinide', row: 10, col: 15, electronConfig: '[Rn] 5f\u00B9\u00B2 7s\u00B2' },
  { number: 101, symbol: 'Md', name: 'Mendelevium', mass: '[258]', category: 'actinide', row: 10, col: 16, electronConfig: '[Rn] 5f\u00B9\u00B3 7s\u00B2' },
  { number: 102, symbol: 'No', name: 'Nobelium', mass: '[259]', category: 'actinide', row: 10, col: 17, electronConfig: '[Rn] 5f\u00B9\u2074 7s\u00B2' },
  { number: 103, symbol: 'Lr', name: 'Lawrencium', mass: '[266]', category: 'actinide', row: 10, col: 18, electronConfig: '[Rn] 5f\u00B9\u2074 7s\u00B2 7p\u00B9' },
  { number: 104, symbol: 'Rf', name: 'Rutherfordium', mass: '[267]', category: 'transition-metal', row: 7, col: 4, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u00B2 7s\u00B2' },
  { number: 105, symbol: 'Db', name: 'Dubnium', mass: '[268]', category: 'transition-metal', row: 7, col: 5, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u00B3 7s\u00B2' },
  { number: 106, symbol: 'Sg', name: 'Seaborgium', mass: '[269]', category: 'transition-metal', row: 7, col: 6, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u2074 7s\u00B2' },
  { number: 107, symbol: 'Bh', name: 'Bohrium', mass: '[270]', category: 'transition-metal', row: 7, col: 7, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u2075 7s\u00B2' },
  { number: 108, symbol: 'Hs', name: 'Hassium', mass: '[277]', category: 'transition-metal', row: 7, col: 8, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u2076 7s\u00B2' },
  { number: 109, symbol: 'Mt', name: 'Meitnerium', mass: '[278]', category: 'unknown', row: 7, col: 9, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u2077 7s\u00B2' },
  { number: 110, symbol: 'Ds', name: 'Darmstadtium', mass: '[281]', category: 'unknown', row: 7, col: 10, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u2078 7s\u00B2' },
  { number: 111, symbol: 'Rg', name: 'Roentgenium', mass: '[282]', category: 'unknown', row: 7, col: 11, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u2079 7s\u00B2' },
  { number: 112, symbol: 'Cn', name: 'Copernicium', mass: '[285]', category: 'transition-metal', row: 7, col: 12, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u00B9\u2070 7s\u00B2' },
  { number: 113, symbol: 'Nh', name: 'Nihonium', mass: '[286]', category: 'unknown', row: 7, col: 13, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u00B9\u2070 7s\u00B2 7p\u00B9' },
  { number: 114, symbol: 'Fl', name: 'Flerovium', mass: '[289]', category: 'post-transition-metal', row: 7, col: 14, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u00B9\u2070 7s\u00B2 7p\u00B2' },
  { number: 115, symbol: 'Mc', name: 'Moscovium', mass: '[290]', category: 'unknown', row: 7, col: 15, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u00B9\u2070 7s\u00B2 7p\u00B3' },
  { number: 116, symbol: 'Lv', name: 'Livermorium', mass: '[293]', category: 'unknown', row: 7, col: 16, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u00B9\u2070 7s\u00B2 7p\u2074' },
  { number: 117, symbol: 'Ts', name: 'Tennessine', mass: '[294]', category: 'unknown', row: 7, col: 17, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u00B9\u2070 7s\u00B2 7p\u2075' },
  { number: 118, symbol: 'Og', name: 'Oganesson', mass: '[294]', category: 'unknown', row: 7, col: 18, electronConfig: '[Rn] 5f\u00B9\u2074 6d\u00B9\u2070 7s\u00B2 7p\u2076' },
];

const GRID_ROWS = 10;
const GRID_COLS = 18;

const cssVars = Object.entries(CATEGORY_COLORS)
  .map(([cat, color]) => `--cat-${cat}: ${color};`)
  .join('\n    ');

const globalStyles = `
  .pt-root {
    --pt-font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    ${cssVars}
  }
`;

function buildGrid(
  elements: ElementData[],
): { cells: (ElementData | null)[][]; totalRows: number } {
  const grid: (ElementData | null)[][] = Array.from({ length: GRID_ROWS }, () =>
    Array(GRID_COLS).fill(null),
  );

  for (const el of elements) {
    if (el.row >= 1 && el.row <= GRID_ROWS && el.col >= 1 && el.col <= GRID_COLS) {
      grid[el.row - 1][el.col - 1] = el;
    }
  }

  return { cells: grid, totalRows: GRID_ROWS };
}

interface ElementCellProps {
  element: ElementData;
  onMouseEnter: (el: ElementData) => void;
  onMouseLeave: () => void;
  onClick: (el: ElementData) => void;
}

function ElementCell({ element, onMouseEnter, onMouseLeave, onClick }: ElementCellProps) {
  const color = CATEGORY_COLORS[element.category];

  return (
    <div
      className={`pt-cell pt-cat-${element.category}`}
      style={{
        gridRow: element.row,
        gridColumn: element.col,
        backgroundColor: color,
        color: '#fff',
        borderRadius: '4px',
        padding: '4px 2px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        minHeight: '48px',
        fontSize: '12px',
        fontWeight: 600,
        transition: 'transform 0.1s ease, box-shadow 0.1s ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        userSelect: 'none',
        position: 'relative',
      }}
      onMouseEnter={() => onMouseEnter(element)}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(element)}
      data-testid={`element-${element.number}`}
    >
      <span style={{ fontSize: '9px', opacity: 0.8, lineHeight: 1 }}>
        {element.number}
      </span>
      <span style={{ fontSize: '15px', lineHeight: 1.2 }}>{element.symbol}</span>
      <span style={{ fontSize: '7px', opacity: 0.7, lineHeight: 1, maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {element.name}
      </span>
    </div>
  );
}

interface TooltipProps {
  element: ElementData;
  position: { x: number; y: number };
}

function Tooltip({ element, position }: TooltipProps) {
  const color = CATEGORY_COLORS[element.category];
  const label = CATEGORY_LABELS[element.category];

  return (
    <div
      className="pt-tooltip"
      style={{
        position: 'fixed',
        left: position.x + 16,
        top: position.y - 10,
        backgroundColor: '#1e1e2e',
        border: `2px solid ${color}`,
        borderRadius: '8px',
        padding: '12px 16px',
        color: '#fff',
        fontSize: '13px',
        fontFamily: 'var(--pt-font)',
        zIndex: 1000,
        pointerEvents: 'none',
        boxShadow: `0 4px 20px rgba(0,0,0,0.4), 0 0 12px ${color}40`,
        minWidth: '200px',
        lineHeight: 1.5,
      }}
      data-testid="element-tooltip"
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
        <span style={{ fontSize: '22px', fontWeight: 700 }}>{element.symbol}</span>
        <span style={{ fontSize: '16px', fontWeight: 600 }}>{element.name}</span>
      </div>
      <div style={{ opacity: 0.85, fontSize: '12px' }}>
        <div><strong>#</strong> {element.number} &middot; <strong>Mass:</strong> {element.mass} u</div>
        <div><strong>Category:</strong> <span style={{ color }}>{label}</span></div>
        <div style={{ fontFamily: 'monospace', fontSize: '11px', marginTop: '4px' }}>
          <strong>e\u207B config:</strong> {element.electronConfig}
        </div>
      </div>
    </div>
  );
}

interface LegendProps {
  activeCategory: Category | null;
  onCategoryHover: (cat: Category | null) => void;
}

function Legend({ activeCategory, onCategoryHover }: LegendProps) {
  const categories: Category[] = [
    'alkali-metal',
    'alkaline-earth',
    'transition-metal',
    'post-transition-metal',
    'metalloid',
    'nonmetal',
    'halogen',
    'noble-gas',
    'lanthanide',
    'actinide',
    'unknown',
  ];

  return (
    <div
      className="pt-legend"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '12px',
        justifyContent: 'center',
      }}
      data-testid="categories-legend"
    >
      {categories.map((cat) => (
        <div
          key={cat}
          className={`pt-legend-item ${activeCategory === cat ? 'active' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '11px',
            fontFamily: 'var(--pt-font)',
            color: '#ccc',
            cursor: 'pointer',
            padding: '2px 6px',
            borderRadius: '4px',
            transition: 'background-color 0.15s ease',
            backgroundColor: activeCategory === cat ? '#ffffff20' : 'transparent',
          }}
          onMouseEnter={() => onCategoryHover(cat)}
          onMouseLeave={() => onCategoryHover(null)}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '3px',
              backgroundColor: CATEGORY_COLORS[cat],
            }}
          />
          {CATEGORY_LABELS[cat]}
        </div>
      ))}
    </div>
  );
}

interface DetailPanelProps {
  element: ElementData | null;
  onClose: () => void;
}

function DetailPanel({ element, onClose }: DetailPanelProps) {
  if (!element) return null;

  const color = CATEGORY_COLORS[element.category];
  const label = CATEGORY_LABELS[element.category];

  return (
    <div
      className="pt-detail-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
      }}
      onClick={onClose}
      data-testid="detail-panel"
    >
      <div
        className="pt-detail-card"
        style={{
          backgroundColor: '#1e1e2e',
          border: `3px solid ${color}`,
          borderRadius: '16px',
          padding: '32px',
          color: '#fff',
          fontFamily: 'var(--pt-font)',
          maxWidth: '360px',
          width: '90%',
          boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 20px ${color}30`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: '#888',
            fontSize: '20px',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          &times;
        </button>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px' }}>
          <span style={{ fontSize: '48px', fontWeight: 800 }}>{element.symbol}</span>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 600 }}>{element.name}</div>
            <div style={{ fontSize: '13px', opacity: 0.7 }}>#{element.number}</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '14px' }}>
          <div>
            <div style={{ opacity: 0.6, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Atomic Mass</div>
            <div>{element.mass} u</div>
          </div>
          <div>
            <div style={{ opacity: 0.6, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</div>
            <div style={{ color }}>{label}</div>
          </div>
        </div>
        <div style={{ marginTop: '16px' }}>
          <div style={{ opacity: 0.6, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Electron Configuration</div>
          <div style={{ fontFamily: 'monospace', fontSize: '14px', marginTop: '4px' }}>
            {element.electronConfig}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PeriodicTable() {
  const { cells } = buildGrid(ELEMENTS);
  const [hoveredElement, setHoveredElement] = useState<ElementData | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const handleMouseEnter = useCallback((el: ElementData) => {
    setHoveredElement(el);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredElement(null);
  }, []);

  const handleClick = useCallback((el: ElementData) => {
    setSelectedElement(el);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedElement(null);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        ${globalStyles}
        .pt-root { font-family: var(--pt-font); }
        .pt-cell:hover { transform: scale(1.15); z-index: 10; box-shadow: 0 4px 16px rgba(0,0,0,0.4) !important; }
        .pt-cell.pt-dimmed { opacity: 0.25; }
      ` }} />
      <div
        className="pt-root"
        style={{
          fontFamily: 'var(--pt-font)',
          padding: '16px',
          overflowX: 'auto',
          maxWidth: '100%',
        }}
        onMouseMove={handleMouseMove}
      >
        <Legend activeCategory={activeCategory} onCategoryHover={setActiveCategory} />
        <div
          className="pt-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${GRID_ROWS}, minmax(48px, auto))`,
            gap: '3px',
            minWidth: '720px',
          }}
        >
          {cells.map((row, rowIdx) =>
            row.map((el, colIdx) => {
              if (!el) {
                return (
                  <div
                    key={`empty-${rowIdx}-${colIdx}`}
                    className="pt-placeholder"
                    style={{
                      gridRow: rowIdx + 1,
                      gridColumn: colIdx + 1,
                      minHeight: '48px',
                    }}
                  />
                );
              }
              const isDimmed = activeCategory !== null && el.category !== activeCategory;
              return (
                <div
                  key={el.number}
                  className={isDimmed ? 'pt-dimmed' : undefined}
                  style={{
                    display: 'contents',
                  }}
                >
                  <ElementCell
                    element={el}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                  />
                </div>
              );
            }),
          )}
        </div>
        <div
          className="pt-lanthanide-label"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '4px',
            fontSize: '11px',
            color: '#aaa',
          }}
        >
          <span style={{ color: CATEGORY_COLORS.lanthanide, fontWeight: 600 }}>*</span>
          Lanthanides (Row 9) &nbsp;
          <span style={{ color: CATEGORY_COLORS.actinide, fontWeight: 600 }}>**</span>
          Actinides (Row 10)
        </div>
      </div>
      {hoveredElement && (
        <Tooltip element={hoveredElement} position={mousePos} />
      )}
      <DetailPanel element={selectedElement} onClose={handleCloseDetail} />
    </>
  );
}

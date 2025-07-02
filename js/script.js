// DADOS DAS SUÍTES COM NOMES CORRETOS DAS PASTAS
const suitesData = {
    executiva: {
        title: 'Suíte Executiva',
        images: [
            'images/Executiva/foto1.jpg',  // ← MAIÚSCULA
            'images/Executiva/foto2.jpg',
            'images/Executiva/foto3.jpg',
            'images/Executiva/foto4.jpg',
            'images/Executiva/foto5.jpg'
        ],
        amenities: [
            'TV',
            'Som',
            'Ar condicionado',
            'Frigobar',
            'Sauna',
            'Chuveiro quente',
            'Banheira'
        ],
        pricing: [
            {
                type: 'Estada de 2 horas',
                price: 'R$ 115,00',
                extra: 'Hora excedente: R$ 22,00'
            },
            {
                type: 'Pernoite (12 horas)',
                price: 'R$ 175,00',
                extra: 'Hora excedente: R$ 22,00'
            }
        ]
    },
    light: {
        title: 'Suíte Light',
        images: [
            'images/Light/foto6.jpg',     // ← MAIÚSCULA
            'images/Light/foto7.jpg',
            'images/Light/foto8.jpg',
            'images/Light/foto9.jpg',
            'images/Light/foto10.jpg'
        ],
        amenities: [
            'TV',
            'Som',
            'Ar condicionado',
            'Frigobar',
            'Chuveiro quente'
        ],
        pricing: [
            {
                type: 'Estada de 2 horas',
                price: 'R$ 65,00',
                extra: 'Hora excedente: R$ 12,00'
            },
            {
                type: 'Pernoite (12 horas)',
                price: 'R$ 100,00',
                extra: 'Hora excedente: R$ 12,00'
            }
        ]
    },
    standard: {
        title: 'Suíte Standard',
        images: [
            'images/Standard/foto11.jpg',  // ← MAIÚSCULA
            'images/Standard/foto12.jpg',
            'images/Standard/foto13.jpg',
            'images/Standard/foto14.jpg',
            'images/Standard/foto15.jpg'
        ],
        amenities: [
            'TV',
            'Som',
            'Ar condicionado',
            'Frigobar',
            'Chuveiro quente',
            'Banheira'
        ],
        pricing: [
            {
                type: 'Estada de 2 horas',
                price: 'R$ 90,00',
                extra: 'Hora excedente: R$ 16,00'
            },
            {
                type: 'Pernoite (12 horas)',
                price: 'R$ 140,00',
                extra: 'Hora excedente: R$ 16,00'
            }
        ]
    },
    plus: {
        title: 'Suíte Plus',
        images: [
            'images/Plus/foto16.jpg',     // ← MAIÚSCULA
            'images/Plus/foto17.jpg',
            'images/Plus/foto18.jpg',
            'images/Plus/foto19.jpg',
            'images/Plus/foto20.jpg'
        ],
        amenities: [
            'TV',
            'Som',
            'Ar condicionado',
            'Frigobar',
            'Sauna',
            'Pole dance',
            'Chuveiro quente',
            'Banheira'
        ],
        pricing: [
            {
                type: 'Estada de 2 horas',
                price: 'R$ 140,00',
                extra: 'Hora excedente: R$ 22,00'
            },
            {
                type: 'Pernoite (12 horas)',
                price: 'R$ 220,00',
                extra: 'Hora excedente: R$ 22,00'
            }
        ]
    }
};
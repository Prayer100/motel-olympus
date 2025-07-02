// Dados das suítes com caminhos corretos
const suitesData = {
    light: {
        title: 'Suíte Light',
        images: [
            'images/light/light1.jpg',
            'images/light/light2.jpg',
            'images/light/light3.jpg',
            'images/light/light4.jpg',
            'images/light/light5.jpg'
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
            'images/standard/standard1.jpg',
            'images/standard/standard2.jpg',
            'images/standard/standard3.jpg',
            'images/standard/standard4.jpg',
            'images/standard/standard5.jpg'
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
    executiva: {
        title: 'Suíte Executiva',
        images: [
            'images/executiva/executiva1.jpg',
            'images/executiva/executiva2.jpg',
            'images/executiva/executiva3.jpg',
            'images/executiva/executiva4.jpg',
            'images/executiva/executiva5.jpg'
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
    plus: {
        title: 'Suíte Plus',
        images: [
            'images/plus/plus1.jpg',
            'images/plus/plus2.jpg',
            'images/plus/plus3.jpg',
            'images/plus/plus4.jpg',
            'images/plus/plus5.jpg'
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

// Função para alternar modais
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    const isVisible = modal.style.display === 'block';
    
    if (isVisible) {
        modal.style.display = 'none';
        document.body.style.overflow =
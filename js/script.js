// Dados das suítes
const suitesData = {
    executiva: {
        title: 'Suíte Executiva',
        images: [
            'images/Executiva/foto1.jpg',
            'images/Executiva/foto2.jpg',
            'images/Executiva/foto3.jpg',
            'images/Executiva/foto4.jpg',
            'images/Executiva/foto5.jpg'
        ],
        amenities: ['TV', 'Som', 'Ar condicionado', 'Frigobar', 'Sauna', 'Chuveiro quente', 'Banheira'],
        pricing: [
            { type: 'Estada de 2 horas', price: 'R$ 115,00', extra: 'Hora excedente: R$ 22,00' },
            { type: 'Pernoite (12 horas)', price: 'R$ 175,00', extra: 'Hora excedente: R$ 22,00' }
        ]
    },
    light: {
        title: 'Suíte Light',
        images: [
            'images/Light/foto6.jpg',
            'images/Light/foto7.jpg',
            'images/Light/foto8.jpg',
            'images/Light/foto9.jpg',
            'images/Light/foto10.jpg'
        ],
        amenities: ['TV', 'Som', 'Ar condicionado', 'Frigobar', 'Chuveiro quente'],
        pricing: [
            { type: 'Estada de 2 horas', price: 'R$ 65,00', extra: 'Hora excedente: R$ 12,00' },
            { type: 'Pernoite (12 horas)', price: 'R$ 100,00', extra: 'Hora excedente: R$ 12,00' }
        ]
    },
    standard: {
        title: 'Suíte Standard',
        images: [
            'images/Standard/foto11.jpg',
            'images/Standard/foto12.jpg',
            'images/Standard/foto13.jpg',
            'images/Standard/foto14.jpg',
            'images/Standard/foto15.jpg'
        ],
        amenities: ['TV', 'Som', 'Ar condicionado', 'Frigobar', 'Chuveiro quente', 'Banheira'],
        pricing: [
            { type: 'Estada de 2 horas', price: 'R$ 90,00', extra: 'Hora excedente: R$ 16,00' },
            { type: 'Pernoite (12 horas)', price: 'R$ 140,00', extra: 'Hora excedente: R$ 16,00' }
        ]
    },
    plus: {
        title: 'Suíte Plus',
        images: [
            'images/Plus/foto16.jpg',
            'images/Plus/foto17.jpg',
            'images/Plus/foto18.jpg',
            'images/Plus/foto19.jpg',
            'images/Plus/foto20.jpg'
        ],
        amenities: ['TV', 'Som', 'Ar condicionado', 'Frigobar', 'Sauna', 'Pole dance', 'Chuveiro quente', 'Banheira'],
        pricing: [
            { type: 'Estada de 2 horas', price: 'R$ 140,00', extra: 'Hora excedente: R$ 22,00' },
            { type: 'Pernoite (12 horas)', price: 'R$ 220,00', extra: 'Hora excedente: R$ 22,00' }
        ]
    }
};

// FUNÇÕES DE NAVEGAÇÃO PRINCIPAIS
function showHome() {
    console.log('🏠 Mostrando página principal');
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('suites-page').style.display = 'none';
    document.getElementById('localizacao-page').style.display = 'none';
    document.getElementById('suite-details-page').style.display = 'none';
    updateActiveNav('home');
}

function showSuites() {
    console.log('🏨 Mostrando página de suítes');
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('suites-page').style.display = 'block';
    document.getElementById('localizacao-page').style.display = 'none';
    document.getElementById('suite-details-page').style.display = 'none';
    updateActiveNav('suites');
}

function showLocalizacao() {
    console.log('📍 Mostrando página de localização');
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('suites-page').style.display = 'none';
    document.getElementById('localizacao-page').style.display = 'block';
    document.getElementById('suite-details-page').style.display = 'none';
    updateActiveNav('localizacao');
}

function showSuiteDetails(suiteType) {
    console.log('🔍 Mostrando detalhes da suíte:', suiteType);
    
    const suite = suitesData[suiteType];
    if (!suite) {
        console.error('Suíte não encontrada:', suiteType);
        return;
    }

    // Atualizar título
    document.getElementById('suite-title').textContent = suite.title;

    // Atualizar imagens
    const imagesContainer = document.getElementById('suite-images');
    imagesContainer.innerHTML = '';
    
    suite.images.forEach((imagePath, index) => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `${suite.title} - Foto ${index + 1}`;
        img.onerror = function() {
            console.error('Erro ao carregar:', imagePath);
        };
        imagesContainer.appendChild(img);
    });

    // Atualizar comodidades
    document.getElementById('suite-amenities').innerHTML = 
        '<h3>Comodidades</h3><ul>' + 
        suite.amenities.map(amenity => `<li>${amenity}</li>`).join('') + 
        '</ul>';

    // Atualizar preços
    document.getElementById('suite-pricing').innerHTML = 
        '<h3>Valores</h3>' + 
        suite.pricing.map(pricing => `
            <div class="pricing-item">
                <h4>${pricing.type}</h4>
                <div class="price">${pricing.price}</div>
                <div class="extra">${pricing.extra}</div>
            </div>
        `).join('');

    // Mostrar página de detalhes
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('suites-page').style.display = 'none';
    document.getElementById('localizacao-page').style.display = 'none';
    document.getElementById('suite-details-page').style.display = 'block';
}

function backToSuites() {
    showSuites();
}

// Função para alternar modais
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    const isVisible = modal.style.display === 'block';
    
    if (isVisible) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Função para abrir Instagram
function openInstagram() {
    window.open('https://instagram.com/motel.olympus', '_blank');
}

// Função para atualizar navegação ativa
function updateActiveNav(activeSection) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[onclick*="${activeSection}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Motel Olympus carregado!');
    
    // Fechar modais ao clicar fora
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    // Mostrar página inicial
    showHome();
});
// Dados das suítes com nomes corretos das fotos
const suitesData = {
    executiva: {
        title: 'Suíte Executiva',
        images: [
            'images/executiva/foto1.jpg',
            'images/executiva/foto2.jpg',
            'images/executiva/foto3.jpg',
            'images/executiva/foto4.jpg',
            'images/executiva/foto5.jpg'
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
            'images/light/foto6.jpg',
            'images/light/foto7.jpg',
            'images/light/foto8.jpg',
            'images/light/foto9.jpg',
            'images/light/foto10.jpg'
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
            'images/standard/foto11.jpg',
            'images/standard/foto12.jpg',
            'images/standard/foto13.jpg',
            'images/standard/foto14.jpg',
            'images/standard/foto15.jpg'
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
            'images/plus/foto16.jpg',
            'images/plus/foto17.jpg',
            'images/plus/foto18.jpg',
            'images/plus/foto19.jpg',
            'images/plus/foto20.jpg'
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
        document.body.style.overflow = 'auto';
    } else {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Função para mostrar seção de suítes
function showSuites() {
    hideAllSections();
    document.getElementById('suites-section').classList.remove('hidden');
    updateActiveNav('suites');
    window.scrollTo(0, 0);
}

// Função para esconder seção de suítes
function hideSuites() {
    document.getElementById('suites-section').classList.add('hidden');
    showMainMenu();
}

// Função para mostrar detalhes da suíte
function showSuiteDetails(suiteType) {
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
        img.loading = 'lazy';
        
        // Fallback para imagem não encontrada
        img.onerror = function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbSBuw6NvIGVuY29udHJhZGE8L3RleHQ+PC9zdmc+';
            console.error('Imagem não encontrada:', imagePath);
        };
        
        imagesContainer.appendChild(img);
    });

    // Atualizar comodidades
    const amenitiesContainer = document.getElementById('suite-amenities');
    amenitiesContainer.innerHTML = '<h3>Comodidades</h3><ul>' + 
        suite.amenities.map(amenity => `<li>${amenity}</li>`).join('') + 
        '</ul>';

    // Atualizar preços
    const pricingContainer = document.getElementById('suite-pricing');
    pricingContainer.innerHTML = '<h3>Valores</h3>' + 
        suite.pricing.map(pricing => `
            <div class="pricing-item">
                <h4>${pricing.type}</h4>
                <div class="price">${pricing.price}</div>
                <div class="extra">${pricing.extra}</div>
            </div>
        `).join('');

    // Mostrar seção de detalhes
    hideAllSections();
    document.getElementById('suite-details').classList.remove('hidden');
    window.scrollTo(0, 0);
}

// Função para esconder detalhes da suíte
function hideSuiteDetails() {
    document.getElementById('suite-details').classList.add('hidden');
    showSuites();
}

// Função para mostrar localização
function showLocalizacao() {
    hideAllSections();
    document.getElementById('localizacao-section').classList.remove('hidden');
    updateActiveNav('localizacao');
    window.scrollTo(0, 0);
}

// Função para esconder localização
function hideLocalizacao() {
    document.getElementById('localizacao-section').classList.add('hidden');
    showMainMenu();
}

// Função para abrir Instagram
function openInstagram() {
    window.open('https://instagram.com/motel.olympus', '_blank');
}

// Função para esconder todas as seções
function hideAllSections() {
    const sections = [
        'suites-section',
        'suite-details',
        'localizacao-section'
    ];
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('hidden');
        }
    });
    
    const mainMenu = document.querySelector('.main-menu');
    if (mainMenu) {
        mainMenu.style.display = 'none';
    }
}

// Função para mostrar menu principal
function showMainMenu() {
    hideAllSections();
    const mainMenu = document.querySelector('.main-menu');
    if (mainMenu) {
        mainMenu.style.display = 'block';
    }
    updateActiveNav('home');
    window.scrollTo(0, 0);
}

// Função para atualizar navegação ativa
function updateActiveNav(activeSection) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[href="#${activeSection}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Função para navegação suave
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Função de diagnóstico
function diagnosticarImagens() {
    console.log('=== DIAGNÓSTICO DE IMAGENS MOTEL OLYMPUS ===');
    
    // Testar imagem da fachada
    const imgFachada = new Image();
    imgFachada.onload = () => console.log('✅ Fachada: OK - images/fachada/foto21.jpg');
    imgFachada.onerror = () => console.log('❌ Fachada: ERRO - images/fachada/foto21.jpg');
    imgFachada.src = 'images/fachada/foto21.jpg';
    
    // Testar imagens das suítes
    Object.keys(suitesData).forEach(suiteType => {
        const suite = suitesData[suiteType];
        console.log(`\n--- Testando ${suite.title} ---`);
        suite.images.forEach((imagePath, index) => {
            const img = new Image();
            img.onload = () => console.log(`✅ ${suiteType} foto ${index + 1}: OK - ${imagePath}`);
            img.onerror = () => console.log(`❌ ${suiteType} foto ${index + 1}: ERRO - ${imagePath}`);
            img.src = imagePath;
        });
    });
    
    console.log('\n=== FIM DO DIAGNÓSTICO ===');
}

// Função para precarregar imagens importantes
function preloadImages() {
    const importantImages = [
        'images/fachada/foto21.jpg',
        'images/executiva/foto1.jpg',
        'images/light/foto6.jpg',
        'images/standard/foto11.jpg',
        'images/plus/foto16.jpg'
    ];
    
    importantImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Inicialização quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Executar diagnóstico
    diagnosticarImagens();
    
    // Precarregar imagens importantes
    preloadImages();
    
    // Fechar modais ao clicar fora
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Navegação do header
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            
            switch(target) {
                case 'home':
                    showMainMenu();
                    break;
                case 'suites':
                    showSuites();
                    break;
                case 'horarios':
                    toggleModal('horarios-modal');
                    break;
                case 'localizacao':
                    showLocalizacao();
                    break;
                case 'contato':
                    openInstagram();
                    break;
            }
        });
    });

    // Botões do hero
    document.querySelectorAll('.hero-buttons a').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            
            if (target === 'suites') {
                showSuites();
            } else if (target === 'horarios') {
                toggleModal('horarios-modal');
            }
        });
    });

    // Adicionar efeito de loading nas imagens
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            console.warn('Falha ao carregar imagem:', this.src);
        });
    });
});

// Animações ao scroll
function handleScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    document.querySelectorAll('.menu-item, .suite-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Função para melhorar performance
function optimizePerformance() {
    // Lazy loading para imagens
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Inicializar todas as funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    handleScrollAnimations();
    optimizePerformance();
});

// Função para debug (remover em produção)
function debugInfo() {
    console.log('=== DEBUG INFO ===');
    console.log('Suítes disponíveis:', Object.keys(suitesData));
    console.log('Total de imagens:', Object.values(suitesData).reduce((total, suite) => total + suite.images.length, 0) + 1);
    console.log('Site carregado em:', window.location.href);
}

// Executar debug se necessário
if (window.location.hostname === 'localhost' || window.location.hostname.includes('github.io')) {
    document.addEventListener('DOMContentLoaded', debugInfo);
}
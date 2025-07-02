// Dados das suítes com nomes corretos das pastas (MAIÚSCULAS)
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
            'images/Light/foto6.jpg',
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
            'images/Standard/foto11.jpg',
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
            'images/Plus/foto16.jpg',
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

// Função para alternar modais
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.error('Modal não encontrado:', modalId);
        return;
    }
    
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
    console.log('🏨 Abrindo seção de suítes...');
    hideAllSections();
    const suitesSection = document.getElementById('suites-section');
    if (suitesSection) {
        suitesSection.classList.remove('hidden');
        updateActiveNav('suites');
        window.scrollTo(0, 0);
        console.log('✅ Seção de suítes aberta com sucesso');
    } else {
        console.error('❌ Elemento suites-section não encontrado');
    }
}

// Função para esconder seção de suítes
function hideSuites() {
    const suitesSection = document.getElementById('suites-section');
    if (suitesSection) {
        suitesSection.classList.add('hidden');
    }
    showMainMenu();
}

// Função para mostrar detalhes da suíte
function showSuiteDetails(suiteType) {
    console.log('🔍 Abrindo detalhes da suíte:', suiteType);
    
    const suite = suitesData[suiteType];
    if (!suite) {
        console.error('❌ Suíte não encontrada:', suiteType);
        alert('Erro: Suíte não encontrada. Tente novamente.');
        return;
    }

    // Atualizar título
    const titleElement = document.getElementById('suite-title');
    if (titleElement) {
        titleElement.textContent = suite.title;
    }

    // Atualizar imagens
    const imagesContainer = document.getElementById('suite-images');
    if (imagesContainer) {
        imagesContainer.innerHTML = '';
        
        console.log('📸 Carregando imagens da suíte:', suite.title);
        
        suite.images.forEach((imagePath, index) => {
            console.log(`   Carregando imagem ${index + 1}: ${imagePath}`);
            
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = `${suite.title} - Foto ${index + 1}`;
            img.loading = 'lazy';
            
            // Evento de sucesso
            img.onload = function() {
                console.log(`✅ Imagem carregada: ${imagePath}`);
            };
            
            // Evento de erro
            img.onerror = function() {
                console.error(`❌ Erro ao carregar imagem: ${imagePath}`);
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbSBuw6NvIGVuY29udHJhZGE8L3RleHQ+PC9zdmc+';
                this.alt = 'Imagem não encontrada';
            };
            
            imagesContainer.appendChild(img);
        });
    }

    // Atualizar comodidades
    const amenitiesContainer = document.getElementById('suite-amenities');
    if (amenitiesContainer) {
        amenitiesContainer.innerHTML = '<h3>Comodidades</h3><ul>' + 
            suite.amenities.map(amenity => `<li>${amenity}</li>`).join('') + 
            '</ul>';
    }

    // Atualizar preços
    const pricingContainer = document.getElementById('suite-pricing');
    if (pricingContainer) {
        pricingContainer.innerHTML = '<h3>Valores</h3>' + 
            suite.pricing.map(pricing => `
                <div class="pricing-item">
                    <h4>${pricing.type}</h4>
                    <div class="price">${pricing.price}</div>
                    <div class="extra">${pricing.extra}</div>
                </div>
            `).join('');
    }

    // Mostrar seção de detalhes
    hideAllSections();
    const detailsSection = document.getElementById('suite-details');
    if (detailsSection) {
        detailsSection.classList.remove('hidden');
        window.scrollTo(0, 0);
        console.log('✅ Detalhes da suíte abertos com sucesso');
    } else {
        console.error('❌ Elemento suite-details não encontrado');
    }
}

// Função para esconder detalhes da suíte
function hideSuiteDetails() {
    const detailsSection = document.getElementById('suite-details');
    if (detailsSection) {
        detailsSection.classList.add('hidden');
    }
    showSuites();
}

// Função para mostrar localização
function showLocalizacao() {
    console.log('📍 Abrindo seção de localização...');
    hideAllSections();
    const localizacaoSection = document.getElementById('localizacao-section');
    if (localizacaoSection) {
        localizacaoSection.classList.remove('hidden');
        updateActiveNav('localizacao');
        window.scrollTo(0, 0);
        console.log('✅ Seção de localização aberta com sucesso');
    } else {
        console.error('❌ Elemento localizacao-section não encontrado');
    }
}

// Função para esconder localização
function hideLocalizacao() {
    const localizacaoSection = document.getElementById('localizacao-section');
    if (localizacaoSection) {
        localizacaoSection.classList.add('hidden');
    }
    showMainMenu();
}

// Função para abrir Instagram
function openInstagram() {
    console.log('📱 Abrindo Instagram...');
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

// Função de diagnóstico completo
function diagnosticoCompleto() {
    console.log('🔍 === DIAGNÓSTICO COMPLETO - MOTEL OLYMPUS ===');
    console.log('🌐 Site:', window.location.href);
    console.log('⏰ Timestamp:', new Date().toLocaleString());
    
    // Testar elementos HTML
    console.log('\n📋 TESTANDO ELEMENTOS HTML:');
    const elementos = [
        'suites-section',
        'suite-details',
        'suite-images',
        'suite-title',
        'suite-amenities',
        'suite-pricing'
    ];
    
    elementos.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            console.log(`✅ Elemento encontrado: ${id}`);
        } else {
            console.log(`❌ Elemento NÃO encontrado: ${id}`);
        }
    });
    
    // Testar dados das suítes
    console.log('\n🏨 TESTANDO DADOS DAS SUÍTES:');
    Object.keys(suitesData).forEach(suiteType => {
        const suite = suitesData[suiteType];
        console.log(`✅ ${suite.title}: ${suite.images.length} imagens`);
    });
    
    // Testar imagens
    console.log('\n📸 TESTANDO IMAGENS:');
    const imagensParaTestar = [
        'images/Fachada/foto21.jpg',
        'images/Executiva/foto1.jpg',
        'images/Light/foto6.jpg',
        'images/Standard/foto11.jpg',
        'images/Plus/foto16.jpg'
    ];
    
    imagensParaTestar.forEach((caminho, index) => {
        const img = new Image();
        const urlCompleta = window.location.origin + '/' + caminho;
        
        img.onload = function() {
            console.log(`✅ ${index + 1}/5 - IMAGEM OK: ${caminho}`);
        };
        
        img.onerror = function() {
            console.log(`❌ ${index + 1}/5 - IMAGEM ERRO: ${caminho}`);
            console.log(`   URL completa: ${urlCompleta}`);
        };
        
        img.src = caminho;
    });
    
    console.log('\n=== FIM DO DIAGNÓSTICO ===');
}

// Inicialização quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Motel Olympus - Site carregado!');
    
    // Executar diagnóstico
    setTimeout(diagnosticoCompleto, 1000);
    
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
            
            console.log('🔗 Clique na navegação:', target);
            
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
            
            console.log('🔗 Clique no botão hero:', target);
            
            if (target === 'suites') {
                showSuites();
            } else if (target === 'horarios') {
                toggleModal('horarios-modal');
            }
        });
    });

    console.log('✅ Todos os event listeners configurados!');
});

// Função para teste manual
function testarSuites() {
    console.log('🧪 TESTE MANUAL DAS SUÍTES');
    Object.keys(suitesData).forEach(suiteType => {
        console.log(`Testando: ${suiteType}`);
        showSuiteDetails(suiteType);
        setTimeout(() => hideSuiteDetails(), 1000);
    });
}

// Disponibilizar função de teste globalmente
window.testarSuites = testarSuites;
window.diagnosticoCompleto = diagnosticoCompleto;
// Dados das suítes (mantém igual)
const suitesData = {
    // ... (mantém todo o código anterior das suítes)
};

// Função para mostrar seção de suítes (CORRIGIDA)
function showSuites() {
    console.log('🏨 Abrindo seção de suítes...');
    
    // Esconder menu principal e hero
    hideMainMenu();
    
    // Mostrar seção de suítes
    const suitesSection = document.getElementById('suites-section');
    if (suitesSection) {
        suitesSection.classList.remove('hidden');
        updateActiveNav('suites');
        
        // Scroll para o topo
        window.scrollTo(0, 0);
        
        console.log('✅ Seção de suítes aberta em tela cheia');
    } else {
        console.error('❌ Elemento suites-section não encontrado');
    }
}

// Função para mostrar localização (CORRIGIDA)
function showLocalizacao() {
    console.log('📍 Abrindo seção de localização...');
    
    // Esconder menu principal e hero
    hideMainMenu();
    
    // Mostrar seção de localização
    const localizacaoSection = document.getElementById('localizacao-section');
    if (localizacaoSection) {
        localizacaoSection.classList.remove('hidden');
        updateActiveNav('localizacao');
        
        // Scroll para o topo
        window.scrollTo(0, 0);
        
        console.log('✅ Seção de localização aberta em tela cheia');
    } else {
        console.error('❌ Elemento localizacao-section não encontrado');
    }
}

// Função para mostrar menu principal (CORRIGIDA)
function showMainMenu() {
    console.log('🏠 Voltando ao menu principal...');
    
    // Esconder todas as seções
    hideAllSections();
    
    // Mostrar menu principal e hero
    const mainMenu = document.querySelector('.main-menu');
    const hero = document.querySelector('.hero');
    
    if (mainMenu) {
        mainMenu.style.display = 'block';
    }
    if (hero) {
        hero.style.display = 'block';
    }
    
    updateActiveNav('home');
    window.scrollTo(0, 0);
    
    console.log('✅ Menu principal restaurado');
}

// Função para esconder menu principal
function hideMainMenu() {
    const mainMenu = document.querySelector('.main-menu');
    const hero = document.querySelector('.hero');
    
    if (mainMenu) {
        mainMenu.style.display = 'none';
    }
    if (hero) {
        hero.style.display = 'none';
    }
}

// Função para esconder todas as seções (CORRIGIDA)
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
}

// Função para esconder seção de suítes
function hideSuites() {
    const suitesSection = document.getElementById('suites-section');
    if (suitesSection) {
        suitesSection.classList.add('hidden');
    }
    showMainMenu();
}

// Função para esconder localização
function hideLocalizacao() {
    const localizacaoSection = document.getElementById('localizacao-section');
    if (localizacaoSection) {
        localizacaoSection.classList.add('hidden');
    }
    showMainMenu();
}

// Mantém todas as outras funções iguais...
// (showSuiteDetails, hideSuiteDetails, toggleModal, etc.)
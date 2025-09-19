// Dados simulados dos cursos
        const cursos = {
    // Cursos de Graduação EAD
    graduacao: [
        { 
            titulo: "História - Licenciatura", 
            desc: "Curso de História com foco em metodologias ativas.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        },
        { 
            titulo: "Pedagogia - Licenciatura", 
            desc: "Formação completa em Pedagogia, para formar professores renomados.", 
            img: "img/PEDAGOGIA.png",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        },
        { 
            titulo: "Educação Especial - Licenciatura", 
            desc: "Educação Especial com ênfase em inclusão social.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        },
        { 
            titulo: "Educação Física - Bacharelado", 
            desc: "Educação Física para formação de profissionais capacitados.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        },
        { 
            titulo: "Letras - Licenciatura", 
            desc: "Letras com ênfase em literatura e linguística.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        }
    ],

    // Cursos de Pós-Graduação EAD
    posGraduacao: [
        { 
            titulo: "Enfermagem do trabalho - Pós-Graduação", 
            desc: "Especialização em Enfermagem do Trabalho.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        },
        { 
            titulo: "Psicopedagogia e Ludopedagogia - Pós-Graduação", 
            desc: "Especialização em Psicopedagogia e Ludopedagogia.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        },
        { 
            titulo: "Educação Física Escolar e Interdisciplinaridade - Pós-Graduação", 
            desc: "Especialização em Educação Física Escolar e Interdisciplinaridade.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        },
        { 
            titulo: "Neurociência com ênfase em Música - Pós-Graduação", 
            desc: "Especialização em Neurociência com ênfase em Música.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        },
        { 
            titulo: "Educação Especial com ênfase em Transtorno do Espectro Autista (TEA) - Pós-Graduação", 
            desc: "Especialização em Educação Especial com ênfase em TEA.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        },
        { 
            titulo: "Educação Especial e Inclusão - Pós-Graduação", 
            desc: "Especialização em Educação Especial com ênfase em Inclusão.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        }
    ],
    // Cursos de Tecnólogo EAD
    tecnologo: [
        { 
            titulo: "Logística - Tecnólogo", 
            desc: "Tecnologia e inovação em logística.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        },
        { 
            titulo: "Processos Gerenciais - Tecnólogo", 
            desc: "Gestão de pessoas e empresas para o futuro.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        },
        { 
            titulo: "Gestão de Recursos Humanos - Tecnólogo", 
            desc: "Gestão de pessoas para empresas de todos os tamanhos.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        },
        { 
            titulo: "Gestão Ambiental - Tecnólogo", 
            desc: "Gestão ambiental com foco em sustentabilidade.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        },
        { 
            titulo: "Gestão Financeira - Tecnólogo", 
            desc: "Gestão financeira para empresas de todos os tamanhos.", 
            img: "",
            url: "https://app.faesma.com.br/captacao/public/selecao-curso"
        }
    ]
};

        function createCard(curso) {
            return `
                <div class="card">
                    <div class="img-placeholder">
                        ${curso.img ? `<img src="${curso.img}" alt="${curso.titulo}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">` : 'Espaço para imagem'}
                    </div>
                    <h2>${curso.titulo}</h2>
                    <p>${curso.desc}</p>
                    <a href="${curso.url}" class="saiba-mais">
                        <button>Saiba mais</button>
                    </a>
                </div>
            `;
        }

        // Função para carregar cards por categoria
function loadCategoryCards(category, containerId) {
    const container = document.getElementById(containerId);
    category.forEach(curso => {
        container.insertAdjacentHTML('beforeend', createCard(curso));
    });
}

// Função de inicialização atualizada
document.addEventListener('DOMContentLoaded', () => {
    // Carrega cards para cada categoria
    loadCategoryCards(cursos.graduacao, 'graduacao-list');
    loadCategoryCards(cursos.posGraduacao, 'pos-graduacao-list');
    loadCategoryCards(cursos.tecnologo, 'tecnologo-list');
});

        // Dark mode toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Verifica se há preferência salva
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Salva a preferência do usuário
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', null);
        }
    });
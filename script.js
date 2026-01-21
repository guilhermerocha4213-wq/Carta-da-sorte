// script.js
// Array de cartas com significados traduzidos (baseado em fontes de cartomancia)
const cards = [
    // Copas (Hearts)
    { name: 'Ás de Copas', suit: 'Copas', rank: 'Ás', meaning: 'Amor e felicidade. A casa, uma carta de amor. Esta carta é particularmente favorável e indica que problemas e dificuldades estão sendo superados.', image: 'cards/ace_of_hearts.svg' },
    { name: '2 de Copas', suit: 'Copas', rank: '2', meaning: 'Uma parceria calorosa ou noivado. Esta é uma carta muito positiva que indica harmonia e boas notícias.', image: 'cards/2_of_hearts.svg' },
    { name: '3 de Copas', suit: 'Copas', rank: '3', meaning: 'Amor e felicidade quando o spread geral é favorável. Em um spread difícil, pode indicar problemas emocionais e incapacidade de decidir quem amar.', image: 'cards/3_of_hearts.svg' },
    { name: '4 de Copas', suit: 'Copas', rank: '4', meaning: 'Viagem, mudança de casa ou negócio.', image: 'cards/4_of_hearts.svg' },
    { name: '5 de Copas', suit: 'Copas', rank: '5', meaning: 'Ciúme; alguma má vontade de pessoas ao seu redor.', image: 'cards/5_of_hearts.svg' },
    { name: '6 de Copas', suit: 'Copas', rank: '6', meaning: 'Uma onda repentina de boa sorte. Alguém cuida de você, tem interesse caloroso em você.', image: 'cards/6_of_hearts.svg' },
    { name: '7 de Copas', suit: 'Copas', rank: '7', meaning: 'Alguém cujo interesse em você é não confiável; alguém com lealdades inconstantes.', image: 'cards/7_of_hearts.svg' },
    { name: '8 de Copas', suit: 'Copas', rank: '8', meaning: 'Uma jornada apressada ou repentina.', image: 'cards/8_of_hearts.svg' },
    { name: '9 de Copas', suit: 'Copas', rank: '9', meaning: 'Uma carta de felicidade e boa sorte. Geralmente indica um casamento tardio.', image: 'cards/9_of_hearts.svg' },
    { name: '10 de Copas', suit: 'Copas', rank: '10', meaning: 'Boa sorte, sucesso. Esta é uma carta muito positiva que indica felicidade e boas notícias.', image: 'cards/10_of_hearts.svg' },
    { name: 'Valete de Copas', suit: 'Copas', rank: 'Valete', meaning: 'Um amigo de coração quente. Um jovem de cabelo claro; ou uma pessoa jovem com signos de Água predominantes em seu mapa. Muitas vezes aponta para um admirador mais jovem.', image: 'cards/jack_of_hearts.svg' },
    { name: 'Dama de Copas', suit: 'Copas', rank: 'Dama', meaning: 'Uma mulher de cabelo claro com boa natureza; ou uma mulher com signos de Água predominantes em seu mapa. Conselho gentil. Mulher afetuosa, carinhosa. Às vezes, esta carta pode indicar a mãe ou uma figura materna.', image: 'cards/queen_of_hearts.svg' },
    { name: 'Rei de Copas', suit: 'Copas', rank: 'Rei', meaning: 'Um homem de cabelo claro com boa natureza; ou um homem com signos de Água predominantes em seu mapa. Conselho justo, útil. Homem afetuoso, carinhoso. Este homem ajuda você sem muita conversa. Suas ações revelam sua alma bondosa. Às vezes esta carta pode indicar o pai ou uma figura paterna.', image: 'cards/king_of_hearts.svg' },
    
    // Ouros (Diamonds)
    { name: 'Ás de Ouros', suit: 'Ouros', rank: 'Ás', meaning: 'Mudança; uma mensagem, frequentemente sobre dinheiro, e geralmente boas notícias.', image: 'cards/ace_of_diamonds.svg' },
    { name: '2 de Ouros', suit: 'Ouros', rank: '2', meaning: 'Uma parceria de negócios; uma mudança no relacionamento; fofoca.', image: 'cards/2_of_diamonds.svg' },
    { name: '3 de Ouros', suit: 'Ouros', rank: '3', meaning: 'Uma carta legal. Seja tátil com os outros para evitar disputas.', image: 'cards/3_of_diamonds.svg' },
    { name: '4 de Ouros', suit: 'Ouros', rank: '4', meaning: 'Aumento financeiro; uma pessoa mais velha pode dar bons conselhos.', image: 'cards/4_of_diamonds.svg' },
    { name: '5 de Ouros', suit: 'Ouros', rank: '5', meaning: 'Felicidade e sucesso. Uma mudança para melhor. Um nascimento ou boas notícias para uma criança. Este é um bom momento para investir.', image: 'cards/5_of_diamonds.svg' },
    { name: '6 de Ouros', suit: 'Ouros', rank: '6', meaning: 'Problemas de relacionamento, argumentos. Separação.', image: 'cards/6_of_diamonds.svg' },
    { name: '7 de Ouros', suit: 'Ouros', rank: '7', meaning: 'Uma discussão sobre finanças ou no trabalho. Geralmente esperado ser resolvido felizmente.', image: 'cards/7_of_diamonds.svg' },
    { name: '8 de Ouros', suit: 'Ouros', rank: '8', meaning: 'Viagem inesperada para negócios. Negócios devem ser tratados com cuidado.', image: 'cards/8_of_diamonds.svg' },
    { name: '9 de Ouros', suit: 'Ouros', rank: '9', meaning: 'Um novo acordo de negócios; viagem; inquietação; uma mudança de residência.', image: 'cards/9_of_diamonds.svg' },
    { name: '10 de Ouros', suit: 'Ouros', rank: '10', meaning: 'Uma mudança no status financeiro, frequentemente para melhor.', image: 'cards/10_of_diamonds.svg' },
    { name: 'Valete de Ouros', suit: 'Ouros', rank: 'Valete', meaning: 'Um jovem, possivelmente em uniforme. Ou, uma pessoa ciumenta que pode ser não confiável. Uma pessoa que traz notícias, geralmente negativas, mas relativamente menores.', image: 'cards/jack_of_diamonds.svg' },
    { name: 'Dama de Ouros', suit: 'Ouros', rank: 'Dama', meaning: 'Uma mulher de cabelo claro; ou uma mulher com Terra predominante em seu mapa. Uma fofoqueira.', image: 'cards/queen_of_diamonds.svg' },
    { name: 'Rei de Ouros', suit: 'Ouros', rank: 'Rei', meaning: 'Um homem de cabelo claro ou grisalho, ou um homem com Terra predominante em seu mapa. Um homem de autoridade, status ou influência.', image: 'cards/king_of_diamonds.svg' },
    
    // Paus (Clubs)
    { name: 'Ás de Paus', suit: 'Paus', rank: 'Ás', meaning: 'Riqueza, prosperidade, dinheiro/ganho inesperado. No entanto, em um spread difícil, esse dinheiro pode desaparecer quase tão rapidamente quanto aparece.', image: 'cards/ace_of_clubs.svg' },
    { name: '2 de Paus', suit: 'Paus', rank: '2', meaning: 'Obstáculos para o sucesso; fofoca maliciosa.', image: 'cards/2_of_clubs.svg' },
    { name: '3 de Paus', suit: 'Paus', rank: '3', meaning: 'Amor e felicidade; casamento bem-sucedido; uma proposição de longo prazo favorável. Uma segunda chance, particularmente em sentido econômico.', image: 'cards/3_of_clubs.svg' },
    { name: '4 de Paus', suit: 'Paus', rank: '4', meaning: 'Cuidado com desonestidade ou engano; evite confiança cega aos outros.', image: 'cards/4_of_clubs.svg' },
    { name: '5 de Paus', suit: 'Paus', rank: '5', meaning: 'Novas amizades, alianças são feitas.', image: 'cards/5_of_clubs.svg' },
    { name: '6 de Paus', suit: 'Paus', rank: '6', meaning: 'Ajuda financeira ou sucesso.', image: 'cards/6_of_clubs.svg' },
    { name: '7 de Paus', suit: 'Paus', rank: '7', meaning: 'Sucesso nos negócios, embora possa haver problemas com o sexo oposto. Uma mudança nos negócios que pode ter sido esperada ou merecida, como uma promoção.', image: 'cards/7_of_clubs.svg' },
    { name: '8 de Paus', suit: 'Paus', rank: '8', meaning: 'Problemas de trabalho/negócios que podem ter a ver com ciúme. Isso é geralmente considerado bastante desfavorável.', image: 'cards/8_of_clubs.svg' },
    { name: '9 de Paus', suit: 'Paus', rank: '9', meaning: 'Conquista; às vezes um casamento rico ou um ganho repentino.', image: 'cards/9_of_clubs.svg' },
    { name: '10 de Paus', suit: 'Paus', rank: '10', meaning: 'Sucesso nos negócios. Boa sorte com dinheiro. Uma viagem agora pode resultar em um novo amigo ou interesse amoroso.', image: 'cards/10_of_clubs.svg' },
    { name: 'Valete de Paus', suit: 'Paus', rank: 'Valete', meaning: 'Um jovem de cabelo escuro ou fogoso. Jovem popular que é bondoso e brincalhão. Pode também indicar um admirador. Tipicamente um parceiro em um relacionamento com uma pessoa de espadas.', image: 'cards/jack_of_clubs.svg' },
    { name: 'Dama de Paus', suit: 'Paus', rank: 'Dama', meaning: 'Mulher de cabelo escuro, confiante; ou uma mulher com Fogo predominante em seu mapa. Ela pode dar bons conselhos.', image: 'cards/queen_of_clubs.svg' },
    { name: 'Rei de Paus', suit: 'Paus', rank: 'Rei', meaning: 'Homem de cabelo escuro, bondoso; ou um homem com Fogo predominante em seu mapa. Um homem generoso e espirituoso.', image: 'cards/king_of_clubs.svg' },
    
    // Espadas (Spades)
    { name: 'Ás de Espadas', suit: 'Espadas', rank: 'Ás', meaning: 'Infortúnio; às vezes associado à morte ou, mais frequentemente, a um final difícil.', image: 'cards/ace_of_spades.svg' },
    { name: '2 de Espadas', suit: 'Espadas', rank: '2', meaning: 'Quebras em relacionamentos; engano. Uma quebra em um processo importante na vida do consulente. Se a pergunta concerne um interesse romântico particular, esta é considerada uma carta de aviso que infidelidade ou separação é bastante possível.', image: 'cards/2_of_spades.svg' },
    { name: '3 de Espadas', suit: 'Espadas', rank: '3', meaning: 'Quebras em relacionamentos. Às vezes indica que uma terceira pessoa está entrando em um relacionamento de alguma forma.', image: 'cards/3_of_spades.svg' },
    { name: '4 de Espadas', suit: 'Espadas', rank: '4', meaning: 'Preocupações pequenas, problemas. Dificuldades financeiras, baixos pessoais.', image: 'cards/4_of_spades.svg' },
    { name: '5 de Espadas', suit: 'Espadas', rank: '5', meaning: 'Oposição e obstáculos que são temporários; uma bênção disfarçada. Às vezes indica uma pessoa negativa ou deprimida.', image: 'cards/5_of_spades.svg' },
    { name: '6 de Espadas', suit: 'Espadas', rank: '6', meaning: 'Pequenas mudanças e melhorias.', image: 'cards/6_of_spades.svg' },
    { name: '7 de Espadas', suit: 'Espadas', rank: '7', meaning: 'Conselho que é melhor não seguido; perda. Há algum obstáculo para o sucesso, e isso indica que os obstáculos podem vir de dentro do consulente.', image: 'cards/7_of_spades.svg' },
    { name: '8 de Espadas', suit: 'Espadas', rank: '8', meaning: 'Tentação, infortúnio, perigo, transtornos.', image: 'cards/8_of_spades.svg' },
    { name: '9 de Espadas', suit: 'Espadas', rank: '9', meaning: 'Doença, acidente, má sorte. O consulente deve usar cautela em todos os assuntos neste momento.', image: 'cards/9_of_spades.svg' },
    { name: '10 de Espadas', suit: 'Espadas', rank: '10', meaning: 'Preocupação; más notícias.', image: 'cards/10_of_spades.svg' },
    { name: 'Valete de Espadas', suit: 'Espadas', rank: 'Valete', meaning: 'Um jovem que é hostil ou ciumento.', image: 'cards/jack_of_spades.svg' },
    { name: 'Dama de Espadas', suit: 'Espadas', rank: 'Dama', meaning: 'Mulher viúva ou divorciada; ou uma mulher com Ar predominante em seu mapa.', image: 'cards/queen_of_spades.svg' },
    { name: 'Rei de Espadas', suit: 'Espadas', rank: 'Rei', meaning: 'Homem de cabelo escuro; ou um homem com Ar predominante em seu mapa. Um homem ambicioso, talvez egoísta.', image: 'cards/king_of_spades.svg' }
];

// Funções auxiliares
function getDateKey(date) {
    return date.toISOString().split('T')[0];
}

function loadData() {
    return JSON.parse(localStorage.getItem('cardData')) || {};
}

function saveData(data) {
    localStorage.setItem('cardData', JSON.stringify(data));
}

function showModal(title, content) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('card-detail').innerHTML = content;
    document.getElementById('modal').style.display = 'block';
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const data = loadData();
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: Object.keys(data).map(date => ({
            title: data[date].card ? data[date].card.split(' ')[2] : '', // Ex: Copas
            start: date,
            allDay: true
        })),
        dateClick: function(info) {
            const dateKey = getDateKey(info.date);
            const today = getDateKey(new Date());
            const entry = data[dateKey] || { card: null, feedback: null };
            let content = '';
            if (entry.card) {
                const card = cards.find(c => c.name === entry.card);
                content += `<p>Carta: ${entry.card}</p>`;
                content += `<img src="${card.image}" alt="${entry.card}">`;
                content += `<p>Significado: ${card.meaning}</p>`;
                content += `<p>Feedback: ${entry.feedback || 'Nenhum'}</p>`;
            }
            if (dateKey >= today) {
                // Mostrar seleção de carta
                const selectionDiv = document.getElementById('card-selection');
                selectionDiv.innerHTML = '';
                const suits = ['Copas', 'Ouros', 'Paus', 'Espadas'];
                suits.forEach(suit => {
                    const suitDiv = document.createElement('div');
                    suitDiv.innerHTML = `<h3>${suit}</h3>`;
                    const ranks = ['Ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Dama', 'Rei'];
                    ranks.forEach(rank => {
                        const card = cards.find(c => c.suit === suit && c.rank === rank);
                        const cardItem = document.createElement('div');
                        cardItem.classList.add('card-item');
                        cardItem.innerHTML = `<img src="${card.image}" alt="${card.name}"><br>${rank}`;
                        cardItem.onclick = () => {
                            entry.card = card.name;
                            saveEntry(dateKey, entry);
                            showModal(`Dia ${dateKey}`, content); // Atualizar modal
                            calendar.refetchEvents();
                        };
                        suitDiv.appendChild(cardItem);
                    });
                    selectionDiv.appendChild(suitDiv);
                });
            } else {
                document.getElementById('card-selection').innerHTML = '';
            }
            // Feedback buttons sempre visíveis se carta selecionada
            document.getElementById('feedback-buttons').style.display = entry.card ? 'block' : 'none';
            showModal(`Dia ${dateKey}`, content);
        }
    });
    calendar.render();

    // Feedback
    document.querySelectorAll('.feedback').forEach(btn => {
        btn.onclick = () => {
            const dateKey = document.getElementById('modal-title').textContent.split(' ')[1];
            const entry = data[dateKey] || {};
            entry.feedback = btn.dataset.value;
            saveEntry(dateKey, entry);
            // Atualizar content
            const content = document.getElementById('card-detail').innerHTML;
            showModal(`Dia ${dateKey}`, content.replace(/Feedback: .*/, `Feedback: ${entry.feedback}`));
        };
    });

    // Fechar modals
    document.querySelectorAll('.close').forEach(close => {
        close.onclick = () => close.parentElement.parentElement.style.display = 'none';
    });

    // Tema
    document.getElementById('theme-toggle').onclick = () => {
        document.body.classList.toggle('dark-theme');
    };

    // Tutorial
    if (!localStorage.getItem('tutorialSeen')) {
        document.getElementById('tutorial-modal').style.display = 'block';
        localStorage.setItem('tutorialSeen', 'true');
    }
    document.getElementById('tutorial-close').onclick = () => {
        document.getElementById('tutorial-modal').style.display = 'none';
    };

    // Análise
    document.getElementById('analysis-btn').onclick = () => {
        generateAnalysis();
    };

    // Export CSV
    document.getElementById('export-csv').onclick = () => {
        let csv = 'Data,Carta,Feedback\n';
        Object.keys(data).forEach(date => {
            csv += `${date},${data[date].card || ''},${data[date].feedback || ''}\n`;
        });
        download('historico.csv', csv);
    };

    // Export PDF
    document.getElementById('export-pdf').onclick = () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text('Histórico de Cartas', 10, 10);
        let y = 20;
        Object.keys(data).forEach(date => {
            doc.text(`${date}: ${data[date].card || 'Nenhuma'} - ${data[date].feedback || 'Nenhum'}`, 10, y);
            y += 10;
        });
        doc.save('historico.pdf');
    };

    // Configurações
    document.getElementById('settings-btn').onclick = () => {
        const modal = document.getElementById('settings-modal');
        const input = document.getElementById('reminder-time');
        input.value = localStorage.getItem('reminderTime') || '18:00';
        modal.style.display = 'block';
    };
    document.getElementById('save-settings').onclick = () => {
        const time = document.getElementById('reminder-time').value;
        localStorage.setItem('reminderTime', time);
        document.getElementById('settings-modal').style.display = 'none';
        setupReminder();
    };

    // Lembrete
    setupReminder();

    // Histórico rápido no modal - últimos 7 dias
    // Adicionado no showModal, mas para simplificar, adicionar aqui se necessário
});

function saveEntry(dateKey, entry) {
    const data = loadData();
    data[dateKey] = entry;
    saveData(data);
}

function generateAnalysis() {
    const data = loadData();
    const cardFreq = {};
    const suitFreq = { Copas: 0, Ouros: 0, Paus: 0, Espadas: 0 };
    const feedbackOverTime = [];
    const corr = {};

    Object.keys(data).forEach(date => {
        const entry = data[date];
        if (entry.card) {
            cardFreq[entry.card] = (cardFreq[entry.card] || 0) + 1;
            const card = cards.find(c => c.name === entry.card);
            suitFreq[card.suit]++;
            if (entry.feedback) {
                corr[entry.card] = corr[entry.card] || { Bom: 0, Ruim: 0, Mediano: 0 };
                corr[entry.card][entry.feedback]++;
                feedbackOverTime.push({ date, feedback: entry.feedback });
            }
        }
    });

    let content = '<p>Frequência de Cartas:</p><ul>';
    Object.keys(cardFreq).forEach(card => {
        content += `<li>${card}: ${cardFreq[card]} vezes</li>`;
    });
    content += '</ul>';

    content += '<p>Correlação com Feedback:</p><ul>';
    Object.keys(corr).forEach(card => {
        const fb = corr[card];
        content += `<li>${card}: Bom (${fb.Bom || 0}), Ruim (${fb.Ruim || 0}), Mediano (${fb.Mediano || 0})</li>`;
    });
    content += '</ul>';

    // Insights simples (simulando LLM)
    let maxGood = { card: '', percent: 0 };
    Object.keys(corr).forEach(card => {
        const fb = corr[card];
        const total = (fb.Bom || 0) + (fb.Ruim || 0) + (fb.Mediano || 0);
        const goodPercent = (fb.Bom || 0) / total * 100;
        if (goodPercent > maxGood.percent) {
            maxGood = { card, percent: goodPercent };
        }
    });
    content += `<p>A carta que mais trouxe sorte foi ${maxGood.card} com ${maxGood.percent.toFixed(2)}% de dias bons.</p>`;

    document.getElementById('analysis-content').innerHTML = content;
    document.getElementById('analysis-modal').style.display = 'block';

    // Gráficos
    new Chart(document.getElementById('nip-chart'), {
        type: 'pie',
        data: {
            labels: Object.keys(suitFreq),
            datasets: [{ data: Object.values(suitFreq), backgroundColor: ['red', 'orange', 'green', 'black'] }]
        },
        options: { title: { display: true, text: 'Distribuição por Naipes' } }
    });

    // Para linha de feedback, agrupar por mês ou algo
    // Simplificado
    new Chart(document.getElementById('feedback-chart'), {
        type: 'line',
        data: {
            labels: feedbackOverTime.map(f => f.date),
            datasets: [{ label: 'Feedback', data: feedbackOverTime.map(f => ({ Bom: 2, Mediano: 1, Ruim: 0 }[f.feedback])) }]
        },
        options: { title: { display: true, text: 'Feedback ao Longo do Tempo' } }
    });
}

function download(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function setupReminder() {
    // Lembrete simples: checar a cada minuto se hora atual = reminderTime e hoje não selecionado
    const reminderTime = localStorage.getItem('reminderTime');
    if (reminderTime && Notification.permission === 'granted') {
        setInterval(() => {
            const now = new Date();
            const [hour, min] = reminderTime.split(':');
            if (now.getHours() == hour && now.getMinutes() == min) {
                const today = getDateKey(now);
                const data = loadData();
                if (!data[today] || !data[today].card) {
                    new Notification('Lembrete: Selecione sua carta do dia!');
                }
            }
        }, 60000);
    } else if (reminderTime) {
        Notification.requestPermission();
    }
}

// Notas:
// - Baixe as imagens SVG de https://tekeye.uk/playing_cards/svg-playing-cards e coloque na pasta 'cards'.
// - Para animações adicionais, adicione mais CSS transitions.
// - Para insights mais avançados, integre uma API de LLM externa se desejar.
// - O site roda localmente abrindo index.html no navegador ou hoste no GitHub Pages.
// - Sem backend, dados salvos no localStorage do navegador.

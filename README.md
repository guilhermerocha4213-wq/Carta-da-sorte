# Carta-da-sorte
<!-- index.html -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carta da Sorte Diária</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.css"> <!-- Chart.js CSS if needed, but it's JS -->
    <link rel="stylesheet" href="style.css">
    <!-- jsPDF for PDF export -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
</head>
<body>
    <header>
        <h1>Carta da Sorte Diária</h1>
        <button id="theme-toggle">Alternar Tema</button>
        <button id="analysis-btn">Gerar Análise</button>
        <button id="export-csv">Exportar CSV</button>
        <button id="export-pdf">Exportar PDF</button>
        <button id="settings-btn">Configurações</button>
    </header>
    <div id="calendar"></div>
    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modal-title"></h2>
            <div id="card-detail"></div>
            <div id="card-selection" class="card-grid"></div>
            <div id="feedback-buttons">
                <button class="feedback" data-value="Bom">Dia Bom</button>
                <button class="feedback" data-value="Ruim">Dia Ruim</button>
                <button class="feedback" data-value="Mediano">Dia Mediano</button>
            </div>
            <div id="meaning"></div>
            <div id="history-list"></div>
        </div>
    </div>
    <div id="analysis-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Análise Anual</h2>
            <div id="analysis-content"></div>
            <canvas id="nip-chart"></canvas>
            <canvas id="feedback-chart"></canvas>
        </div>
    </div>
    <div id="tutorial-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Bem-vindo!</h2>
            <p>Este site ajuda a rastrear sua carta da sorte diária.</p>
            <p>Clique em um dia no calendário para selecionar ou ver a carta.</p>
            <p>Selecione a carta clicando na grade organizada por naipe.</p>
            <p>Dê feedback sobre o dia com os botões.</p>
            <p>Tudo é salvo automaticamente no navegador.</p>
            <button id="tutorial-close">Entendi</button>
        </div>
    </div>
    <div id="settings-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Configurações</h2>
            <label for="reminder-time">Horário de Lembrete Diário (HH:MM):</label>
            <input type="time" id="reminder-time">
            <button id="save-settings">Salvar</button>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
    <script src="script.js"></script>
</body>
</html>

const messages = {
    pt: {
        welcome: "🐆 Bem-vindo ao Chat do Fã FURIA! Digite:\n1 - Últimos jogos\n2 - Próximas partidas\n3 - Estatísticas dos jogadores\n4 - Onde assistir",
        lastGames: `🇧🇷 **Últimos 3 Jogos**:
        
🏆 ESL Pro League S18
🟢 FURIA 2x1 MIBR (Vitória) - 08/05
📊 Inferno (16-14) | Mirage (19-17) | Nuke (9-13)

🏆 BLAST Premier Spring
🔴 FURIA 0x2 Vitality (Derrota) - 05/05
📊 Ancient (12-16) | Overpass (10-16)

🏆 IEM Rio
🟢 FURIA 2x0 Imperial (Vitória) - 02/05
📊 Vertigo (16-12) | Nuke (16-14)`,
        
        nextGames: `🔥 **Próximas 3 Partidas**:
        
🏆 ESL Pro League S18
📅 10/05 - vs NAVI (18h BRT)
📍 Estúdio ESL, Malta

🏆 BLAST Premier Spring Finals
📅 15/05 - vs G2 (16h BRT)
📍 Arena Blast, Copenhague

🏆 IEM Dallas
📅 20/05 - vs Heroic (14h BRT)
📍 Kay Bailey Hutchison Center`,

        stats: `📊 **Estatísticas dos Jogadores**:

👤 KSCERATO » Rating: 1.20 | HS%: 62 | K/D: 1.25
👤 yuurih » Rating: 1.18 | HS%: 78 | K/D: 1.30
👤 arT » Rating: 1.05 | ADR: 85.3 | Flash assists: 5.2
👤 FalleN » Rating: 1.10 | AWP%: 43 | Plants: 0.4
👤 chelo » Rating: 1.07 | Survivor: 72% | Trade kills: 21%`,

        broadcast: `📺 **Onde Assistir os Próximos Jogos**:

🌍 Transmissão Internacional:
• ESL TV (Twitch)
• HLTV.org (cobertura)

🇧🇷 Transmissão Brasileira:
• Gaules (Twitch)
• FURIA TV (YouTube)
• ESPN Brasil

📱 Plataformas:
• Twitch.tv/eslcs
• YouTube.com/ESL
• Facebook Gaming/ESL`
    },
    en: {
        welcome: "🐆 Welcome to FURIA Fan Chat! Type:\n1 - Last games\n2 - Next matches\n3 - Player stats\n4 - Where to watch",
        lastGames: `🇧🇷 **Last 3 Games**:
        
🏆 ESL Pro League S18
🟢 FURIA 2x1 MIBR (Win) - May 8
📊 Inferno (16-14) | Mirage (19-17) | Nuke (9-13)

🏆 BLAST Premier Spring
🔴 FURIA 0x2 Vitality (Loss) - May 5
📊 Ancient (12-16) | Overpass (10-16)

🏆 IEM Rio
🟢 FURIA 2x0 Imperial (Win) - May 2
📊 Vertigo (16-12) | Nuke (16-14)`,

        nextGames: `🔥 **Next 3 Matches**:
        
🏆 ESL Pro League S18
📅 May 10 - vs NAVI (6PM BRT)
📍 ESL Studio, Malta

🏆 BLAST Premier Spring Finals
📅 May 15 - vs G2 (4PM BRT)
📍 Blast Arena, Copenhagen

🏆 IEM Dallas
📅 May 20 - vs Heroic (2PM BRT)
📍 Kay Bailey Hutchison Center`,

        stats: `📊 **Player Statistics**:

👤 KSCERATO » Rating: 1.20 | HS%: 62 | K/D: 1.25
👤 yuurih » Rating: 1.18 | HS%: 78 | K/D: 1.30
👤 arT » Rating: 1.05 | ADR: 85.3 | Flash assists: 5.2
👤 FalleN » Rating: 1.10 | AWP%: 43 | Plants: 0.4
👤 chelo » Rating: 1.07 | Survivor: 72% | Trade kills: 21%`,

        broadcast: `📺 **Where to Watch**:

🌍 International Broadcast:
• ESL TV (Twitch)
• HLTV.org (coverage)

🇧🇷 Brazilian Broadcast:
• Gaules (Twitch)
• FURIA TV (YouTube)
• ESPN Brazil

📱 Platforms:
• Twitch.tv/eslcs
• YouTube.com/ESL
• Facebook Gaming/ESL`
    }
};

let currentLanguage = "pt";

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");
    
    // Adiciona mensagem do usuário
    chatBox.innerHTML += `<div class="user-message">Você: ${userInput}</div>`;
    
    // Resposta do bot
    let botMessage = "";
    switch(userInput) {
        case "1":
            botMessage = messages[currentLanguage].lastGames.replace(/\n/g, '<br>');
            break;
        case "2":
            botMessage = messages[currentLanguage].nextGames.replace(/\n/g, '<br>');
            break;
        case "3":
            botMessage = messages[currentLanguage].stats.replace(/\n/g, '<br>');
            break;
        case "4":
            botMessage = messages[currentLanguage].broadcast.replace(/\n/g, '<br>');
            break;
        default:
            botMessage = "Opção inválida. Digite 1, 2, 3 ou 4.";
    }
    
    chatBox.innerHTML += `<div class="bot-message">FURIA Bot: ${botMessage}</div>`;
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
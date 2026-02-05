const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');
const terminalContainer = document.getElementById('terminalContainer');

terminalInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const command = this.value.trim().toLowerCase();
        processCommand(command);
        this.value = '';
    }
});

function processCommand(command) {
    // Display the command
    addOutput(`$ ${command}`, 'command-output');

    if (command === '$ sudo cmd' || command === 'sudo cmd') {
        showCommands();
    } else if (command === '$ roblox' || command === 'roblox') {
        loadRoblox();
    } else if (command === '$ ublock' || command === 'ublock') {
        loadUblock();
    } else if (command === '') {
        // Empty command, do nothing
    } else {
        addOutput(`Command not found: ${command}`, 'error');
        addOutput('Type "$ sudo cmd" for available commands', '');
    }
}

function addOutput(text, className = '') {
    const p = document.createElement('p');
    p.textContent = text;
    if (className) p.className = className;
    terminalOutput.appendChild(p);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function showCommands() {
    addOutput('Available commands:', 'command-output');
    addOutput('$ Roblox: for roblox scripts, relating to exploits', 'command-output');
    addOutput('$ Ublock: for unblxcked gxmes for school', 'command-output');
    addOutput('', '');
}

function loadRoblox() {
    addOutput('Command found: Roblox', 'loading');
    addOutput('Loading assets...', 'loading');
    
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += 10;
        addOutput(`[${'.'.repeat(progress / 10)}${' '.repeat(10 - progress / 10)}] ${progress}%`, 'loading');
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            addOutput('Assets loaded successfully!', 'loading');
            setTimeout(() => {
                terminalContainer.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = 'roblox-scripts.html';
                }, 500);
            }, 500);
        }
    }, 200);
}

function loadUblock() {
    addOutput('Command found: Ublock', 'loading');
    addOutput('Loading games...', 'loading');
    
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += 10;
        addOutput(`[${'.'.repeat(progress / 10)}${' '.repeat(10 - progress / 10)}] ${progress}%`, 'loading');
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            addOutput('Games loaded successfully!', 'loading');
            setTimeout(() => {
                terminalContainer.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = 'ublock.html';
                }, 500);
            }, 500);
        }
    }, 200);
}

// Auto-focus on input
terminalInput.focus();
document.addEventListener('click', () => {
    terminalInput.focus();
});

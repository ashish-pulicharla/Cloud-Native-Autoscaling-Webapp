document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const deployBtn = document.getElementById('deploy-btn');
    const statusBadge = document.getElementById('status-badge');
    const terminalBody = document.getElementById('terminal-body');
    const cpuVal = document.getElementById('cpu-val');
    const cpuBar = document.getElementById('cpu-bar');
    const ramVal = document.getElementById('ram-val');
    const ramBar = document.getElementById('ram-bar');
    const deployCount = document.getElementById('deploy-count');

    // Live Metrics Simulator
    setInterval(() => {
        // Generate random realistic fluctuation
        const cpu = Math.floor(Math.random() * (25 - 8) + 8);
        const ram = Math.floor(Math.random() * (55 - 40) + 40);

        cpuVal.textContent = `${cpu}%`;
        cpuBar.style.width = `${cpu}%`;
        ramVal.textContent = `${ram}%`;
        ramBar.style.width = `${ram}%`;
    }, 2500);

    // Logging helper
    function appendLog(text, type = 'info') {
        const line = document.createElement('div');
        line.className = `log-line ${type}`;
        const timestamp = new Date().toLocaleTimeString();
        line.textContent = `[${timestamp}] ${text}`;
        terminalBody.appendChild(line);
        terminalBody.scrollTop = terminalBody.scrollHeight; // Auto scroll to bottom
    }

    // Mock Deployment Script Execution
    deployBtn.addEventListener('click', () => {
        // Prevent clicking while running
        deployBtn.disabled = true;
        deployCount.textContent = '1';
        statusBadge.textContent = 'Deploying...';
        statusBadge.className = 'badge running';

        // Stage definitions to mimic your config files
        const workflowStages = [
            { delay: 1000, msg: 'AWS CodeBuild: Triggered via buildspec.yml', type: 'system' },
            { delay: 2500, msg: 'CodeBuild: Phase [PRE_BUILD] - Installing dependencies...', type: 'info' },
            { delay: 4500, msg: 'CodeBuild: Phase [BUILD] - Compiling app source files...', type: 'info' },
            { delay: 6000, msg: 'AWS CodeDeploy: Initializing deployment lifecycle (appspec.yml)', type: 'system' },
            { delay: 7500, msg: 'Executing lifecycle hook: scripts/stop.sh [Success]', type: 'warn' },
            { delay: 9000, msg: 'Executing lifecycle hook: scripts/install.sh [Success]', type: 'warn' },
            { delay: 11000, msg: 'Executing lifecycle hook: scripts/start.sh [Success]', type: 'warn' },
            { delay: 12500, msg: 'Validation Phase: Health checks passing on port 80.', type: 'info' }
        ];

        workflowStages.forEach((stage) => {
            setTimeout(() => {
                appendLog(stage.msg, stage.type);
            }, stage.delay);
        });

        // Final completion stage
        setTimeout(() => {
            statusBadge.textContent = 'Success';
            statusBadge.className = 'badge success';
            deployBtn.disabled = false;
            deployCount.textContent = '0';
            appendLog('[DEPLOYMENT COMPLETE] Production environment updated successfully.', 'info');
        }, 13500);
    });
});

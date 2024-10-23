const http = require("http");

// Servidor da Calculadora (Porta 8181)
http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    response.end(`
        <html>
            <head>
                <style>
                    body {
                        background: linear-gradient(to right, #ff7e5f, #feb47b);
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin-top: 10%;
                    }
                    input { margin: 5px; padding: 10px; }
                    button { padding: 10px; margin: 5px; }
                </style>
            </head>
            <body>
                <h1>Calculadora Simples</h1>
                <input type="number" id="num1" placeholder="Número 1">
                <input type="number" id="num2" placeholder="Número 2">
                <br>
                <button onclick="calcular('+')">+</button>
                <button onclick="calcular('-')">-</button>
                <button onclick="calcular('*')">*</button>
                <button onclick="calcular('/')">/</button>
                <h2 id="resultado">Resultado: </h2>
                <script>
                    function calcular(operacao) {
                        const num1 = parseFloat(document.getElementById('num1').value);
                        const num2 = parseFloat(document.getElementById('num2').value);
                        let resultado;
                        switch (operacao) {
                            case '+': resultado = num1 + num2; break;
                            case '-': resultado = num1 - num2; break;
                            case '*': resultado = num1 * num2; break;
                            case '/': resultado = num1 / num2; break;
                        }
                        document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
                    }
                </script>
            </body>
        </html>
    `);
}).listen(9292, () => {
    console.log("Servidor de Calculadora rodando na porta 8181...");
});

// Servidor do Joguinho (Porta 8282)
http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    response.end(`
        <html>
            <head>
                <style>
                    body {
                        background: linear-gradient(to right, #00c6ff, #0072ff);
                        margin: 0;
                        overflow: hidden;
                    }
                    #estrela {
                        width: 50px;
                        height: 50px;
                        background-color: gold;
                        clip-path: polygon(
                            50% 0%, 61% 35%, 98% 35%, 68% 57%, 
                            79% 91%, 50% 70%, 21% 91%, 32% 57%, 
                            2% 35%, 39% 35%
                        );
                        position: absolute;
                        transition: 0.05s;
                    }
                </style>
            </head>
            <body>
                <div id="estrela"></div>
                <script>
                    const estrela = document.getElementById('estrela');
                    document.addEventListener('mousemove', (event) => {
                        estrela.style.left = event.pageX + 'px';
                        estrela.style.top = event.pageY + 'px';
                    });
                </script>
            </body>
        </html>
    `);
}).listen(9191, () => {
    console.log("Servidor do Joguinho rodando na porta 8282...");
});

// Servidor do Efeito de Chuva de Letras (Porta 8383)
http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    response.end(`
        <html>
            <head>
                <style>
                    body {
                        background: linear-gradient(to right, #ff9966, #ff5e62);
                        margin: 0;
                        overflow: hidden;
                    }
                    .letra {
                        position: absolute;
                        font-size: 24px;
                        color: white;
                        animation: cair 1.5s linear infinite;
                    }
                    @keyframes cair {
                        0% { top: -50px; opacity: 1; }
                        100% { top: 100vh; opacity: 0; }
                    }
                </style>
            </head>
            <body>
                <script>
                    document.addEventListener('keydown', (event) => {
                        const letra = document.createElement('div');
                        letra.className = 'letra';
                        letra.innerText = event.key;
                        letra.style.left = Math.random() * 100 + 'vw';
                        document.body.appendChild(letra);
                        setTimeout(() => letra.remove(), 1500);
                    });
                </script>
            </body>
        </html>
    `);
}).listen(9090, () => {
    console.log("Servidor de Chuva de Letras rodando na porta 8383...");
});

# app-gas

Projeto front-end (React + Vite) do sistema de gas.

## Requisitos
- Node.js + npm (versoes que suportem Vite 7)

## Como rodar localmente
1) Instale as dependencias:
   ```bash
   npm install
   ```
2) Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3) Abra no navegador:
   ```
   http://localhost:5173
   ```

## Usando ngrok (para compartilhar o app)
O projeto ja esta configurado para aceitar um host externo pelo Vite.
Voce so precisa atualizar o dominio do ngrok no `vite.config.js`.

1) Rode o app:
   ```bash
   npm run dev
   ```
2) Em outro terminal, rode o ngrok apontando para a porta do Vite:
   ```bash
   ngrok http 5173
   ```
3) Copie a URL `https://...ngrok-free.dev` gerada e atualize:
   - `vite.config.js` -> `server.allowedHosts`
   - Substitua o dominio antigo pelo novo dominio do ngrok.

Depois disso, recarregue o navegador e use a URL do ngrok.

> Dica: se voce gerar um novo link do ngrok, precisa atualizar o
> `allowedHosts` de novo.

## Build e preview
- Gerar build de producao:
  ```bash
  npm run build
  ```
- Visualizar o build localmente:
  ```bash
  npm run preview
  ```

## Lint
```bash
npm run lint
```

## Testes
Nao ha testes automatizados configurados neste projeto.
Se precisar validar, use o lint e testes manuais na UI.

## Rotas principais
- `/` (splash)
- `/login`
- `/cadastro`
- `/suporte`
- `/home`
- `/dashboard`
- `/dashgeral`
- `/perfil`
- `/cadastrar-gas`
- `/editar-gas`
- `/endereco`
- `/admin/home`
- `/admin/perfil`

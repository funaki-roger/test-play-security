# Teste Automatizado - Segurança e Privacidade

Este projeto contém um teste automatizado utilizando **[Playwright](https://playwright.dev/)** para validar a navegação até a página **"Segurança e Privacidade"** do [UOL](https://www.uol.com.br/), rolando até o rodapé, clicando no link e depois realizando uma rolagem suave até o final da página.

---

## ⚙️ Pré-requisitos

1. **Node.js** (>= 18)  
2. **npm** ou **yarn**  

Verifique se o Node está instalado:

```bash
node -v
```

Instale as dependências do projeto:
```bash
npm install
```

Instale o Playwright:
```bash
npm install @playwright/test
```

Instale os browsers do Playwright:
```bash
npx playwright install
```

---

### ▶️ Executando os testes

Para rodar os testes com o navegador visível (headed):
```bash
npx playwright test --headed
```

Para rodar em modo headless (mais rápido, sem abrir a interface gráfica):
```bash
npx playwright test
```

---

## 📝 Sobre o teste
O arquivo tests/uol-seguranca.spec.ts faz o seguinte:
- Acessa a home do UOL (https://www.uol.com.br/).
- Rola até o rodapé da página.
- Localiza e clica no link "Segurança e Privacidade".
- Aguarda o carregamento da nova página.
- Rola gradualmente até o final da página para simular um usuário real.
- Aguarda alguns segundos e fecha o navegador.

import { test, expect } from '@playwright/test';

test('Abrir UOL, clicar em Segurança e Privacidade e rolar devagar até o final', async ({ page }) => {
  // 1. Acessa a página inicial do UOL
  await page.goto('https://www.uol.com.br/', { waitUntil: 'domcontentloaded' });

  // 2. Aguarda o carregamento completo
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(2000); // Pausa para visualização

  // 3. Rola até o rodapé
  await page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
  await page.waitForTimeout(2000); // Espera após rolar

  // 4. Localiza e clica no link "Segurança e privacidade"
  const segurançaLink = page.locator(
    'footer a[href="https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade"]'
  );
  await expect(segurançaLink).toBeVisible();
  await segurançaLink.click();

  // 5. Aguarda a página de segurança carregar
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(2000); // Pausa para visualização

  // 6. Rola DEVAGAR até o final da página de segurança
  await page.evaluate(async () => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const step = 150; // pixels por passo
    const interval = 200; // ms entre cada passo

    let currentPosition = 0;
    const totalHeight = document.body.scrollHeight;

    while (currentPosition < totalHeight) {
      currentPosition += step;
      window.scrollTo({ top: currentPosition, behavior: 'smooth' });
      await delay(interval);
    }
  });

  // 7. Espera alguns segundos no final
  await page.waitForTimeout(3000);

  // 8. Fecha o navegador
  await page.close();
});

# BusPass — Landing Page

Landing page institucional do **BusPass**, projeto da equipe **Four Sync** dedicado ao gerenciamento de cartões e informações do transporte público.

## Visão da página

- Apresentação e link para a plataforma BusPass.
- Prévia ilustrativa do cartão, com **saldo fictício identificado**.
- Seção "O desafio da mobilidade é real", com **números verificáveis e fontes públicas**.
- Recursos apresentados de forma responsável: cartão, saldo e recargas no sistema, mapa, linhas e horários cadastrados.
- Fluxo em três etapas para conhecer a plataforma.
- Integração prevista de RFID RC522, ESP32, Arduino, API Spring Boot, MySQL e display.
- Equipe Four Sync e FAQ que diferencia o protótipo dos recursos validados.
- Design responsivo, navegação móvel acessível e suporte a preferência por movimento reduzido.

## Dados reais (fontes divulgadas em 2025 e 2026)

Os indicadores **não são métricas internas nem resultados comprovados do BusPass**. Eles apresentam o contexto do transporte e justificam a relevância do problema que a plataforma procura resolver:

1. **14,9 milhões** — pessoas cujo principal meio de deslocamento ao trabalho era o ônibus (Censo 2022, divulgado em 2025). Fonte: [IBGE Educa — Censo 2022: deslocamentos para estudo e trabalho](https://educa.ibge.gov.br/jovens/materias-especiais/23064-censo-2022-como-a-populacao-se-desloca-para-estudar-e-trabalhar.html) (divulgação em 2025).
2. **70%** — parcela dos usuários de ônibus como principal modo de deslocamento ao trabalho que leva pelo menos meia hora no trajeto. Fonte: [Agência Brasil — Censo 2022, notícia de 09/10/2025](https://agenciabrasil.ebc.com.br/geral/noticia/2025-10/carro-e-o-principal-meio-de-transporte-para-o-trabalho-diz-censo).
3. **Queda de 3,7%** — redução na quantidade de viagens por ônibus em 2025, ante 2024, conforme Anuário NTU 2025–2026. Fonte: [NTU, 11/08/2026](https://ntu.org.br/central-de-noticias/149/ntu-propoe-o-programa-transporte-para-todos-para-melhorar-a-qualidade-do-onibus-urbano).

**Importante:** esses dados não demonstram que o BusPass reduziu atrasos, tempo de viagem ou custos. Para comunicar esse tipo de benefício quantitativo seria necessário realizar testes com usuários e apresentar a metodologia.

## Executar

É uma página estática. Abra \`index.html\` no navegador ou publique o diretório em um serviço de hospedagem de sites estáticos. Para uma visualização local mais fiel, use um servidor HTTP simples:

\`\`\`bash
python -m http.server 8000
\`\`\`

Depois, abra http://localhost:8000.

## Arquivos

- \`index.html\` — marcação e conteúdo.
- \`style.css\` — identidade visual e responsividade.
- \`script.js\` — comportamento do menu mobile, FAQ e ano no rodapé.
- \`fotos/\` — imagens da equipe e arte do terminal.\n- \`fotos/buspass-prototipo.avif\` — ilustração do protótipo (enquanto não publicada, o desenho anterior aparece como fallback).

## Links

- [Repositório principal do BusPass](https://github.com/vtvitor/BusPass)
- [Plataforma web](https://frontend-projeto-kmjv.onrender.com)

> O sistema web e o protótipo RFID estão em desenvolvimento. Pagamento bancário real e GPS ao vivo não são apresentados como funcionalidades já validadas.

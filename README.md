# BusPass — Landing Page

Página institucional do **BusPass**, projeto da equipe **Four Sync** voltado à experiência digital do transporte coletivo e à prototipagem de um terminal RFID.

## Visão geral

A página apresenta o conceito do BusPass, os recursos planejados e demonstrados, dados públicos que contextualizam o setor, o protótipo físico e os integrantes da equipe.

- **Plataforma web:** cadastro, cartão, saldo, recargas e informações de transporte disponibilizadas pelo projeto.
- **Terminal experimental:** RFID RC522, ESP32, Arduino, display LCD/TFT, API REST em Java/Spring Boot e MySQL.
- **Arte do protótipo:** imagem otimizada em AVIF da composição visual do hardware, com texto alternativo para acessibilidade.
- **Transparência:** recursos sujeitos a testes não são apresentados como sistema oficial, homologado ou integração bancária confirmada.

## Mobilidade em números — IBGE 2025 e NTU 2024

Os números da seção **O cenário** descrevem a mobilidade brasileira e **não representam métricas de desempenho, impacto ou usuários do BusPass**.

| Indicador | Contexto | Fonte |
| --- | --- | --- |
| **14,9 milhões** | Pessoas que utilizavam o ônibus como principal meio de transporte ao trabalho, no Censo 2022 divulgado em 2025. | [IBGE Educa, 2025](https://educa.ibge.gov.br/jovens/materias-especiais/23064-censo-2022-como-a-populacao-se-desloca-para-estudar-e-trabalhar.html) |
| **70%** | Usuários de ônibus como meio principal para ir ao trabalho levavam ao menos 30 minutos no trajeto. | [Agência Brasil / IBGE, 09/10/2025](https://agenciabrasil.ebc.com.br/geral/noticia/2025-10/carro-e-o-principal-meio-de-transporte-para-o-trabalho-diz-censo) |
| **35,4 milhões por dia** | Viagens realizadas por passageiros por dia no Brasil em 2024, de acordo com os grandes números do setor de ônibus da NTU. | [NTU, Grandes Números — dados de 2024](https://www.ntu.org.br/novo/ckfinder/userfiles/files/NTU-Grandes%20n%C3%BAmeros%20do%20setor%20v13_5.pdf) |

**Nota metodológica:** o primeiro indicador vem do Censo 2022, mas foi divulgado pelo IBGE em 2025. O dado da NTU apresenta o volume diário de viagens em 2024 e contabiliza viagens, não indivíduos únicos. Eles não demonstram redução de atrasos, tarifas ou tempo de viagem causada pelo BusPass.

## Executar localmente

É um site estático, sem etapa obrigatória de build. Na raiz do projeto:

```bash
python -m http.server 8000
```

Acesse **http://localhost:8000** no navegador.

## Estrutura

```text
.
├── index.html                   # Conteúdo, navegação e SEO
├── style.css                    # Design responsivo e acessibilidade visual
├── script.js                    # Menu, FAQ, ano e imagem do protótipo
└── fotos/
    ├── buspass-prototipo.avif   # Ilustração otimizada do hardware
    └── ...                     # Fotos da equipe
```

O diagrama anterior funciona como fallback caso o navegador não consiga carregar a imagem AVIF.

## Links

- [Plataforma BusPass](https://frontend-projeto-kmjv.onrender.com)
- [Repositório principal do BusPass](https://github.com/vtvitor/BusPass)
- [Equipe / GitHub](https://github.com/vtvitor)

---

**Estado do projeto:** demonstração acadêmica em evolução. Integrações com hardware e meios de pagamento só devem ser consideradas concluídas após testes e validação.

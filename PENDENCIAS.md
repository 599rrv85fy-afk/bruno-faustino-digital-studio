# Pendências BFDS

## Segurança do email — obrigatória

- [ ] DMARC está em `p=none`, confirmado no painel DNS em 3 de outubro de 2026. Após um período de observação dos relatórios e validação do alinhamento SPF/DKIM de todos os envios legítimos, evoluir para `p=quarantine`. Após nova observação e validação, evoluir para `p=reject`. Não alterar a política antes dessa validação. Sem data ou lembrete automático definido.

## Fecho posterior

- [x] Atualizar localmente Privacidade, Cookies e Termos de Utilização em 3 de outubro de 2026, de acordo com os canais atuais e o consentimento de estatísticas. Não publicado; não representa conclusão jurídica.
- [ ] Após deploy validado, confirmar submissão real do formulário `contacto`, redirecionamento para `/obrigado` e receção da notificação em `info@brunofaustino.pt`.


## Legal — confirmação profissional antes do fecho definitivo

- [x] Identificação base do responsável/titular, morada profissional e NIF confirmados pelo utilizador e integrados localmente nas páginas de Privacidade e Termos em 4 de outubro de 2026. Bruno Faustino é o titular; Bruno Faustino Digital Studio é a marca. Email profissional confirmado: info@brunofaustino.pt. Não publicado.
- [ ] Confirmar início/enquadramento da atividade e validar profissionalmente os deveres de informação aplicáveis.
- [ ] Definir atuação B2B e/ou B2C e obrigações aplicáveis; não presumir exclusividade B2B.
- [ ] Validar RAL, entidade competente e texto aplicável, sem presumir adesão.
- [ ] Validar aplicabilidade, registo, formato e ligação do Livro de Reclamações Eletrónico.
- [ ] Confirmar IVA, faturação e prazos legais/fiscais de conservação com contabilista.
- [ ] Rever juridicamente políticas e condições de proposta/contrato: âmbito, entregas, direitos, manutenção, cessação e eventuais regras de contratação à distância.
- [ ] Validar documentalmente fornecedores e transferências: Netlify, Apple/iCloud+, Umami Cloud e WhatsApp Business; papéis, termos aplicáveis às contas utilizadas, subcontratantes, localizações, mecanismos e acesso a cópia das garantias. Confirmar adequação contratual do iCloud+ ao tratamento de correspondência de clientes. Não assumir residência exclusiva na UE nem garantias já verificadas. Completar a informação pública sobre transferências antes do fecho definitivo.
- [ ] Confirmar retenção efetiva do plano Umami, dados transmitidos e capacidade de eliminação; o consentimento prévio já está implementado, mas não comprova estes pontos.
- [ ] Adotar e operacionalizar a proposta de conservação da auditoria: contactos sem contratação até 12 meses após a última interação relevante; cópias Netlify até 90 dias após receção e confirmação da informação necessária no canal de acompanhamento; spam/testes até 30 dias após identificação. Estes prazos são propostas, não práticas confirmadas nem prazos legais. Abranger email, WhatsApp, exportações e dispositivos; validar exceções, registos técnicos e backups. A copy pública usa critérios enquanto a adoção não estiver confirmada.
- [ ] Verificar permissões/licenças das imagens, marcas e materiais do projeto Imagine Dragons; a indicação académico/conceptual não substitui essa verificação.
- [ ] Concluir a evolução DMARC `p=none → p=quarantine → p=reject`, segundo as condições da secção Segurança do email acima; sem alterar DNS nesta implementação.

## Validações posteriores em produção

- [ ] Confirmar consentimento e retirada no domínio público e receção real de pageviews no Umami após aceitação.
- [ ] Confirmar redirects HTTP/HTTPS e `www`, tecnologias efetivamente carregadas e eventual proteção de acesso do alojamento.


## Quick wins e hardening — 4 de outubro de 2026

- [ ] Validar os quatro headers de `public/_headers` numa resposta HTML autenticada do próximo deploy privado; a verificação do artefacto local não confirma headers servidos. Manter Private.
- [ ] Evoluir CSP gradualmente após inventário de scripts, estilos e destinos efetivos e observação com Report-Only. Nesta fase usa-se `X-Frame-Options: DENY`; futura política deverá incluir `frame-ancestors 'none'`. Não ativar CSP restritiva sem validar consentimento/Umami, formulário e restantes percursos.

### Imagens sem referência no site compilado

Sem referências em HTML/CSS/JS compilado nem no código atual; seis ficheiros distintos, sem duplicados binários. Classificação de triagem, não confirmação de uso externo. Nenhum eliminado: ausência de referência interna não prova ausência de links externos ou valor histórico.

| Caminho em public | Classificação | Decisão |
| --- | --- | --- |
| `projects/andreia-babo-cover.jpg` | histórico (capa anterior) | Conservar; confirmar arquivo e eventuais links antes de remover. |
| `projects/andreia-babo/andreia-clinica.webp` | usar externamente (possível; por confirmar) | Conservar; confirmar finalidade e referências externas. |
| `projects/andreia-babo/andreia-retrato-clinico.webp` | usar externamente (possível; por confirmar) | Conservar; confirmar finalidade e referências externas. |
| `projects/andreia-babo/andreia-tratamento.webp` | usar externamente (possível; por confirmar) | Conservar; confirmar finalidade e referências externas. |
| `images/projects/andreia-babo/homepage.webp` | histórico (captura anterior) | Conservar; distinta da homepage-desktop usada. |
| `images/projects/imagine-dragons/project-cover.webp` | histórico (capa anterior) | Conservar; distinta da homepage usada. |

- [ ] Confirmar usos externos/necessidade de arquivo dos seis ficheiros antes de os considerar seguros para remoção. Nenhum classificado como inequivocamente seguro remover nesta passagem.

# Pendências BFDS

## Segurança do email — obrigatória

- [ ] DMARC está em `p=none`, confirmado no painel DNS em 3 de outubro de 2026. Após um período de observação dos relatórios e validação do alinhamento SPF/DKIM de todos os envios legítimos, evoluir para `p=quarantine`. Após nova observação e validação, evoluir para `p=reject`. Não alterar a política antes dessa validação. Sem data ou lembrete automático definido.

## Fecho posterior

- [x] Atualizar localmente Privacidade, Cookies e Termos de Utilização em 3 de outubro de 2026, de acordo com os canais atuais e o consentimento de estatísticas. Não publicado; não representa conclusão jurídica.
- [ ] Após deploy validado, confirmar submissão real do formulário `contacto`, redirecionamento para `/obrigado` e receção da notificação em `info@brunofaustino.pt`.


## Legal — confirmação profissional antes do fecho definitivo

- [ ] Confirmar identificação obrigatória, NIF, morada profissional e início/enquadramento da atividade. A omissão destes dados na copy atual não resolve eventuais deveres de informação.
- [ ] Definir atuação B2B e/ou B2C e obrigações aplicáveis; não presumir exclusividade B2B.
- [ ] Validar RAL, entidade competente e texto aplicável, sem presumir adesão.
- [ ] Validar aplicabilidade, registo, formato e ligação do Livro de Reclamações.
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

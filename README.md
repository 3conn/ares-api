# ares-api
Plataforma de Gestão de projetos para corporações publicas e/ou privadas
Escopo
Atende os requisitos de projetos nos mais diferente níveis hierárquicos de uma empresa.

##Descrição de Perfis

Admin da plataforma:
  - MAIN: administrador geral da plataforma, tem acesso a todo o sistema e tem a finalidade de corrigir possível entraves e manutenção do banco de dados.
  - ADMIN: Gerenciador da plataforma, tem acesso aos dados da corporação vinculada a ele, podendo modificar registros da mesma desde que diretamente vinculada mas não tem acesso a registros de nível inferior

Admin Usuários:
  - MANAGER: Gestor de empresa, tem acesso a todos os dados vinculados à sua empresa, podendo consultar e realizar atualizações e obter relatórios gerenciais.
  - DIRECTOR: Diretor de divisão, tem acessao a todos os registros e ferramentas vinculados à divisão na qual pertence. Podendo realizar atualizações e obter relatórios gerenciais.
  - EMPLOYEE: Funcionário de divisão tem acesso somente a alguns relatório individuais e inserção de registros de beneficiários.
  - RECIPIENT: Beneficiários dos programas desenvolvidos devem fornecer os dados pessoais para que ppossam ser localizados em possíveis auditorias e análise de qualidade dos serviços prestados.

Descrição da rotina do usuários:

Um ou mais beneficiários são atendidos pelo usuário que por sua vez efetua o registro correspondente. Este registro é previamente postado na plataforma pelo Diretor imediato que disponibilizou este atendimento para que o funcionário pudesse acessar e efetuar o registro.
Então somente o DIRECTOR ou EMPLOYEE desta divisão tem acesso a este serviço para que possa fazer inclusões ou modificações.

O atendimento gera um formulario que deve ser assinado pelo(s) beneficiário(s) e postado durante este registro que poderá ser consultado por qualquer membro desta corporação.

Ações:
- Cadastrar Contrato - MAIN
- Cadastrar/Atualizar Parceiro - MAIN, ADMIN
- Cadastrar atendimentos - DIRETOR, FUNCIONARIO / (DIRECTOR, EMPLOYEE)
- Cadastrar/Atualizar projetos - DIRETOR / (DIRECTOR)
- Cadastrar/Atualizar metas - DIRETOR / (DIRECTOR)
- Cadastrar/Atualizar serviços - DIRETOR / (DIRECTOR)
- Cadastrar/Atualizar Funcionarios - DIRETOR / (DIRECTOR)
- Cadastrar/Atualizar Diretores de divisão - GESTOR / (MANAGER)
- Cadastrar/Atualizar divisão - GESTOR / (MANAGER)
-  

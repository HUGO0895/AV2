# ✈️ Aerocode — Sistema de Gerenciamento Aeronáutico

Sistema web para gerenciamento de aeronaves, funcionários, etapas de manutenção, peças e controle de qualidade, desenvolvido com **React + TypeScript + Tailwind CSS**.
## DOCS
  [Documentação](Aerocode/doc-Wireflow.pdf)
---

## 📁 Pages e Components

```
src/
├── pages/
│   ├── login.tsx
│   ├── aeronaves.tsx
│   ├── funcionarios.tsx
│   ├── etapas.tsx
│   ├── pecas.tsx
│   ├── testes.tsx
│   └── relatorio.tsx
│
├── components/
│   ├── navbar.tsx
│   │
│   ├── aeronaves/
│   │   ├── verAero.tsx
│   │   ├── formCdastro.tsx
│   │   ├── formUpdate.tsx
│   │   └── deletarAero.tsx
│   │
│   ├── funcionarios/
│   │   ├── cadastro.tsx
│   │   ├── editar.tsx
│   │   ├── deletar.tsx
│   │   └── visualizar.tsx
│   │
│   ├── etapas/
│   │   ├── etapasAeronave.tsx
│   │   ├── formCadastroEtapas.tsx
│   │   ├── formEditarEtapas.tsx
│   │   └── formDeletarEtapas.tsx
│   │
│   ├── pecas/
│   │   ├── verPecas.tsx
│   │   ├── pecasdeAerovanes.tsx
│   │   ├── cadastrarPecas.tsx
│   │   ├── formEditarPeca.tsx
│   │   └── deletarPeca.tsx
│   │
│   └── testes/
│       ├── verTestes.tsx
│       ├── cadastro.tsx
│       └── deletarTeste.tsx
│
└── index.css
```

---

## 🗺️ Rotas

| Rota | Página |
|------|--------|
| `/` | Login |
| `/aeronaves` | Gestão de Frota |
| `/funcionarios` | Equipe |
| `/etapas` | Fluxo de Etapas |
| `/pecas` | Peças |
| `/testes` | Controle de Qualidade |
| `/relatorio` | Relatórios |

---

## 🖥️ Páginas

### 🔐 Login (`login.tsx`)
Tela inicial de autenticação. Redireciona para `/aeronaves` ao clicar em **Enviar**.

### ✈️ Aeronaves (`aeronaves.tsx`)
Renderiza `<Navbar />` e `<VerAeronaves />`.

### 👥 Funcionários (`funcionarios.tsx`)
Renderiza `<Navbar />` e o painel completo de gerenciamento de equipe com filtros e modais.

### 🔧 Etapas (`etapas.tsx`)
Renderiza `<Navbar />` e o painel de fluxo de etapas por aeronave com filtros e modais.

### 🔩 Peças (`pecas.tsx`)
Renderiza `<Navbar />` e `<VerPecas />`.

### 🧪 Testes (`testes.tsx`)
Renderiza `<Navbar />` e o painel de controle de qualidade por aeronave.

---

## 🧩 Componentes

---

### ✈️ Aeronaves

#### `verAero.tsx` — `<VerAeronaves />`

Listagem principal da frota com filtros e ações por aeronave.

**Estados internos:**

| Estado | Tipo | Descrição |
|--------|------|-----------|
| `busca` | `string` | Filtro por nome do modelo |
| `filtroTipo` | `string` | `'TODOS'` \| `'COMERCIAL'` \| `'MILITAR'` |
| `ModalCadastro` | `boolean` | Controla abertura do modal de cadastro |
| `ModalDelete` | `boolean` | Controla abertura do modal de exclusão |
| `ModalEditar` | `boolean` | Controla abertura do modal de edição |
| `AeroParaEditar` | `object` | Aeronave selecionada para editar |
| `idAero` | `string` | ID da aeronave selecionada para excluir |

**Aeronaves mockadas:**

| ID | Modelo | Tipo | Alcance | Capacidade |
|----|--------|------|---------|------------|
| AC-001 | Boeing 737 | COMERCIAL | 5.000 km | 180 |
| AC-002 | KC-390 | MILITAR | 2.800 km | 80 |
| AC-003 | Airbus A320 | COMERCIAL | 6.100 km | 150 |
| AC-004 | F-35 Lightning II | MILITAR | 2.200 km | 1 |

**Modais utilizados:** `FormCadastroAero`, `FormEditarAero`, `FormDeletarAero`

---

#### `formCdastro.tsx` — `<FormCadastroAero />`

Modal para cadastro de nova aeronave.

**Props:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `aberto` | `boolean` | Controla visibilidade |
| `fechado` | `() => void` | Callback para fechar |

**Campos do formulário:** ID, Modelo, Tipo (`COMERCIAL` / `MILITAR`), Alcance (km), Capacidade (passageiros)

---

#### `formUpdate.tsx` — `<FormEditarAero />`

Modal para edição de uma aeronave existente. Os campos são pré-preenchidos com os dados recebidos via prop.

**Props:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `aberto` | `boolean` | Controla visibilidade |
| `fechado` | `() => void` | Callback para fechar |
| `aeronave` | `object` | `{ id, modelo, tipo, alcance, capacidade }` |

---

#### `deletarAero.tsx` — `<FormDeletarAero />`

Modal de confirmação de exclusão de aeronave.

**Props:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `aberto` | `boolean` | Controla visibilidade |
| `fechado` | `() => void` | Callback para fechar |
| `nomeAero` | `string` | ID da aeronave a ser excluída |

---

### 👥 Funcionários

#### `cadastro.tsx` — `<FormCadastroFuncionario />`

Modal de cadastro de novo colaborador.

**Props:** `aberto: boolean`, `fechado: () => void`

**Campos:** Nome Completo, Usuário (Login), Senha, Telefone, Nível de Permissão, Endereço

---

#### `editar.tsx` — `<FormEditarFuncionario />`

Modal de edição de colaborador. O campo **Nome** é desabilitado (não editável).

**Props:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `aberto` | `boolean` | Controla visibilidade |
| `fechado` | `() => void` | Callback para fechar |
| `funcionario` | `any` | Dados do funcionário selecionado |

**Campos editáveis:** Usuário, Nova Senha, Telefone, Nível de Permissão, Endereço

---

#### `deletar.tsx` — `<ModalDeletarFuncionario />`

Modal de confirmação para remover um funcionário da equipe.

**Props:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `aberto` | `boolean` | Controla visibilidade |
| `fechado` | `() => void` | Callback para fechar |
| `nome` | `string` | Nome do funcionário a ser removido |

---

#### `visualizar.tsx` — `<ModalVerFuncionario />`

Modal de visualização do perfil completo de um colaborador. Exibe avatar com a inicial do nome.

**Props:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `aberto` | `boolean` | Controla visibilidade |
| `fechado` | `() => void` | Callback para fechar |
| `funcionario` | `object` | `{ nome, usuario, nivelPermissao, telefone, endereco }` |

---

### 🔧 Etapas

#### `etapasAeronave.tsx` — `<EtapasDaAeronave />`

Renderiza os cards de etapas de uma aeronave e controla os modais de edição e exclusão.

**Props:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `aberto` | `boolean` | Controla visibilidade da lista |
| `etapas` | `Array` | Lista de `{ nome, prazo, status, funcionarios }` |

**Cores de status:**

| Status | Cor |
|--------|-----|
| `CONCLUIDA` | Verde |
| `ANDAMENTO` | Azul |
| `PENDENTE` | Cinza |

**Modais utilizados:** `FormEditarEtapa`, `FormDeletarEtapa`

---

#### `formCadastroEtapas.tsx` — `<FormCadastroEtapa />`

Modal de cadastro de nova etapa com alocação de equipe por tags/badges.

**Props:** `aberto: boolean`, `fechado: () => void`

**Campos:** Nome da Etapa, Prazo Final, Status Inicial, Equipe (multi-select com badges removíveis)

**Funcionários disponíveis (mock):** Hugo, Vitor Bomfim, Mateus, Ana, Carlos

---

#### `formEditarEtapas.tsx` — `<FormEditarEtapa />`

Modal de edição de etapa existente. Usa `useEffect` para sincronizar os funcionários selecionados sempre que a prop `etapa` mudar.

**Props:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `aberto` | `boolean` | Controla visibilidade |
| `fechado` | `() => void` | Callback para fechar |
| `etapa` | `object` | `{ nome, prazo, status, funcionarios }` |

---

#### `formDeletarEtapas.tsx` — `<FormDeletarEtapa />`

Modal de confirmação para remoção de etapa do cronograma.

**Props:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `aberto` | `boolean` | Controla visibilidade |
| `fechado` | `() => void` | Callback para fechar |
| `nomeEtapa` | `string` | Nome da etapa a ser removida |

---

### 🔩 Peças

#### `verPecas.tsx` — `<VerPecas />`

Painel de controle de peças com seleção de aeronave e filtros.

**Estados internos:**

| Estado | Tipo | Descrição |
|--------|------|-----------|
| `EscolhaAero` | `number` | Índice da aeronave selecionada |
| `Busca` | `string` | Filtro por tipo: `'TODOS'` \| `'IMPORTADA'` \| `'NACIONAL'` |
| `BuscaNome` | `string` | Filtro por nome da peça |
| `ModalCadastro` | `boolean` | Controla abertura do modal de cadastro |

**Aeronaves mockadas:** Boeing 737 (AC-001), KC-390 (AC-002), Airbus A320 (AC-003)

**Modais utilizados:** `FormCadastroPeca`

---

#### `pecasdeAerovanes.tsx` — `<PecasdeAeronaves />`

Renderiza os cards de peças com filtros aplicados. Gerencia os modais de edição e exclusão internamente.

**Props:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `aberto` | `boolean` | Controla visibilidade |
| `aeronavePecas` | `Array` | Lista de `{ nome, status, fornecedor, tipo }` |
| `buscaNome` | `string` | Filtro por nome (já em lowercase) |
| `buscaT` | `string` | Filtro por tipo (`TODOS`, `IMPORTADA`, `NACIONAL`) |

**Status de peça:** `EM PRODUÇÃO` \| `EM TRANSPORTE` \| `PRONTA`

**Modais utilizados:** `FormEditarPeca`, `FormDeletarPeca`

---

#### `cadastrarPecas.tsx` — `<FormCadastroPeca />`

Modal de cadastro de nova peça com backdrop blur.

**Props:** `aberto: boolean`, `fechado: () => void`

**Campos:** Nome do Componente, Fornecedor, Origem/Tipo (`NACIONAL` / `IMPORTADA`), Status (`EM PRODUÇÃO` / `EM TRANSPORTE` / `PRONTA`)

---

#### `formEditarPeca.tsx` — `<FormEditarPeca />`

Modal de edição de peça existente com campos pré-preenchidos via `defaultValue`.

**Props:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `aberto` | `boolean` | Controla visibilidade |
| `fechado` | `() => void` | Callback para fechar |
| `peca` | `object` | `{ nome, status, fornecedor, tipo }` |

---

#### `deletarPeca.tsx` — `<FormDeletarPeca />`

Modal de confirmação para exclusão de peça.

**Props:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `aberto` | `boolean` | Controla visibilidade |
| `fechado` | `() => void` | Callback para fechar |
| `nomeAero` | `string` | Nome da peça a ser excluída |

---

### 🧪 Testes

#### `verTestes.tsx` — `<TestesDaAeronave />`

Renderiza os cards de testes de uma aeronave. A borda esquerda do card é verde para `APROVADO` e vermelha para `REPROVADO`.

**Props:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `aberto` | `boolean` | Controla visibilidade |
| `testes` | `Array` | Lista de `{ tipo, resultado, data }` |

**Tipos de teste:** `ELÉTRICO` \| `HIDRÁULICO` \| `AERODINÂMICO`

**Resultados:** `APROVADO` \| `REPROVADO`

**Modais utilizados:** `FormCadastroTeste` (acionado pelo botão "Detalhes"), `FormDeletarTeste`

---

#### `cadastro.tsx` — `<FormCadastroTeste />`

Modal de cadastro de novo teste. O resultado é selecionado por botões visuais coloridos.

**Props:** `aberto: boolean`, `fechado: () => void`

**Campos:** Tipo de Teste (select), Resultado (botões `APROVADO` / `REPROVADO`)

---

#### `deletarTeste.tsx` — `<FormDeletarTeste />`

Modal de confirmação para exclusão de registro de teste.

**Props:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `aberto` | `boolean` | Controla visibilidade |
| `fechado` | `() => void` | Callback para fechar |
| `tipoTeste` | `string` | Tipo do teste a ser excluído |

---

## 🎨 Design System

| Token | Valor |
|-------|-------|
| Cor primária | `#123354` |
| Hover primário | `#1a4a7a` |
| Borda dos cards | `rounded-3xl` |
| Borda dos botões | `rounded-2xl` / `rounded-xl` |
| Rótulos de campo | `text-xs font-black uppercase text-gray-400` |
| Fundo dos cards | `bg-gray-50 border border-gray-100` |
| Overlay dos modais | `bg-black/60` |

**Cores de status e permissão:**

| Valor | Cor |
|-------|-----|
| `ADMINISTRADOR` | Roxo |
| `ENGENHEIRO` | Azul |
| `OPERADOR` | Laranja |
| `APROVADO` / `CONCLUIDA` | Verde |
| `ANDAMENTO` | Azul |
| `REPROVADO` / Exclusão | Vermelho |
| `PENDENTE` | Cinza |

---

## 🛠️ Tecnologias

- **React** com **TypeScript**
- **Tailwind CSS**
- **React Router DOM**

---

## 🚀 Como Rodar

```bash
# Clonar Repositório
git clone git@github.com:HUGO0895/AV2.git
# Pasta Certa
cd AV2/Aerocode
# Instalar dependências
npm install

# Rodar 
npm run dev
```

---

## 👨‍💻 Equipe

Projeto desenvolvido pela equipe **Aerocode**.

# 🔑 Como Configurar o NPM_TOKEN

O erro de publicação no NPM ocorre porque o GitHub Actions precisa de um token de autenticação do NPM para publicar o pacote.

## 📋 Passo a Passo

### 1️⃣ Criar um Token no NPM

1. Acesse https://www.npmjs.com/
2. Faça login na sua conta
3. Clique no seu avatar (canto superior direito) → **Access Tokens**
   - Ou acesse diretamente: https://www.npmjs.com/settings/YOUR_USERNAME/tokens
4. Clique em **"Generate New Token"**
5. Selecione **"Automation"** (não Classic!)
6. Dê um nome para o token (ex: "GitHub Actions rharuow-ds")
7. Clique em **"Generate Token"**
8. **⚠️ IMPORTANTE**: Copie o token gerado (começa com `npm_...`)
   - Você não poderá vê-lo novamente!

### 2️⃣ Adicionar o Token ao GitHub

1. Acesse o repositório: https://github.com/Rharuow/rharuow-ds-docs
2. Vá em **Settings** (no menu do repositório)
3. No menu lateral, clique em **Secrets and variables** → **Actions**
4. Clique em **"New repository secret"**
5. Preencha:
   - **Name**: `NPM_TOKEN` (exatamente assim, em maiúsculas)
   - **Secret**: Cole o token que você copiou do NPM
6. Clique em **"Add secret"**

### 3️⃣ Verificar a Configuração

Após adicionar o secret, você pode:

#### Opção A: Disparar manualmente o workflow
1. Vá em **Actions** no GitHub
2. Selecione o workflow **"Publish to NPM"**
3. Clique em **"Run workflow"**
4. Selecione a branch `main`
5. Clique em **"Run workflow"**

#### Opção B: Criar uma nova tag
```bash
cd /home/rharuow/project/design-system
git tag -d v1.8.1
git push origin :refs/tags/v1.8.1
git tag v1.8.1
git push origin v1.8.1
```

## ✅ Como Saber se Funcionou

1. Vá em https://github.com/Rharuow/rharuow-ds-docs/actions
2. Procure pelo workflow **"Publish to NPM"**
3. Se estiver verde ✅, a publicação foi bem sucedida
4. Verifique em https://www.npmjs.com/package/rharuow-ds

## 🔒 Segurança

- ✅ Nunca compartilhe seu token NPM
- ✅ Use tokens do tipo "Automation" (mais seguros)
- ✅ Você pode revogar e criar novos tokens a qualquer momento
- ✅ O GitHub mantém os secrets criptografados

## 🆘 Problemas Comuns

### "Token inválido"
- Certifique-se de que copiou o token completo (incluindo `npm_...`)
- Verifique se o token não expirou
- Recrie o token se necessário

### "Permissão negada"
- Verifique se você tem permissão de publicar no pacote `rharuow-ds`
- Se for a primeira publicação, o nome do usuário npm deve corresponder ao escopo do pacote

### "Pacote já existe"
- Se o pacote já existe, você precisa ter permissão de colaborador/mantenedor
- Ou publique com um nome diferente no package.json

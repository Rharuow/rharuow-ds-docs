# 🚀 Guia de Publicação - rharuow-ds

Este guia te ajudará a publicar o Design System no GitHub Pages e NPM.

## 📋 Pré-requisitos

### 1. GitHub
- [ ] Repositório criado no GitHub
- [ ] Branch `main` como branch principal
- [ ] Código commitado e enviado para o GitHub

### 2. NPM
- [ ] Conta no NPM (criar em [npmjs.com](https://npmjs.com))
- [ ] Token de acesso NPM

### 3. Configurações do Repositório

#### GitHub Pages
1. Vá para **Settings** > **Pages**
2. Em **Source**, selecione **GitHub Actions**

#### NPM Token
1. Acesse [npmjs.com](https://npmjs.com) > Profile > **Access Tokens**
2. Clique em **Generate New Token** > **Automation**
3. Copie o token gerado
4. No GitHub, vá para **Settings** > **Secrets and variables** > **Actions**
5. Clique em **New repository secret**
6. Nome: `NPM_TOKEN`
7. Valor: Cole o token do NPM

## 🎯 Primeira Publicação

### Método 1: Usando o script automatizado

```bash
# Para versão patch (1.0.9 → 1.0.10)
./publish.sh patch

# Para versão minor (1.0.9 → 1.1.0)
./publish.sh minor

# Para versão major (1.0.9 → 2.0.0)
./publish.sh major
```

### Método 2: Manual

1. **Verificar se tudo está funcionando**
   ```bash
   npm run build
   npm run build-storybook
   ```

2. **Incrementar versão**
   ```bash
   npm version patch  # ou minor, major
   ```

3. **Enviar para GitHub**
   ```bash
   git push origin main --follow-tags
   ```

## 📊 Acompanhando a Publicação

### GitHub Actions
Acesse: https://github.com/Rharuow/rharuow-ds-docs/actions

Você verá 3 workflows:
- ✅ **CI**: Build automático em PRs
- 🌐 **Deploy Storybook to GitHub Pages**: Publica documentação
- 📦 **Publish to NPM**: Publica pacote no NPM

### Resultados Esperados

#### GitHub Pages (Automático)
- ✅ Storybook publicado em: https://rharuow.github.io/rharuow-ds-docs/
- ⏱️ Demora ~2-5 minutos

#### NPM (Automático com tags)
- ✅ Pacote publicado em: https://www.npmjs.com/package/rharuow-ds
- ⏱️ Demora ~1-3 minutos

## 🔧 Publicações Futuras

Para atualizações, basta:

1. Fazer suas alterações
2. Commit e push
3. Executar: `./publish.sh [patch|minor|major]`

## 🆘 Troubleshooting

### Erro: NPM_TOKEN inválido
- Gere um novo token no NPM
- Atualize o secret no GitHub

### Erro: Permissões do GitHub Pages
- Vá em Settings > Actions > General
- Em "Workflow permissions", selecione "Read and write permissions"

### Erro: Build falha
- Verifique se todas as dependências estão instaladas
- Execute `npm ci` para clean install

### Storybook não carrega
- Verifique se o CSS foi construído: `npm run build:css`
- Verifique o console do browser para erros

## 📞 Suporte

Se precisar de ajuda:
1. Verifique os logs do GitHub Actions
2. Verifique se todos os pré-requisitos foram cumpridos
3. Teste localmente primeiro: `npm run storybook`

## 🎉 Primeiro Deploy

Após a primeira publicação bem-sucedida, você terá:

- 📚 **Documentação**: https://rharuow.github.io/rharuow-ds-docs/
- 📦 **Pacote NPM**: `npm install rharuow-ds`
- 🔄 **CI/CD**: Publicação automática em futuras tags

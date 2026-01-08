# 🔧 Configurar GitHub Pages - Branch Protection

## Problema
O erro "Branch 'main' is not allowed to deploy to github-pages due to environment protection rules" ocorre porque o ambiente `github-pages` tem regras de proteção que bloqueiam o deploy.

## ✅ Solução - Configure no GitHub

### Passo a Passo:

1. **Acesse as configurações do repositório:**
   - Vá para: https://github.com/Rharuow/rharuow-ds-docs/settings/environments

2. **Configure o ambiente github-pages:**
   - Se você ver um ambiente chamado `github-pages`, clique nele
   - Procure por **"Deployment branches and tags"**
   - Certifique-se de que está configurado como:
     - ✅ **"All branches"** (recomendado para simplicidade)
     - OU adicione `main` especificamente na lista de branches permitidas

3. **Se o ambiente não existir ou der problema:**
   - Delete o ambiente `github-pages` (se existir)
   - Vá em Settings → Pages
   - Em "Build and deployment":
     - Source: **GitHub Actions**
   - Salve

4. **Execute o workflow novamente:**
   - Vá em Actions
   - Selecione "Deploy Storybook to GitHub Pages"
   - Clique em "Re-run all jobs"

## 📸 Visual

Na página de Environments, você deve ver algo assim:

```
Deployment branches and tags
○ No restriction (all branches can deploy)  ← Selecione esta opção
○ Selected branches and tags
```

## 🔄 Alternativa - Simplificar o Workflow

Se preferir, posso modificar o workflow para não usar proteção de ambiente, tornando o deploy mais simples e direto.

Qual você prefere?
1. Configurar manualmente no GitHub (mais seguro para produção)
2. Simplificar o workflow (mais rápido, sem proteções)

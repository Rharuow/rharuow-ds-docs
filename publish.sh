#!/bin/bash

# Script para publicação completa do Design System
# Uso: ./publish.sh [patch|minor|major]

set -e

VERSION_TYPE=${1:-patch}

echo "🚀 Iniciando processo de publicação..."
echo "📦 Tipo de versão: $VERSION_TYPE"

# 1. Verificar se está na branch main
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "❌ Erro: Você deve estar na branch 'main' para publicar"
    exit 1
fi

# 2. Verificar se há mudanças não commitadas
if ! git diff-index --quiet HEAD --; then
    echo "❌ Erro: Há mudanças não commitadas. Faça commit antes de publicar."
    exit 1
fi

# 3. Atualizar branch main
echo "🔄 Atualizando branch main..."
git pull origin main

# 4. Fazer build e testar
echo "🏗️  Fazendo build..."
npm run build

echo "📚 Construindo Storybook..."
npm run build-storybook

# 5. Incrementar versão e criar tag
echo "📝 Incrementando versão ($VERSION_TYPE)..."
npm version $VERSION_TYPE

# 6. Fazer push com tags
echo "⬆️  Enviando para GitHub..."
git push origin main --follow-tags

echo "✅ Publicação iniciada!"
echo "🔍 Acompanhe o progresso no GitHub Actions:"
echo "   - Storybook: https://github.com/Rharuow/rharuow-ds-docs/actions"
echo "   - NPM: A publicação será automática após criar a tag"
echo ""
echo "📚 Documentação estará disponível em:"
echo "   https://rharuow.github.io/rharuow-ds-docs/"
echo ""
echo "📦 Pacote NPM estará disponível em:"
echo "   https://www.npmjs.com/package/rharuow-ds"

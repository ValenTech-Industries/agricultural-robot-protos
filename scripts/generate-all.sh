#!/bin/bash
set -e

echo "🔄 Generating protobuf code for all languages..."

# Generate all languages
buf generate

# Create language-specific packages
echo "📦 Creating TypeScript package..."
./scripts/generate-typescript.sh

echo "📦 Creating Python package..."
./scripts/generate-python.sh

echo "✅ All protobuf generation complete!"
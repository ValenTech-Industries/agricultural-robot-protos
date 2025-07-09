#!/bin/bash
set -e

echo "🔄 Generating protobuf code for all languages..."

# Generate all languages
buf generate

# Create language-specific packages
echo "📦 Creating TypeScript package..."
./scripts/package-typescript.sh

echo "📦 Creating Python package..."
./scripts/package-python.sh

echo "📦 Creating C++ package..."
./scripts/package-cpp.sh

echo "✅ All protobuf generation complete!"
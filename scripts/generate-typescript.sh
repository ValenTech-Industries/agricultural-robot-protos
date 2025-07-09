#!/bin/bash
set -e

echo "🔄 Generating protobuf code for all languages..."

# Generate all languages using buf
buf generate

# Run additional TypeScript setup if the script exists
if [ -f "scripts/generate-typescript.sh" ]; then
    echo "📦 Setting up TypeScript package..."
    ./scripts/generate-typescript.sh
fi

# Run additional Python setup if the script exists  
if [ -f "scripts/generate-python.sh" ]; then
    echo "📦 Setting up Python package..."
    ./scripts/generate-python.sh
fi

echo "✅ All protobuf generation complete!"
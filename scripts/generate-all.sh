#!/bin/bash
set -e

echo "🔄 Generating protobuf code for all languages..."

# Generate all languages ONCE
buf generate

echo "📦 Setting up TypeScript package..."

# Create package.json for generated code (only if it doesn't exist)
if [ ! -f "generated/typescript/package.json" ]; then
    cat > generated/typescript/package.json << EOF
{
  "name": "@agricultural-robot/protos-ts",
  "version": "$(git describe --tags --always)",
  "description": "TypeScript protobuf definitions for Agricultural Robot Platform",
  "main": "index.js",
  "types": "index.d.ts",
  "files": ["**/*.js", "**/*.d.ts"],
  "dependencies": {
    "@grpc/grpc-js": "^1.9.0",
    "google-protobuf": "^3.21.0"
  },
  "repository": "https://github.com/ValenTech-Industries/agricultural-robot-protos",
  "license": "MIT"
}
EOF
fi

# Create index file (only if it doesn't exist)
if [ ! -f "generated/typescript/index.ts" ]; then
    cat > generated/typescript/index.ts << EOF
// Export all generated protobuf types
export * from './proto/robot/navigation/robot-navigation_pb';
export * from './proto/robot/navigation/robot-navigation_grpc_pb';
// Add more exports as needed
EOF
fi

echo "✅ All protobuf generation complete!"
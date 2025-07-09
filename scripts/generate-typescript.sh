#!/bin/bash
set -e

echo "🔄 Generating TypeScript protobuf code..."

# Generate TypeScript
buf generate --template buf.gen.yaml --include-imports

# Create package.json for generated code
cat > generated/typescript/package.json << EOF
{
  "name": "@agricultural-robot/protos-ts",
  "version": "$(git describe --tags --always)",
  "description": "TypeScript protobuf definitions for Agricultural Robot Platform",
  "main": "index.js",
  "types": "index.d.ts",
  "files": ["**/*.js", "**/*.d.ts"],
  "dependencies": {
    "@connectrpc/connect": "^1.0.0",
    "@bufbuild/protobuf": "^1.0.0"
  },
  "repository": "https://github.com/ValenTech-Industries/agricultural-robot-protos",
  "license": "MIT"
}
EOF

# Create index file
cat > generated/typescript/index.ts << EOF
// Export all generated protobuf types
export * from './robot/navigation/navigation_pb.js';
export * from './robot/control/movement_pb.js';
export * from './robot/telemetry/status_pb.js';
export * from './common/types_pb.js';
// Add more exports as needed
EOF

echo "✅ TypeScript generation complete!"
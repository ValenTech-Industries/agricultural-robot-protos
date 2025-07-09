#!/bin/bash
set -e

echo "🔄 Completing protobuf generation..."

# The JavaScript generation already worked, so let's just do Python and C++

echo "📦 Generating Python..."
python3 -m grpc_tools.protoc \
  --python_out=generated/python \
  --grpc_python_out=generated/python \
  --proto_path=proto \
  proto/robot/navigation/robot-navigation.proto

echo "📦 Generating C++..."
# Generate C++ protobuf messages
protoc \
  --experimental_allow_proto3_optional \
  --cpp_out=generated/cpp \
  --proto_path=proto \
  proto/robot/navigation/robot-navigation.proto

# Generate C++ gRPC services (if grpc_cpp_plugin is available)
if command -v grpc_cpp_plugin &> /dev/null; then
    echo "📦 Generating C++ gRPC services..."
    protoc \
      --experimental_allow_proto3_optional \
      --grpc_cpp_out=generated/cpp \
      --plugin=protoc-gen-grpc_cpp=$(which grpc_cpp_plugin) \
      --proto_path=proto \
      proto/robot/navigation/robot-navigation.proto
else
    echo "⚠️  grpc_cpp_plugin not found, skipping C++ gRPC generation"
    echo "   Install with: sudo apt install libgrpc++-dev"
fi

echo "✅ Generation complete!"
echo "📁 All generated files:"
find generated/ -type f | sort
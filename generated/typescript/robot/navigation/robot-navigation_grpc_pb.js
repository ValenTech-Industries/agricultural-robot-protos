// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var robot_navigation_robot$navigation_pb = require('../../robot/navigation/robot-navigation_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_agricultural_robot_navigation_v1_CameraControlRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.CameraControlRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.CameraControlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_CameraControlRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.CameraControlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_CameraControlResponse(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.CameraControlResponse)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.CameraControlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_CameraControlResponse(buffer_arg) {
  return robot_navigation_robot$navigation_pb.CameraControlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_CameraInfoResponse(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.CameraInfoResponse)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.CameraInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_CameraInfoResponse(buffer_arg) {
  return robot_navigation_robot$navigation_pb.CameraInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_CancelGoalRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.CancelGoalRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.CancelGoalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_CancelGoalRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.CancelGoalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_ClearMapRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.ClearMapRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.ClearMapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_ClearMapRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.ClearMapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_GetCameraInfoRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.GetCameraInfoRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.GetCameraInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_GetCameraInfoRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.GetCameraInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_GetLocalizationStatusRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.GetLocalizationStatusRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.GetLocalizationStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_GetLocalizationStatusRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.GetLocalizationStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_GetMapRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.GetMapRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.GetMapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_GetMapRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.GetMapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_GetNavigationStatusRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.GetNavigationStatusRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.GetNavigationStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_GetNavigationStatusRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.GetNavigationStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_GetPositionRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.GetPositionRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.GetPositionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_GetPositionRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.GetPositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_InitializeLocalizationRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.InitializeLocalizationRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.InitializeLocalizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_InitializeLocalizationRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.InitializeLocalizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_LocalizationResponse(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.LocalizationResponse)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.LocalizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_LocalizationResponse(buffer_arg) {
  return robot_navigation_robot$navigation_pb.LocalizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_LocalizationStatusResponse(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.LocalizationStatusResponse)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.LocalizationStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_LocalizationStatusResponse(buffer_arg) {
  return robot_navigation_robot$navigation_pb.LocalizationStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_MapResponse(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.MapResponse)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.MapResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_MapResponse(buffer_arg) {
  return robot_navigation_robot$navigation_pb.MapResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_NavigationGoal(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.NavigationGoal)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.NavigationGoal');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_NavigationGoal(buffer_arg) {
  return robot_navigation_robot$navigation_pb.NavigationGoal.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_NavigationResponse(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.NavigationResponse)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.NavigationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_NavigationResponse(buffer_arg) {
  return robot_navigation_robot$navigation_pb.NavigationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_NavigationStatusResponse(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.NavigationStatusResponse)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.NavigationStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_NavigationStatusResponse(buffer_arg) {
  return robot_navigation_robot$navigation_pb.NavigationStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_NavigationStatusUpdate(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.NavigationStatusUpdate)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.NavigationStatusUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_NavigationStatusUpdate(buffer_arg) {
  return robot_navigation_robot$navigation_pb.NavigationStatusUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_PositionResponse(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.PositionResponse)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.PositionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_PositionResponse(buffer_arg) {
  return robot_navigation_robot$navigation_pb.PositionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_PositionUpdate(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.PositionUpdate)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.PositionUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_PositionUpdate(buffer_arg) {
  return robot_navigation_robot$navigation_pb.PositionUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_ResetLocalizationRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.ResetLocalizationRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.ResetLocalizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_ResetLocalizationRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.ResetLocalizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_SetMapRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.SetMapRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.SetMapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_SetMapRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.SetMapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_SetPositionRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.SetPositionRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.SetPositionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_SetPositionRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.SetPositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_StopMovementRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.StopMovementRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.StopMovementRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_StopMovementRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.StopMovementRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_StreamNavigationStatusRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.StreamNavigationStatusRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.StreamNavigationStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_StreamNavigationStatusRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.StreamNavigationStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_StreamPositionRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.StreamPositionRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.StreamPositionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_StreamPositionRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.StreamPositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_StreamVideoRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.StreamVideoRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.StreamVideoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_StreamVideoRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.StreamVideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_TrajectoryCommand(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.TrajectoryCommand)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.TrajectoryCommand');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_TrajectoryCommand(buffer_arg) {
  return robot_navigation_robot$navigation_pb.TrajectoryCommand.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_UpdateMapRequest(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.UpdateMapRequest)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.UpdateMapRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_UpdateMapRequest(buffer_arg) {
  return robot_navigation_robot$navigation_pb.UpdateMapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_VelocityCommand(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.VelocityCommand)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.VelocityCommand');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_VelocityCommand(buffer_arg) {
  return robot_navigation_robot$navigation_pb.VelocityCommand.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_VelocityResponse(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.VelocityResponse)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.VelocityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_VelocityResponse(buffer_arg) {
  return robot_navigation_robot$navigation_pb.VelocityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_agricultural_robot_navigation_v1_VideoFrame(arg) {
  if (!(arg instanceof robot_navigation_robot$navigation_pb.VideoFrame)) {
    throw new Error('Expected argument of type agricultural.robot.navigation.v1.VideoFrame');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_agricultural_robot_navigation_v1_VideoFrame(buffer_arg) {
  return robot_navigation_robot$navigation_pb.VideoFrame.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var RobotNavigationServiceService = exports.RobotNavigationServiceService = {
  // Map Management
getMap: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/GetMap',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.GetMapRequest,
    responseType: robot_navigation_robot$navigation_pb.MapResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_GetMapRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_GetMapRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_MapResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_MapResponse,
  },
  setMap: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/SetMap',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.SetMapRequest,
    responseType: robot_navigation_robot$navigation_pb.MapResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_SetMapRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_SetMapRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_MapResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_MapResponse,
  },
  updateMap: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/UpdateMap',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.UpdateMapRequest,
    responseType: robot_navigation_robot$navigation_pb.MapResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_UpdateMapRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_UpdateMapRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_MapResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_MapResponse,
  },
  clearMap: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/ClearMap',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.ClearMapRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_agricultural_robot_navigation_v1_ClearMapRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_ClearMapRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Position Management
getPosition: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/GetPosition',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.GetPositionRequest,
    responseType: robot_navigation_robot$navigation_pb.PositionResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_GetPositionRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_GetPositionRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_PositionResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_PositionResponse,
  },
  setPosition: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/SetPosition',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.SetPositionRequest,
    responseType: robot_navigation_robot$navigation_pb.PositionResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_SetPositionRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_SetPositionRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_PositionResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_PositionResponse,
  },
  streamPosition: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/StreamPosition',
    requestStream: false,
    responseStream: true,
    requestType: robot_navigation_robot$navigation_pb.StreamPositionRequest,
    responseType: robot_navigation_robot$navigation_pb.PositionUpdate,
    requestSerialize: serialize_agricultural_robot_navigation_v1_StreamPositionRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_StreamPositionRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_PositionUpdate,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_PositionUpdate,
  },
  // Manual Control (Joystick)
sendVelocityCommand: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/SendVelocityCommand',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.VelocityCommand,
    responseType: robot_navigation_robot$navigation_pb.VelocityResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_VelocityCommand,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_VelocityCommand,
    responseSerialize: serialize_agricultural_robot_navigation_v1_VelocityResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_VelocityResponse,
  },
  streamVelocityCommands: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/StreamVelocityCommands',
    requestStream: true,
    responseStream: true,
    requestType: robot_navigation_robot$navigation_pb.VelocityCommand,
    responseType: robot_navigation_robot$navigation_pb.VelocityResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_VelocityCommand,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_VelocityCommand,
    responseSerialize: serialize_agricultural_robot_navigation_v1_VelocityResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_VelocityResponse,
  },
  stopMovement: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/StopMovement',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.StopMovementRequest,
    responseType: robot_navigation_robot$navigation_pb.VelocityResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_StopMovementRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_StopMovementRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_VelocityResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_VelocityResponse,
  },
  // Autonomous Navigation
sendGoal: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/SendGoal',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.NavigationGoal,
    responseType: robot_navigation_robot$navigation_pb.NavigationResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_NavigationGoal,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_NavigationGoal,
    responseSerialize: serialize_agricultural_robot_navigation_v1_NavigationResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_NavigationResponse,
  },
  sendTrajectory: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/SendTrajectory',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.TrajectoryCommand,
    responseType: robot_navigation_robot$navigation_pb.NavigationResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_TrajectoryCommand,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_TrajectoryCommand,
    responseSerialize: serialize_agricultural_robot_navigation_v1_NavigationResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_NavigationResponse,
  },
  cancelGoal: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/CancelGoal',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.CancelGoalRequest,
    responseType: robot_navigation_robot$navigation_pb.NavigationResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_CancelGoalRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_CancelGoalRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_NavigationResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_NavigationResponse,
  },
  getNavigationStatus: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/GetNavigationStatus',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.GetNavigationStatusRequest,
    responseType: robot_navigation_robot$navigation_pb.NavigationStatusResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_GetNavigationStatusRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_GetNavigationStatusRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_NavigationStatusResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_NavigationStatusResponse,
  },
  streamNavigationStatus: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/StreamNavigationStatus',
    requestStream: false,
    responseStream: true,
    requestType: robot_navigation_robot$navigation_pb.StreamNavigationStatusRequest,
    responseType: robot_navigation_robot$navigation_pb.NavigationStatusUpdate,
    requestSerialize: serialize_agricultural_robot_navigation_v1_StreamNavigationStatusRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_StreamNavigationStatusRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_NavigationStatusUpdate,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_NavigationStatusUpdate,
  },
  // Camera and Video Streaming
getCameraInfo: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/GetCameraInfo',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.GetCameraInfoRequest,
    responseType: robot_navigation_robot$navigation_pb.CameraInfoResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_GetCameraInfoRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_GetCameraInfoRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_CameraInfoResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_CameraInfoResponse,
  },
  streamVideo: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/StreamVideo',
    requestStream: false,
    responseStream: true,
    requestType: robot_navigation_robot$navigation_pb.StreamVideoRequest,
    responseType: robot_navigation_robot$navigation_pb.VideoFrame,
    requestSerialize: serialize_agricultural_robot_navigation_v1_StreamVideoRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_StreamVideoRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_VideoFrame,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_VideoFrame,
  },
  controlCamera: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/ControlCamera',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.CameraControlRequest,
    responseType: robot_navigation_robot$navigation_pb.CameraControlResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_CameraControlRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_CameraControlRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_CameraControlResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_CameraControlResponse,
  },
  // Localization and SLAM
getLocalizationStatus: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/GetLocalizationStatus',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.GetLocalizationStatusRequest,
    responseType: robot_navigation_robot$navigation_pb.LocalizationStatusResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_GetLocalizationStatusRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_GetLocalizationStatusRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_LocalizationStatusResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_LocalizationStatusResponse,
  },
  initializeLocalization: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/InitializeLocalization',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.InitializeLocalizationRequest,
    responseType: robot_navigation_robot$navigation_pb.LocalizationResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_InitializeLocalizationRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_InitializeLocalizationRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_LocalizationResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_LocalizationResponse,
  },
  resetLocalization: {
    path: '/agricultural.robot.navigation.v1.RobotNavigationService/ResetLocalization',
    requestStream: false,
    responseStream: false,
    requestType: robot_navigation_robot$navigation_pb.ResetLocalizationRequest,
    responseType: robot_navigation_robot$navigation_pb.LocalizationResponse,
    requestSerialize: serialize_agricultural_robot_navigation_v1_ResetLocalizationRequest,
    requestDeserialize: deserialize_agricultural_robot_navigation_v1_ResetLocalizationRequest,
    responseSerialize: serialize_agricultural_robot_navigation_v1_LocalizationResponse,
    responseDeserialize: deserialize_agricultural_robot_navigation_v1_LocalizationResponse,
  },
};

exports.RobotNavigationServiceClient = grpc.makeGenericClientConstructor(RobotNavigationServiceService, 'RobotNavigationService');

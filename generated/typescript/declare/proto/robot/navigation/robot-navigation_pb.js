// source: proto/robot/navigation/robot-navigation.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.CameraControlCommand', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.CameraControlRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.CameraControlResponse', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.CameraControlType', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.CameraDistortion', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.CameraInfo', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.CameraInfoResponse', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.CameraIntrinsics', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.CameraStatus', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.CameraType', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.CancelGoalRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.ClearMapRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.ControlMode', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.DistortionModel', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.EmergencyStopType', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.FrameMetadata', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.GetCameraInfoRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.GetMapRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.GetPositionRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.JoystickInput', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.LocalizationHealth', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.LocalizationMethod', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.LocalizationMetrics', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.LocalizationQuality', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.LocalizationResponse', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.LocalizationStatus', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.LocalizationStatusResponse', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.MapMetadata', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.MapResponse', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.MapSource', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.MapType', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.MapUpdate', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.NavigationBehavior', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.NavigationError', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.NavigationErrorCode', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.NavigationGoal', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.NavigationOptions', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.NavigationProgress', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.NavigationResponse', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.NavigationResult', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.NavigationStatus', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.NavigationStatusResponse', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.NavigationStatusUpdate', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.OccupancyGridMap', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.OverlayType', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.PlannerType', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.Point2D', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.Point3D', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.Pose', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.PoseWithCovariance', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.PositionResponse', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.PositionUpdate', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.Quaternion', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.Rectangle', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.ResetLocalizationRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.Resolution', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.SafetyConstraints', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.SafetyViolation', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.SafetyViolationType', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.SetMapRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.SetPositionRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.StopMovementRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.StreamPositionRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.StreamVideoRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.TrajectoryCommand', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.TrajectoryExecutionMode', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.TrajectoryOptions', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.TrajectoryPoint', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.Twist', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.UpdateMapRequest', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.Vector3', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.VelocityCommand', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.VelocityResponse', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.VideoFormat', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.VideoFrame', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.VideoQuality', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.VideoStreamOptions', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.Waypoint', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.WaypointAction', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.WaypointActionType', null, global);
goog.exportSymbol('proto.agricultural.robot.navigation.v1.WaypointType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.GetMapRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.GetMapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.GetMapRequest.displayName = 'proto.agricultural.robot.navigation.v1.GetMapRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.SetMapRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.SetMapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.SetMapRequest.displayName = 'proto.agricultural.robot.navigation.v1.SetMapRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.UpdateMapRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.UpdateMapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.UpdateMapRequest.displayName = 'proto.agricultural.robot.navigation.v1.UpdateMapRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.ClearMapRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.ClearMapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.ClearMapRequest.displayName = 'proto.agricultural.robot.navigation.v1.ClearMapRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.MapResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.MapResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.MapResponse.displayName = 'proto.agricultural.robot.navigation.v1.MapResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.OccupancyGridMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.OccupancyGridMap.displayName = 'proto.agricultural.robot.navigation.v1.OccupancyGridMap';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.MapMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.MapMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.MapMetadata.displayName = 'proto.agricultural.robot.navigation.v1.MapMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.MapUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.MapUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.MapUpdate.displayName = 'proto.agricultural.robot.navigation.v1.MapUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.Rectangle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.Rectangle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.Rectangle.displayName = 'proto.agricultural.robot.navigation.v1.Rectangle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.GetPositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.GetPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.GetPositionRequest.displayName = 'proto.agricultural.robot.navigation.v1.GetPositionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.SetPositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.SetPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.SetPositionRequest.displayName = 'proto.agricultural.robot.navigation.v1.SetPositionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.StreamPositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.StreamPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.StreamPositionRequest.displayName = 'proto.agricultural.robot.navigation.v1.StreamPositionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.PositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.PositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.PositionResponse.displayName = 'proto.agricultural.robot.navigation.v1.PositionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.PositionUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.PositionUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.PositionUpdate.displayName = 'proto.agricultural.robot.navigation.v1.PositionUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.Pose = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.Pose, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.Pose.displayName = 'proto.agricultural.robot.navigation.v1.Pose';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.PoseWithCovariance.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.PoseWithCovariance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.PoseWithCovariance.displayName = 'proto.agricultural.robot.navigation.v1.PoseWithCovariance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.Point2D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.Point2D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.Point2D.displayName = 'proto.agricultural.robot.navigation.v1.Point2D';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.Point3D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.Point3D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.Point3D.displayName = 'proto.agricultural.robot.navigation.v1.Point3D';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.Quaternion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.Quaternion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.Quaternion.displayName = 'proto.agricultural.robot.navigation.v1.Quaternion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.Twist = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.Twist, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.Twist.displayName = 'proto.agricultural.robot.navigation.v1.Twist';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.Vector3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.Vector3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.Vector3.displayName = 'proto.agricultural.robot.navigation.v1.Vector3';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.VelocityCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.VelocityCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.VelocityCommand.displayName = 'proto.agricultural.robot.navigation.v1.VelocityCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.JoystickInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.JoystickInput.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.JoystickInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.JoystickInput.displayName = 'proto.agricultural.robot.navigation.v1.JoystickInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.VelocityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.VelocityResponse.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.VelocityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.VelocityResponse.displayName = 'proto.agricultural.robot.navigation.v1.VelocityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.StopMovementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.StopMovementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.StopMovementRequest.displayName = 'proto.agricultural.robot.navigation.v1.StopMovementRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.SafetyConstraints.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.SafetyConstraints, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.SafetyConstraints.displayName = 'proto.agricultural.robot.navigation.v1.SafetyConstraints';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.SafetyViolation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.SafetyViolation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.SafetyViolation.displayName = 'proto.agricultural.robot.navigation.v1.SafetyViolation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.NavigationGoal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.NavigationGoal.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.NavigationGoal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.NavigationGoal.displayName = 'proto.agricultural.robot.navigation.v1.NavigationGoal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.TrajectoryCommand.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.TrajectoryCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.TrajectoryCommand.displayName = 'proto.agricultural.robot.navigation.v1.TrajectoryCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.Waypoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.Waypoint.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.Waypoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.Waypoint.displayName = 'proto.agricultural.robot.navigation.v1.Waypoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.TrajectoryPoint.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.TrajectoryPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.TrajectoryPoint.displayName = 'proto.agricultural.robot.navigation.v1.TrajectoryPoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.NavigationOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.NavigationOptions.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.NavigationOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.NavigationOptions.displayName = 'proto.agricultural.robot.navigation.v1.NavigationOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.TrajectoryOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.TrajectoryOptions.displayName = 'proto.agricultural.robot.navigation.v1.TrajectoryOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.WaypointAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.WaypointAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.WaypointAction.displayName = 'proto.agricultural.robot.navigation.v1.WaypointAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.CancelGoalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.CancelGoalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.CancelGoalRequest.displayName = 'proto.agricultural.robot.navigation.v1.CancelGoalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest.displayName = 'proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest.displayName = 'proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.NavigationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.NavigationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.NavigationResponse.displayName = 'proto.agricultural.robot.navigation.v1.NavigationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.NavigationStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.NavigationStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.NavigationStatusResponse.displayName = 'proto.agricultural.robot.navigation.v1.NavigationStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.NavigationStatusUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.displayName = 'proto.agricultural.robot.navigation.v1.NavigationStatusUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.NavigationProgress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.NavigationProgress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.NavigationProgress.displayName = 'proto.agricultural.robot.navigation.v1.NavigationProgress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.NavigationError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.NavigationError.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.NavigationError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.NavigationError.displayName = 'proto.agricultural.robot.navigation.v1.NavigationError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.GetCameraInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.GetCameraInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.GetCameraInfoRequest.displayName = 'proto.agricultural.robot.navigation.v1.GetCameraInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.StreamVideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.StreamVideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.StreamVideoRequest.displayName = 'proto.agricultural.robot.navigation.v1.StreamVideoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.CameraControlRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.CameraControlRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.CameraControlRequest.displayName = 'proto.agricultural.robot.navigation.v1.CameraControlRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.CameraInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.CameraInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.CameraInfoResponse.displayName = 'proto.agricultural.robot.navigation.v1.CameraInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.CameraInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.CameraInfo.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.CameraInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.CameraInfo.displayName = 'proto.agricultural.robot.navigation.v1.CameraInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.VideoFrame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.VideoFrame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.VideoFrame.displayName = 'proto.agricultural.robot.navigation.v1.VideoFrame';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.VideoStreamOptions.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.VideoStreamOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.VideoStreamOptions.displayName = 'proto.agricultural.robot.navigation.v1.VideoStreamOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.CameraControlCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.CameraControlCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.CameraControlCommand.displayName = 'proto.agricultural.robot.navigation.v1.CameraControlCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.CameraControlResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.CameraControlResponse.displayName = 'proto.agricultural.robot.navigation.v1.CameraControlResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.Resolution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.Resolution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.Resolution.displayName = 'proto.agricultural.robot.navigation.v1.Resolution';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.CameraIntrinsics.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.CameraIntrinsics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.CameraIntrinsics.displayName = 'proto.agricultural.robot.navigation.v1.CameraIntrinsics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.CameraDistortion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.agricultural.robot.navigation.v1.CameraDistortion.repeatedFields_, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.CameraDistortion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.CameraDistortion.displayName = 'proto.agricultural.robot.navigation.v1.CameraDistortion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.FrameMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.FrameMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.FrameMetadata.displayName = 'proto.agricultural.robot.navigation.v1.FrameMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest.displayName = 'proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.displayName = 'proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.ResetLocalizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.ResetLocalizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.ResetLocalizationRequest.displayName = 'proto.agricultural.robot.navigation.v1.ResetLocalizationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.LocalizationStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.displayName = 'proto.agricultural.robot.navigation.v1.LocalizationStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.LocalizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.LocalizationResponse.displayName = 'proto.agricultural.robot.navigation.v1.LocalizationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.LocalizationQuality, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.LocalizationQuality.displayName = 'proto.agricultural.robot.navigation.v1.LocalizationQuality';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.agricultural.robot.navigation.v1.LocalizationMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.agricultural.robot.navigation.v1.LocalizationMetrics.displayName = 'proto.agricultural.robot.navigation.v1.LocalizationMetrics';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.GetMapRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.GetMapRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.GetMapRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.GetMapRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
mapType: jspb.Message.getFieldWithDefault(msg, 2, 0),
frameId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.GetMapRequest}
 */
proto.agricultural.robot.navigation.v1.GetMapRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.GetMapRequest;
  return proto.agricultural.robot.navigation.v1.GetMapRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.GetMapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.GetMapRequest}
 */
proto.agricultural.robot.navigation.v1.GetMapRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.MapType} */ (reader.readEnum());
      msg.setMapType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.GetMapRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.GetMapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.GetMapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.GetMapRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMapType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.GetMapRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.GetMapRequest} returns this
 */
proto.agricultural.robot.navigation.v1.GetMapRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MapType map_type = 2;
 * @return {!proto.agricultural.robot.navigation.v1.MapType}
 */
proto.agricultural.robot.navigation.v1.GetMapRequest.prototype.getMapType = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.MapType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.MapType} value
 * @return {!proto.agricultural.robot.navigation.v1.GetMapRequest} returns this
 */
proto.agricultural.robot.navigation.v1.GetMapRequest.prototype.setMapType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string frame_id = 3;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.GetMapRequest.prototype.getFrameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.GetMapRequest} returns this
 */
proto.agricultural.robot.navigation.v1.GetMapRequest.prototype.setFrameId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.GetMapRequest} returns this
 */
proto.agricultural.robot.navigation.v1.GetMapRequest.prototype.clearFrameId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.GetMapRequest.prototype.hasFrameId = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.SetMapRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.SetMapRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.SetMapRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.SetMapRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
mapData: (f = msg.getMapData()) && proto.agricultural.robot.navigation.v1.OccupancyGridMap.toObject(includeInstance, f),
metadata: (f = msg.getMetadata()) && proto.agricultural.robot.navigation.v1.MapMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.SetMapRequest}
 */
proto.agricultural.robot.navigation.v1.SetMapRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.SetMapRequest;
  return proto.agricultural.robot.navigation.v1.SetMapRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.SetMapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.SetMapRequest}
 */
proto.agricultural.robot.navigation.v1.SetMapRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = new proto.agricultural.robot.navigation.v1.OccupancyGridMap;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.OccupancyGridMap.deserializeBinaryFromReader);
      msg.setMapData(value);
      break;
    case 3:
      var value = new proto.agricultural.robot.navigation.v1.MapMetadata;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.MapMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.SetMapRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.SetMapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.SetMapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.SetMapRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMapData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.agricultural.robot.navigation.v1.OccupancyGridMap.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.agricultural.robot.navigation.v1.MapMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.SetMapRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.SetMapRequest} returns this
 */
proto.agricultural.robot.navigation.v1.SetMapRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OccupancyGridMap map_data = 2;
 * @return {?proto.agricultural.robot.navigation.v1.OccupancyGridMap}
 */
proto.agricultural.robot.navigation.v1.SetMapRequest.prototype.getMapData = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.OccupancyGridMap} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.OccupancyGridMap, 2));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.OccupancyGridMap|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.SetMapRequest} returns this
*/
proto.agricultural.robot.navigation.v1.SetMapRequest.prototype.setMapData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.SetMapRequest} returns this
 */
proto.agricultural.robot.navigation.v1.SetMapRequest.prototype.clearMapData = function() {
  return this.setMapData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.SetMapRequest.prototype.hasMapData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MapMetadata metadata = 3;
 * @return {?proto.agricultural.robot.navigation.v1.MapMetadata}
 */
proto.agricultural.robot.navigation.v1.SetMapRequest.prototype.getMetadata = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.MapMetadata} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.MapMetadata, 3));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.MapMetadata|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.SetMapRequest} returns this
*/
proto.agricultural.robot.navigation.v1.SetMapRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.SetMapRequest} returns this
 */
proto.agricultural.robot.navigation.v1.SetMapRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.SetMapRequest.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.UpdateMapRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.UpdateMapRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.UpdateMapRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.UpdateMapRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
update: (f = msg.getUpdate()) && proto.agricultural.robot.navigation.v1.MapUpdate.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.UpdateMapRequest}
 */
proto.agricultural.robot.navigation.v1.UpdateMapRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.UpdateMapRequest;
  return proto.agricultural.robot.navigation.v1.UpdateMapRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.UpdateMapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.UpdateMapRequest}
 */
proto.agricultural.robot.navigation.v1.UpdateMapRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = new proto.agricultural.robot.navigation.v1.MapUpdate;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.MapUpdate.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.UpdateMapRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.UpdateMapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.UpdateMapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.UpdateMapRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.agricultural.robot.navigation.v1.MapUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.UpdateMapRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.UpdateMapRequest} returns this
 */
proto.agricultural.robot.navigation.v1.UpdateMapRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MapUpdate update = 2;
 * @return {?proto.agricultural.robot.navigation.v1.MapUpdate}
 */
proto.agricultural.robot.navigation.v1.UpdateMapRequest.prototype.getUpdate = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.MapUpdate} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.MapUpdate, 2));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.MapUpdate|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.UpdateMapRequest} returns this
*/
proto.agricultural.robot.navigation.v1.UpdateMapRequest.prototype.setUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.UpdateMapRequest} returns this
 */
proto.agricultural.robot.navigation.v1.UpdateMapRequest.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.UpdateMapRequest.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.ClearMapRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.ClearMapRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.ClearMapRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.ClearMapRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
mapType: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.ClearMapRequest}
 */
proto.agricultural.robot.navigation.v1.ClearMapRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.ClearMapRequest;
  return proto.agricultural.robot.navigation.v1.ClearMapRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.ClearMapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.ClearMapRequest}
 */
proto.agricultural.robot.navigation.v1.ClearMapRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.MapType} */ (reader.readEnum());
      msg.setMapType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.ClearMapRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.ClearMapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.ClearMapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.ClearMapRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMapType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.ClearMapRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.ClearMapRequest} returns this
 */
proto.agricultural.robot.navigation.v1.ClearMapRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MapType map_type = 2;
 * @return {!proto.agricultural.robot.navigation.v1.MapType}
 */
proto.agricultural.robot.navigation.v1.ClearMapRequest.prototype.getMapType = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.MapType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.MapType} value
 * @return {!proto.agricultural.robot.navigation.v1.ClearMapRequest} returns this
 */
proto.agricultural.robot.navigation.v1.ClearMapRequest.prototype.setMapType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.MapResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.MapResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.MapResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
mapData: (f = msg.getMapData()) && proto.agricultural.robot.navigation.v1.OccupancyGridMap.toObject(includeInstance, f),
metadata: (f = msg.getMetadata()) && proto.agricultural.robot.navigation.v1.MapMetadata.toObject(includeInstance, f),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.MapResponse}
 */
proto.agricultural.robot.navigation.v1.MapResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.MapResponse;
  return proto.agricultural.robot.navigation.v1.MapResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.MapResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.MapResponse}
 */
proto.agricultural.robot.navigation.v1.MapResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.agricultural.robot.navigation.v1.OccupancyGridMap;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.OccupancyGridMap.deserializeBinaryFromReader);
      msg.setMapData(value);
      break;
    case 4:
      var value = new proto.agricultural.robot.navigation.v1.MapMetadata;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.MapMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.MapResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.MapResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.MapResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMapData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.agricultural.robot.navigation.v1.OccupancyGridMap.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.agricultural.robot.navigation.v1.MapMetadata.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agricultural.robot.navigation.v1.MapResponse} returns this
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.MapResponse} returns this
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OccupancyGridMap map_data = 3;
 * @return {?proto.agricultural.robot.navigation.v1.OccupancyGridMap}
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.getMapData = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.OccupancyGridMap} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.OccupancyGridMap, 3));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.OccupancyGridMap|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.MapResponse} returns this
*/
proto.agricultural.robot.navigation.v1.MapResponse.prototype.setMapData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.MapResponse} returns this
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.clearMapData = function() {
  return this.setMapData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.hasMapData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MapMetadata metadata = 4;
 * @return {?proto.agricultural.robot.navigation.v1.MapMetadata}
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.getMetadata = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.MapMetadata} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.MapMetadata, 4));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.MapMetadata|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.MapResponse} returns this
*/
proto.agricultural.robot.navigation.v1.MapResponse.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.MapResponse} returns this
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp timestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.MapResponse} returns this
*/
proto.agricultural.robot.navigation.v1.MapResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.MapResponse} returns this
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.MapResponse.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.OccupancyGridMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.OccupancyGridMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.toObject = function(includeInstance, msg) {
  var f, obj = {
info: (f = msg.getInfo()) && proto.agricultural.robot.navigation.v1.MapMetadata.toObject(includeInstance, f),
data: msg.getData_asB64(),
encoding: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.OccupancyGridMap}
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.OccupancyGridMap;
  return proto.agricultural.robot.navigation.v1.OccupancyGridMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.OccupancyGridMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.OccupancyGridMap}
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.agricultural.robot.navigation.v1.MapMetadata;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.MapMetadata.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncoding(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.OccupancyGridMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.OccupancyGridMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.agricultural.robot.navigation.v1.MapMetadata.serializeBinaryToWriter
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getEncoding();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional MapMetadata info = 1;
 * @return {?proto.agricultural.robot.navigation.v1.MapMetadata}
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.prototype.getInfo = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.MapMetadata} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.MapMetadata, 1));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.MapMetadata|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.OccupancyGridMap} returns this
*/
proto.agricultural.robot.navigation.v1.OccupancyGridMap.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.OccupancyGridMap} returns this
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.agricultural.robot.navigation.v1.OccupancyGridMap} returns this
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string encoding = 3;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.prototype.getEncoding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.OccupancyGridMap} returns this
 */
proto.agricultural.robot.navigation.v1.OccupancyGridMap.prototype.setEncoding = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.MapMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.MapMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.MapMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
mapLoadTime: (f = msg.getMapLoadTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
resolution: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
width: jspb.Message.getFieldWithDefault(msg, 3, 0),
height: jspb.Message.getFieldWithDefault(msg, 4, 0),
origin: (f = msg.getOrigin()) && proto.agricultural.robot.navigation.v1.Pose.toObject(includeInstance, f),
frameId: jspb.Message.getFieldWithDefault(msg, 6, ""),
version: jspb.Message.getFieldWithDefault(msg, 7, 0),
source: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.MapMetadata}
 */
proto.agricultural.robot.navigation.v1.MapMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.MapMetadata;
  return proto.agricultural.robot.navigation.v1.MapMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.MapMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.MapMetadata}
 */
proto.agricultural.robot.navigation.v1.MapMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setMapLoadTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setResolution(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 5:
      var value = new proto.agricultural.robot.navigation.v1.Pose;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Pose.deserializeBinaryFromReader);
      msg.setOrigin(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 8:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.MapSource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.MapMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.MapMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.MapMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapLoadTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResolution();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getOrigin();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.agricultural.robot.navigation.v1.Pose.serializeBinaryToWriter
    );
  }
  f = message.getFrameId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp map_load_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.getMapLoadTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.MapMetadata} returns this
*/
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.setMapLoadTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.MapMetadata} returns this
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.clearMapLoadTime = function() {
  return this.setMapLoadTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.hasMapLoadTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float resolution = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.getResolution = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.MapMetadata} returns this
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.setResolution = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional uint32 width = 3;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.MapMetadata} returns this
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 height = 4;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.MapMetadata} returns this
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Pose origin = 5;
 * @return {?proto.agricultural.robot.navigation.v1.Pose}
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.getOrigin = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Pose} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Pose, 5));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Pose|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.MapMetadata} returns this
*/
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.setOrigin = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.MapMetadata} returns this
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.clearOrigin = function() {
  return this.setOrigin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.hasOrigin = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string frame_id = 6;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.getFrameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.MapMetadata} returns this
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.setFrameId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 version = 7;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.MapMetadata} returns this
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional MapSource source = 8;
 * @return {!proto.agricultural.robot.navigation.v1.MapSource}
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.getSource = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.MapSource} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.MapSource} value
 * @return {!proto.agricultural.robot.navigation.v1.MapMetadata} returns this
 */
proto.agricultural.robot.navigation.v1.MapMetadata.prototype.setSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.MapUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.MapUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.MapUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.MapUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
updateRegion: (f = msg.getUpdateRegion()) && proto.agricultural.robot.navigation.v1.Rectangle.toObject(includeInstance, f),
data: msg.getData_asB64(),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.MapUpdate}
 */
proto.agricultural.robot.navigation.v1.MapUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.MapUpdate;
  return proto.agricultural.robot.navigation.v1.MapUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.MapUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.MapUpdate}
 */
proto.agricultural.robot.navigation.v1.MapUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.agricultural.robot.navigation.v1.Rectangle;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Rectangle.deserializeBinaryFromReader);
      msg.setUpdateRegion(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.MapUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.MapUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.MapUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.MapUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdateRegion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.agricultural.robot.navigation.v1.Rectangle.serializeBinaryToWriter
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional Rectangle update_region = 1;
 * @return {?proto.agricultural.robot.navigation.v1.Rectangle}
 */
proto.agricultural.robot.navigation.v1.MapUpdate.prototype.getUpdateRegion = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Rectangle} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Rectangle, 1));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Rectangle|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.MapUpdate} returns this
*/
proto.agricultural.robot.navigation.v1.MapUpdate.prototype.setUpdateRegion = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.MapUpdate} returns this
 */
proto.agricultural.robot.navigation.v1.MapUpdate.prototype.clearUpdateRegion = function() {
  return this.setUpdateRegion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.MapUpdate.prototype.hasUpdateRegion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.agricultural.robot.navigation.v1.MapUpdate.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.MapUpdate.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.MapUpdate.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.agricultural.robot.navigation.v1.MapUpdate} returns this
 */
proto.agricultural.robot.navigation.v1.MapUpdate.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.MapUpdate.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.MapUpdate} returns this
*/
proto.agricultural.robot.navigation.v1.MapUpdate.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.MapUpdate} returns this
 */
proto.agricultural.robot.navigation.v1.MapUpdate.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.MapUpdate.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.Rectangle.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.Rectangle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.Rectangle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Rectangle.toObject = function(includeInstance, msg) {
  var f, obj = {
min: (f = msg.getMin()) && proto.agricultural.robot.navigation.v1.Point2D.toObject(includeInstance, f),
max: (f = msg.getMax()) && proto.agricultural.robot.navigation.v1.Point2D.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.Rectangle}
 */
proto.agricultural.robot.navigation.v1.Rectangle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.Rectangle;
  return proto.agricultural.robot.navigation.v1.Rectangle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.Rectangle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.Rectangle}
 */
proto.agricultural.robot.navigation.v1.Rectangle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.agricultural.robot.navigation.v1.Point2D;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Point2D.deserializeBinaryFromReader);
      msg.setMin(value);
      break;
    case 2:
      var value = new proto.agricultural.robot.navigation.v1.Point2D;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Point2D.deserializeBinaryFromReader);
      msg.setMax(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.Rectangle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.Rectangle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.Rectangle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Rectangle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.agricultural.robot.navigation.v1.Point2D.serializeBinaryToWriter
    );
  }
  f = message.getMax();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.agricultural.robot.navigation.v1.Point2D.serializeBinaryToWriter
    );
  }
};


/**
 * optional Point2D min = 1;
 * @return {?proto.agricultural.robot.navigation.v1.Point2D}
 */
proto.agricultural.robot.navigation.v1.Rectangle.prototype.getMin = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Point2D} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Point2D, 1));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Point2D|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.Rectangle} returns this
*/
proto.agricultural.robot.navigation.v1.Rectangle.prototype.setMin = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.Rectangle} returns this
 */
proto.agricultural.robot.navigation.v1.Rectangle.prototype.clearMin = function() {
  return this.setMin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.Rectangle.prototype.hasMin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Point2D max = 2;
 * @return {?proto.agricultural.robot.navigation.v1.Point2D}
 */
proto.agricultural.robot.navigation.v1.Rectangle.prototype.getMax = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Point2D} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Point2D, 2));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Point2D|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.Rectangle} returns this
*/
proto.agricultural.robot.navigation.v1.Rectangle.prototype.setMax = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.Rectangle} returns this
 */
proto.agricultural.robot.navigation.v1.Rectangle.prototype.clearMax = function() {
  return this.setMax(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.Rectangle.prototype.hasMax = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.GetPositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.GetPositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.GetPositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.GetPositionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
frameId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.GetPositionRequest}
 */
proto.agricultural.robot.navigation.v1.GetPositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.GetPositionRequest;
  return proto.agricultural.robot.navigation.v1.GetPositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.GetPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.GetPositionRequest}
 */
proto.agricultural.robot.navigation.v1.GetPositionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.GetPositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.GetPositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.GetPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.GetPositionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrameId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.GetPositionRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.GetPositionRequest} returns this
 */
proto.agricultural.robot.navigation.v1.GetPositionRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string frame_id = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.GetPositionRequest.prototype.getFrameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.GetPositionRequest} returns this
 */
proto.agricultural.robot.navigation.v1.GetPositionRequest.prototype.setFrameId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.SetPositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.SetPositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.SetPositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.SetPositionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pose: (f = msg.getPose()) && proto.agricultural.robot.navigation.v1.PoseWithCovariance.toObject(includeInstance, f),
frameId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.SetPositionRequest}
 */
proto.agricultural.robot.navigation.v1.SetPositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.SetPositionRequest;
  return proto.agricultural.robot.navigation.v1.SetPositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.SetPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.SetPositionRequest}
 */
proto.agricultural.robot.navigation.v1.SetPositionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = new proto.agricultural.robot.navigation.v1.PoseWithCovariance;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.PoseWithCovariance.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.SetPositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.SetPositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.SetPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.SetPositionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.agricultural.robot.navigation.v1.PoseWithCovariance.serializeBinaryToWriter
    );
  }
  f = message.getFrameId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.SetPositionRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.SetPositionRequest} returns this
 */
proto.agricultural.robot.navigation.v1.SetPositionRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PoseWithCovariance pose = 2;
 * @return {?proto.agricultural.robot.navigation.v1.PoseWithCovariance}
 */
proto.agricultural.robot.navigation.v1.SetPositionRequest.prototype.getPose = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.PoseWithCovariance} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.PoseWithCovariance, 2));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.PoseWithCovariance|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.SetPositionRequest} returns this
*/
proto.agricultural.robot.navigation.v1.SetPositionRequest.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.SetPositionRequest} returns this
 */
proto.agricultural.robot.navigation.v1.SetPositionRequest.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.SetPositionRequest.prototype.hasPose = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string frame_id = 3;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.SetPositionRequest.prototype.getFrameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.SetPositionRequest} returns this
 */
proto.agricultural.robot.navigation.v1.SetPositionRequest.prototype.setFrameId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.StreamPositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.StreamPositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.StreamPositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.StreamPositionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
frameId: jspb.Message.getFieldWithDefault(msg, 2, ""),
frequencyHz: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.StreamPositionRequest}
 */
proto.agricultural.robot.navigation.v1.StreamPositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.StreamPositionRequest;
  return proto.agricultural.robot.navigation.v1.StreamPositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.StreamPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.StreamPositionRequest}
 */
proto.agricultural.robot.navigation.v1.StreamPositionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFrequencyHz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.StreamPositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.StreamPositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.StreamPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.StreamPositionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrameId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFrequencyHz();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.StreamPositionRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.StreamPositionRequest} returns this
 */
proto.agricultural.robot.navigation.v1.StreamPositionRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string frame_id = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.StreamPositionRequest.prototype.getFrameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.StreamPositionRequest} returns this
 */
proto.agricultural.robot.navigation.v1.StreamPositionRequest.prototype.setFrameId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 frequency_hz = 3;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.StreamPositionRequest.prototype.getFrequencyHz = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.StreamPositionRequest} returns this
 */
proto.agricultural.robot.navigation.v1.StreamPositionRequest.prototype.setFrequencyHz = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.PositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.PositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.PositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.PositionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
pose: (f = msg.getPose()) && proto.agricultural.robot.navigation.v1.PoseWithCovariance.toObject(includeInstance, f),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.PositionResponse}
 */
proto.agricultural.robot.navigation.v1.PositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.PositionResponse;
  return proto.agricultural.robot.navigation.v1.PositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.PositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.PositionResponse}
 */
proto.agricultural.robot.navigation.v1.PositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.agricultural.robot.navigation.v1.PoseWithCovariance;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.PoseWithCovariance.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.PositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.PositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.PositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.PositionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.agricultural.robot.navigation.v1.PoseWithCovariance.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.PositionResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agricultural.robot.navigation.v1.PositionResponse} returns this
 */
proto.agricultural.robot.navigation.v1.PositionResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.PositionResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.PositionResponse} returns this
 */
proto.agricultural.robot.navigation.v1.PositionResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PoseWithCovariance pose = 3;
 * @return {?proto.agricultural.robot.navigation.v1.PoseWithCovariance}
 */
proto.agricultural.robot.navigation.v1.PositionResponse.prototype.getPose = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.PoseWithCovariance} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.PoseWithCovariance, 3));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.PoseWithCovariance|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.PositionResponse} returns this
*/
proto.agricultural.robot.navigation.v1.PositionResponse.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.PositionResponse} returns this
 */
proto.agricultural.robot.navigation.v1.PositionResponse.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.PositionResponse.prototype.hasPose = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.PositionResponse.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.PositionResponse} returns this
*/
proto.agricultural.robot.navigation.v1.PositionResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.PositionResponse} returns this
 */
proto.agricultural.robot.navigation.v1.PositionResponse.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.PositionResponse.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.PositionUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.PositionUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pose: (f = msg.getPose()) && proto.agricultural.robot.navigation.v1.PoseWithCovariance.toObject(includeInstance, f),
velocity: (f = msg.getVelocity()) && proto.agricultural.robot.navigation.v1.Twist.toObject(includeInstance, f),
frameId: jspb.Message.getFieldWithDefault(msg, 4, ""),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
quality: (f = msg.getQuality()) && proto.agricultural.robot.navigation.v1.LocalizationQuality.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.PositionUpdate}
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.PositionUpdate;
  return proto.agricultural.robot.navigation.v1.PositionUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.PositionUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.PositionUpdate}
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = new proto.agricultural.robot.navigation.v1.PoseWithCovariance;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.PoseWithCovariance.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 3:
      var value = new proto.agricultural.robot.navigation.v1.Twist;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Twist.deserializeBinaryFromReader);
      msg.setVelocity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameId(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 6:
      var value = new proto.agricultural.robot.navigation.v1.LocalizationQuality;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.LocalizationQuality.deserializeBinaryFromReader);
      msg.setQuality(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.PositionUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.PositionUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.agricultural.robot.navigation.v1.PoseWithCovariance.serializeBinaryToWriter
    );
  }
  f = message.getVelocity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.agricultural.robot.navigation.v1.Twist.serializeBinaryToWriter
    );
  }
  f = message.getFrameId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getQuality();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.agricultural.robot.navigation.v1.LocalizationQuality.serializeBinaryToWriter
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.PositionUpdate} returns this
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PoseWithCovariance pose = 2;
 * @return {?proto.agricultural.robot.navigation.v1.PoseWithCovariance}
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.getPose = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.PoseWithCovariance} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.PoseWithCovariance, 2));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.PoseWithCovariance|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.PositionUpdate} returns this
*/
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.PositionUpdate} returns this
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.hasPose = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Twist velocity = 3;
 * @return {?proto.agricultural.robot.navigation.v1.Twist}
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.getVelocity = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Twist} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Twist, 3));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Twist|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.PositionUpdate} returns this
*/
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.setVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.PositionUpdate} returns this
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.clearVelocity = function() {
  return this.setVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.hasVelocity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string frame_id = 4;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.getFrameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.PositionUpdate} returns this
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.setFrameId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.PositionUpdate} returns this
*/
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.PositionUpdate} returns this
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional LocalizationQuality quality = 6;
 * @return {?proto.agricultural.robot.navigation.v1.LocalizationQuality}
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.getQuality = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.LocalizationQuality} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.LocalizationQuality, 6));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.LocalizationQuality|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.PositionUpdate} returns this
*/
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.setQuality = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.PositionUpdate} returns this
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.clearQuality = function() {
  return this.setQuality(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.PositionUpdate.prototype.hasQuality = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.Pose.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.Pose.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.Pose} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Pose.toObject = function(includeInstance, msg) {
  var f, obj = {
position: (f = msg.getPosition()) && proto.agricultural.robot.navigation.v1.Point3D.toObject(includeInstance, f),
orientation: (f = msg.getOrientation()) && proto.agricultural.robot.navigation.v1.Quaternion.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.Pose}
 */
proto.agricultural.robot.navigation.v1.Pose.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.Pose;
  return proto.agricultural.robot.navigation.v1.Pose.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.Pose} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.Pose}
 */
proto.agricultural.robot.navigation.v1.Pose.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.agricultural.robot.navigation.v1.Point3D;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Point3D.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = new proto.agricultural.robot.navigation.v1.Quaternion;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Quaternion.deserializeBinaryFromReader);
      msg.setOrientation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.Pose.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.Pose.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.Pose} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Pose.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.agricultural.robot.navigation.v1.Point3D.serializeBinaryToWriter
    );
  }
  f = message.getOrientation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.agricultural.robot.navigation.v1.Quaternion.serializeBinaryToWriter
    );
  }
};


/**
 * optional Point3D position = 1;
 * @return {?proto.agricultural.robot.navigation.v1.Point3D}
 */
proto.agricultural.robot.navigation.v1.Pose.prototype.getPosition = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Point3D} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Point3D, 1));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Point3D|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.Pose} returns this
*/
proto.agricultural.robot.navigation.v1.Pose.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.Pose} returns this
 */
proto.agricultural.robot.navigation.v1.Pose.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.Pose.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Quaternion orientation = 2;
 * @return {?proto.agricultural.robot.navigation.v1.Quaternion}
 */
proto.agricultural.robot.navigation.v1.Pose.prototype.getOrientation = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Quaternion} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Quaternion, 2));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Quaternion|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.Pose} returns this
*/
proto.agricultural.robot.navigation.v1.Pose.prototype.setOrientation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.Pose} returns this
 */
proto.agricultural.robot.navigation.v1.Pose.prototype.clearOrientation = function() {
  return this.setOrientation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.Pose.prototype.hasOrientation = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.PoseWithCovariance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.PoseWithCovariance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance.toObject = function(includeInstance, msg) {
  var f, obj = {
pose: (f = msg.getPose()) && proto.agricultural.robot.navigation.v1.Pose.toObject(includeInstance, f),
covarianceList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.PoseWithCovariance}
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.PoseWithCovariance;
  return proto.agricultural.robot.navigation.v1.PoseWithCovariance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.PoseWithCovariance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.PoseWithCovariance}
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.agricultural.robot.navigation.v1.Pose;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Pose.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCovariance(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.PoseWithCovariance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.PoseWithCovariance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.agricultural.robot.navigation.v1.Pose.serializeBinaryToWriter
    );
  }
  f = message.getCovarianceList();
  if (f.length > 0) {
    writer.writePackedDouble(
      2,
      f
    );
  }
};


/**
 * optional Pose pose = 1;
 * @return {?proto.agricultural.robot.navigation.v1.Pose}
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance.prototype.getPose = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Pose} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Pose, 1));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Pose|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.PoseWithCovariance} returns this
*/
proto.agricultural.robot.navigation.v1.PoseWithCovariance.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.PoseWithCovariance} returns this
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance.prototype.hasPose = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated double covariance = 2;
 * @return {!Array<number>}
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance.prototype.getCovarianceList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.agricultural.robot.navigation.v1.PoseWithCovariance} returns this
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance.prototype.setCovarianceList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.PoseWithCovariance} returns this
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance.prototype.addCovariance = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.PoseWithCovariance} returns this
 */
proto.agricultural.robot.navigation.v1.PoseWithCovariance.prototype.clearCovarianceList = function() {
  return this.setCovarianceList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.Point2D.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.Point2D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.Point2D} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Point2D.toObject = function(includeInstance, msg) {
  var f, obj = {
x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.Point2D}
 */
proto.agricultural.robot.navigation.v1.Point2D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.Point2D;
  return proto.agricultural.robot.navigation.v1.Point2D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.Point2D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.Point2D}
 */
proto.agricultural.robot.navigation.v1.Point2D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.Point2D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.Point2D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.Point2D} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Point2D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.Point2D.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.Point2D} returns this
 */
proto.agricultural.robot.navigation.v1.Point2D.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.Point2D.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.Point2D} returns this
 */
proto.agricultural.robot.navigation.v1.Point2D.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.Point3D.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.Point3D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.Point3D} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Point3D.toObject = function(includeInstance, msg) {
  var f, obj = {
x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.Point3D}
 */
proto.agricultural.robot.navigation.v1.Point3D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.Point3D;
  return proto.agricultural.robot.navigation.v1.Point3D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.Point3D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.Point3D}
 */
proto.agricultural.robot.navigation.v1.Point3D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZ(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.Point3D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.Point3D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.Point3D} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Point3D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.Point3D.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.Point3D} returns this
 */
proto.agricultural.robot.navigation.v1.Point3D.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.Point3D.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.Point3D} returns this
 */
proto.agricultural.robot.navigation.v1.Point3D.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double z = 3;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.Point3D.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.Point3D} returns this
 */
proto.agricultural.robot.navigation.v1.Point3D.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.Quaternion.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.Quaternion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.Quaternion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Quaternion.toObject = function(includeInstance, msg) {
  var f, obj = {
x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
w: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.Quaternion}
 */
proto.agricultural.robot.navigation.v1.Quaternion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.Quaternion;
  return proto.agricultural.robot.navigation.v1.Quaternion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.Quaternion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.Quaternion}
 */
proto.agricultural.robot.navigation.v1.Quaternion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZ(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setW(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.Quaternion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.Quaternion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.Quaternion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Quaternion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getW();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.Quaternion.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.Quaternion} returns this
 */
proto.agricultural.robot.navigation.v1.Quaternion.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.Quaternion.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.Quaternion} returns this
 */
proto.agricultural.robot.navigation.v1.Quaternion.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double z = 3;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.Quaternion.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.Quaternion} returns this
 */
proto.agricultural.robot.navigation.v1.Quaternion.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double w = 4;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.Quaternion.prototype.getW = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.Quaternion} returns this
 */
proto.agricultural.robot.navigation.v1.Quaternion.prototype.setW = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.Twist.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.Twist.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.Twist} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Twist.toObject = function(includeInstance, msg) {
  var f, obj = {
linear: (f = msg.getLinear()) && proto.agricultural.robot.navigation.v1.Vector3.toObject(includeInstance, f),
angular: (f = msg.getAngular()) && proto.agricultural.robot.navigation.v1.Vector3.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.Twist}
 */
proto.agricultural.robot.navigation.v1.Twist.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.Twist;
  return proto.agricultural.robot.navigation.v1.Twist.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.Twist} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.Twist}
 */
proto.agricultural.robot.navigation.v1.Twist.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.agricultural.robot.navigation.v1.Vector3;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Vector3.deserializeBinaryFromReader);
      msg.setLinear(value);
      break;
    case 2:
      var value = new proto.agricultural.robot.navigation.v1.Vector3;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Vector3.deserializeBinaryFromReader);
      msg.setAngular(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.Twist.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.Twist.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.Twist} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Twist.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinear();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.agricultural.robot.navigation.v1.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getAngular();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.agricultural.robot.navigation.v1.Vector3.serializeBinaryToWriter
    );
  }
};


/**
 * optional Vector3 linear = 1;
 * @return {?proto.agricultural.robot.navigation.v1.Vector3}
 */
proto.agricultural.robot.navigation.v1.Twist.prototype.getLinear = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Vector3, 1));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Vector3|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.Twist} returns this
*/
proto.agricultural.robot.navigation.v1.Twist.prototype.setLinear = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.Twist} returns this
 */
proto.agricultural.robot.navigation.v1.Twist.prototype.clearLinear = function() {
  return this.setLinear(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.Twist.prototype.hasLinear = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Vector3 angular = 2;
 * @return {?proto.agricultural.robot.navigation.v1.Vector3}
 */
proto.agricultural.robot.navigation.v1.Twist.prototype.getAngular = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Vector3, 2));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Vector3|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.Twist} returns this
*/
proto.agricultural.robot.navigation.v1.Twist.prototype.setAngular = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.Twist} returns this
 */
proto.agricultural.robot.navigation.v1.Twist.prototype.clearAngular = function() {
  return this.setAngular(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.Twist.prototype.hasAngular = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.Vector3.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.Vector3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.Vector3} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Vector3.toObject = function(includeInstance, msg) {
  var f, obj = {
x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.Vector3}
 */
proto.agricultural.robot.navigation.v1.Vector3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.Vector3;
  return proto.agricultural.robot.navigation.v1.Vector3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.Vector3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.Vector3}
 */
proto.agricultural.robot.navigation.v1.Vector3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZ(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.Vector3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.Vector3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.Vector3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Vector3.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.Vector3.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.Vector3} returns this
 */
proto.agricultural.robot.navigation.v1.Vector3.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.Vector3.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.Vector3} returns this
 */
proto.agricultural.robot.navigation.v1.Vector3.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double z = 3;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.Vector3.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.Vector3} returns this
 */
proto.agricultural.robot.navigation.v1.Vector3.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.VelocityCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.VelocityCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
cmdVel: (f = msg.getCmdVel()) && proto.agricultural.robot.navigation.v1.Twist.toObject(includeInstance, f),
timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
joystickInput: (f = msg.getJoystickInput()) && proto.agricultural.robot.navigation.v1.JoystickInput.toObject(includeInstance, f),
safety: (f = msg.getSafety()) && proto.agricultural.robot.navigation.v1.SafetyConstraints.toObject(includeInstance, f),
controlMode: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.VelocityCommand}
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.VelocityCommand;
  return proto.agricultural.robot.navigation.v1.VelocityCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.VelocityCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.VelocityCommand}
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = new proto.agricultural.robot.navigation.v1.Twist;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Twist.deserializeBinaryFromReader);
      msg.setCmdVel(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 4:
      var value = new proto.agricultural.robot.navigation.v1.JoystickInput;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.JoystickInput.deserializeBinaryFromReader);
      msg.setJoystickInput(value);
      break;
    case 5:
      var value = new proto.agricultural.robot.navigation.v1.SafetyConstraints;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.SafetyConstraints.deserializeBinaryFromReader);
      msg.setSafety(value);
      break;
    case 6:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.ControlMode} */ (reader.readEnum());
      msg.setControlMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.VelocityCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.VelocityCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCmdVel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.agricultural.robot.navigation.v1.Twist.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getJoystickInput();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.agricultural.robot.navigation.v1.JoystickInput.serializeBinaryToWriter
    );
  }
  f = message.getSafety();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.agricultural.robot.navigation.v1.SafetyConstraints.serializeBinaryToWriter
    );
  }
  f = message.getControlMode();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.VelocityCommand} returns this
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Twist cmd_vel = 2;
 * @return {?proto.agricultural.robot.navigation.v1.Twist}
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.getCmdVel = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Twist} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Twist, 2));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Twist|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.VelocityCommand} returns this
*/
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.setCmdVel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.VelocityCommand} returns this
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.clearCmdVel = function() {
  return this.setCmdVel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.hasCmdVel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration timeout = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.VelocityCommand} returns this
*/
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.VelocityCommand} returns this
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional JoystickInput joystick_input = 4;
 * @return {?proto.agricultural.robot.navigation.v1.JoystickInput}
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.getJoystickInput = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.JoystickInput} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.JoystickInput, 4));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.JoystickInput|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.VelocityCommand} returns this
*/
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.setJoystickInput = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.VelocityCommand} returns this
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.clearJoystickInput = function() {
  return this.setJoystickInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.hasJoystickInput = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SafetyConstraints safety = 5;
 * @return {?proto.agricultural.robot.navigation.v1.SafetyConstraints}
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.getSafety = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.SafetyConstraints} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.SafetyConstraints, 5));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.SafetyConstraints|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.VelocityCommand} returns this
*/
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.setSafety = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.VelocityCommand} returns this
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.clearSafety = function() {
  return this.setSafety(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.hasSafety = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ControlMode control_mode = 6;
 * @return {!proto.agricultural.robot.navigation.v1.ControlMode}
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.getControlMode = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.ControlMode} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.ControlMode} value
 * @return {!proto.agricultural.robot.navigation.v1.VelocityCommand} returns this
 */
proto.agricultural.robot.navigation.v1.VelocityCommand.prototype.setControlMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.JoystickInput.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.JoystickInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.JoystickInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.JoystickInput.toObject = function(includeInstance, msg) {
  var f, obj = {
axesList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
buttonsList: (f = jspb.Message.getRepeatedBooleanField(msg, 2)) == null ? undefined : f,
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
controllerId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.JoystickInput}
 */
proto.agricultural.robot.navigation.v1.JoystickInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.JoystickInput;
  return proto.agricultural.robot.navigation.v1.JoystickInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.JoystickInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.JoystickInput}
 */
proto.agricultural.robot.navigation.v1.JoystickInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAxes(values[i]);
      }
      break;
    case 2:
      var values = /** @type {!Array<boolean>} */ (reader.isDelimited() ? reader.readPackedBool() : [reader.readBool()]);
      for (var i = 0; i < values.length; i++) {
        msg.addButtons(values[i]);
      }
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setControllerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.JoystickInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.JoystickInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.JoystickInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAxesList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
  f = message.getButtonsList();
  if (f.length > 0) {
    writer.writePackedBool(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getControllerId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * repeated float axes = 1;
 * @return {!Array<number>}
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.getAxesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.agricultural.robot.navigation.v1.JoystickInput} returns this
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.setAxesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.JoystickInput} returns this
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.addAxes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.JoystickInput} returns this
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.clearAxesList = function() {
  return this.setAxesList([]);
};


/**
 * repeated bool buttons = 2;
 * @return {!Array<boolean>}
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.getButtonsList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedBooleanField(this, 2));
};


/**
 * @param {!Array<boolean>} value
 * @return {!proto.agricultural.robot.navigation.v1.JoystickInput} returns this
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.setButtonsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {boolean} value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.JoystickInput} returns this
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.addButtons = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.JoystickInput} returns this
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.clearButtonsList = function() {
  return this.setButtonsList([]);
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.JoystickInput} returns this
*/
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.JoystickInput} returns this
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string controller_id = 4;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.getControllerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.JoystickInput} returns this
 */
proto.agricultural.robot.navigation.v1.JoystickInput.prototype.setControllerId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.VelocityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.VelocityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
actualVelocity: (f = msg.getActualVelocity()) && proto.agricultural.robot.navigation.v1.Twist.toObject(includeInstance, f),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
safetyViolationsList: jspb.Message.toObjectList(msg.getSafetyViolationsList(),
    proto.agricultural.robot.navigation.v1.SafetyViolation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.VelocityResponse}
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.VelocityResponse;
  return proto.agricultural.robot.navigation.v1.VelocityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.VelocityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.VelocityResponse}
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.agricultural.robot.navigation.v1.Twist;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Twist.deserializeBinaryFromReader);
      msg.setActualVelocity(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 5:
      var value = new proto.agricultural.robot.navigation.v1.SafetyViolation;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.SafetyViolation.deserializeBinaryFromReader);
      msg.addSafetyViolations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.VelocityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.VelocityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActualVelocity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.agricultural.robot.navigation.v1.Twist.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSafetyViolationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.agricultural.robot.navigation.v1.SafetyViolation.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agricultural.robot.navigation.v1.VelocityResponse} returns this
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.VelocityResponse} returns this
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Twist actual_velocity = 3;
 * @return {?proto.agricultural.robot.navigation.v1.Twist}
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.getActualVelocity = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Twist} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Twist, 3));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Twist|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.VelocityResponse} returns this
*/
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.setActualVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.VelocityResponse} returns this
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.clearActualVelocity = function() {
  return this.setActualVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.hasActualVelocity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.VelocityResponse} returns this
*/
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.VelocityResponse} returns this
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated SafetyViolation safety_violations = 5;
 * @return {!Array<!proto.agricultural.robot.navigation.v1.SafetyViolation>}
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.getSafetyViolationsList = function() {
  return /** @type{!Array<!proto.agricultural.robot.navigation.v1.SafetyViolation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.agricultural.robot.navigation.v1.SafetyViolation, 5));
};


/**
 * @param {!Array<!proto.agricultural.robot.navigation.v1.SafetyViolation>} value
 * @return {!proto.agricultural.robot.navigation.v1.VelocityResponse} returns this
*/
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.setSafetyViolationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.SafetyViolation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.SafetyViolation}
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.addSafetyViolations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.agricultural.robot.navigation.v1.SafetyViolation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.VelocityResponse} returns this
 */
proto.agricultural.robot.navigation.v1.VelocityResponse.prototype.clearSafetyViolationsList = function() {
  return this.setSafetyViolationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.StopMovementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.StopMovementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.StopMovementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.StopMovementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
stopType: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.StopMovementRequest}
 */
proto.agricultural.robot.navigation.v1.StopMovementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.StopMovementRequest;
  return proto.agricultural.robot.navigation.v1.StopMovementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.StopMovementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.StopMovementRequest}
 */
proto.agricultural.robot.navigation.v1.StopMovementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.EmergencyStopType} */ (reader.readEnum());
      msg.setStopType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.StopMovementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.StopMovementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.StopMovementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.StopMovementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStopType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.StopMovementRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.StopMovementRequest} returns this
 */
proto.agricultural.robot.navigation.v1.StopMovementRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EmergencyStopType stop_type = 2;
 * @return {!proto.agricultural.robot.navigation.v1.EmergencyStopType}
 */
proto.agricultural.robot.navigation.v1.StopMovementRequest.prototype.getStopType = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.EmergencyStopType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.EmergencyStopType} value
 * @return {!proto.agricultural.robot.navigation.v1.StopMovementRequest} returns this
 */
proto.agricultural.robot.navigation.v1.StopMovementRequest.prototype.setStopType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.SafetyConstraints.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.SafetyConstraints} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.toObject = function(includeInstance, msg) {
  var f, obj = {
maxLinearVelocity: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
maxAngularVelocity: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
maxAcceleration: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
obstacleAvoidanceEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
safetyMargin: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
forbiddenZonesList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.SafetyConstraints}
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.SafetyConstraints;
  return proto.agricultural.robot.navigation.v1.SafetyConstraints.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.SafetyConstraints} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.SafetyConstraints}
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxLinearVelocity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxAngularVelocity(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxAcceleration(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setObstacleAvoidanceEnabled(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSafetyMargin(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addForbiddenZones(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.SafetyConstraints.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.SafetyConstraints} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxLinearVelocity();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMaxAngularVelocity();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getMaxAcceleration();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getObstacleAvoidanceEnabled();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getSafetyMargin();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getForbiddenZonesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional double max_linear_velocity = 1;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.getMaxLinearVelocity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.SafetyConstraints} returns this
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.setMaxLinearVelocity = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double max_angular_velocity = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.getMaxAngularVelocity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.SafetyConstraints} returns this
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.setMaxAngularVelocity = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double max_acceleration = 3;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.getMaxAcceleration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.SafetyConstraints} returns this
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.setMaxAcceleration = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional bool obstacle_avoidance_enabled = 4;
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.getObstacleAvoidanceEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agricultural.robot.navigation.v1.SafetyConstraints} returns this
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.setObstacleAvoidanceEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional double safety_margin = 5;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.getSafetyMargin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.SafetyConstraints} returns this
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.setSafetyMargin = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * repeated string forbidden_zones = 6;
 * @return {!Array<string>}
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.getForbiddenZonesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.agricultural.robot.navigation.v1.SafetyConstraints} returns this
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.setForbiddenZonesList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.SafetyConstraints} returns this
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.addForbiddenZones = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.SafetyConstraints} returns this
 */
proto.agricultural.robot.navigation.v1.SafetyConstraints.prototype.clearForbiddenZonesList = function() {
  return this.setForbiddenZonesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.SafetyViolation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.SafetyViolation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, 0),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
severity: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
detectedAt: (f = msg.getDetectedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.SafetyViolation}
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.SafetyViolation;
  return proto.agricultural.robot.navigation.v1.SafetyViolation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.SafetyViolation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.SafetyViolation}
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.SafetyViolationType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSeverity(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDetectedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.SafetyViolation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.SafetyViolation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSeverity();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getDetectedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional SafetyViolationType type = 1;
 * @return {!proto.agricultural.robot.navigation.v1.SafetyViolationType}
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.prototype.getType = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.SafetyViolationType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.SafetyViolationType} value
 * @return {!proto.agricultural.robot.navigation.v1.SafetyViolation} returns this
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.SafetyViolation} returns this
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double severity = 3;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.prototype.getSeverity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.SafetyViolation} returns this
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.prototype.setSeverity = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp detected_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.prototype.getDetectedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.SafetyViolation} returns this
*/
proto.agricultural.robot.navigation.v1.SafetyViolation.prototype.setDetectedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.SafetyViolation} returns this
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.prototype.clearDetectedAt = function() {
  return this.setDetectedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.SafetyViolation.prototype.hasDetectedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.NavigationGoal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.NavigationGoal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
goalId: jspb.Message.getFieldWithDefault(msg, 2, ""),
targetPose: (f = msg.getTargetPose()) && proto.agricultural.robot.navigation.v1.PoseWithCovariance.toObject(includeInstance, f),
frameId: jspb.Message.getFieldWithDefault(msg, 4, ""),
options: (f = msg.getOptions()) && proto.agricultural.robot.navigation.v1.NavigationOptions.toObject(includeInstance, f),
waypointsList: jspb.Message.toObjectList(msg.getWaypointsList(),
    proto.agricultural.robot.navigation.v1.Waypoint.toObject, includeInstance),
deadline: (f = msg.getDeadline()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationGoal}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.NavigationGoal;
  return proto.agricultural.robot.navigation.v1.NavigationGoal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.NavigationGoal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationGoal}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoalId(value);
      break;
    case 3:
      var value = new proto.agricultural.robot.navigation.v1.PoseWithCovariance;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.PoseWithCovariance.deserializeBinaryFromReader);
      msg.setTargetPose(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameId(value);
      break;
    case 5:
      var value = new proto.agricultural.robot.navigation.v1.NavigationOptions;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.NavigationOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 6:
      var value = new proto.agricultural.robot.navigation.v1.Waypoint;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Waypoint.deserializeBinaryFromReader);
      msg.addWaypoints(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeadline(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.NavigationGoal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.NavigationGoal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGoalId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTargetPose();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.agricultural.robot.navigation.v1.PoseWithCovariance.serializeBinaryToWriter
    );
  }
  f = message.getFrameId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.agricultural.robot.navigation.v1.NavigationOptions.serializeBinaryToWriter
    );
  }
  f = message.getWaypointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.agricultural.robot.navigation.v1.Waypoint.serializeBinaryToWriter
    );
  }
  f = message.getDeadline();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationGoal} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string goal_id = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.getGoalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationGoal} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.setGoalId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PoseWithCovariance target_pose = 3;
 * @return {?proto.agricultural.robot.navigation.v1.PoseWithCovariance}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.getTargetPose = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.PoseWithCovariance} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.PoseWithCovariance, 3));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.PoseWithCovariance|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationGoal} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.setTargetPose = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationGoal} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.clearTargetPose = function() {
  return this.setTargetPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.hasTargetPose = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string frame_id = 4;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.getFrameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationGoal} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.setFrameId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional NavigationOptions options = 5;
 * @return {?proto.agricultural.robot.navigation.v1.NavigationOptions}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.getOptions = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.NavigationOptions} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.NavigationOptions, 5));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.NavigationOptions|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationGoal} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationGoal} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated Waypoint waypoints = 6;
 * @return {!Array<!proto.agricultural.robot.navigation.v1.Waypoint>}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.getWaypointsList = function() {
  return /** @type{!Array<!proto.agricultural.robot.navigation.v1.Waypoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.agricultural.robot.navigation.v1.Waypoint, 6));
};


/**
 * @param {!Array<!proto.agricultural.robot.navigation.v1.Waypoint>} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationGoal} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.setWaypointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.Waypoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.Waypoint}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.addWaypoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.agricultural.robot.navigation.v1.Waypoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationGoal} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.clearWaypointsList = function() {
  return this.setWaypointsList([]);
};


/**
 * optional google.protobuf.Timestamp deadline = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.getDeadline = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationGoal} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.setDeadline = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationGoal} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.clearDeadline = function() {
  return this.setDeadline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationGoal.prototype.hasDeadline = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.TrajectoryCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.TrajectoryCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
trajectoryId: jspb.Message.getFieldWithDefault(msg, 2, ""),
pointsList: jspb.Message.toObjectList(msg.getPointsList(),
    proto.agricultural.robot.navigation.v1.TrajectoryPoint.toObject, includeInstance),
options: (f = msg.getOptions()) && proto.agricultural.robot.navigation.v1.TrajectoryOptions.toObject(includeInstance, f),
frameId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryCommand}
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.TrajectoryCommand;
  return proto.agricultural.robot.navigation.v1.TrajectoryCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.TrajectoryCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryCommand}
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrajectoryId(value);
      break;
    case 3:
      var value = new proto.agricultural.robot.navigation.v1.TrajectoryPoint;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.TrajectoryPoint.deserializeBinaryFromReader);
      msg.addPoints(value);
      break;
    case 4:
      var value = new proto.agricultural.robot.navigation.v1.TrajectoryOptions;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.TrajectoryOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.TrajectoryCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.TrajectoryCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTrajectoryId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.agricultural.robot.navigation.v1.TrajectoryPoint.serializeBinaryToWriter
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.agricultural.robot.navigation.v1.TrajectoryOptions.serializeBinaryToWriter
    );
  }
  f = message.getFrameId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryCommand} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string trajectory_id = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.getTrajectoryId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryCommand} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.setTrajectoryId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated TrajectoryPoint points = 3;
 * @return {!Array<!proto.agricultural.robot.navigation.v1.TrajectoryPoint>}
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.getPointsList = function() {
  return /** @type{!Array<!proto.agricultural.robot.navigation.v1.TrajectoryPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.agricultural.robot.navigation.v1.TrajectoryPoint, 3));
};


/**
 * @param {!Array<!proto.agricultural.robot.navigation.v1.TrajectoryPoint>} value
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryCommand} returns this
*/
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.setPointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.TrajectoryPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryPoint}
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.addPoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.agricultural.robot.navigation.v1.TrajectoryPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryCommand} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.clearPointsList = function() {
  return this.setPointsList([]);
};


/**
 * optional TrajectoryOptions options = 4;
 * @return {?proto.agricultural.robot.navigation.v1.TrajectoryOptions}
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.getOptions = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.TrajectoryOptions} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.TrajectoryOptions, 4));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.TrajectoryOptions|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryCommand} returns this
*/
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryCommand} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string frame_id = 5;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.getFrameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryCommand} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryCommand.prototype.setFrameId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.Waypoint.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.Waypoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.Waypoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Waypoint.toObject = function(includeInstance, msg) {
  var f, obj = {
waypointId: jspb.Message.getFieldWithDefault(msg, 1, ""),
pose: (f = msg.getPose()) && proto.agricultural.robot.navigation.v1.PoseWithCovariance.toObject(includeInstance, f),
type: jspb.Message.getFieldWithDefault(msg, 3, 0),
maxDurationAtWaypoint: (f = msg.getMaxDurationAtWaypoint()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.agricultural.robot.navigation.v1.WaypointAction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.Waypoint}
 */
proto.agricultural.robot.navigation.v1.Waypoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.Waypoint;
  return proto.agricultural.robot.navigation.v1.Waypoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.Waypoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.Waypoint}
 */
proto.agricultural.robot.navigation.v1.Waypoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWaypointId(value);
      break;
    case 2:
      var value = new proto.agricultural.robot.navigation.v1.PoseWithCovariance;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.PoseWithCovariance.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 3:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.WaypointType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMaxDurationAtWaypoint(value);
      break;
    case 5:
      var value = new proto.agricultural.robot.navigation.v1.WaypointAction;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.WaypointAction.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.Waypoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.Waypoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Waypoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWaypointId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.agricultural.robot.navigation.v1.PoseWithCovariance.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMaxDurationAtWaypoint();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.agricultural.robot.navigation.v1.WaypointAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional string waypoint_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.getWaypointId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.Waypoint} returns this
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.setWaypointId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PoseWithCovariance pose = 2;
 * @return {?proto.agricultural.robot.navigation.v1.PoseWithCovariance}
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.getPose = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.PoseWithCovariance} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.PoseWithCovariance, 2));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.PoseWithCovariance|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.Waypoint} returns this
*/
proto.agricultural.robot.navigation.v1.Waypoint.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.Waypoint} returns this
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.hasPose = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional WaypointType type = 3;
 * @return {!proto.agricultural.robot.navigation.v1.WaypointType}
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.getType = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.WaypointType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.WaypointType} value
 * @return {!proto.agricultural.robot.navigation.v1.Waypoint} returns this
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Duration max_duration_at_waypoint = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.getMaxDurationAtWaypoint = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.Waypoint} returns this
*/
proto.agricultural.robot.navigation.v1.Waypoint.prototype.setMaxDurationAtWaypoint = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.Waypoint} returns this
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.clearMaxDurationAtWaypoint = function() {
  return this.setMaxDurationAtWaypoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.hasMaxDurationAtWaypoint = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated WaypointAction actions = 5;
 * @return {!Array<!proto.agricultural.robot.navigation.v1.WaypointAction>}
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.agricultural.robot.navigation.v1.WaypointAction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.agricultural.robot.navigation.v1.WaypointAction, 5));
};


/**
 * @param {!Array<!proto.agricultural.robot.navigation.v1.WaypointAction>} value
 * @return {!proto.agricultural.robot.navigation.v1.Waypoint} returns this
*/
proto.agricultural.robot.navigation.v1.Waypoint.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.WaypointAction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.WaypointAction}
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.agricultural.robot.navigation.v1.WaypointAction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.Waypoint} returns this
 */
proto.agricultural.robot.navigation.v1.Waypoint.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.TrajectoryPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.TrajectoryPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
pose: (f = msg.getPose()) && proto.agricultural.robot.navigation.v1.Pose.toObject(includeInstance, f),
velocity: (f = msg.getVelocity()) && proto.agricultural.robot.navigation.v1.Twist.toObject(includeInstance, f),
timeFromStart: (f = msg.getTimeFromStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
accelerationsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryPoint}
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.TrajectoryPoint;
  return proto.agricultural.robot.navigation.v1.TrajectoryPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.TrajectoryPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryPoint}
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.agricultural.robot.navigation.v1.Pose;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Pose.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 2:
      var value = new proto.agricultural.robot.navigation.v1.Twist;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Twist.deserializeBinaryFromReader);
      msg.setVelocity(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimeFromStart(value);
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAccelerations(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.TrajectoryPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.TrajectoryPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.agricultural.robot.navigation.v1.Pose.serializeBinaryToWriter
    );
  }
  f = message.getVelocity();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.agricultural.robot.navigation.v1.Twist.serializeBinaryToWriter
    );
  }
  f = message.getTimeFromStart();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAccelerationsList();
  if (f.length > 0) {
    writer.writePackedDouble(
      4,
      f
    );
  }
};


/**
 * optional Pose pose = 1;
 * @return {?proto.agricultural.robot.navigation.v1.Pose}
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.getPose = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Pose} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Pose, 1));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Pose|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryPoint} returns this
*/
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryPoint} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.hasPose = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Twist velocity = 2;
 * @return {?proto.agricultural.robot.navigation.v1.Twist}
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.getVelocity = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Twist} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Twist, 2));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Twist|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryPoint} returns this
*/
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.setVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryPoint} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.clearVelocity = function() {
  return this.setVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.hasVelocity = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp time_from_start = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.getTimeFromStart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryPoint} returns this
*/
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.setTimeFromStart = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryPoint} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.clearTimeFromStart = function() {
  return this.setTimeFromStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.hasTimeFromStart = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated double accelerations = 4;
 * @return {!Array<number>}
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.getAccelerationsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryPoint} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.setAccelerationsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryPoint} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.addAccelerations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryPoint} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryPoint.prototype.clearAccelerationsList = function() {
  return this.setAccelerationsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.NavigationOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.NavigationOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
planner: jspb.Message.getFieldWithDefault(msg, 1, 0),
toleranceLinear: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
toleranceAngular: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
useObstacleAvoidance: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
avoidZonesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
behavior: jspb.Message.getFieldWithDefault(msg, 6, 0),
maxPlanningTimeMs: jspb.Message.getFieldWithDefault(msg, 7, 0),
maxRetries: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationOptions}
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.NavigationOptions;
  return proto.agricultural.robot.navigation.v1.NavigationOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.NavigationOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationOptions}
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.PlannerType} */ (reader.readEnum());
      msg.setPlanner(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setToleranceLinear(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setToleranceAngular(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseObstacleAvoidance(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addAvoidZones(value);
      break;
    case 6:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.NavigationBehavior} */ (reader.readEnum());
      msg.setBehavior(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxPlanningTimeMs(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxRetries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.NavigationOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.NavigationOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlanner();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getToleranceLinear();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getToleranceAngular();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getUseObstacleAvoidance();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAvoidZonesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getMaxPlanningTimeMs();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getMaxRetries();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * optional PlannerType planner = 1;
 * @return {!proto.agricultural.robot.navigation.v1.PlannerType}
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.getPlanner = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.PlannerType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.PlannerType} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationOptions} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.setPlanner = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double tolerance_linear = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.getToleranceLinear = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationOptions} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.setToleranceLinear = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double tolerance_angular = 3;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.getToleranceAngular = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationOptions} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.setToleranceAngular = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional bool use_obstacle_avoidance = 4;
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.getUseObstacleAvoidance = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationOptions} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.setUseObstacleAvoidance = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated string avoid_zones = 5;
 * @return {!Array<string>}
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.getAvoidZonesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationOptions} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.setAvoidZonesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.NavigationOptions} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.addAvoidZones = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationOptions} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.clearAvoidZonesList = function() {
  return this.setAvoidZonesList([]);
};


/**
 * optional NavigationBehavior behavior = 6;
 * @return {!proto.agricultural.robot.navigation.v1.NavigationBehavior}
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.getBehavior = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.NavigationBehavior} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.NavigationBehavior} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationOptions} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.setBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional uint32 max_planning_time_ms = 7;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.getMaxPlanningTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationOptions} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.setMaxPlanningTimeMs = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 max_retries = 8;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.getMaxRetries = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationOptions} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationOptions.prototype.setMaxRetries = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.TrajectoryOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.TrajectoryOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
interpolatePath: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
velocityScaling: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
checkCollisions: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
executionMode: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryOptions}
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.TrajectoryOptions;
  return proto.agricultural.robot.navigation.v1.TrajectoryOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.TrajectoryOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryOptions}
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInterpolatePath(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVelocityScaling(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCheckCollisions(value);
      break;
    case 4:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.TrajectoryExecutionMode} */ (reader.readEnum());
      msg.setExecutionMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.TrajectoryOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.TrajectoryOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInterpolatePath();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getVelocityScaling();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getCheckCollisions();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getExecutionMode();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional bool interpolate_path = 1;
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions.prototype.getInterpolatePath = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryOptions} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions.prototype.setInterpolatePath = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional double velocity_scaling = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions.prototype.getVelocityScaling = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryOptions} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions.prototype.setVelocityScaling = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional bool check_collisions = 3;
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions.prototype.getCheckCollisions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryOptions} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions.prototype.setCheckCollisions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional TrajectoryExecutionMode execution_mode = 4;
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryExecutionMode}
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions.prototype.getExecutionMode = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.TrajectoryExecutionMode} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.TrajectoryExecutionMode} value
 * @return {!proto.agricultural.robot.navigation.v1.TrajectoryOptions} returns this
 */
proto.agricultural.robot.navigation.v1.TrajectoryOptions.prototype.setExecutionMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.WaypointAction.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.WaypointAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.WaypointAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.WaypointAction.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, 0),
duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.WaypointAction}
 */
proto.agricultural.robot.navigation.v1.WaypointAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.WaypointAction;
  return proto.agricultural.robot.navigation.v1.WaypointAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.WaypointAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.WaypointAction}
 */
proto.agricultural.robot.navigation.v1.WaypointAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.WaypointActionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 3:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.WaypointAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.WaypointAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.WaypointAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.WaypointAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional WaypointActionType type = 1;
 * @return {!proto.agricultural.robot.navigation.v1.WaypointActionType}
 */
proto.agricultural.robot.navigation.v1.WaypointAction.prototype.getType = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.WaypointActionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.WaypointActionType} value
 * @return {!proto.agricultural.robot.navigation.v1.WaypointAction} returns this
 */
proto.agricultural.robot.navigation.v1.WaypointAction.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Duration duration = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.agricultural.robot.navigation.v1.WaypointAction.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.WaypointAction} returns this
*/
proto.agricultural.robot.navigation.v1.WaypointAction.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.WaypointAction} returns this
 */
proto.agricultural.robot.navigation.v1.WaypointAction.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.WaypointAction.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, string> parameters = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.agricultural.robot.navigation.v1.WaypointAction.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.agricultural.robot.navigation.v1.WaypointAction} returns this
 */
proto.agricultural.robot.navigation.v1.WaypointAction.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.CancelGoalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.CancelGoalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.CancelGoalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CancelGoalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
goalId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.CancelGoalRequest}
 */
proto.agricultural.robot.navigation.v1.CancelGoalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.CancelGoalRequest;
  return proto.agricultural.robot.navigation.v1.CancelGoalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.CancelGoalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.CancelGoalRequest}
 */
proto.agricultural.robot.navigation.v1.CancelGoalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoalId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.CancelGoalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.CancelGoalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.CancelGoalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CancelGoalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.CancelGoalRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.CancelGoalRequest} returns this
 */
proto.agricultural.robot.navigation.v1.CancelGoalRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string goal_id = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.CancelGoalRequest.prototype.getGoalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.CancelGoalRequest} returns this
 */
proto.agricultural.robot.navigation.v1.CancelGoalRequest.prototype.setGoalId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.CancelGoalRequest} returns this
 */
proto.agricultural.robot.navigation.v1.CancelGoalRequest.prototype.clearGoalId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.CancelGoalRequest.prototype.hasGoalId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest}
 */
proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest;
  return proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest}
 */
proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest} returns this
 */
proto.agricultural.robot.navigation.v1.GetNavigationStatusRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
frequencyHz: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest}
 */
proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest;
  return proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest}
 */
proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFrequencyHz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrequencyHz();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest} returns this
 */
proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 frequency_hz = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest.prototype.getFrequencyHz = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest} returns this
 */
proto.agricultural.robot.navigation.v1.StreamNavigationStatusRequest.prototype.setFrequencyHz = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.NavigationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.NavigationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
goalId: jspb.Message.getFieldWithDefault(msg, 3, ""),
result: jspb.Message.getFieldWithDefault(msg, 4, 0),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationResponse}
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.NavigationResponse;
  return proto.agricultural.robot.navigation.v1.NavigationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.NavigationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationResponse}
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoalId(value);
      break;
    case 4:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.NavigationResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.NavigationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.NavigationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGoalId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationResponse} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationResponse} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string goal_id = 3;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.prototype.getGoalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationResponse} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.prototype.setGoalId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional NavigationResult result = 4;
 * @return {!proto.agricultural.robot.navigation.v1.NavigationResult}
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.prototype.getResult = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.NavigationResult} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.NavigationResult} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationResponse} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationResponse} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationResponse} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationResponse.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.NavigationStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.NavigationStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
status: jspb.Message.getFieldWithDefault(msg, 1, 0),
progress: (f = msg.getProgress()) && proto.agricultural.robot.navigation.v1.NavigationProgress.toObject(includeInstance, f),
currentGoal: (f = msg.getCurrentGoal()) && proto.agricultural.robot.navigation.v1.NavigationGoal.toObject(includeInstance, f),
errorsList: jspb.Message.toObjectList(msg.getErrorsList(),
    proto.agricultural.robot.navigation.v1.NavigationError.toObject, includeInstance),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusResponse}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.NavigationStatusResponse;
  return proto.agricultural.robot.navigation.v1.NavigationStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.NavigationStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusResponse}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.NavigationStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.agricultural.robot.navigation.v1.NavigationProgress;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.NavigationProgress.deserializeBinaryFromReader);
      msg.setProgress(value);
      break;
    case 3:
      var value = new proto.agricultural.robot.navigation.v1.NavigationGoal;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.NavigationGoal.deserializeBinaryFromReader);
      msg.setCurrentGoal(value);
      break;
    case 4:
      var value = new proto.agricultural.robot.navigation.v1.NavigationError;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.NavigationError.deserializeBinaryFromReader);
      msg.addErrors(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.NavigationStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.NavigationStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getProgress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.agricultural.robot.navigation.v1.NavigationProgress.serializeBinaryToWriter
    );
  }
  f = message.getCurrentGoal();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.agricultural.robot.navigation.v1.NavigationGoal.serializeBinaryToWriter
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.agricultural.robot.navigation.v1.NavigationError.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional NavigationStatus status = 1;
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatus}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.getStatus = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.NavigationStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.NavigationStatus} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusResponse} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional NavigationProgress progress = 2;
 * @return {?proto.agricultural.robot.navigation.v1.NavigationProgress}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.getProgress = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.NavigationProgress} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.NavigationProgress, 2));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.NavigationProgress|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusResponse} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.setProgress = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusResponse} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.clearProgress = function() {
  return this.setProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.hasProgress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional NavigationGoal current_goal = 3;
 * @return {?proto.agricultural.robot.navigation.v1.NavigationGoal}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.getCurrentGoal = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.NavigationGoal} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.NavigationGoal, 3));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.NavigationGoal|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusResponse} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.setCurrentGoal = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusResponse} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.clearCurrentGoal = function() {
  return this.setCurrentGoal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.hasCurrentGoal = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated NavigationError errors = 4;
 * @return {!Array<!proto.agricultural.robot.navigation.v1.NavigationError>}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.getErrorsList = function() {
  return /** @type{!Array<!proto.agricultural.robot.navigation.v1.NavigationError>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.agricultural.robot.navigation.v1.NavigationError, 4));
};


/**
 * @param {!Array<!proto.agricultural.robot.navigation.v1.NavigationError>} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusResponse} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.setErrorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.NavigationError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.NavigationError}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.addErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.agricultural.robot.navigation.v1.NavigationError, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusResponse} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
};


/**
 * optional google.protobuf.Timestamp timestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusResponse} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusResponse} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusResponse.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.NavigationStatusUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
status: jspb.Message.getFieldWithDefault(msg, 2, 0),
progress: (f = msg.getProgress()) && proto.agricultural.robot.navigation.v1.NavigationProgress.toObject(includeInstance, f),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
error: (f = msg.getError()) && proto.agricultural.robot.navigation.v1.NavigationError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusUpdate}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.NavigationStatusUpdate;
  return proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.NavigationStatusUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusUpdate}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.NavigationStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.agricultural.robot.navigation.v1.NavigationProgress;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.NavigationProgress.deserializeBinaryFromReader);
      msg.setProgress(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 5:
      var value = new proto.agricultural.robot.navigation.v1.NavigationError;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.NavigationError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.NavigationStatusUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getProgress();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.agricultural.robot.navigation.v1.NavigationProgress.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.agricultural.robot.navigation.v1.NavigationError.serializeBinaryToWriter
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusUpdate} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional NavigationStatus status = 2;
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatus}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.getStatus = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.NavigationStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.NavigationStatus} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusUpdate} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional NavigationProgress progress = 3;
 * @return {?proto.agricultural.robot.navigation.v1.NavigationProgress}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.getProgress = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.NavigationProgress} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.NavigationProgress, 3));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.NavigationProgress|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusUpdate} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.setProgress = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusUpdate} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.clearProgress = function() {
  return this.setProgress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.hasProgress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusUpdate} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusUpdate} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional NavigationError error = 5;
 * @return {?proto.agricultural.robot.navigation.v1.NavigationError}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.getError = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.NavigationError} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.NavigationError, 5));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.NavigationError|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusUpdate} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationStatusUpdate} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationStatusUpdate.prototype.hasError = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.NavigationProgress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.NavigationProgress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.toObject = function(includeInstance, msg) {
  var f, obj = {
distanceRemaining: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
distanceTraveled: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
timeRemaining: (f = msg.getTimeRemaining()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
timeElapsed: (f = msg.getTimeElapsed()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
currentWaypointIndex: jspb.Message.getFieldWithDefault(msg, 5, 0),
totalWaypoints: jspb.Message.getFieldWithDefault(msg, 6, 0),
completionPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationProgress}
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.NavigationProgress;
  return proto.agricultural.robot.navigation.v1.NavigationProgress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.NavigationProgress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationProgress}
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDistanceRemaining(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDistanceTraveled(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeRemaining(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeElapsed(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentWaypointIndex(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalWaypoints(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCompletionPercentage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.NavigationProgress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.NavigationProgress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDistanceRemaining();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getDistanceTraveled();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getTimeRemaining();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getTimeElapsed();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrentWaypointIndex();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getTotalWaypoints();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getCompletionPercentage();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * optional double distance_remaining = 1;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.getDistanceRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationProgress} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.setDistanceRemaining = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double distance_traveled = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.getDistanceTraveled = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationProgress} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.setDistanceTraveled = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional google.protobuf.Duration time_remaining = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.getTimeRemaining = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationProgress} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.setTimeRemaining = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationProgress} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.clearTimeRemaining = function() {
  return this.setTimeRemaining(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.hasTimeRemaining = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration time_elapsed = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.getTimeElapsed = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationProgress} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.setTimeElapsed = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationProgress} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.clearTimeElapsed = function() {
  return this.setTimeElapsed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.hasTimeElapsed = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 current_waypoint_index = 5;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.getCurrentWaypointIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationProgress} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.setCurrentWaypointIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 total_waypoints = 6;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.getTotalWaypoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationProgress} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.setTotalWaypoints = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double completion_percentage = 7;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.getCompletionPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationProgress} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationProgress.prototype.setCompletionPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.NavigationError.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.NavigationError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.NavigationError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.NavigationError.toObject = function(includeInstance, msg) {
  var f, obj = {
code: jspb.Message.getFieldWithDefault(msg, 1, 0),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
occurredAt: (f = msg.getOccurredAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
recoverable: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
suggestedActionsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationError}
 */
proto.agricultural.robot.navigation.v1.NavigationError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.NavigationError;
  return proto.agricultural.robot.navigation.v1.NavigationError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.NavigationError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationError}
 */
proto.agricultural.robot.navigation.v1.NavigationError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.NavigationErrorCode} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setOccurredAt(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecoverable(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addSuggestedActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.NavigationError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.NavigationError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.NavigationError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOccurredAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRecoverable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getSuggestedActionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional NavigationErrorCode code = 1;
 * @return {!proto.agricultural.robot.navigation.v1.NavigationErrorCode}
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.getCode = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.NavigationErrorCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.NavigationErrorCode} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationError} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationError} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp occurred_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.getOccurredAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationError} returns this
*/
proto.agricultural.robot.navigation.v1.NavigationError.prototype.setOccurredAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationError} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.clearOccurredAt = function() {
  return this.setOccurredAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.hasOccurredAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool recoverable = 4;
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.getRecoverable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationError} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.setRecoverable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated string suggested_actions = 5;
 * @return {!Array<string>}
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.getSuggestedActionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.agricultural.robot.navigation.v1.NavigationError} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.setSuggestedActionsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.NavigationError} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.addSuggestedActions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.NavigationError} returns this
 */
proto.agricultural.robot.navigation.v1.NavigationError.prototype.clearSuggestedActionsList = function() {
  return this.setSuggestedActionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.GetCameraInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.GetCameraInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.GetCameraInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.GetCameraInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
cameraId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.GetCameraInfoRequest}
 */
proto.agricultural.robot.navigation.v1.GetCameraInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.GetCameraInfoRequest;
  return proto.agricultural.robot.navigation.v1.GetCameraInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.GetCameraInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.GetCameraInfoRequest}
 */
proto.agricultural.robot.navigation.v1.GetCameraInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCameraId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.GetCameraInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.GetCameraInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.GetCameraInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.GetCameraInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCameraId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.GetCameraInfoRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.GetCameraInfoRequest} returns this
 */
proto.agricultural.robot.navigation.v1.GetCameraInfoRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string camera_id = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.GetCameraInfoRequest.prototype.getCameraId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.GetCameraInfoRequest} returns this
 */
proto.agricultural.robot.navigation.v1.GetCameraInfoRequest.prototype.setCameraId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.StreamVideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.StreamVideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.StreamVideoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.StreamVideoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
cameraId: jspb.Message.getFieldWithDefault(msg, 2, ""),
options: (f = msg.getOptions()) && proto.agricultural.robot.navigation.v1.VideoStreamOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.StreamVideoRequest}
 */
proto.agricultural.robot.navigation.v1.StreamVideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.StreamVideoRequest;
  return proto.agricultural.robot.navigation.v1.StreamVideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.StreamVideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.StreamVideoRequest}
 */
proto.agricultural.robot.navigation.v1.StreamVideoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCameraId(value);
      break;
    case 3:
      var value = new proto.agricultural.robot.navigation.v1.VideoStreamOptions;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.VideoStreamOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.StreamVideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.StreamVideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.StreamVideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.StreamVideoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCameraId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.agricultural.robot.navigation.v1.VideoStreamOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.StreamVideoRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.StreamVideoRequest} returns this
 */
proto.agricultural.robot.navigation.v1.StreamVideoRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string camera_id = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.StreamVideoRequest.prototype.getCameraId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.StreamVideoRequest} returns this
 */
proto.agricultural.robot.navigation.v1.StreamVideoRequest.prototype.setCameraId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional VideoStreamOptions options = 3;
 * @return {?proto.agricultural.robot.navigation.v1.VideoStreamOptions}
 */
proto.agricultural.robot.navigation.v1.StreamVideoRequest.prototype.getOptions = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.VideoStreamOptions} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.VideoStreamOptions, 3));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.VideoStreamOptions|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.StreamVideoRequest} returns this
*/
proto.agricultural.robot.navigation.v1.StreamVideoRequest.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.StreamVideoRequest} returns this
 */
proto.agricultural.robot.navigation.v1.StreamVideoRequest.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.StreamVideoRequest.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.CameraControlRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.CameraControlRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.CameraControlRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CameraControlRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
cameraId: jspb.Message.getFieldWithDefault(msg, 2, ""),
command: (f = msg.getCommand()) && proto.agricultural.robot.navigation.v1.CameraControlCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlRequest}
 */
proto.agricultural.robot.navigation.v1.CameraControlRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.CameraControlRequest;
  return proto.agricultural.robot.navigation.v1.CameraControlRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.CameraControlRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlRequest}
 */
proto.agricultural.robot.navigation.v1.CameraControlRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCameraId(value);
      break;
    case 3:
      var value = new proto.agricultural.robot.navigation.v1.CameraControlCommand;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.CameraControlCommand.deserializeBinaryFromReader);
      msg.setCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.CameraControlRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.CameraControlRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.CameraControlRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CameraControlRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCameraId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.agricultural.robot.navigation.v1.CameraControlCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.CameraControlRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlRequest} returns this
 */
proto.agricultural.robot.navigation.v1.CameraControlRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string camera_id = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.CameraControlRequest.prototype.getCameraId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlRequest} returns this
 */
proto.agricultural.robot.navigation.v1.CameraControlRequest.prototype.setCameraId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CameraControlCommand command = 3;
 * @return {?proto.agricultural.robot.navigation.v1.CameraControlCommand}
 */
proto.agricultural.robot.navigation.v1.CameraControlRequest.prototype.getCommand = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.CameraControlCommand} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.CameraControlCommand, 3));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.CameraControlCommand|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlRequest} returns this
*/
proto.agricultural.robot.navigation.v1.CameraControlRequest.prototype.setCommand = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlRequest} returns this
 */
proto.agricultural.robot.navigation.v1.CameraControlRequest.prototype.clearCommand = function() {
  return this.setCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.CameraControlRequest.prototype.hasCommand = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.CameraInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.CameraInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
camerasList: jspb.Message.toObjectList(msg.getCamerasList(),
    proto.agricultural.robot.navigation.v1.CameraInfo.toObject, includeInstance),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfoResponse}
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.CameraInfoResponse;
  return proto.agricultural.robot.navigation.v1.CameraInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.CameraInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfoResponse}
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.agricultural.robot.navigation.v1.CameraInfo;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.CameraInfo.deserializeBinaryFromReader);
      msg.addCameras(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.CameraInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.CameraInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCamerasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.agricultural.robot.navigation.v1.CameraInfo.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfoResponse} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfoResponse} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated CameraInfo cameras = 3;
 * @return {!Array<!proto.agricultural.robot.navigation.v1.CameraInfo>}
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.prototype.getCamerasList = function() {
  return /** @type{!Array<!proto.agricultural.robot.navigation.v1.CameraInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.agricultural.robot.navigation.v1.CameraInfo, 3));
};


/**
 * @param {!Array<!proto.agricultural.robot.navigation.v1.CameraInfo>} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfoResponse} returns this
*/
proto.agricultural.robot.navigation.v1.CameraInfoResponse.prototype.setCamerasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.CameraInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo}
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.prototype.addCameras = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.agricultural.robot.navigation.v1.CameraInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfoResponse} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.prototype.clearCamerasList = function() {
  return this.setCamerasList([]);
};


/**
 * optional google.protobuf.Timestamp timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfoResponse} returns this
*/
proto.agricultural.robot.navigation.v1.CameraInfoResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfoResponse} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.CameraInfoResponse.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.CameraInfo.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.CameraInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.CameraInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CameraInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
cameraId: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
type: jspb.Message.getFieldWithDefault(msg, 3, 0),
resolution: (f = msg.getResolution()) && proto.agricultural.robot.navigation.v1.Resolution.toObject(includeInstance, f),
framerate: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
intrinsics: (f = msg.getIntrinsics()) && proto.agricultural.robot.navigation.v1.CameraIntrinsics.toObject(includeInstance, f),
distortion: (f = msg.getDistortion()) && proto.agricultural.robot.navigation.v1.CameraDistortion.toObject(includeInstance, f),
frameId: jspb.Message.getFieldWithDefault(msg, 8, ""),
status: jspb.Message.getFieldWithDefault(msg, 9, 0),
supportedFormatsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.CameraInfo;
  return proto.agricultural.robot.navigation.v1.CameraInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.CameraInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCameraId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.CameraType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = new proto.agricultural.robot.navigation.v1.Resolution;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Resolution.deserializeBinaryFromReader);
      msg.setResolution(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFramerate(value);
      break;
    case 6:
      var value = new proto.agricultural.robot.navigation.v1.CameraIntrinsics;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.CameraIntrinsics.deserializeBinaryFromReader);
      msg.setIntrinsics(value);
      break;
    case 7:
      var value = new proto.agricultural.robot.navigation.v1.CameraDistortion;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.CameraDistortion.deserializeBinaryFromReader);
      msg.setDistortion(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameId(value);
      break;
    case 9:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.CameraStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 10:
      var values = /** @type {!Array<!proto.agricultural.robot.navigation.v1.VideoFormat>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSupportedFormats(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.CameraInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.CameraInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CameraInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getResolution();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.agricultural.robot.navigation.v1.Resolution.serializeBinaryToWriter
    );
  }
  f = message.getFramerate();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getIntrinsics();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.agricultural.robot.navigation.v1.CameraIntrinsics.serializeBinaryToWriter
    );
  }
  f = message.getDistortion();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.agricultural.robot.navigation.v1.CameraDistortion.serializeBinaryToWriter
    );
  }
  f = message.getFrameId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getSupportedFormatsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      10,
      f
    );
  }
};


/**
 * optional string camera_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.getCameraId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.setCameraId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CameraType type = 3;
 * @return {!proto.agricultural.robot.navigation.v1.CameraType}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.getType = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.CameraType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.CameraType} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Resolution resolution = 4;
 * @return {?proto.agricultural.robot.navigation.v1.Resolution}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.getResolution = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Resolution} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Resolution, 4));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Resolution|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
*/
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.setResolution = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.clearResolution = function() {
  return this.setResolution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.hasResolution = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double framerate = 5;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.getFramerate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.setFramerate = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional CameraIntrinsics intrinsics = 6;
 * @return {?proto.agricultural.robot.navigation.v1.CameraIntrinsics}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.getIntrinsics = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.CameraIntrinsics} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.CameraIntrinsics, 6));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.CameraIntrinsics|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
*/
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.setIntrinsics = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.clearIntrinsics = function() {
  return this.setIntrinsics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.hasIntrinsics = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CameraDistortion distortion = 7;
 * @return {?proto.agricultural.robot.navigation.v1.CameraDistortion}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.getDistortion = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.CameraDistortion} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.CameraDistortion, 7));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.CameraDistortion|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
*/
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.setDistortion = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.clearDistortion = function() {
  return this.setDistortion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.hasDistortion = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string frame_id = 8;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.getFrameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.setFrameId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional CameraStatus status = 9;
 * @return {!proto.agricultural.robot.navigation.v1.CameraStatus}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.getStatus = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.CameraStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.CameraStatus} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * repeated VideoFormat supported_formats = 10;
 * @return {!Array<!proto.agricultural.robot.navigation.v1.VideoFormat>}
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.getSupportedFormatsList = function() {
  return /** @type {!Array<!proto.agricultural.robot.navigation.v1.VideoFormat>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<!proto.agricultural.robot.navigation.v1.VideoFormat>} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.setSupportedFormatsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.VideoFormat} value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.addSupportedFormats = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.CameraInfo} returns this
 */
proto.agricultural.robot.navigation.v1.CameraInfo.prototype.clearSupportedFormatsList = function() {
  return this.setSupportedFormatsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.VideoFrame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.VideoFrame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.VideoFrame.toObject = function(includeInstance, msg) {
  var f, obj = {
cameraId: jspb.Message.getFieldWithDefault(msg, 1, ""),
imageData: msg.getImageData_asB64(),
format: jspb.Message.getFieldWithDefault(msg, 3, 0),
resolution: (f = msg.getResolution()) && proto.agricultural.robot.navigation.v1.Resolution.toObject(includeInstance, f),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
frameNumber: jspb.Message.getFieldWithDefault(msg, 6, 0),
metadata: (f = msg.getMetadata()) && proto.agricultural.robot.navigation.v1.FrameMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.VideoFrame}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.VideoFrame;
  return proto.agricultural.robot.navigation.v1.VideoFrame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.VideoFrame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.VideoFrame}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCameraId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImageData(value);
      break;
    case 3:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.VideoFormat} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 4:
      var value = new proto.agricultural.robot.navigation.v1.Resolution;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Resolution.deserializeBinaryFromReader);
      msg.setResolution(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFrameNumber(value);
      break;
    case 7:
      var value = new proto.agricultural.robot.navigation.v1.FrameMetadata;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.FrameMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.VideoFrame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.VideoFrame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.VideoFrame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCameraId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getImageData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getResolution();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.agricultural.robot.navigation.v1.Resolution.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFrameNumber();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.agricultural.robot.navigation.v1.FrameMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string camera_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.getCameraId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.VideoFrame} returns this
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.setCameraId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes image_data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.getImageData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes image_data = 2;
 * This is a type-conversion wrapper around `getImageData()`
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.getImageData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImageData()));
};


/**
 * optional bytes image_data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImageData()`
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.getImageData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImageData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.agricultural.robot.navigation.v1.VideoFrame} returns this
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.setImageData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional VideoFormat format = 3;
 * @return {!proto.agricultural.robot.navigation.v1.VideoFormat}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.getFormat = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.VideoFormat} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.VideoFormat} value
 * @return {!proto.agricultural.robot.navigation.v1.VideoFrame} returns this
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Resolution resolution = 4;
 * @return {?proto.agricultural.robot.navigation.v1.Resolution}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.getResolution = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Resolution} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Resolution, 4));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Resolution|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.VideoFrame} returns this
*/
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.setResolution = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.VideoFrame} returns this
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.clearResolution = function() {
  return this.setResolution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.hasResolution = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp timestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.VideoFrame} returns this
*/
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.VideoFrame} returns this
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 frame_number = 6;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.getFrameNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.VideoFrame} returns this
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.setFrameNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional FrameMetadata metadata = 7;
 * @return {?proto.agricultural.robot.navigation.v1.FrameMetadata}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.getMetadata = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.FrameMetadata} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.FrameMetadata, 7));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.FrameMetadata|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.VideoFrame} returns this
*/
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.VideoFrame} returns this
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.VideoFrame.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.VideoStreamOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.VideoStreamOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
format: jspb.Message.getFieldWithDefault(msg, 1, 0),
resolution: (f = msg.getResolution()) && proto.agricultural.robot.navigation.v1.Resolution.toObject(includeInstance, f),
framerate: jspb.Message.getFieldWithDefault(msg, 3, 0),
quality: jspb.Message.getFieldWithDefault(msg, 4, 0),
enableCompression: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
overlaysList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.VideoStreamOptions}
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.VideoStreamOptions;
  return proto.agricultural.robot.navigation.v1.VideoStreamOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.VideoStreamOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.VideoStreamOptions}
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.VideoFormat} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 2:
      var value = new proto.agricultural.robot.navigation.v1.Resolution;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Resolution.deserializeBinaryFromReader);
      msg.setResolution(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFramerate(value);
      break;
    case 4:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.VideoQuality} */ (reader.readEnum());
      msg.setQuality(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableCompression(value);
      break;
    case 6:
      var values = /** @type {!Array<!proto.agricultural.robot.navigation.v1.OverlayType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOverlays(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.VideoStreamOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.VideoStreamOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getResolution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.agricultural.robot.navigation.v1.Resolution.serializeBinaryToWriter
    );
  }
  f = message.getFramerate();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getQuality();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getEnableCompression();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getOverlaysList();
  if (f.length > 0) {
    writer.writePackedEnum(
      6,
      f
    );
  }
};


/**
 * optional VideoFormat format = 1;
 * @return {!proto.agricultural.robot.navigation.v1.VideoFormat}
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.getFormat = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.VideoFormat} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.VideoFormat} value
 * @return {!proto.agricultural.robot.navigation.v1.VideoStreamOptions} returns this
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Resolution resolution = 2;
 * @return {?proto.agricultural.robot.navigation.v1.Resolution}
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.getResolution = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Resolution} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Resolution, 2));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Resolution|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.VideoStreamOptions} returns this
*/
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.setResolution = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.VideoStreamOptions} returns this
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.clearResolution = function() {
  return this.setResolution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.hasResolution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 framerate = 3;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.getFramerate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.VideoStreamOptions} returns this
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.setFramerate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional VideoQuality quality = 4;
 * @return {!proto.agricultural.robot.navigation.v1.VideoQuality}
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.getQuality = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.VideoQuality} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.VideoQuality} value
 * @return {!proto.agricultural.robot.navigation.v1.VideoStreamOptions} returns this
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.setQuality = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional bool enable_compression = 5;
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.getEnableCompression = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agricultural.robot.navigation.v1.VideoStreamOptions} returns this
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.setEnableCompression = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated OverlayType overlays = 6;
 * @return {!Array<!proto.agricultural.robot.navigation.v1.OverlayType>}
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.getOverlaysList = function() {
  return /** @type {!Array<!proto.agricultural.robot.navigation.v1.OverlayType>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<!proto.agricultural.robot.navigation.v1.OverlayType>} value
 * @return {!proto.agricultural.robot.navigation.v1.VideoStreamOptions} returns this
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.setOverlaysList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.OverlayType} value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.VideoStreamOptions} returns this
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.addOverlays = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.VideoStreamOptions} returns this
 */
proto.agricultural.robot.navigation.v1.VideoStreamOptions.prototype.clearOverlaysList = function() {
  return this.setOverlaysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.CameraControlCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.CameraControlCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.CameraControlCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CameraControlCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, 0),
parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlCommand}
 */
proto.agricultural.robot.navigation.v1.CameraControlCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.CameraControlCommand;
  return proto.agricultural.robot.navigation.v1.CameraControlCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.CameraControlCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlCommand}
 */
proto.agricultural.robot.navigation.v1.CameraControlCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.CameraControlType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readDouble, null, "", 0.0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.CameraControlCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.CameraControlCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.CameraControlCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CameraControlCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeDouble);
  }
};


/**
 * optional CameraControlType type = 1;
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlType}
 */
proto.agricultural.robot.navigation.v1.CameraControlCommand.prototype.getType = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.CameraControlType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.CameraControlType} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlCommand} returns this
 */
proto.agricultural.robot.navigation.v1.CameraControlCommand.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * map<string, double> parameters = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.agricultural.robot.navigation.v1.CameraControlCommand.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlCommand} returns this
 */
proto.agricultural.robot.navigation.v1.CameraControlCommand.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.CameraControlResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.CameraControlResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
currentSettingsMap: (f = msg.getCurrentSettingsMap()) ? f.toObject(includeInstance, undefined) : [],
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlResponse}
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.CameraControlResponse;
  return proto.agricultural.robot.navigation.v1.CameraControlResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.CameraControlResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlResponse}
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = msg.getCurrentSettingsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readDouble, null, "", 0.0);
         });
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.CameraControlResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.CameraControlResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCurrentSettingsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeDouble);
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlResponse} returns this
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlResponse} returns this
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, double> current_settings = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.prototype.getCurrentSettingsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlResponse} returns this
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.prototype.clearCurrentSettingsMap = function() {
  this.getCurrentSettingsMap().clear();
  return this;
};


/**
 * optional google.protobuf.Timestamp timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlResponse} returns this
*/
proto.agricultural.robot.navigation.v1.CameraControlResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.CameraControlResponse} returns this
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.CameraControlResponse.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.Resolution.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.Resolution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.Resolution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Resolution.toObject = function(includeInstance, msg) {
  var f, obj = {
width: jspb.Message.getFieldWithDefault(msg, 1, 0),
height: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.Resolution}
 */
proto.agricultural.robot.navigation.v1.Resolution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.Resolution;
  return proto.agricultural.robot.navigation.v1.Resolution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.Resolution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.Resolution}
 */
proto.agricultural.robot.navigation.v1.Resolution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.Resolution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.Resolution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.Resolution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.Resolution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWidth();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 width = 1;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.Resolution.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.Resolution} returns this
 */
proto.agricultural.robot.navigation.v1.Resolution.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 height = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.Resolution.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.Resolution} returns this
 */
proto.agricultural.robot.navigation.v1.Resolution.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.CameraIntrinsics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.CameraIntrinsics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.toObject = function(includeInstance, msg) {
  var f, obj = {
focalLengthX: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
focalLengthY: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
principalPointX: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
principalPointY: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
cameraMatrixList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.CameraIntrinsics}
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.CameraIntrinsics;
  return proto.agricultural.robot.navigation.v1.CameraIntrinsics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.CameraIntrinsics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.CameraIntrinsics}
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFocalLengthX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFocalLengthY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrincipalPointX(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrincipalPointY(value);
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCameraMatrix(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.CameraIntrinsics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.CameraIntrinsics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFocalLengthX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getFocalLengthY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getPrincipalPointX();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getPrincipalPointY();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getCameraMatrixList();
  if (f.length > 0) {
    writer.writePackedDouble(
      5,
      f
    );
  }
};


/**
 * optional double focal_length_x = 1;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.prototype.getFocalLengthX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraIntrinsics} returns this
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.prototype.setFocalLengthX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double focal_length_y = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.prototype.getFocalLengthY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraIntrinsics} returns this
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.prototype.setFocalLengthY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double principal_point_x = 3;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.prototype.getPrincipalPointX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraIntrinsics} returns this
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.prototype.setPrincipalPointX = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double principal_point_y = 4;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.prototype.getPrincipalPointY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraIntrinsics} returns this
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.prototype.setPrincipalPointY = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated double camera_matrix = 5;
 * @return {!Array<number>}
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.prototype.getCameraMatrixList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraIntrinsics} returns this
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.prototype.setCameraMatrixList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.CameraIntrinsics} returns this
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.prototype.addCameraMatrix = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.CameraIntrinsics} returns this
 */
proto.agricultural.robot.navigation.v1.CameraIntrinsics.prototype.clearCameraMatrixList = function() {
  return this.setCameraMatrixList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.agricultural.robot.navigation.v1.CameraDistortion.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.CameraDistortion.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.CameraDistortion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.CameraDistortion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CameraDistortion.toObject = function(includeInstance, msg) {
  var f, obj = {
model: jspb.Message.getFieldWithDefault(msg, 1, 0),
coefficientsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.CameraDistortion}
 */
proto.agricultural.robot.navigation.v1.CameraDistortion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.CameraDistortion;
  return proto.agricultural.robot.navigation.v1.CameraDistortion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.CameraDistortion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.CameraDistortion}
 */
proto.agricultural.robot.navigation.v1.CameraDistortion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.DistortionModel} */ (reader.readEnum());
      msg.setModel(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCoefficients(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.CameraDistortion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.CameraDistortion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.CameraDistortion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.CameraDistortion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCoefficientsList();
  if (f.length > 0) {
    writer.writePackedDouble(
      2,
      f
    );
  }
};


/**
 * optional DistortionModel model = 1;
 * @return {!proto.agricultural.robot.navigation.v1.DistortionModel}
 */
proto.agricultural.robot.navigation.v1.CameraDistortion.prototype.getModel = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.DistortionModel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.DistortionModel} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraDistortion} returns this
 */
proto.agricultural.robot.navigation.v1.CameraDistortion.prototype.setModel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated double coefficients = 2;
 * @return {!Array<number>}
 */
proto.agricultural.robot.navigation.v1.CameraDistortion.prototype.getCoefficientsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.agricultural.robot.navigation.v1.CameraDistortion} returns this
 */
proto.agricultural.robot.navigation.v1.CameraDistortion.prototype.setCoefficientsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.agricultural.robot.navigation.v1.CameraDistortion} returns this
 */
proto.agricultural.robot.navigation.v1.CameraDistortion.prototype.addCoefficients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.agricultural.robot.navigation.v1.CameraDistortion} returns this
 */
proto.agricultural.robot.navigation.v1.CameraDistortion.prototype.clearCoefficientsList = function() {
  return this.setCoefficientsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.FrameMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.FrameMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
exposureTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
gain: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
whiteBalance: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
captureTime: (f = msg.getCaptureTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
cameraPose: (f = msg.getCameraPose()) && proto.agricultural.robot.navigation.v1.Pose.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.FrameMetadata}
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.FrameMetadata;
  return proto.agricultural.robot.navigation.v1.FrameMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.FrameMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.FrameMetadata}
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setExposureTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setGain(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWhiteBalance(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCaptureTime(value);
      break;
    case 5:
      var value = new proto.agricultural.robot.navigation.v1.Pose;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.Pose.deserializeBinaryFromReader);
      msg.setCameraPose(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.FrameMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.FrameMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExposureTime();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getGain();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getWhiteBalance();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getCaptureTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCameraPose();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.agricultural.robot.navigation.v1.Pose.serializeBinaryToWriter
    );
  }
};


/**
 * optional double exposure_time = 1;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.getExposureTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.FrameMetadata} returns this
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.setExposureTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double gain = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.getGain = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.FrameMetadata} returns this
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.setGain = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double white_balance = 3;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.getWhiteBalance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.FrameMetadata} returns this
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.setWhiteBalance = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp capture_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.getCaptureTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.FrameMetadata} returns this
*/
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.setCaptureTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.FrameMetadata} returns this
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.clearCaptureTime = function() {
  return this.setCaptureTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.hasCaptureTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Pose camera_pose = 5;
 * @return {?proto.agricultural.robot.navigation.v1.Pose}
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.getCameraPose = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.Pose} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.Pose, 5));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.Pose|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.FrameMetadata} returns this
*/
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.setCameraPose = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.FrameMetadata} returns this
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.clearCameraPose = function() {
  return this.setCameraPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.FrameMetadata.prototype.hasCameraPose = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest}
 */
proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest;
  return proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest}
 */
proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest} returns this
 */
proto.agricultural.robot.navigation.v1.GetLocalizationStatusRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
initialPose: (f = msg.getInitialPose()) && proto.agricultural.robot.navigation.v1.PoseWithCovariance.toObject(includeInstance, f),
method: jspb.Message.getFieldWithDefault(msg, 3, 0),
parametersMap: (f = msg.getParametersMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest}
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest;
  return proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest}
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = new proto.agricultural.robot.navigation.v1.PoseWithCovariance;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.PoseWithCovariance.deserializeBinaryFromReader);
      msg.setInitialPose(value);
      break;
    case 3:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.LocalizationMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 4:
      var value = msg.getParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInitialPose();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.agricultural.robot.navigation.v1.PoseWithCovariance.serializeBinaryToWriter
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest} returns this
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PoseWithCovariance initial_pose = 2;
 * @return {?proto.agricultural.robot.navigation.v1.PoseWithCovariance}
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.prototype.getInitialPose = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.PoseWithCovariance} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.PoseWithCovariance, 2));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.PoseWithCovariance|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest} returns this
*/
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.prototype.setInitialPose = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest} returns this
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.prototype.clearInitialPose = function() {
  return this.setInitialPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.prototype.hasInitialPose = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LocalizationMethod method = 3;
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationMethod}
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.prototype.getMethod = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.LocalizationMethod} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationMethod} value
 * @return {!proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest} returns this
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * map<string, string> parameters = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.prototype.getParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest} returns this
 */
proto.agricultural.robot.navigation.v1.InitializeLocalizationRequest.prototype.clearParametersMap = function() {
  this.getParametersMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.ResetLocalizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.ResetLocalizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.ResetLocalizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.ResetLocalizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
clearMap: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.ResetLocalizationRequest}
 */
proto.agricultural.robot.navigation.v1.ResetLocalizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.ResetLocalizationRequest;
  return proto.agricultural.robot.navigation.v1.ResetLocalizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.ResetLocalizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.ResetLocalizationRequest}
 */
proto.agricultural.robot.navigation.v1.ResetLocalizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearMap(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.ResetLocalizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.ResetLocalizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.ResetLocalizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.ResetLocalizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClearMap();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.ResetLocalizationRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.ResetLocalizationRequest} returns this
 */
proto.agricultural.robot.navigation.v1.ResetLocalizationRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool clear_map = 2;
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.ResetLocalizationRequest.prototype.getClearMap = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agricultural.robot.navigation.v1.ResetLocalizationRequest} returns this
 */
proto.agricultural.robot.navigation.v1.ResetLocalizationRequest.prototype.setClearMap = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
status: jspb.Message.getFieldWithDefault(msg, 1, 0),
quality: (f = msg.getQuality()) && proto.agricultural.robot.navigation.v1.LocalizationQuality.toObject(includeInstance, f),
currentPose: (f = msg.getCurrentPose()) && proto.agricultural.robot.navigation.v1.PoseWithCovariance.toObject(includeInstance, f),
method: jspb.Message.getFieldWithDefault(msg, 4, 0),
metrics: (f = msg.getMetrics()) && proto.agricultural.robot.navigation.v1.LocalizationMetrics.toObject(includeInstance, f),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.LocalizationStatusResponse;
  return proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.LocalizationStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new proto.agricultural.robot.navigation.v1.LocalizationQuality;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.LocalizationQuality.deserializeBinaryFromReader);
      msg.setQuality(value);
      break;
    case 3:
      var value = new proto.agricultural.robot.navigation.v1.PoseWithCovariance;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.PoseWithCovariance.deserializeBinaryFromReader);
      msg.setCurrentPose(value);
      break;
    case 4:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.LocalizationMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 5:
      var value = new proto.agricultural.robot.navigation.v1.LocalizationMetrics;
      reader.readMessage(value,proto.agricultural.robot.navigation.v1.LocalizationMetrics.deserializeBinaryFromReader);
      msg.setMetrics(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getQuality();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.agricultural.robot.navigation.v1.LocalizationQuality.serializeBinaryToWriter
    );
  }
  f = message.getCurrentPose();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.agricultural.robot.navigation.v1.PoseWithCovariance.serializeBinaryToWriter
    );
  }
  f = message.getMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getMetrics();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.agricultural.robot.navigation.v1.LocalizationMetrics.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional LocalizationStatus status = 1;
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationStatus}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.getStatus = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.LocalizationStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationStatus} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional LocalizationQuality quality = 2;
 * @return {?proto.agricultural.robot.navigation.v1.LocalizationQuality}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.getQuality = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.LocalizationQuality} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.LocalizationQuality, 2));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.LocalizationQuality|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse} returns this
*/
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.setQuality = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.clearQuality = function() {
  return this.setQuality(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.hasQuality = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PoseWithCovariance current_pose = 3;
 * @return {?proto.agricultural.robot.navigation.v1.PoseWithCovariance}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.getCurrentPose = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.PoseWithCovariance} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.PoseWithCovariance, 3));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.PoseWithCovariance|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse} returns this
*/
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.setCurrentPose = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.clearCurrentPose = function() {
  return this.setCurrentPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.hasCurrentPose = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional LocalizationMethod method = 4;
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationMethod}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.getMethod = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.LocalizationMethod} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationMethod} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.setMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional LocalizationMetrics metrics = 5;
 * @return {?proto.agricultural.robot.navigation.v1.LocalizationMetrics}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.getMetrics = function() {
  return /** @type{?proto.agricultural.robot.navigation.v1.LocalizationMetrics} */ (
    jspb.Message.getWrapperField(this, proto.agricultural.robot.navigation.v1.LocalizationMetrics, 5));
};


/**
 * @param {?proto.agricultural.robot.navigation.v1.LocalizationMetrics|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse} returns this
*/
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.setMetrics = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.clearMetrics = function() {
  return this.setMetrics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.hasMetrics = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp timestamp = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse} returns this
*/
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationStatusResponse} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatusResponse.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.LocalizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
status: jspb.Message.getFieldWithDefault(msg, 3, 0),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationResponse}
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.LocalizationResponse;
  return proto.agricultural.robot.navigation.v1.LocalizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationResponse}
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.LocalizationStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.LocalizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationResponse} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationResponse} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional LocalizationStatus status = 3;
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationStatus}
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.prototype.getStatus = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.LocalizationStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationStatus} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationResponse} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationResponse} returns this
*/
proto.agricultural.robot.navigation.v1.LocalizationResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationResponse} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.LocalizationResponse.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.LocalizationQuality.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationQuality} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.toObject = function(includeInstance, msg) {
  var f, obj = {
confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
positionUncertainty: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
orientationUncertainty: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
matchedFeatures: jspb.Message.getFieldWithDefault(msg, 4, 0),
driftEstimate: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
health: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationQuality}
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.LocalizationQuality;
  return proto.agricultural.robot.navigation.v1.LocalizationQuality.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationQuality} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationQuality}
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConfidence(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPositionUncertainty(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOrientationUncertainty(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMatchedFeatures(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDriftEstimate(value);
      break;
    case 6:
      var value = /** @type {!proto.agricultural.robot.navigation.v1.LocalizationHealth} */ (reader.readEnum());
      msg.setHealth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.LocalizationQuality.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationQuality} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getPositionUncertainty();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getOrientationUncertainty();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getMatchedFeatures();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getDriftEstimate();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getHealth();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional double confidence = 1;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationQuality} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.prototype.setConfidence = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double position_uncertainty = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.prototype.getPositionUncertainty = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationQuality} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.prototype.setPositionUncertainty = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double orientation_uncertainty = 3;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.prototype.getOrientationUncertainty = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationQuality} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.prototype.setOrientationUncertainty = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional uint32 matched_features = 4;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.prototype.getMatchedFeatures = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationQuality} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.prototype.setMatchedFeatures = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double drift_estimate = 5;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.prototype.getDriftEstimate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationQuality} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.prototype.setDriftEstimate = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional LocalizationHealth health = 6;
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationHealth}
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.prototype.getHealth = function() {
  return /** @type {!proto.agricultural.robot.navigation.v1.LocalizationHealth} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationHealth} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationQuality} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationQuality.prototype.setHealth = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.agricultural.robot.navigation.v1.LocalizationMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
particleCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
effectiveSampleSize: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
convergenceRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
updateFrequency: (f = msg.getUpdateFrequency()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
sensorUpdatesCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
mapMatchScore: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationMetrics}
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.agricultural.robot.navigation.v1.LocalizationMetrics;
  return proto.agricultural.robot.navigation.v1.LocalizationMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationMetrics}
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParticleCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEffectiveSampleSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setConvergenceRate(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setUpdateFrequency(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSensorUpdatesCount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMapMatchScore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.agricultural.robot.navigation.v1.LocalizationMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.agricultural.robot.navigation.v1.LocalizationMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParticleCount();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getEffectiveSampleSize();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getConvergenceRate();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getUpdateFrequency();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getSensorUpdatesCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getMapMatchScore();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional uint32 particle_count = 1;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.getParticleCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationMetrics} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.setParticleCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double effective_sample_size = 2;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.getEffectiveSampleSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationMetrics} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.setEffectiveSampleSize = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double convergence_rate = 3;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.getConvergenceRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationMetrics} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.setConvergenceRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional google.protobuf.Duration update_frequency = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.getUpdateFrequency = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationMetrics} returns this
*/
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.setUpdateFrequency = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationMetrics} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.clearUpdateFrequency = function() {
  return this.setUpdateFrequency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.hasUpdateFrequency = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 sensor_updates_count = 5;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.getSensorUpdatesCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationMetrics} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.setSensorUpdatesCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional double map_match_score = 6;
 * @return {number}
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.getMapMatchScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.agricultural.robot.navigation.v1.LocalizationMetrics} returns this
 */
proto.agricultural.robot.navigation.v1.LocalizationMetrics.prototype.setMapMatchScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.MapType = {
  MAP_TYPE_UNSPECIFIED: 0,
  MAP_TYPE_OCCUPANCY_GRID: 1,
  MAP_TYPE_COSTMAP: 2,
  MAP_TYPE_SEMANTIC: 3,
  MAP_TYPE_ELEVATION: 4
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.MapSource = {
  MAP_SOURCE_UNSPECIFIED: 0,
  MAP_SOURCE_SLAM: 1,
  MAP_SOURCE_UPLOADED: 2,
  MAP_SOURCE_SURVEYED: 3,
  MAP_SOURCE_SATELLITE: 4
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.ControlMode = {
  CONTROL_MODE_UNSPECIFIED: 0,
  CONTROL_MODE_MANUAL: 1,
  CONTROL_MODE_ASSISTED: 2,
  CONTROL_MODE_AUTONOMOUS: 3
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.EmergencyStopType = {
  EMERGENCY_STOP_TYPE_UNSPECIFIED: 0,
  EMERGENCY_STOP_TYPE_SOFT: 1,
  EMERGENCY_STOP_TYPE_HARD: 2,
  EMERGENCY_STOP_TYPE_FULL: 3
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.SafetyViolationType = {
  SAFETY_VIOLATION_TYPE_UNSPECIFIED: 0,
  SAFETY_VIOLATION_TYPE_SPEED_LIMIT: 1,
  SAFETY_VIOLATION_TYPE_OBSTACLE: 2,
  SAFETY_VIOLATION_TYPE_BOUNDARY: 3,
  SAFETY_VIOLATION_TYPE_SLOPE: 4,
  SAFETY_VIOLATION_TYPE_BATTERY: 5
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.WaypointType = {
  WAYPOINT_TYPE_UNSPECIFIED: 0,
  WAYPOINT_TYPE_PASS_THROUGH: 1,
  WAYPOINT_TYPE_STOP: 2,
  WAYPOINT_TYPE_INSPECTION: 3,
  WAYPOINT_TYPE_WORK: 4,
  WAYPOINT_TYPE_CHARGE: 5
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.WaypointActionType = {
  WAYPOINT_ACTION_TYPE_UNSPECIFIED: 0,
  WAYPOINT_ACTION_TYPE_PAUSE: 1,
  WAYPOINT_ACTION_TYPE_CAPTURE_IMAGE: 2,
  WAYPOINT_ACTION_TYPE_SPRAY: 3,
  WAYPOINT_ACTION_TYPE_SCAN: 4,
  WAYPOINT_ACTION_TYPE_COLLECT_SAMPLE: 5
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.PlannerType = {
  PLANNER_TYPE_UNSPECIFIED: 0,
  PLANNER_TYPE_A_STAR: 1,
  PLANNER_TYPE_RRT: 2,
  PLANNER_TYPE_DWA: 3,
  PLANNER_TYPE_TEB: 4,
  PLANNER_TYPE_SPLINE: 5
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.NavigationBehavior = {
  NAVIGATION_BEHAVIOR_UNSPECIFIED: 0,
  NAVIGATION_BEHAVIOR_DIRECT: 1,
  NAVIGATION_BEHAVIOR_CONSERVATIVE: 2,
  NAVIGATION_BEHAVIOR_AGGRESSIVE: 3,
  NAVIGATION_BEHAVIOR_PRECISION: 4
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.TrajectoryExecutionMode = {
  TRAJECTORY_EXECUTION_MODE_UNSPECIFIED: 0,
  TRAJECTORY_EXECUTION_MODE_IMMEDIATE: 1,
  TRAJECTORY_EXECUTION_MODE_QUEUED: 2,
  TRAJECTORY_EXECUTION_MODE_SCHEDULED: 3
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.NavigationStatus = {
  NAVIGATION_STATUS_UNSPECIFIED: 0,
  NAVIGATION_STATUS_IDLE: 1,
  NAVIGATION_STATUS_PLANNING: 2,
  NAVIGATION_STATUS_EXECUTING: 3,
  NAVIGATION_STATUS_PAUSED: 4,
  NAVIGATION_STATUS_COMPLETED: 5,
  NAVIGATION_STATUS_FAILED: 6,
  NAVIGATION_STATUS_CANCELLED: 7,
  NAVIGATION_STATUS_RECOVERING: 8
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.NavigationResult = {
  NAVIGATION_RESULT_UNSPECIFIED: 0,
  NAVIGATION_RESULT_SUCCESS: 1,
  NAVIGATION_RESULT_TIMEOUT: 2,
  NAVIGATION_RESULT_OBSTACLE: 3,
  NAVIGATION_RESULT_INVALID_GOAL: 4,
  NAVIGATION_RESULT_PLANNING_FAILED: 5,
  NAVIGATION_RESULT_PREEMPTED: 6,
  NAVIGATION_RESULT_ABORTED: 7
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.NavigationErrorCode = {
  NAVIGATION_ERROR_CODE_UNSPECIFIED: 0,
  NAVIGATION_ERROR_CODE_NO_PATH: 1,
  NAVIGATION_ERROR_CODE_TIMEOUT: 2,
  NAVIGATION_ERROR_CODE_OBSTACLE: 3,
  NAVIGATION_ERROR_CODE_LOCALIZATION_LOST: 4,
  NAVIGATION_ERROR_CODE_CONTROLLER_FAILURE: 5,
  NAVIGATION_ERROR_CODE_INVALID_GOAL: 6,
  NAVIGATION_ERROR_CODE_RECOVERY_FAILED: 7
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.CameraType = {
  CAMERA_TYPE_UNSPECIFIED: 0,
  CAMERA_TYPE_RGB: 1,
  CAMERA_TYPE_DEPTH: 2,
  CAMERA_TYPE_THERMAL: 3,
  CAMERA_TYPE_MULTISPECTRAL: 4,
  CAMERA_TYPE_STEREO: 5,
  CAMERA_TYPE_LIDAR: 6
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.VideoFormat = {
  VIDEO_FORMAT_UNSPECIFIED: 0,
  VIDEO_FORMAT_MJPEG: 1,
  VIDEO_FORMAT_H264: 2,
  VIDEO_FORMAT_H265: 3,
  VIDEO_FORMAT_VP8: 4,
  VIDEO_FORMAT_VP9: 5,
  VIDEO_FORMAT_RAW: 6
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.VideoQuality = {
  VIDEO_QUALITY_UNSPECIFIED: 0,
  VIDEO_QUALITY_LOW: 1,
  VIDEO_QUALITY_MEDIUM: 2,
  VIDEO_QUALITY_HIGH: 3,
  VIDEO_QUALITY_ULTRA: 4
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.CameraStatus = {
  CAMERA_STATUS_UNSPECIFIED: 0,
  CAMERA_STATUS_ACTIVE: 1,
  CAMERA_STATUS_INACTIVE: 2,
  CAMERA_STATUS_ERROR: 3,
  CAMERA_STATUS_CALIBRATING: 4
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.CameraControlType = {
  CAMERA_CONTROL_TYPE_UNSPECIFIED: 0,
  CAMERA_CONTROL_TYPE_PAN: 1,
  CAMERA_CONTROL_TYPE_TILT: 2,
  CAMERA_CONTROL_TYPE_ZOOM: 3,
  CAMERA_CONTROL_TYPE_FOCUS: 4,
  CAMERA_CONTROL_TYPE_EXPOSURE: 5,
  CAMERA_CONTROL_TYPE_WHITE_BALANCE: 6,
  CAMERA_CONTROL_TYPE_GAIN: 7
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.DistortionModel = {
  DISTORTION_MODEL_UNSPECIFIED: 0,
  DISTORTION_MODEL_PLUMB_BOB: 1,
  DISTORTION_MODEL_RATIONAL_POLYNOMIAL: 2,
  DISTORTION_MODEL_EQUIDISTANT: 3
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.OverlayType = {
  OVERLAY_TYPE_UNSPECIFIED: 0,
  OVERLAY_TYPE_CROSSHAIR: 1,
  OVERLAY_TYPE_GRID: 2,
  OVERLAY_TYPE_POSE: 3,
  OVERLAY_TYPE_NAVIGATION_PATH: 4,
  OVERLAY_TYPE_OBSTACLES: 5,
  OVERLAY_TYPE_TIMESTAMP: 6
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.LocalizationStatus = {
  LOCALIZATION_STATUS_UNSPECIFIED: 0,
  LOCALIZATION_STATUS_INITIALIZING: 1,
  LOCALIZATION_STATUS_TRACKING: 2,
  LOCALIZATION_STATUS_LOST: 3,
  LOCALIZATION_STATUS_RECOVERING: 4,
  LOCALIZATION_STATUS_DEGRADED: 5
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.LocalizationMethod = {
  LOCALIZATION_METHOD_UNSPECIFIED: 0,
  LOCALIZATION_METHOD_AMCL: 1,
  LOCALIZATION_METHOD_EKF: 2,
  LOCALIZATION_METHOD_PARTICLE_FILTER: 3,
  LOCALIZATION_METHOD_VISUAL_SLAM: 4,
  LOCALIZATION_METHOD_GPS_RTK: 5,
  LOCALIZATION_METHOD_HYBRID: 6
};

/**
 * @enum {number}
 */
proto.agricultural.robot.navigation.v1.LocalizationHealth = {
  LOCALIZATION_HEALTH_UNSPECIFIED: 0,
  LOCALIZATION_HEALTH_GOOD: 1,
  LOCALIZATION_HEALTH_FAIR: 2,
  LOCALIZATION_HEALTH_POOR: 3,
  LOCALIZATION_HEALTH_CRITICAL: 4
};

goog.object.extend(exports, proto.agricultural.robot.navigation.v1);

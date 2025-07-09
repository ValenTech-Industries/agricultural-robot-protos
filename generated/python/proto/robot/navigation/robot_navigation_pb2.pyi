import datetime

from google.protobuf import timestamp_pb2 as _timestamp_pb2
from google.protobuf import duration_pb2 as _duration_pb2
from google.protobuf import empty_pb2 as _empty_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class MapType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    MAP_TYPE_UNSPECIFIED: _ClassVar[MapType]
    MAP_TYPE_OCCUPANCY_GRID: _ClassVar[MapType]
    MAP_TYPE_COSTMAP: _ClassVar[MapType]
    MAP_TYPE_SEMANTIC: _ClassVar[MapType]
    MAP_TYPE_ELEVATION: _ClassVar[MapType]

class MapSource(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    MAP_SOURCE_UNSPECIFIED: _ClassVar[MapSource]
    MAP_SOURCE_SLAM: _ClassVar[MapSource]
    MAP_SOURCE_UPLOADED: _ClassVar[MapSource]
    MAP_SOURCE_SURVEYED: _ClassVar[MapSource]
    MAP_SOURCE_SATELLITE: _ClassVar[MapSource]

class ControlMode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    CONTROL_MODE_UNSPECIFIED: _ClassVar[ControlMode]
    CONTROL_MODE_MANUAL: _ClassVar[ControlMode]
    CONTROL_MODE_ASSISTED: _ClassVar[ControlMode]
    CONTROL_MODE_AUTONOMOUS: _ClassVar[ControlMode]

class EmergencyStopType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    EMERGENCY_STOP_TYPE_UNSPECIFIED: _ClassVar[EmergencyStopType]
    EMERGENCY_STOP_TYPE_SOFT: _ClassVar[EmergencyStopType]
    EMERGENCY_STOP_TYPE_HARD: _ClassVar[EmergencyStopType]
    EMERGENCY_STOP_TYPE_FULL: _ClassVar[EmergencyStopType]

class SafetyViolationType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SAFETY_VIOLATION_TYPE_UNSPECIFIED: _ClassVar[SafetyViolationType]
    SAFETY_VIOLATION_TYPE_SPEED_LIMIT: _ClassVar[SafetyViolationType]
    SAFETY_VIOLATION_TYPE_OBSTACLE: _ClassVar[SafetyViolationType]
    SAFETY_VIOLATION_TYPE_BOUNDARY: _ClassVar[SafetyViolationType]
    SAFETY_VIOLATION_TYPE_SLOPE: _ClassVar[SafetyViolationType]
    SAFETY_VIOLATION_TYPE_BATTERY: _ClassVar[SafetyViolationType]

class WaypointType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    WAYPOINT_TYPE_UNSPECIFIED: _ClassVar[WaypointType]
    WAYPOINT_TYPE_PASS_THROUGH: _ClassVar[WaypointType]
    WAYPOINT_TYPE_STOP: _ClassVar[WaypointType]
    WAYPOINT_TYPE_INSPECTION: _ClassVar[WaypointType]
    WAYPOINT_TYPE_WORK: _ClassVar[WaypointType]
    WAYPOINT_TYPE_CHARGE: _ClassVar[WaypointType]

class WaypointActionType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    WAYPOINT_ACTION_TYPE_UNSPECIFIED: _ClassVar[WaypointActionType]
    WAYPOINT_ACTION_TYPE_PAUSE: _ClassVar[WaypointActionType]
    WAYPOINT_ACTION_TYPE_CAPTURE_IMAGE: _ClassVar[WaypointActionType]
    WAYPOINT_ACTION_TYPE_SPRAY: _ClassVar[WaypointActionType]
    WAYPOINT_ACTION_TYPE_SCAN: _ClassVar[WaypointActionType]
    WAYPOINT_ACTION_TYPE_COLLECT_SAMPLE: _ClassVar[WaypointActionType]

class PlannerType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PLANNER_TYPE_UNSPECIFIED: _ClassVar[PlannerType]
    PLANNER_TYPE_A_STAR: _ClassVar[PlannerType]
    PLANNER_TYPE_RRT: _ClassVar[PlannerType]
    PLANNER_TYPE_DWA: _ClassVar[PlannerType]
    PLANNER_TYPE_TEB: _ClassVar[PlannerType]
    PLANNER_TYPE_SPLINE: _ClassVar[PlannerType]

class NavigationBehavior(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    NAVIGATION_BEHAVIOR_UNSPECIFIED: _ClassVar[NavigationBehavior]
    NAVIGATION_BEHAVIOR_DIRECT: _ClassVar[NavigationBehavior]
    NAVIGATION_BEHAVIOR_CONSERVATIVE: _ClassVar[NavigationBehavior]
    NAVIGATION_BEHAVIOR_AGGRESSIVE: _ClassVar[NavigationBehavior]
    NAVIGATION_BEHAVIOR_PRECISION: _ClassVar[NavigationBehavior]

class TrajectoryExecutionMode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TRAJECTORY_EXECUTION_MODE_UNSPECIFIED: _ClassVar[TrajectoryExecutionMode]
    TRAJECTORY_EXECUTION_MODE_IMMEDIATE: _ClassVar[TrajectoryExecutionMode]
    TRAJECTORY_EXECUTION_MODE_QUEUED: _ClassVar[TrajectoryExecutionMode]
    TRAJECTORY_EXECUTION_MODE_SCHEDULED: _ClassVar[TrajectoryExecutionMode]

class NavigationStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    NAVIGATION_STATUS_UNSPECIFIED: _ClassVar[NavigationStatus]
    NAVIGATION_STATUS_IDLE: _ClassVar[NavigationStatus]
    NAVIGATION_STATUS_PLANNING: _ClassVar[NavigationStatus]
    NAVIGATION_STATUS_EXECUTING: _ClassVar[NavigationStatus]
    NAVIGATION_STATUS_PAUSED: _ClassVar[NavigationStatus]
    NAVIGATION_STATUS_COMPLETED: _ClassVar[NavigationStatus]
    NAVIGATION_STATUS_FAILED: _ClassVar[NavigationStatus]
    NAVIGATION_STATUS_CANCELLED: _ClassVar[NavigationStatus]
    NAVIGATION_STATUS_RECOVERING: _ClassVar[NavigationStatus]

class NavigationResult(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    NAVIGATION_RESULT_UNSPECIFIED: _ClassVar[NavigationResult]
    NAVIGATION_RESULT_SUCCESS: _ClassVar[NavigationResult]
    NAVIGATION_RESULT_TIMEOUT: _ClassVar[NavigationResult]
    NAVIGATION_RESULT_OBSTACLE: _ClassVar[NavigationResult]
    NAVIGATION_RESULT_INVALID_GOAL: _ClassVar[NavigationResult]
    NAVIGATION_RESULT_PLANNING_FAILED: _ClassVar[NavigationResult]
    NAVIGATION_RESULT_PREEMPTED: _ClassVar[NavigationResult]
    NAVIGATION_RESULT_ABORTED: _ClassVar[NavigationResult]

class NavigationErrorCode(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    NAVIGATION_ERROR_CODE_UNSPECIFIED: _ClassVar[NavigationErrorCode]
    NAVIGATION_ERROR_CODE_NO_PATH: _ClassVar[NavigationErrorCode]
    NAVIGATION_ERROR_CODE_TIMEOUT: _ClassVar[NavigationErrorCode]
    NAVIGATION_ERROR_CODE_OBSTACLE: _ClassVar[NavigationErrorCode]
    NAVIGATION_ERROR_CODE_LOCALIZATION_LOST: _ClassVar[NavigationErrorCode]
    NAVIGATION_ERROR_CODE_CONTROLLER_FAILURE: _ClassVar[NavigationErrorCode]
    NAVIGATION_ERROR_CODE_INVALID_GOAL: _ClassVar[NavigationErrorCode]
    NAVIGATION_ERROR_CODE_RECOVERY_FAILED: _ClassVar[NavigationErrorCode]

class CameraType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    CAMERA_TYPE_UNSPECIFIED: _ClassVar[CameraType]
    CAMERA_TYPE_RGB: _ClassVar[CameraType]
    CAMERA_TYPE_DEPTH: _ClassVar[CameraType]
    CAMERA_TYPE_THERMAL: _ClassVar[CameraType]
    CAMERA_TYPE_MULTISPECTRAL: _ClassVar[CameraType]
    CAMERA_TYPE_STEREO: _ClassVar[CameraType]
    CAMERA_TYPE_LIDAR: _ClassVar[CameraType]

class VideoFormat(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    VIDEO_FORMAT_UNSPECIFIED: _ClassVar[VideoFormat]
    VIDEO_FORMAT_MJPEG: _ClassVar[VideoFormat]
    VIDEO_FORMAT_H264: _ClassVar[VideoFormat]
    VIDEO_FORMAT_H265: _ClassVar[VideoFormat]
    VIDEO_FORMAT_VP8: _ClassVar[VideoFormat]
    VIDEO_FORMAT_VP9: _ClassVar[VideoFormat]
    VIDEO_FORMAT_RAW: _ClassVar[VideoFormat]

class VideoQuality(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    VIDEO_QUALITY_UNSPECIFIED: _ClassVar[VideoQuality]
    VIDEO_QUALITY_LOW: _ClassVar[VideoQuality]
    VIDEO_QUALITY_MEDIUM: _ClassVar[VideoQuality]
    VIDEO_QUALITY_HIGH: _ClassVar[VideoQuality]
    VIDEO_QUALITY_ULTRA: _ClassVar[VideoQuality]

class CameraStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    CAMERA_STATUS_UNSPECIFIED: _ClassVar[CameraStatus]
    CAMERA_STATUS_ACTIVE: _ClassVar[CameraStatus]
    CAMERA_STATUS_INACTIVE: _ClassVar[CameraStatus]
    CAMERA_STATUS_ERROR: _ClassVar[CameraStatus]
    CAMERA_STATUS_CALIBRATING: _ClassVar[CameraStatus]

class CameraControlType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    CAMERA_CONTROL_TYPE_UNSPECIFIED: _ClassVar[CameraControlType]
    CAMERA_CONTROL_TYPE_PAN: _ClassVar[CameraControlType]
    CAMERA_CONTROL_TYPE_TILT: _ClassVar[CameraControlType]
    CAMERA_CONTROL_TYPE_ZOOM: _ClassVar[CameraControlType]
    CAMERA_CONTROL_TYPE_FOCUS: _ClassVar[CameraControlType]
    CAMERA_CONTROL_TYPE_EXPOSURE: _ClassVar[CameraControlType]
    CAMERA_CONTROL_TYPE_WHITE_BALANCE: _ClassVar[CameraControlType]
    CAMERA_CONTROL_TYPE_GAIN: _ClassVar[CameraControlType]

class DistortionModel(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    DISTORTION_MODEL_UNSPECIFIED: _ClassVar[DistortionModel]
    DISTORTION_MODEL_PLUMB_BOB: _ClassVar[DistortionModel]
    DISTORTION_MODEL_RATIONAL_POLYNOMIAL: _ClassVar[DistortionModel]
    DISTORTION_MODEL_EQUIDISTANT: _ClassVar[DistortionModel]

class OverlayType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    OVERLAY_TYPE_UNSPECIFIED: _ClassVar[OverlayType]
    OVERLAY_TYPE_CROSSHAIR: _ClassVar[OverlayType]
    OVERLAY_TYPE_GRID: _ClassVar[OverlayType]
    OVERLAY_TYPE_POSE: _ClassVar[OverlayType]
    OVERLAY_TYPE_NAVIGATION_PATH: _ClassVar[OverlayType]
    OVERLAY_TYPE_OBSTACLES: _ClassVar[OverlayType]
    OVERLAY_TYPE_TIMESTAMP: _ClassVar[OverlayType]

class LocalizationStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    LOCALIZATION_STATUS_UNSPECIFIED: _ClassVar[LocalizationStatus]
    LOCALIZATION_STATUS_INITIALIZING: _ClassVar[LocalizationStatus]
    LOCALIZATION_STATUS_TRACKING: _ClassVar[LocalizationStatus]
    LOCALIZATION_STATUS_LOST: _ClassVar[LocalizationStatus]
    LOCALIZATION_STATUS_RECOVERING: _ClassVar[LocalizationStatus]
    LOCALIZATION_STATUS_DEGRADED: _ClassVar[LocalizationStatus]

class LocalizationMethod(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    LOCALIZATION_METHOD_UNSPECIFIED: _ClassVar[LocalizationMethod]
    LOCALIZATION_METHOD_AMCL: _ClassVar[LocalizationMethod]
    LOCALIZATION_METHOD_EKF: _ClassVar[LocalizationMethod]
    LOCALIZATION_METHOD_PARTICLE_FILTER: _ClassVar[LocalizationMethod]
    LOCALIZATION_METHOD_VISUAL_SLAM: _ClassVar[LocalizationMethod]
    LOCALIZATION_METHOD_GPS_RTK: _ClassVar[LocalizationMethod]
    LOCALIZATION_METHOD_HYBRID: _ClassVar[LocalizationMethod]

class LocalizationHealth(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    LOCALIZATION_HEALTH_UNSPECIFIED: _ClassVar[LocalizationHealth]
    LOCALIZATION_HEALTH_GOOD: _ClassVar[LocalizationHealth]
    LOCALIZATION_HEALTH_FAIR: _ClassVar[LocalizationHealth]
    LOCALIZATION_HEALTH_POOR: _ClassVar[LocalizationHealth]
    LOCALIZATION_HEALTH_CRITICAL: _ClassVar[LocalizationHealth]
MAP_TYPE_UNSPECIFIED: MapType
MAP_TYPE_OCCUPANCY_GRID: MapType
MAP_TYPE_COSTMAP: MapType
MAP_TYPE_SEMANTIC: MapType
MAP_TYPE_ELEVATION: MapType
MAP_SOURCE_UNSPECIFIED: MapSource
MAP_SOURCE_SLAM: MapSource
MAP_SOURCE_UPLOADED: MapSource
MAP_SOURCE_SURVEYED: MapSource
MAP_SOURCE_SATELLITE: MapSource
CONTROL_MODE_UNSPECIFIED: ControlMode
CONTROL_MODE_MANUAL: ControlMode
CONTROL_MODE_ASSISTED: ControlMode
CONTROL_MODE_AUTONOMOUS: ControlMode
EMERGENCY_STOP_TYPE_UNSPECIFIED: EmergencyStopType
EMERGENCY_STOP_TYPE_SOFT: EmergencyStopType
EMERGENCY_STOP_TYPE_HARD: EmergencyStopType
EMERGENCY_STOP_TYPE_FULL: EmergencyStopType
SAFETY_VIOLATION_TYPE_UNSPECIFIED: SafetyViolationType
SAFETY_VIOLATION_TYPE_SPEED_LIMIT: SafetyViolationType
SAFETY_VIOLATION_TYPE_OBSTACLE: SafetyViolationType
SAFETY_VIOLATION_TYPE_BOUNDARY: SafetyViolationType
SAFETY_VIOLATION_TYPE_SLOPE: SafetyViolationType
SAFETY_VIOLATION_TYPE_BATTERY: SafetyViolationType
WAYPOINT_TYPE_UNSPECIFIED: WaypointType
WAYPOINT_TYPE_PASS_THROUGH: WaypointType
WAYPOINT_TYPE_STOP: WaypointType
WAYPOINT_TYPE_INSPECTION: WaypointType
WAYPOINT_TYPE_WORK: WaypointType
WAYPOINT_TYPE_CHARGE: WaypointType
WAYPOINT_ACTION_TYPE_UNSPECIFIED: WaypointActionType
WAYPOINT_ACTION_TYPE_PAUSE: WaypointActionType
WAYPOINT_ACTION_TYPE_CAPTURE_IMAGE: WaypointActionType
WAYPOINT_ACTION_TYPE_SPRAY: WaypointActionType
WAYPOINT_ACTION_TYPE_SCAN: WaypointActionType
WAYPOINT_ACTION_TYPE_COLLECT_SAMPLE: WaypointActionType
PLANNER_TYPE_UNSPECIFIED: PlannerType
PLANNER_TYPE_A_STAR: PlannerType
PLANNER_TYPE_RRT: PlannerType
PLANNER_TYPE_DWA: PlannerType
PLANNER_TYPE_TEB: PlannerType
PLANNER_TYPE_SPLINE: PlannerType
NAVIGATION_BEHAVIOR_UNSPECIFIED: NavigationBehavior
NAVIGATION_BEHAVIOR_DIRECT: NavigationBehavior
NAVIGATION_BEHAVIOR_CONSERVATIVE: NavigationBehavior
NAVIGATION_BEHAVIOR_AGGRESSIVE: NavigationBehavior
NAVIGATION_BEHAVIOR_PRECISION: NavigationBehavior
TRAJECTORY_EXECUTION_MODE_UNSPECIFIED: TrajectoryExecutionMode
TRAJECTORY_EXECUTION_MODE_IMMEDIATE: TrajectoryExecutionMode
TRAJECTORY_EXECUTION_MODE_QUEUED: TrajectoryExecutionMode
TRAJECTORY_EXECUTION_MODE_SCHEDULED: TrajectoryExecutionMode
NAVIGATION_STATUS_UNSPECIFIED: NavigationStatus
NAVIGATION_STATUS_IDLE: NavigationStatus
NAVIGATION_STATUS_PLANNING: NavigationStatus
NAVIGATION_STATUS_EXECUTING: NavigationStatus
NAVIGATION_STATUS_PAUSED: NavigationStatus
NAVIGATION_STATUS_COMPLETED: NavigationStatus
NAVIGATION_STATUS_FAILED: NavigationStatus
NAVIGATION_STATUS_CANCELLED: NavigationStatus
NAVIGATION_STATUS_RECOVERING: NavigationStatus
NAVIGATION_RESULT_UNSPECIFIED: NavigationResult
NAVIGATION_RESULT_SUCCESS: NavigationResult
NAVIGATION_RESULT_TIMEOUT: NavigationResult
NAVIGATION_RESULT_OBSTACLE: NavigationResult
NAVIGATION_RESULT_INVALID_GOAL: NavigationResult
NAVIGATION_RESULT_PLANNING_FAILED: NavigationResult
NAVIGATION_RESULT_PREEMPTED: NavigationResult
NAVIGATION_RESULT_ABORTED: NavigationResult
NAVIGATION_ERROR_CODE_UNSPECIFIED: NavigationErrorCode
NAVIGATION_ERROR_CODE_NO_PATH: NavigationErrorCode
NAVIGATION_ERROR_CODE_TIMEOUT: NavigationErrorCode
NAVIGATION_ERROR_CODE_OBSTACLE: NavigationErrorCode
NAVIGATION_ERROR_CODE_LOCALIZATION_LOST: NavigationErrorCode
NAVIGATION_ERROR_CODE_CONTROLLER_FAILURE: NavigationErrorCode
NAVIGATION_ERROR_CODE_INVALID_GOAL: NavigationErrorCode
NAVIGATION_ERROR_CODE_RECOVERY_FAILED: NavigationErrorCode
CAMERA_TYPE_UNSPECIFIED: CameraType
CAMERA_TYPE_RGB: CameraType
CAMERA_TYPE_DEPTH: CameraType
CAMERA_TYPE_THERMAL: CameraType
CAMERA_TYPE_MULTISPECTRAL: CameraType
CAMERA_TYPE_STEREO: CameraType
CAMERA_TYPE_LIDAR: CameraType
VIDEO_FORMAT_UNSPECIFIED: VideoFormat
VIDEO_FORMAT_MJPEG: VideoFormat
VIDEO_FORMAT_H264: VideoFormat
VIDEO_FORMAT_H265: VideoFormat
VIDEO_FORMAT_VP8: VideoFormat
VIDEO_FORMAT_VP9: VideoFormat
VIDEO_FORMAT_RAW: VideoFormat
VIDEO_QUALITY_UNSPECIFIED: VideoQuality
VIDEO_QUALITY_LOW: VideoQuality
VIDEO_QUALITY_MEDIUM: VideoQuality
VIDEO_QUALITY_HIGH: VideoQuality
VIDEO_QUALITY_ULTRA: VideoQuality
CAMERA_STATUS_UNSPECIFIED: CameraStatus
CAMERA_STATUS_ACTIVE: CameraStatus
CAMERA_STATUS_INACTIVE: CameraStatus
CAMERA_STATUS_ERROR: CameraStatus
CAMERA_STATUS_CALIBRATING: CameraStatus
CAMERA_CONTROL_TYPE_UNSPECIFIED: CameraControlType
CAMERA_CONTROL_TYPE_PAN: CameraControlType
CAMERA_CONTROL_TYPE_TILT: CameraControlType
CAMERA_CONTROL_TYPE_ZOOM: CameraControlType
CAMERA_CONTROL_TYPE_FOCUS: CameraControlType
CAMERA_CONTROL_TYPE_EXPOSURE: CameraControlType
CAMERA_CONTROL_TYPE_WHITE_BALANCE: CameraControlType
CAMERA_CONTROL_TYPE_GAIN: CameraControlType
DISTORTION_MODEL_UNSPECIFIED: DistortionModel
DISTORTION_MODEL_PLUMB_BOB: DistortionModel
DISTORTION_MODEL_RATIONAL_POLYNOMIAL: DistortionModel
DISTORTION_MODEL_EQUIDISTANT: DistortionModel
OVERLAY_TYPE_UNSPECIFIED: OverlayType
OVERLAY_TYPE_CROSSHAIR: OverlayType
OVERLAY_TYPE_GRID: OverlayType
OVERLAY_TYPE_POSE: OverlayType
OVERLAY_TYPE_NAVIGATION_PATH: OverlayType
OVERLAY_TYPE_OBSTACLES: OverlayType
OVERLAY_TYPE_TIMESTAMP: OverlayType
LOCALIZATION_STATUS_UNSPECIFIED: LocalizationStatus
LOCALIZATION_STATUS_INITIALIZING: LocalizationStatus
LOCALIZATION_STATUS_TRACKING: LocalizationStatus
LOCALIZATION_STATUS_LOST: LocalizationStatus
LOCALIZATION_STATUS_RECOVERING: LocalizationStatus
LOCALIZATION_STATUS_DEGRADED: LocalizationStatus
LOCALIZATION_METHOD_UNSPECIFIED: LocalizationMethod
LOCALIZATION_METHOD_AMCL: LocalizationMethod
LOCALIZATION_METHOD_EKF: LocalizationMethod
LOCALIZATION_METHOD_PARTICLE_FILTER: LocalizationMethod
LOCALIZATION_METHOD_VISUAL_SLAM: LocalizationMethod
LOCALIZATION_METHOD_GPS_RTK: LocalizationMethod
LOCALIZATION_METHOD_HYBRID: LocalizationMethod
LOCALIZATION_HEALTH_UNSPECIFIED: LocalizationHealth
LOCALIZATION_HEALTH_GOOD: LocalizationHealth
LOCALIZATION_HEALTH_FAIR: LocalizationHealth
LOCALIZATION_HEALTH_POOR: LocalizationHealth
LOCALIZATION_HEALTH_CRITICAL: LocalizationHealth

class GetMapRequest(_message.Message):
    __slots__ = ("robot_id", "map_type", "frame_id")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    MAP_TYPE_FIELD_NUMBER: _ClassVar[int]
    FRAME_ID_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    map_type: MapType
    frame_id: str
    def __init__(self, robot_id: _Optional[str] = ..., map_type: _Optional[_Union[MapType, str]] = ..., frame_id: _Optional[str] = ...) -> None: ...

class SetMapRequest(_message.Message):
    __slots__ = ("robot_id", "map_data", "metadata")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    MAP_DATA_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    map_data: OccupancyGridMap
    metadata: MapMetadata
    def __init__(self, robot_id: _Optional[str] = ..., map_data: _Optional[_Union[OccupancyGridMap, _Mapping]] = ..., metadata: _Optional[_Union[MapMetadata, _Mapping]] = ...) -> None: ...

class UpdateMapRequest(_message.Message):
    __slots__ = ("robot_id", "update")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    UPDATE_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    update: MapUpdate
    def __init__(self, robot_id: _Optional[str] = ..., update: _Optional[_Union[MapUpdate, _Mapping]] = ...) -> None: ...

class ClearMapRequest(_message.Message):
    __slots__ = ("robot_id", "map_type")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    MAP_TYPE_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    map_type: MapType
    def __init__(self, robot_id: _Optional[str] = ..., map_type: _Optional[_Union[MapType, str]] = ...) -> None: ...

class MapResponse(_message.Message):
    __slots__ = ("success", "message", "map_data", "metadata", "timestamp")
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    MAP_DATA_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    success: bool
    message: str
    map_data: OccupancyGridMap
    metadata: MapMetadata
    timestamp: _timestamp_pb2.Timestamp
    def __init__(self, success: bool = ..., message: _Optional[str] = ..., map_data: _Optional[_Union[OccupancyGridMap, _Mapping]] = ..., metadata: _Optional[_Union[MapMetadata, _Mapping]] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class OccupancyGridMap(_message.Message):
    __slots__ = ("info", "data", "encoding")
    INFO_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    ENCODING_FIELD_NUMBER: _ClassVar[int]
    info: MapMetadata
    data: bytes
    encoding: str
    def __init__(self, info: _Optional[_Union[MapMetadata, _Mapping]] = ..., data: _Optional[bytes] = ..., encoding: _Optional[str] = ...) -> None: ...

class MapMetadata(_message.Message):
    __slots__ = ("map_load_time", "resolution", "width", "height", "origin", "frame_id", "version", "source")
    MAP_LOAD_TIME_FIELD_NUMBER: _ClassVar[int]
    RESOLUTION_FIELD_NUMBER: _ClassVar[int]
    WIDTH_FIELD_NUMBER: _ClassVar[int]
    HEIGHT_FIELD_NUMBER: _ClassVar[int]
    ORIGIN_FIELD_NUMBER: _ClassVar[int]
    FRAME_ID_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    SOURCE_FIELD_NUMBER: _ClassVar[int]
    map_load_time: _timestamp_pb2.Timestamp
    resolution: float
    width: int
    height: int
    origin: Pose
    frame_id: str
    version: int
    source: MapSource
    def __init__(self, map_load_time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., resolution: _Optional[float] = ..., width: _Optional[int] = ..., height: _Optional[int] = ..., origin: _Optional[_Union[Pose, _Mapping]] = ..., frame_id: _Optional[str] = ..., version: _Optional[int] = ..., source: _Optional[_Union[MapSource, str]] = ...) -> None: ...

class MapUpdate(_message.Message):
    __slots__ = ("update_region", "data", "timestamp")
    UPDATE_REGION_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    update_region: Rectangle
    data: bytes
    timestamp: _timestamp_pb2.Timestamp
    def __init__(self, update_region: _Optional[_Union[Rectangle, _Mapping]] = ..., data: _Optional[bytes] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class Rectangle(_message.Message):
    __slots__ = ("min", "max")
    MIN_FIELD_NUMBER: _ClassVar[int]
    MAX_FIELD_NUMBER: _ClassVar[int]
    min: Point2D
    max: Point2D
    def __init__(self, min: _Optional[_Union[Point2D, _Mapping]] = ..., max: _Optional[_Union[Point2D, _Mapping]] = ...) -> None: ...

class GetPositionRequest(_message.Message):
    __slots__ = ("robot_id", "frame_id")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    FRAME_ID_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    frame_id: str
    def __init__(self, robot_id: _Optional[str] = ..., frame_id: _Optional[str] = ...) -> None: ...

class SetPositionRequest(_message.Message):
    __slots__ = ("robot_id", "pose", "frame_id")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    POSE_FIELD_NUMBER: _ClassVar[int]
    FRAME_ID_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    pose: PoseWithCovariance
    frame_id: str
    def __init__(self, robot_id: _Optional[str] = ..., pose: _Optional[_Union[PoseWithCovariance, _Mapping]] = ..., frame_id: _Optional[str] = ...) -> None: ...

class StreamPositionRequest(_message.Message):
    __slots__ = ("robot_id", "frame_id", "frequency_hz")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    FRAME_ID_FIELD_NUMBER: _ClassVar[int]
    FREQUENCY_HZ_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    frame_id: str
    frequency_hz: int
    def __init__(self, robot_id: _Optional[str] = ..., frame_id: _Optional[str] = ..., frequency_hz: _Optional[int] = ...) -> None: ...

class PositionResponse(_message.Message):
    __slots__ = ("success", "message", "pose", "timestamp")
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    POSE_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    success: bool
    message: str
    pose: PoseWithCovariance
    timestamp: _timestamp_pb2.Timestamp
    def __init__(self, success: bool = ..., message: _Optional[str] = ..., pose: _Optional[_Union[PoseWithCovariance, _Mapping]] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class PositionUpdate(_message.Message):
    __slots__ = ("robot_id", "pose", "velocity", "frame_id", "timestamp", "quality")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    POSE_FIELD_NUMBER: _ClassVar[int]
    VELOCITY_FIELD_NUMBER: _ClassVar[int]
    FRAME_ID_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    QUALITY_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    pose: PoseWithCovariance
    velocity: Twist
    frame_id: str
    timestamp: _timestamp_pb2.Timestamp
    quality: LocalizationQuality
    def __init__(self, robot_id: _Optional[str] = ..., pose: _Optional[_Union[PoseWithCovariance, _Mapping]] = ..., velocity: _Optional[_Union[Twist, _Mapping]] = ..., frame_id: _Optional[str] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., quality: _Optional[_Union[LocalizationQuality, _Mapping]] = ...) -> None: ...

class Pose(_message.Message):
    __slots__ = ("position", "orientation")
    POSITION_FIELD_NUMBER: _ClassVar[int]
    ORIENTATION_FIELD_NUMBER: _ClassVar[int]
    position: Point3D
    orientation: Quaternion
    def __init__(self, position: _Optional[_Union[Point3D, _Mapping]] = ..., orientation: _Optional[_Union[Quaternion, _Mapping]] = ...) -> None: ...

class PoseWithCovariance(_message.Message):
    __slots__ = ("pose", "covariance")
    POSE_FIELD_NUMBER: _ClassVar[int]
    COVARIANCE_FIELD_NUMBER: _ClassVar[int]
    pose: Pose
    covariance: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, pose: _Optional[_Union[Pose, _Mapping]] = ..., covariance: _Optional[_Iterable[float]] = ...) -> None: ...

class Point2D(_message.Message):
    __slots__ = ("x", "y")
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    x: float
    y: float
    def __init__(self, x: _Optional[float] = ..., y: _Optional[float] = ...) -> None: ...

class Point3D(_message.Message):
    __slots__ = ("x", "y", "z")
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    Z_FIELD_NUMBER: _ClassVar[int]
    x: float
    y: float
    z: float
    def __init__(self, x: _Optional[float] = ..., y: _Optional[float] = ..., z: _Optional[float] = ...) -> None: ...

class Quaternion(_message.Message):
    __slots__ = ("x", "y", "z", "w")
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    Z_FIELD_NUMBER: _ClassVar[int]
    W_FIELD_NUMBER: _ClassVar[int]
    x: float
    y: float
    z: float
    w: float
    def __init__(self, x: _Optional[float] = ..., y: _Optional[float] = ..., z: _Optional[float] = ..., w: _Optional[float] = ...) -> None: ...

class Twist(_message.Message):
    __slots__ = ("linear", "angular")
    LINEAR_FIELD_NUMBER: _ClassVar[int]
    ANGULAR_FIELD_NUMBER: _ClassVar[int]
    linear: Vector3
    angular: Vector3
    def __init__(self, linear: _Optional[_Union[Vector3, _Mapping]] = ..., angular: _Optional[_Union[Vector3, _Mapping]] = ...) -> None: ...

class Vector3(_message.Message):
    __slots__ = ("x", "y", "z")
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    Z_FIELD_NUMBER: _ClassVar[int]
    x: float
    y: float
    z: float
    def __init__(self, x: _Optional[float] = ..., y: _Optional[float] = ..., z: _Optional[float] = ...) -> None: ...

class VelocityCommand(_message.Message):
    __slots__ = ("robot_id", "cmd_vel", "timeout", "joystick_input", "safety", "control_mode")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    CMD_VEL_FIELD_NUMBER: _ClassVar[int]
    TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    JOYSTICK_INPUT_FIELD_NUMBER: _ClassVar[int]
    SAFETY_FIELD_NUMBER: _ClassVar[int]
    CONTROL_MODE_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    cmd_vel: Twist
    timeout: _duration_pb2.Duration
    joystick_input: JoystickInput
    safety: SafetyConstraints
    control_mode: ControlMode
    def __init__(self, robot_id: _Optional[str] = ..., cmd_vel: _Optional[_Union[Twist, _Mapping]] = ..., timeout: _Optional[_Union[datetime.timedelta, _duration_pb2.Duration, _Mapping]] = ..., joystick_input: _Optional[_Union[JoystickInput, _Mapping]] = ..., safety: _Optional[_Union[SafetyConstraints, _Mapping]] = ..., control_mode: _Optional[_Union[ControlMode, str]] = ...) -> None: ...

class JoystickInput(_message.Message):
    __slots__ = ("axes", "buttons", "timestamp", "controller_id")
    AXES_FIELD_NUMBER: _ClassVar[int]
    BUTTONS_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    CONTROLLER_ID_FIELD_NUMBER: _ClassVar[int]
    axes: _containers.RepeatedScalarFieldContainer[float]
    buttons: _containers.RepeatedScalarFieldContainer[bool]
    timestamp: _timestamp_pb2.Timestamp
    controller_id: str
    def __init__(self, axes: _Optional[_Iterable[float]] = ..., buttons: _Optional[_Iterable[bool]] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., controller_id: _Optional[str] = ...) -> None: ...

class VelocityResponse(_message.Message):
    __slots__ = ("success", "message", "actual_velocity", "timestamp", "safety_violations")
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    ACTUAL_VELOCITY_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    SAFETY_VIOLATIONS_FIELD_NUMBER: _ClassVar[int]
    success: bool
    message: str
    actual_velocity: Twist
    timestamp: _timestamp_pb2.Timestamp
    safety_violations: _containers.RepeatedCompositeFieldContainer[SafetyViolation]
    def __init__(self, success: bool = ..., message: _Optional[str] = ..., actual_velocity: _Optional[_Union[Twist, _Mapping]] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., safety_violations: _Optional[_Iterable[_Union[SafetyViolation, _Mapping]]] = ...) -> None: ...

class StopMovementRequest(_message.Message):
    __slots__ = ("robot_id", "stop_type")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    STOP_TYPE_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    stop_type: EmergencyStopType
    def __init__(self, robot_id: _Optional[str] = ..., stop_type: _Optional[_Union[EmergencyStopType, str]] = ...) -> None: ...

class SafetyConstraints(_message.Message):
    __slots__ = ("max_linear_velocity", "max_angular_velocity", "max_acceleration", "obstacle_avoidance_enabled", "safety_margin", "forbidden_zones")
    MAX_LINEAR_VELOCITY_FIELD_NUMBER: _ClassVar[int]
    MAX_ANGULAR_VELOCITY_FIELD_NUMBER: _ClassVar[int]
    MAX_ACCELERATION_FIELD_NUMBER: _ClassVar[int]
    OBSTACLE_AVOIDANCE_ENABLED_FIELD_NUMBER: _ClassVar[int]
    SAFETY_MARGIN_FIELD_NUMBER: _ClassVar[int]
    FORBIDDEN_ZONES_FIELD_NUMBER: _ClassVar[int]
    max_linear_velocity: float
    max_angular_velocity: float
    max_acceleration: float
    obstacle_avoidance_enabled: bool
    safety_margin: float
    forbidden_zones: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, max_linear_velocity: _Optional[float] = ..., max_angular_velocity: _Optional[float] = ..., max_acceleration: _Optional[float] = ..., obstacle_avoidance_enabled: bool = ..., safety_margin: _Optional[float] = ..., forbidden_zones: _Optional[_Iterable[str]] = ...) -> None: ...

class SafetyViolation(_message.Message):
    __slots__ = ("type", "description", "severity", "detected_at")
    TYPE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    SEVERITY_FIELD_NUMBER: _ClassVar[int]
    DETECTED_AT_FIELD_NUMBER: _ClassVar[int]
    type: SafetyViolationType
    description: str
    severity: float
    detected_at: _timestamp_pb2.Timestamp
    def __init__(self, type: _Optional[_Union[SafetyViolationType, str]] = ..., description: _Optional[str] = ..., severity: _Optional[float] = ..., detected_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class NavigationGoal(_message.Message):
    __slots__ = ("robot_id", "goal_id", "target_pose", "frame_id", "options", "waypoints", "deadline")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    GOAL_ID_FIELD_NUMBER: _ClassVar[int]
    TARGET_POSE_FIELD_NUMBER: _ClassVar[int]
    FRAME_ID_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    WAYPOINTS_FIELD_NUMBER: _ClassVar[int]
    DEADLINE_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    goal_id: str
    target_pose: PoseWithCovariance
    frame_id: str
    options: NavigationOptions
    waypoints: _containers.RepeatedCompositeFieldContainer[Waypoint]
    deadline: _timestamp_pb2.Timestamp
    def __init__(self, robot_id: _Optional[str] = ..., goal_id: _Optional[str] = ..., target_pose: _Optional[_Union[PoseWithCovariance, _Mapping]] = ..., frame_id: _Optional[str] = ..., options: _Optional[_Union[NavigationOptions, _Mapping]] = ..., waypoints: _Optional[_Iterable[_Union[Waypoint, _Mapping]]] = ..., deadline: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class TrajectoryCommand(_message.Message):
    __slots__ = ("robot_id", "trajectory_id", "points", "options", "frame_id")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    TRAJECTORY_ID_FIELD_NUMBER: _ClassVar[int]
    POINTS_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    FRAME_ID_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    trajectory_id: str
    points: _containers.RepeatedCompositeFieldContainer[TrajectoryPoint]
    options: TrajectoryOptions
    frame_id: str
    def __init__(self, robot_id: _Optional[str] = ..., trajectory_id: _Optional[str] = ..., points: _Optional[_Iterable[_Union[TrajectoryPoint, _Mapping]]] = ..., options: _Optional[_Union[TrajectoryOptions, _Mapping]] = ..., frame_id: _Optional[str] = ...) -> None: ...

class Waypoint(_message.Message):
    __slots__ = ("waypoint_id", "pose", "type", "max_duration_at_waypoint", "actions")
    WAYPOINT_ID_FIELD_NUMBER: _ClassVar[int]
    POSE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    MAX_DURATION_AT_WAYPOINT_FIELD_NUMBER: _ClassVar[int]
    ACTIONS_FIELD_NUMBER: _ClassVar[int]
    waypoint_id: str
    pose: PoseWithCovariance
    type: WaypointType
    max_duration_at_waypoint: _duration_pb2.Duration
    actions: _containers.RepeatedCompositeFieldContainer[WaypointAction]
    def __init__(self, waypoint_id: _Optional[str] = ..., pose: _Optional[_Union[PoseWithCovariance, _Mapping]] = ..., type: _Optional[_Union[WaypointType, str]] = ..., max_duration_at_waypoint: _Optional[_Union[datetime.timedelta, _duration_pb2.Duration, _Mapping]] = ..., actions: _Optional[_Iterable[_Union[WaypointAction, _Mapping]]] = ...) -> None: ...

class TrajectoryPoint(_message.Message):
    __slots__ = ("pose", "velocity", "time_from_start", "accelerations")
    POSE_FIELD_NUMBER: _ClassVar[int]
    VELOCITY_FIELD_NUMBER: _ClassVar[int]
    TIME_FROM_START_FIELD_NUMBER: _ClassVar[int]
    ACCELERATIONS_FIELD_NUMBER: _ClassVar[int]
    pose: Pose
    velocity: Twist
    time_from_start: _timestamp_pb2.Timestamp
    accelerations: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, pose: _Optional[_Union[Pose, _Mapping]] = ..., velocity: _Optional[_Union[Twist, _Mapping]] = ..., time_from_start: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., accelerations: _Optional[_Iterable[float]] = ...) -> None: ...

class NavigationOptions(_message.Message):
    __slots__ = ("planner", "tolerance_linear", "tolerance_angular", "use_obstacle_avoidance", "avoid_zones", "behavior", "max_planning_time_ms", "max_retries")
    PLANNER_FIELD_NUMBER: _ClassVar[int]
    TOLERANCE_LINEAR_FIELD_NUMBER: _ClassVar[int]
    TOLERANCE_ANGULAR_FIELD_NUMBER: _ClassVar[int]
    USE_OBSTACLE_AVOIDANCE_FIELD_NUMBER: _ClassVar[int]
    AVOID_ZONES_FIELD_NUMBER: _ClassVar[int]
    BEHAVIOR_FIELD_NUMBER: _ClassVar[int]
    MAX_PLANNING_TIME_MS_FIELD_NUMBER: _ClassVar[int]
    MAX_RETRIES_FIELD_NUMBER: _ClassVar[int]
    planner: PlannerType
    tolerance_linear: float
    tolerance_angular: float
    use_obstacle_avoidance: bool
    avoid_zones: _containers.RepeatedScalarFieldContainer[str]
    behavior: NavigationBehavior
    max_planning_time_ms: int
    max_retries: int
    def __init__(self, planner: _Optional[_Union[PlannerType, str]] = ..., tolerance_linear: _Optional[float] = ..., tolerance_angular: _Optional[float] = ..., use_obstacle_avoidance: bool = ..., avoid_zones: _Optional[_Iterable[str]] = ..., behavior: _Optional[_Union[NavigationBehavior, str]] = ..., max_planning_time_ms: _Optional[int] = ..., max_retries: _Optional[int] = ...) -> None: ...

class TrajectoryOptions(_message.Message):
    __slots__ = ("interpolate_path", "velocity_scaling", "check_collisions", "execution_mode")
    INTERPOLATE_PATH_FIELD_NUMBER: _ClassVar[int]
    VELOCITY_SCALING_FIELD_NUMBER: _ClassVar[int]
    CHECK_COLLISIONS_FIELD_NUMBER: _ClassVar[int]
    EXECUTION_MODE_FIELD_NUMBER: _ClassVar[int]
    interpolate_path: bool
    velocity_scaling: float
    check_collisions: bool
    execution_mode: TrajectoryExecutionMode
    def __init__(self, interpolate_path: bool = ..., velocity_scaling: _Optional[float] = ..., check_collisions: bool = ..., execution_mode: _Optional[_Union[TrajectoryExecutionMode, str]] = ...) -> None: ...

class WaypointAction(_message.Message):
    __slots__ = ("type", "duration", "parameters")
    class ParametersEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    TYPE_FIELD_NUMBER: _ClassVar[int]
    DURATION_FIELD_NUMBER: _ClassVar[int]
    PARAMETERS_FIELD_NUMBER: _ClassVar[int]
    type: WaypointActionType
    duration: _duration_pb2.Duration
    parameters: _containers.ScalarMap[str, str]
    def __init__(self, type: _Optional[_Union[WaypointActionType, str]] = ..., duration: _Optional[_Union[datetime.timedelta, _duration_pb2.Duration, _Mapping]] = ..., parameters: _Optional[_Mapping[str, str]] = ...) -> None: ...

class CancelGoalRequest(_message.Message):
    __slots__ = ("robot_id", "goal_id")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    GOAL_ID_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    goal_id: str
    def __init__(self, robot_id: _Optional[str] = ..., goal_id: _Optional[str] = ...) -> None: ...

class GetNavigationStatusRequest(_message.Message):
    __slots__ = ("robot_id",)
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    def __init__(self, robot_id: _Optional[str] = ...) -> None: ...

class StreamNavigationStatusRequest(_message.Message):
    __slots__ = ("robot_id", "frequency_hz")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    FREQUENCY_HZ_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    frequency_hz: int
    def __init__(self, robot_id: _Optional[str] = ..., frequency_hz: _Optional[int] = ...) -> None: ...

class NavigationResponse(_message.Message):
    __slots__ = ("success", "message", "goal_id", "result", "timestamp")
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    GOAL_ID_FIELD_NUMBER: _ClassVar[int]
    RESULT_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    success: bool
    message: str
    goal_id: str
    result: NavigationResult
    timestamp: _timestamp_pb2.Timestamp
    def __init__(self, success: bool = ..., message: _Optional[str] = ..., goal_id: _Optional[str] = ..., result: _Optional[_Union[NavigationResult, str]] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class NavigationStatusResponse(_message.Message):
    __slots__ = ("status", "progress", "current_goal", "errors", "timestamp")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    PROGRESS_FIELD_NUMBER: _ClassVar[int]
    CURRENT_GOAL_FIELD_NUMBER: _ClassVar[int]
    ERRORS_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    status: NavigationStatus
    progress: NavigationProgress
    current_goal: NavigationGoal
    errors: _containers.RepeatedCompositeFieldContainer[NavigationError]
    timestamp: _timestamp_pb2.Timestamp
    def __init__(self, status: _Optional[_Union[NavigationStatus, str]] = ..., progress: _Optional[_Union[NavigationProgress, _Mapping]] = ..., current_goal: _Optional[_Union[NavigationGoal, _Mapping]] = ..., errors: _Optional[_Iterable[_Union[NavigationError, _Mapping]]] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class NavigationStatusUpdate(_message.Message):
    __slots__ = ("robot_id", "status", "progress", "timestamp", "error")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    PROGRESS_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    status: NavigationStatus
    progress: NavigationProgress
    timestamp: _timestamp_pb2.Timestamp
    error: NavigationError
    def __init__(self, robot_id: _Optional[str] = ..., status: _Optional[_Union[NavigationStatus, str]] = ..., progress: _Optional[_Union[NavigationProgress, _Mapping]] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., error: _Optional[_Union[NavigationError, _Mapping]] = ...) -> None: ...

class NavigationProgress(_message.Message):
    __slots__ = ("distance_remaining", "distance_traveled", "time_remaining", "time_elapsed", "current_waypoint_index", "total_waypoints", "completion_percentage")
    DISTANCE_REMAINING_FIELD_NUMBER: _ClassVar[int]
    DISTANCE_TRAVELED_FIELD_NUMBER: _ClassVar[int]
    TIME_REMAINING_FIELD_NUMBER: _ClassVar[int]
    TIME_ELAPSED_FIELD_NUMBER: _ClassVar[int]
    CURRENT_WAYPOINT_INDEX_FIELD_NUMBER: _ClassVar[int]
    TOTAL_WAYPOINTS_FIELD_NUMBER: _ClassVar[int]
    COMPLETION_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    distance_remaining: float
    distance_traveled: float
    time_remaining: _duration_pb2.Duration
    time_elapsed: _duration_pb2.Duration
    current_waypoint_index: int
    total_waypoints: int
    completion_percentage: float
    def __init__(self, distance_remaining: _Optional[float] = ..., distance_traveled: _Optional[float] = ..., time_remaining: _Optional[_Union[datetime.timedelta, _duration_pb2.Duration, _Mapping]] = ..., time_elapsed: _Optional[_Union[datetime.timedelta, _duration_pb2.Duration, _Mapping]] = ..., current_waypoint_index: _Optional[int] = ..., total_waypoints: _Optional[int] = ..., completion_percentage: _Optional[float] = ...) -> None: ...

class NavigationError(_message.Message):
    __slots__ = ("code", "description", "occurred_at", "recoverable", "suggested_actions")
    CODE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    OCCURRED_AT_FIELD_NUMBER: _ClassVar[int]
    RECOVERABLE_FIELD_NUMBER: _ClassVar[int]
    SUGGESTED_ACTIONS_FIELD_NUMBER: _ClassVar[int]
    code: NavigationErrorCode
    description: str
    occurred_at: _timestamp_pb2.Timestamp
    recoverable: bool
    suggested_actions: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, code: _Optional[_Union[NavigationErrorCode, str]] = ..., description: _Optional[str] = ..., occurred_at: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., recoverable: bool = ..., suggested_actions: _Optional[_Iterable[str]] = ...) -> None: ...

class GetCameraInfoRequest(_message.Message):
    __slots__ = ("robot_id", "camera_id")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    CAMERA_ID_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    camera_id: str
    def __init__(self, robot_id: _Optional[str] = ..., camera_id: _Optional[str] = ...) -> None: ...

class StreamVideoRequest(_message.Message):
    __slots__ = ("robot_id", "camera_id", "options")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    CAMERA_ID_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    camera_id: str
    options: VideoStreamOptions
    def __init__(self, robot_id: _Optional[str] = ..., camera_id: _Optional[str] = ..., options: _Optional[_Union[VideoStreamOptions, _Mapping]] = ...) -> None: ...

class CameraControlRequest(_message.Message):
    __slots__ = ("robot_id", "camera_id", "command")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    CAMERA_ID_FIELD_NUMBER: _ClassVar[int]
    COMMAND_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    camera_id: str
    command: CameraControlCommand
    def __init__(self, robot_id: _Optional[str] = ..., camera_id: _Optional[str] = ..., command: _Optional[_Union[CameraControlCommand, _Mapping]] = ...) -> None: ...

class CameraInfoResponse(_message.Message):
    __slots__ = ("success", "message", "cameras", "timestamp")
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    CAMERAS_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    success: bool
    message: str
    cameras: _containers.RepeatedCompositeFieldContainer[CameraInfo]
    timestamp: _timestamp_pb2.Timestamp
    def __init__(self, success: bool = ..., message: _Optional[str] = ..., cameras: _Optional[_Iterable[_Union[CameraInfo, _Mapping]]] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class CameraInfo(_message.Message):
    __slots__ = ("camera_id", "name", "type", "resolution", "framerate", "intrinsics", "distortion", "frame_id", "status", "supported_formats")
    CAMERA_ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    RESOLUTION_FIELD_NUMBER: _ClassVar[int]
    FRAMERATE_FIELD_NUMBER: _ClassVar[int]
    INTRINSICS_FIELD_NUMBER: _ClassVar[int]
    DISTORTION_FIELD_NUMBER: _ClassVar[int]
    FRAME_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    SUPPORTED_FORMATS_FIELD_NUMBER: _ClassVar[int]
    camera_id: str
    name: str
    type: CameraType
    resolution: Resolution
    framerate: float
    intrinsics: CameraIntrinsics
    distortion: CameraDistortion
    frame_id: str
    status: CameraStatus
    supported_formats: _containers.RepeatedScalarFieldContainer[VideoFormat]
    def __init__(self, camera_id: _Optional[str] = ..., name: _Optional[str] = ..., type: _Optional[_Union[CameraType, str]] = ..., resolution: _Optional[_Union[Resolution, _Mapping]] = ..., framerate: _Optional[float] = ..., intrinsics: _Optional[_Union[CameraIntrinsics, _Mapping]] = ..., distortion: _Optional[_Union[CameraDistortion, _Mapping]] = ..., frame_id: _Optional[str] = ..., status: _Optional[_Union[CameraStatus, str]] = ..., supported_formats: _Optional[_Iterable[_Union[VideoFormat, str]]] = ...) -> None: ...

class VideoFrame(_message.Message):
    __slots__ = ("camera_id", "image_data", "format", "resolution", "timestamp", "frame_number", "metadata")
    CAMERA_ID_FIELD_NUMBER: _ClassVar[int]
    IMAGE_DATA_FIELD_NUMBER: _ClassVar[int]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    RESOLUTION_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    FRAME_NUMBER_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    camera_id: str
    image_data: bytes
    format: VideoFormat
    resolution: Resolution
    timestamp: _timestamp_pb2.Timestamp
    frame_number: int
    metadata: FrameMetadata
    def __init__(self, camera_id: _Optional[str] = ..., image_data: _Optional[bytes] = ..., format: _Optional[_Union[VideoFormat, str]] = ..., resolution: _Optional[_Union[Resolution, _Mapping]] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., frame_number: _Optional[int] = ..., metadata: _Optional[_Union[FrameMetadata, _Mapping]] = ...) -> None: ...

class VideoStreamOptions(_message.Message):
    __slots__ = ("format", "resolution", "framerate", "quality", "enable_compression", "overlays")
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    RESOLUTION_FIELD_NUMBER: _ClassVar[int]
    FRAMERATE_FIELD_NUMBER: _ClassVar[int]
    QUALITY_FIELD_NUMBER: _ClassVar[int]
    ENABLE_COMPRESSION_FIELD_NUMBER: _ClassVar[int]
    OVERLAYS_FIELD_NUMBER: _ClassVar[int]
    format: VideoFormat
    resolution: Resolution
    framerate: int
    quality: VideoQuality
    enable_compression: bool
    overlays: _containers.RepeatedScalarFieldContainer[OverlayType]
    def __init__(self, format: _Optional[_Union[VideoFormat, str]] = ..., resolution: _Optional[_Union[Resolution, _Mapping]] = ..., framerate: _Optional[int] = ..., quality: _Optional[_Union[VideoQuality, str]] = ..., enable_compression: bool = ..., overlays: _Optional[_Iterable[_Union[OverlayType, str]]] = ...) -> None: ...

class CameraControlCommand(_message.Message):
    __slots__ = ("type", "parameters")
    class ParametersEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    TYPE_FIELD_NUMBER: _ClassVar[int]
    PARAMETERS_FIELD_NUMBER: _ClassVar[int]
    type: CameraControlType
    parameters: _containers.ScalarMap[str, float]
    def __init__(self, type: _Optional[_Union[CameraControlType, str]] = ..., parameters: _Optional[_Mapping[str, float]] = ...) -> None: ...

class CameraControlResponse(_message.Message):
    __slots__ = ("success", "message", "current_settings", "timestamp")
    class CurrentSettingsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: float
        def __init__(self, key: _Optional[str] = ..., value: _Optional[float] = ...) -> None: ...
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    CURRENT_SETTINGS_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    success: bool
    message: str
    current_settings: _containers.ScalarMap[str, float]
    timestamp: _timestamp_pb2.Timestamp
    def __init__(self, success: bool = ..., message: _Optional[str] = ..., current_settings: _Optional[_Mapping[str, float]] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class Resolution(_message.Message):
    __slots__ = ("width", "height")
    WIDTH_FIELD_NUMBER: _ClassVar[int]
    HEIGHT_FIELD_NUMBER: _ClassVar[int]
    width: int
    height: int
    def __init__(self, width: _Optional[int] = ..., height: _Optional[int] = ...) -> None: ...

class CameraIntrinsics(_message.Message):
    __slots__ = ("focal_length_x", "focal_length_y", "principal_point_x", "principal_point_y", "camera_matrix")
    FOCAL_LENGTH_X_FIELD_NUMBER: _ClassVar[int]
    FOCAL_LENGTH_Y_FIELD_NUMBER: _ClassVar[int]
    PRINCIPAL_POINT_X_FIELD_NUMBER: _ClassVar[int]
    PRINCIPAL_POINT_Y_FIELD_NUMBER: _ClassVar[int]
    CAMERA_MATRIX_FIELD_NUMBER: _ClassVar[int]
    focal_length_x: float
    focal_length_y: float
    principal_point_x: float
    principal_point_y: float
    camera_matrix: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, focal_length_x: _Optional[float] = ..., focal_length_y: _Optional[float] = ..., principal_point_x: _Optional[float] = ..., principal_point_y: _Optional[float] = ..., camera_matrix: _Optional[_Iterable[float]] = ...) -> None: ...

class CameraDistortion(_message.Message):
    __slots__ = ("model", "coefficients")
    MODEL_FIELD_NUMBER: _ClassVar[int]
    COEFFICIENTS_FIELD_NUMBER: _ClassVar[int]
    model: DistortionModel
    coefficients: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, model: _Optional[_Union[DistortionModel, str]] = ..., coefficients: _Optional[_Iterable[float]] = ...) -> None: ...

class FrameMetadata(_message.Message):
    __slots__ = ("exposure_time", "gain", "white_balance", "capture_time", "camera_pose")
    EXPOSURE_TIME_FIELD_NUMBER: _ClassVar[int]
    GAIN_FIELD_NUMBER: _ClassVar[int]
    WHITE_BALANCE_FIELD_NUMBER: _ClassVar[int]
    CAPTURE_TIME_FIELD_NUMBER: _ClassVar[int]
    CAMERA_POSE_FIELD_NUMBER: _ClassVar[int]
    exposure_time: float
    gain: float
    white_balance: float
    capture_time: _timestamp_pb2.Timestamp
    camera_pose: Pose
    def __init__(self, exposure_time: _Optional[float] = ..., gain: _Optional[float] = ..., white_balance: _Optional[float] = ..., capture_time: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ..., camera_pose: _Optional[_Union[Pose, _Mapping]] = ...) -> None: ...

class GetLocalizationStatusRequest(_message.Message):
    __slots__ = ("robot_id",)
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    def __init__(self, robot_id: _Optional[str] = ...) -> None: ...

class InitializeLocalizationRequest(_message.Message):
    __slots__ = ("robot_id", "initial_pose", "method", "parameters")
    class ParametersEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    INITIAL_POSE_FIELD_NUMBER: _ClassVar[int]
    METHOD_FIELD_NUMBER: _ClassVar[int]
    PARAMETERS_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    initial_pose: PoseWithCovariance
    method: LocalizationMethod
    parameters: _containers.ScalarMap[str, str]
    def __init__(self, robot_id: _Optional[str] = ..., initial_pose: _Optional[_Union[PoseWithCovariance, _Mapping]] = ..., method: _Optional[_Union[LocalizationMethod, str]] = ..., parameters: _Optional[_Mapping[str, str]] = ...) -> None: ...

class ResetLocalizationRequest(_message.Message):
    __slots__ = ("robot_id", "clear_map")
    ROBOT_ID_FIELD_NUMBER: _ClassVar[int]
    CLEAR_MAP_FIELD_NUMBER: _ClassVar[int]
    robot_id: str
    clear_map: bool
    def __init__(self, robot_id: _Optional[str] = ..., clear_map: bool = ...) -> None: ...

class LocalizationStatusResponse(_message.Message):
    __slots__ = ("status", "quality", "current_pose", "method", "metrics", "timestamp")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    QUALITY_FIELD_NUMBER: _ClassVar[int]
    CURRENT_POSE_FIELD_NUMBER: _ClassVar[int]
    METHOD_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    status: LocalizationStatus
    quality: LocalizationQuality
    current_pose: PoseWithCovariance
    method: LocalizationMethod
    metrics: LocalizationMetrics
    timestamp: _timestamp_pb2.Timestamp
    def __init__(self, status: _Optional[_Union[LocalizationStatus, str]] = ..., quality: _Optional[_Union[LocalizationQuality, _Mapping]] = ..., current_pose: _Optional[_Union[PoseWithCovariance, _Mapping]] = ..., method: _Optional[_Union[LocalizationMethod, str]] = ..., metrics: _Optional[_Union[LocalizationMetrics, _Mapping]] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class LocalizationResponse(_message.Message):
    __slots__ = ("success", "message", "status", "timestamp")
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TIMESTAMP_FIELD_NUMBER: _ClassVar[int]
    success: bool
    message: str
    status: LocalizationStatus
    timestamp: _timestamp_pb2.Timestamp
    def __init__(self, success: bool = ..., message: _Optional[str] = ..., status: _Optional[_Union[LocalizationStatus, str]] = ..., timestamp: _Optional[_Union[datetime.datetime, _timestamp_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class LocalizationQuality(_message.Message):
    __slots__ = ("confidence", "position_uncertainty", "orientation_uncertainty", "matched_features", "drift_estimate", "health")
    CONFIDENCE_FIELD_NUMBER: _ClassVar[int]
    POSITION_UNCERTAINTY_FIELD_NUMBER: _ClassVar[int]
    ORIENTATION_UNCERTAINTY_FIELD_NUMBER: _ClassVar[int]
    MATCHED_FEATURES_FIELD_NUMBER: _ClassVar[int]
    DRIFT_ESTIMATE_FIELD_NUMBER: _ClassVar[int]
    HEALTH_FIELD_NUMBER: _ClassVar[int]
    confidence: float
    position_uncertainty: float
    orientation_uncertainty: float
    matched_features: int
    drift_estimate: float
    health: LocalizationHealth
    def __init__(self, confidence: _Optional[float] = ..., position_uncertainty: _Optional[float] = ..., orientation_uncertainty: _Optional[float] = ..., matched_features: _Optional[int] = ..., drift_estimate: _Optional[float] = ..., health: _Optional[_Union[LocalizationHealth, str]] = ...) -> None: ...

class LocalizationMetrics(_message.Message):
    __slots__ = ("particle_count", "effective_sample_size", "convergence_rate", "update_frequency", "sensor_updates_count", "map_match_score")
    PARTICLE_COUNT_FIELD_NUMBER: _ClassVar[int]
    EFFECTIVE_SAMPLE_SIZE_FIELD_NUMBER: _ClassVar[int]
    CONVERGENCE_RATE_FIELD_NUMBER: _ClassVar[int]
    UPDATE_FREQUENCY_FIELD_NUMBER: _ClassVar[int]
    SENSOR_UPDATES_COUNT_FIELD_NUMBER: _ClassVar[int]
    MAP_MATCH_SCORE_FIELD_NUMBER: _ClassVar[int]
    particle_count: int
    effective_sample_size: float
    convergence_rate: float
    update_frequency: _duration_pb2.Duration
    sensor_updates_count: int
    map_match_score: float
    def __init__(self, particle_count: _Optional[int] = ..., effective_sample_size: _Optional[float] = ..., convergence_rate: _Optional[float] = ..., update_frequency: _Optional[_Union[datetime.timedelta, _duration_pb2.Duration, _Mapping]] = ..., sensor_updates_count: _Optional[int] = ..., map_match_score: _Optional[float] = ...) -> None: ...

import { IObject } from "@daybrush/utils";
import {
    DraggableEvents, ResizableEvents,
    ScalableEvents, RotatableEvents, DraggableOptions,
    ResizableOptions, ScalableOptions, RotatableOptions, WarpableOptions,
    WarpableEvents, GroupableOptions, SnappableEvents, SnappableOptions,
    RenderableEvents, ClickableEvents, RoundableEvents, RoundableOptions,
    ClippableOptions, ClippableEvents, OriginDraggableEvents,
    DefaultOptions,
    DragAreaOptions, PinchableOptions, PinchableEvents, ScrollableEvents,
    ScrollableOptions, MoveableProps, ScrollableProps, PinchableProps, DragAreaProps,
    OriginDraggableProps, ClippableProps, RoundableProps, SnappableProps, WarpableProps,
    RotatableProps, ScalableProps, ResizableProps, DraggableProps, OriginOptions,
    PaddingOptions, GroupableProps, ExcludeKey, OriginDraggableOptions, MoveableOptions, MoveableEvents, BeforeRenderableEvents
} from "../../src/react-moveable";
import Draggable from "../../src/react-moveable/ables/Draggable";
import Resizable from "../../src/react-moveable/ables/Resizable";
import Scalable from "../../src/react-moveable/ables/Scalable";
import Rotatable from "../../src/react-moveable/ables/Rotatable";
import Warpable from "../../src/react-moveable/ables/Warpable";
import Groupable from "../../src/react-moveable/ables/Groupable";
import Snappable from "../../src/react-moveable/ables/Snappable";
import Default from "../../src/react-moveable/ables/Default";
import DragArea from "../../src/react-moveable/ables/DragArea";
import Roundable from "../../src/react-moveable/ables/Roundable";
import Clippable from "../../src/react-moveable/ables/Clippable";
import OriginDraggable from "../../src/react-moveable/ables/OriginDraggable";
import Pinchable from "../../src/react-moveable/ables/Pinchable";
import Scrollable from "../../src/react-moveable/ables/Scrollable";
import { MOVEABLE_PROPS_MAP, MOVEABLE_EVENTS_PROPS_MAP } from "../../src/react-moveable/ables/consts";
import Origin from "../../src/react-moveable/ables/Origin";
import Padding from "../../src/react-moveable/ables/Padding";
import Renderable from "../../src/react-moveable/ables/Renderable";
import BeforeRenderable from "../../src/react-moveable/ables/BeforeRenderable";
import Clickable from "../../src/react-moveable/ables/Clickable";

type MatchTypes<
    T extends { [key in keyof Required<E>]: any },
    E extends IObject<any>,
    > = {
        [key in keyof Required<E>]: Required<T>[key]
    };
type Writable<T> = { -readonly [key in keyof T]: any };

export type P00 = MatchTypes<typeof Default["props"], DefaultOptions>;
export type P01 = MatchTypes<typeof DragArea["props"], DragAreaOptions>;
export type P02 = MatchTypes<typeof Origin["props"], OriginOptions>;
export type P03 = MatchTypes<typeof Padding["props"], PaddingOptions>;

export type E1 = MatchTypes<typeof Draggable["events"], DraggableEvents>;
export type P1 = MatchTypes<typeof Draggable["props"], DraggableOptions>;
export type PP1 = MatchTypes<typeof Draggable["events"] & typeof Draggable["props"], DraggableProps>;

export type E2 = MatchTypes<typeof Clickable["events"], ClickableEvents>;
export type P2 = MatchTypes<typeof DragArea["props"], DragAreaOptions>;
export type PP2 = MatchTypes<typeof DragArea["events"] & typeof DragArea["props"], DragAreaProps>;

export type E3 = MatchTypes<typeof OriginDraggable["events"], OriginDraggableEvents>;
export type P3 = MatchTypes<typeof OriginDraggable["props"], OriginDraggableOptions>;
export type PP3 = MatchTypes<typeof OriginDraggable["props"] & typeof OriginDraggable["events"], OriginDraggableProps>;

export type E4 = MatchTypes<typeof Rotatable["events"], RotatableEvents>;
export type P4 = MatchTypes<typeof Rotatable["props"], RotatableOptions>;
export type PP4 = MatchTypes<typeof Rotatable["events"] & typeof Rotatable["props"], RotatableProps>;

export type E6 = MatchTypes<typeof Resizable["events"], ResizableEvents>;
export type P6 = MatchTypes<typeof Resizable["props"], ResizableOptions>;
export type PP6 = MatchTypes<typeof Resizable["events"] & typeof Resizable["props"], ResizableProps>;

export type E7 = MatchTypes<typeof Scalable["events"], ScalableEvents>;
export type P7 = MatchTypes<typeof Scalable["props"], ScalableOptions>;
export type PP7 = MatchTypes<typeof Scalable["events"] & typeof Scalable["props"], ScalableProps>;

export type E8 = MatchTypes<typeof Warpable["events"], WarpableEvents>;
export type P8 = MatchTypes<typeof Warpable["props"], WarpableOptions>;
export type PP8 = MatchTypes<typeof Warpable["events"] & typeof Warpable["props"], WarpableProps>;

export type E9 = MatchTypes<typeof Pinchable["events"], PinchableEvents>;
export type P9 = MatchTypes<typeof Pinchable["props"], PinchableOptions>;
export type PP9 = MatchTypes<
    typeof Resizable["events"]
    & typeof Resizable["props"]
    & typeof Draggable["events"]
    & typeof Draggable["props"]
    & typeof Scalable["events"]
    & typeof Scalable["props"]
    & typeof Rotatable["events"]
    & typeof Rotatable["props"]
    & typeof Pinchable["events"]
    & typeof Pinchable["props"]
    & typeof Pinchable["events"]
    & typeof Pinchable["props"], PinchableProps>;

export type P10 = MatchTypes<typeof Groupable["props"], GroupableOptions>;
export type PP10 = MatchTypes<typeof Groupable["props"], ExcludeKey<GroupableProps, "targets" | "updateGroup">>;

export type E11 = MatchTypes<typeof Snappable["events"], SnappableEvents>;
export type P11 = MatchTypes<typeof Snappable["props"], SnappableOptions>;
export type PP11 = MatchTypes<typeof Snappable["events"] & typeof Snappable["props"], SnappableProps>;

export type E12 = MatchTypes<typeof Roundable["events"], RoundableEvents>;
export type P12 = MatchTypes<typeof Roundable["props"], RoundableOptions>;
export type PP12 = MatchTypes<typeof Roundable["events"] & typeof Roundable["props"], RoundableProps>;

export type E13 = MatchTypes<typeof Clippable["events"], ClippableEvents>;

export type P13
    = MatchTypes<typeof Clippable["props"], ClippableOptions>
    & MatchTypes<Required<ClippableOptions>, typeof Clippable["props"]>;
export type PP13 = MatchTypes<typeof Clippable["events"] & typeof Clippable["props"], ClippableProps>;

export type E14 = MatchTypes<typeof Default["events"], {}>;

export type E15 = MatchTypes<typeof Scrollable["events"], ScrollableEvents>;

export type P15
    = MatchTypes<typeof Scrollable["props"], ScrollableOptions>
    & MatchTypes<Required<ScrollableOptions>, typeof Scrollable["props"]>;
export type PP15 = MatchTypes<typeof Scrollable["events"] & typeof Scrollable["props"], ScrollableProps>;

export type E16 = MatchTypes<typeof Renderable["events"], RenderableEvents>;

export type E17 = MatchTypes<typeof BeforeRenderable["events"], BeforeRenderableEvents>;

export type PAll = MatchTypes<typeof MOVEABLE_PROPS_MAP & typeof MOVEABLE_EVENTS_PROPS_MAP, MoveableProps>;
export type PAllOptions = MatchTypes<typeof MOVEABLE_PROPS_MAP, MoveableOptions>;
export type PAllOptions2 = MatchTypes<Required<MoveableOptions>, typeof MOVEABLE_PROPS_MAP>;

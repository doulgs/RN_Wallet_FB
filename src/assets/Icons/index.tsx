import React, { useState } from "react";

import Clipboard from "./clipboard-text-light.svg";
import ClipboardFill from "./clipboard-text-fill.svg";
import Export from "./export-fill.svg";
import GearFill from "./gear-fill.svg";
import Gear from "./gear-light.svg";
import Import from "./import-fill.svg";
import Send from "./paper-plane-tilt-light.svg";
import QRcodeFill from "./qr-code-fill.svg";
import QRcode from "./qr-code-light.svg";
import Shopping from "./shopping-cart-fill.svg";
import TicketFill from "./ticket-fill.svg";
import Ticket from "./ticket-light.svg";
import HomeFill from "./home-fill.svg";
import Home from "./home-light.svg";
import Bell from "./bell-fill.svg";
import { SvgProps } from "react-native-svg";

interface InfoIcons extends SvgProps {
    name:
        | "Clipboard"
        | "ClipboardFill"
        | "HomeFill"
        | "Home"
        | "Export"
        | "GearFill"
        | "Gear"
        | "Import"
        | "Send"
        | "QRcodeFill"
        | "QRcode"
        | "Shopping"
        | "Bell"
        | "TicketFill"
        | "Ticket";
    size: number;
    color?: string;
    fill?: string;
}

const Icons: React.FC<InfoIcons> = ({ name, size, color, fill }) => {
    if (name === "Clipboard") {
        let NameIcon = Clipboard;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    } else if (name === "ClipboardFill") {
        let NameIcon = ClipboardFill;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    } else if (name === "Export") {
        let NameIcon = Export;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    } else if (name === "GearFill") {
        let NameIcon = GearFill;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    } else if (name === "Gear") {
        let NameIcon = Gear;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    } else if (name === "Import") {
        let NameIcon = Import;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    } else if (name === "Send") {
        let NameIcon = Send;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    } else if (name === "QRcodeFill") {
        let NameIcon = QRcodeFill;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    } else if (name === "QRcode") {
        let NameIcon = QRcode;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    } else if (name === "Shopping") {
        let NameIcon = Shopping;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    } else if (name === "TicketFill") {
        let NameIcon = TicketFill;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    } else if (name === "Ticket") {
        let NameIcon = Ticket;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    } else if (name === "Home") {
        let NameIcon = Home;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    } else if (name === "HomeFill") {
        let NameIcon = HomeFill;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    } else if (name === "Bell") {
        let NameIcon = Bell;
        return (
            <NameIcon width={size} height={size} fill={fill} color={color} />
        );
    }
    return null;
};

export default Icons;

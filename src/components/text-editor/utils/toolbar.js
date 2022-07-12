import bold from "../icons/bold.png";
import center from "../icons/center.png";
import color from "../icons/color.png";
import embedded from "../icons/embedded.png";
import emoji from "../icons/emoji.png";
import eraser from "../icons/eraser.png";
import image from "../icons/image.png";
import italic from "../icons/italic.png";
import justify from "../icons/justify.png";
import left from "../icons/left.png";
import link from "../icons/link.png";
import monospace from "../icons/monospace.png";
import ordered from "../icons/ordered.png";
import redo from "../icons/redo.png";
import right from "../icons/right.png";
import strikethrough from "../icons/strikethrough.png";
import subscript from "../icons/subscript.png";
import superscript from "../icons/superscript.png";
import underline from "../icons/underline.png";
import undo from "../icons/undo.png";
import unlink from "../icons/unlink.png";
import unordered from "../icons/unordered.png";

const hoverClass =
  "hover:shadow-none focus:shadow-none hover:border hover:border-black focus:border focus:border-black";
const btnClassName = "max-w-[32px] min-h-[32px] " + hoverClass;

const toolbar = {
  options: [
    "inline",
    "blockType",
    "fontSize",
    "fontFamily",
    "list",
    "textAlign",
    "colorPicker",
    "embedded",
    "remove",
    "history",
  ],
  inline: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "monospace",
      "superscript",
      "subscript",
    ],
    bold: {
      icon: bold,
      className: btnClassName,
    },
    italic: { icon: italic, className: btnClassName },
    underline: { icon: underline, className: btnClassName },
    strikethrough: {
      icon: strikethrough,
      className: btnClassName,
    },
    monospace: { icon: monospace, className: btnClassName },
    superscript: { icon: superscript, className: btnClassName },
    subscript: { icon: subscript, className: btnClassName },
  },
  blockType: {
    inDropdown: true,
    options: [
      "Normal",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "Blockquote",
      "Code",
    ],
    className: hoverClass,
    component: undefined,
    dropdownClassName: hoverClass + " overflow-auto",
  },
  fontSize: {
    icon: "fontSize",
    options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
    className: hoverClass,
    component: undefined,
    dropdownClassName: hoverClass + " overflow-auto",
  },
  fontFamily: {
    options: [
      "Arial",
      "Georgia",
      "Impact",
      "Tahoma",
      "Times New Roman",
      "Verdana",
    ],
    className: hoverClass,
    component: undefined,
    dropdownClassName: hoverClass + " overflow-auto",
  },
  list: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ["unordered", "ordered"],
    unordered: { icon: unordered, className: btnClassName },
    ordered: { icon: ordered, className: btnClassName },
  },
  textAlign: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ["left", "center", "right", "justify"],
    left: { icon: left, className: btnClassName },
    center: { icon: center, className: btnClassName },
    right: { icon: right, className: btnClassName },
    justify: { icon: justify, className: btnClassName },
  },
  colorPicker: {
    icon: color,
    className: btnClassName,
    component: undefined,
    popupClassName: undefined,
    colors: [
      "rgb(97,189,109)",
      "rgb(26,188,156)",
      "rgb(84,172,210)",
      "rgb(44,130,201)",
      "rgb(147,101,184)",
      "rgb(71,85,119)",
      "rgb(204,204,204)",
      "rgb(65,168,95)",
      "rgb(0,168,133)",
      "rgb(61,142,185)",
      "rgb(41,105,176)",
      "rgb(85,57,130)",
      "rgb(40,50,78)",
      "rgb(0,0,0)",
      "rgb(247,218,100)",
      "rgb(251,160,38)",
      "rgb(235,107,86)",
      "rgb(226,80,65)",
      "rgb(163,143,132)",
      "rgb(239,239,239)",
      "rgb(255,255,255)",
      "rgb(250,197,28)",
      "rgb(243,121,52)",
      "rgb(209,72,65)",
      "rgb(184,49,47)",
      "rgb(124,112,107)",
      "rgb(209,213,216)",
    ],
  },
  link: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    dropdownClassName: undefined,
    showOpenOptionOnHover: true,
    defaultTargetOption: "_self",
    options: ["link", "unlink"],
    link: { icon: link, className: btnClassName },
    unlink: { icon: unlink, className: btnClassName },
    linkCallback: undefined,
  },
  emoji: {
    icon: emoji,
    className: btnClassName,
    component: undefined,
    popupClassName: undefined,
    emojis: [
      "😀",
      "😁",
      "😂",
      "😃",
      "😉",
      "😋",
      "😎",
      "😍",
      "😗",
      "🤗",
      "🤔",
      "😣",
      "😫",
      "😴",
      "😌",
      "🤓",
      "😛",
      "😜",
      "😠",
      "😇",
      "😷",
      "😈",
      "👻",
      "😺",
      "😸",
      "😹",
      "😻",
      "😼",
      "😽",
      "🙀",
      "🙈",
      "🙉",
      "🙊",
      "👼",
      "👮",
      "🕵",
      "💂",
      "👳",
      "🎅",
      "👸",
      "👰",
      "👲",
      "🙍",
      "🙇",
      "🚶",
      "🏃",
      "💃",
      "⛷",
      "🏂",
      "🏌",
      "🏄",
      "🚣",
      "🏊",
      "⛹",
      "🏋",
      "🚴",
      "👫",
      "💪",
      "👈",
      "👉",
      "👉",
      "👆",
      "🖕",
      "👇",
      "🖖",
      "🤘",
      "🖐",
      "👌",
      "👍",
      "👎",
      "✊",
      "👊",
      "👏",
      "🙌",
      "🙏",
      "🐵",
      "🐶",
      "🐇",
      "🐥",
      "🐸",
      "🐌",
      "🐛",
      "🐜",
      "🐝",
      "🍉",
      "🍄",
      "🍔",
      "🍤",
      "🍨",
      "🍪",
      "🎂",
      "🍰",
      "🍾",
      "🍷",
      "🍸",
      "🍺",
      "🌍",
      "🚑",
      "⏰",
      "🌙",
      "🌝",
      "🌞",
      "⭐",
      "🌟",
      "🌠",
      "🌨",
      "🌩",
      "⛄",
      "🔥",
      "🎄",
      "🎈",
      "🎉",
      "🎊",
      "🎁",
      "🎗",
      "🏀",
      "🏈",
      "🎲",
      "🔇",
      "🔈",
      "📣",
      "🔔",
      "🎵",
      "🎷",
      "💰",
      "🖊",
      "📅",
      "✅",
      "❎",
      "💯",
    ],
  },
  embedded: {
    icon: embedded,
    className: btnClassName,
    component: undefined,
    popupClassName: undefined,
    embedCallback: undefined,
    defaultSize: {
      height: "auto",
      width: "auto",
    },
  },
  image: {
    icon: image,
    className: btnClassName,
    component: undefined,
    popupClassName: undefined,
    urlEnabled: true,
    uploadEnabled: true,
    alignmentEnabled: true,
    uploadCallback: undefined,
    previewImage: false,
    inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
    alt: { present: false, mandatory: false },
    defaultSize: {
      height: "auto",
      width: "auto",
    },
  },
  remove: {
    icon: eraser,
    className: btnClassName,
    component: undefined,
  },
  history: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ["undo", "redo"],
    undo: { icon: undo, className: btnClassName },
    redo: { icon: redo, className: btnClassName },
  },
};

export default toolbar;

// Canvas
const CANVAS = document.getElementById("myCanvas");
const CONTEXT = CANVAS.getContext("2d");
const COVER = document.getElementById("cover");

// Generation menu
const GENERATION_DRAWER = document.getElementById("generation-drawer");
const PLAY_BTN = document.getElementById("play-button");
const PAUSE_BTN = document.getElementById("pause-button");
const STEP_BTN = document.getElementById("step-button");
const RESET_BTN = document.getElementById("reset-button");
const SPEED_SLIDE = document.getElementById("speed-slider");

const GEN_HIDE_BTN = document.getElementById("generation-drawer-toggle");

// Rules menu
const RULES_MENU = document.getElementById("rules-menu");
const RULES_DRAG_BAR = document.getElementById("rules-fixed");
const RULES_DRAWER = document.getElementById("rules-drawer");
const BORN_CHECKBOX = document.getElementsByName("born");
const SURVIVE_CHECKBOX = document.getElementsByName("alive");

const RULES_HIDE_BTN = document.getElementById("rules-drawer-toggle");

// Pattern menu
const PATTERN_MENU = document.getElementById("patterns-menu");
const PATTERNS_AREA_DIV = document.getElementById("patterns-area");
const SHOW_PATTERNS_MENU = document.getElementById("show-patterns-menu");

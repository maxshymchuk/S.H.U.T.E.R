export const THEME = {
  ACCENT_COLOR: '#3f50b5',
  BACKGROUND_COLOR: '#333333',
  TEXT_COLOR: '#CCCCCC',

  PLAYER_COLOR: '#00FF00',
  ENEMY_COLOR: '#FF0000',
  MATE_COLOR: '#FFFF00',
};

export const GAME_TITLE = 'Shuter';
export const ENGINE_TICKRATE = 10;
export const CANVAS_ID = 'canvas';
export const MINIMAL_SPEED = 0.01;
export const TITLE_FONT_SIZE = '60px';
export const SUBTITLE_FONT_SIZE = '25px';

export enum ERRORS {
  REPO_INIT = 'Cannot init repository',
}

export enum ENTITY_TYPES {
  PLAYER = 'player',
  ENEMY = 'enemy',
  MATE = 'mate',
  OBSTACLE = 'obstacle',
}

export enum ASSET_TYPES {
  SHIPS = 'ships',
}

export enum SOUND_TYPES {
  SHIPS = 'ships',
}

export enum FRAME_STATES {
  DEFAULT = 'default',

  SHIFT_LEFT = 'shift_left',
  SHIFT_TOP = 'shift_top',
  SHIFT_RIGHT = 'shift_right',
  SHIFT_BOTTOM = 'shift_bottom',

  ROTATE_LEFT = 'rotate_left',
  ROTATE_RIGHT = 'rotate_right',
}
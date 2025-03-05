const colors = {
  red: '\n\x1b[31m%s\x1b[0m',
  green: '\n\x1b[32m%s\x1b[0m',
  yellow: '\n\x1b[33m%s\x1b[0m',
  blue: '\n\x1b[36m%s\x1b[0m',
};

/**
 * @param  {string} color  message color
 * @param  {string} msg    message text
 * @param  {any} data      data for logging
 */
const logToConsole = (color: string, msg: string, data: any) => {
  console.log(color, msg, data ? data : '', '\n');
};

/**
 *  Message text:
 * `r` - red,
 * `g` - green,
 * `y` - yellow,
 * `b` - blue
 */
export const logger = {
  /**
   * Red message text
   *
   * @param  {string} msg  message text
   * @param  {any} data    data for logging
   */
  r: (msg: string, data: any): void => logToConsole(colors.red, msg, data),

  /**
   * Green message text
   *
   * @param  {string} msg  message text
   * @param  {any} data    data for logging
   */
  g: (msg: string, data: any): void => logToConsole(colors.green, msg, data),

  /**
   * Yellow message text
   *
   * @param  {string} msg  message text
   * @param  {any} data    data for logging
   */
  y: (msg: string, data: any): void => logToConsole(colors.yellow, msg, data),

  /**
   * Blue message text
   *
   * @param  {string} msg  message text
   * @param  {any} data    data for logging
   */
  b: (msg: string, data: any): void => logToConsole(colors.blue, msg, data),
};

const DEBUG = false;

const logger = {
  log: (...args) => DEBUG && console.log('[D]', ...args),
  info: (...args) => console.info('[I]', ...args),
  warn: (...args) => console.warn('[W]', ...args),
  error: (...args) => console.error('[E]', ...args),
};

module.exports = { logger };

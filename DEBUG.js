const DEBUG = [
  'index',

  'connections:*',

  'functions:*',
].join(',');

process.env = {
  ...process.env,
  DEBUG,
}
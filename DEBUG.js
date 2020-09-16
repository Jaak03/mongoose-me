const DEBUG = [

].join(',');

process.env = {
  ...process.env,
  DEBUG,
}
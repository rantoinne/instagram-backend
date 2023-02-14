const maxProcess = 3;
let totalRunningProcess = 0;
export default function processReady() {
  totalRunningProcess += 1;
  if (totalRunningProcess >= maxProcess && process?.send) {
    process.send('ready');
  }
}

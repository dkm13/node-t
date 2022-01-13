const os = require("os");

// info for users
const user = os.userInfo();
console.log(user);

console.log(`the system uptime is: ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);

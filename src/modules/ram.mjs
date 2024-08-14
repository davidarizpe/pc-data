import os from "node:os";

const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;

const totalMemMB = (totalMem / 1024 / 1024 / 1024);
const usedMemMB = (usedMem / 1024 / 1024 / 1024);
const freeMemMB = (freeMem / 1024 / 1024 / 1024);

const ramdata = {
  total: totalMemMB,
  used: usedMemMB,
  free: freeMemMB,
};

export default ramdata;
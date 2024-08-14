import os from "node:os";

export async function getCpuUsage(sampleTime = 1000) {
    try {
        const getCpuTimes = () => os.cpus().map(cpu => cpu.times);

        const startUsage = getCpuTimes();
        const startTime = process.hrtime();

        return new Promise((resolve) => {
            setTimeout(() => {
                const endUsage = getCpuTimes();
                const endTime = process.hrtime(startTime);

                const totalDiff = endUsage.reduce((acc, cpu, index) => {
                    const start = startUsage[index];
                    return acc + (cpu.user + cpu.nice + cpu.sys + cpu.irq + cpu.idle) - (start.user + start.nice + start.sys + start.irq + start.idle);
                }, 0);

                const idleDiff = endUsage.reduce((acc, cpu, index) => {
                    return acc + (cpu.idle - startUsage[index].idle);
                }, 0);

                const elapsedTime = (endTime[0] * 1e9 + endTime[1]) / 1e6;
                const cpuUsage = 100 - ((idleDiff / totalDiff) * 100);

                resolve(cpuUsage.toFixed(1));
            }, sampleTime);
        });
    } catch (error) {
        console.log(error);
        return 0;
    }
}
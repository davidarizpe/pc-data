import { getCpuUsage } from '../modules/cpu.mjs';
import ramdata from '@/modules/ram.mjs';
import numberFormat from '@/modules/number';

export default async function Home() {
  const cpuUsage = await getCpuUsage();

  return (
    <div className="App">
        <nav className="nav w-[100%] bg-gray-800 text-white p-4 flex flex-col items-center">
          <header className="header">
            <h1 className="title text-5xl">Pc-config</h1>
          </header>
        </nav>

        <main className="main w-[100%] flex flex-wrap gap-4 m-5">
          <div className="data" id="cpu">
            <h3 className="datatitle text-3xl m-1">Cpu usage</h3>
            <h2 className="subtitle text-5xl font-bold m-3">{cpuUsage ?? '-'}%</h2>
            <p className="extradata m-1">Utilization</p>
          </div>

          <div className="data" id="ram">
            <h3 className="datatitle text-3xl m-1">Ram usage</h3>
            <h2 className="subtitle text-5xl font-bold m-3">{numberFormat(ramdata.used, 1)} GB</h2>
            <p className="extradata m-1">usage / {numberFormat(ramdata.total, 1)} GB</p>
          </div>

          <div className="data" id="disk">
            <h3 className="datatitle text-3xl m-1">Disk usage</h3>
            <h2 className="subtitle text-5xl font-bold m-3">512 Gb</h2>
            <p className="extradata m-1">usage / 1 Tb</p>
          </div>
        </main>
      </div>
  );
}

const { spawn } = require("child_process");

const devPackages = () =>
  spawn("pnpm run dev:packages", {
    shell: true,
    stdio: "inherit",
  });

const devApp = () => spawn("pnpm run dev:app", { shell: true, stdio: "inherit" });

const dev = () => {
  const packageProcess = devPackages();
  const uiProcess = devApp();

  process.on("exit", () => {
    packageProcess.kill();
    uiProcess.kill();
  });
};

dev();

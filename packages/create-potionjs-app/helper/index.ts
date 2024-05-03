import { execa } from "execa";
import * as chalk from "chalk";

const c = chalk.default

export const helper =  {
  tailwind: async (projectName) => {
    // @ts-ignore | @description ignore error
    const { stdout } = await execa("npm", ["--v"]);
    console.log(c.yellow.bold("info -"), c.italic(`✨ Using npm version ${stdout.trim()} to install TailwindCSS`))
    
    await execa(`cd ${projectName}`).then(() => {
      execa("npm i tailwindcss", { stdio: "inherit" })
    })
  },
  typescript: async (projectName) => {
    await execa(`cd ${projectName}`).then(() => {
      execa("npm i @types/node @types/react @types/react-dom", { stdio: "inherit" })
    })
  },
};
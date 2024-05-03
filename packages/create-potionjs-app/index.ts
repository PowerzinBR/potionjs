import { program } from "commander";
import inquirer from "inquirer";
import { helper } from "./helper";
import { execa } from "execa";
import * as chalk from "chalk";

const c = chalk.default;

program
  .command("create <projectName>")
  .description("Create a new project")
  .action(async (projectName) => {
    try {
      console.log("✔ Potion.js 1.0")
      console.log("🤔 It's not recommended to use any other package manager rather than npm as this can cause your packages to break (we will provide support later)")
      const answers = await inquirer.prompt([
        {
          type: "confirm",
          name: "useTailwindCSS",
          message: "Use TailwindCSS?",
          default: true,
        },
        {
          type: "confirm",
          name: "useTypescript",
          message: "Use Typescript?",
          default: true,
        },
      ]);

      const name = async () => {
        await execa("mkdir", [`${projectName}`]).then(() => {
          execa("cd", [`${projectName}`]).then(() => {
            execa("mkdir", [`${projectName}/app`]);
            execa("mkdir", [`${projectName}/lib`]);
            execa("mkdir", [`${projectName}/components`]);
            execa("mkdir", [`${projectName}/utils`]);
            console.log(c.bold.green("success -"), c.bold.whiteBright("project created! feel free to delete any folder besides app"))
          })
        })
      }

      name();
      
      if (answers.useTailwindCSS) {
        helper.tailwind(projectName);
      }
      if (answers.useTypescript) {
        helper.typescript(projectName);
      }

      console.log(c.white("🙃 if you're using powershell restart it to ensure it don't cause any issue"))
    
    } catch (error) {
      console.error("Error creating project:", error);
    }
  });

// @ts-ignore | @description probably cache, remove later
program.parse(process.argv);

import { execa } from "execa";
import * as chalk from "chalk";

const c = chalk.default;

console.log(c.bold.yellow("server -"), c.italic("server running on localhost"))
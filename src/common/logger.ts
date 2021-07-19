import chalk from "chalk";

export const logSuccess = (msj: string, description: string = "") => {
  return console.log(
    chalk.bgGreen.black(`\n ${msj} `),
    chalk.green(`${description}`)
  );
};

export const logInfo = (msj: string, description: string = "") => {
  return console.log(
    chalk.bgCyan.black(`\n ${msj} `),
    chalk.cyan(`${description}`)
  );
};

export const logError = (msj: string, err: string = "") => {
  return console.log(chalk.bgRed.white(`\n ${msj} `), chalk.red(`${err}`));
};

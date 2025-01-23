#!/usr/bin/env node

import { exec } from "child_process";
import fs from "fs";
import inquirer from "inquirer";
import ora from "ora";
import path from "path";
import simpleGit from "simple-git";
import { promisify } from "util";

const execPromise = promisify(exec);

const REPO_URL = "https://github.com/AnikAdhikari7/express-setup.git";
const BRANCH = "main";
const DEPTH = 1;

const init = async () => {
    console.log(
        "\n🚀 Welcome to xpress-init! Setting up your Express app...\n"
    );

    // Step 1: Prompt for the project name
    const { projectName } = await inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "Enter your project name: ",
            default: "my-express-app",
        },
    ]);

    const targetPath = path.join(process.cwd(), projectName);

    // Step 2: Check if the directory already exists
    if (fs.existsSync(targetPath)) {
        console.error(
            `❌ The folder "${projectName}" already exists. Please choose a different name.`
        );
        process.exit(1);
    }

    // Step 3: Clone the repository
    const spinner = ora("Cloning the repository...").start();
    try {
        await simpleGit()
            .silent(true)
            .clone(REPO_URL, projectName, [
                "--branch",
                BRANCH,
                "--depth",
                DEPTH,
            ]);
        spinner.succeed("Repository cloned successfully!");

        // Step 4: Install dependencies
        spinner.start("Installing dependencies...");
        await execPromise("npm install", { cwd: targetPath });
        spinner.succeed("Dependencies installed successfully!");

        // Step 5: Display next steps
        console.log("\n🎉 Setup complete! Next steps: ");
        console.log(`  cd ${projectName}`);
        console.log("  npm start");
        console.log("\nHappy coding! 🚀");
    } catch (error) {
        spinner.fail("Failed to complete setup.");
        console.error(error.message);
    }
};

init();

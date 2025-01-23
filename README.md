# xpress-init

🚀 **xpress-init** is a simple tool to set up a fully functional Express.js app with a single command.

---

## Features

-   Quickly bootstrap an Express.js app.
-   Clones a pre-configured Express.js template from the [express-setup](https://github.com/AnikAdhikari7/express-setup) repository.
-   Includes:
    -   Pre-configured routes, controllers, and middleware.
    -   Environment variable setup.
    -   JWT-based authentication.
    -   MongoDB integration.

---

## Installation

You don't need to install anything globally! Use it directly with `npx`:

```bash
npx xpress-init
```

---

## Usage

1. Run the following command:
    ```bash
    npx xpress-init
    ```
2. Follow the prompts to:
    - Enter your project name.
3. Wait while the app is set up, and dependencies are installed.
4. Navigate to your project directory and start the server:
    ```bash
    cd <your-project-name>
    npm start
    ```

---

## Example

```bash
npx xpress-init
# Enter your project name: my-awesome-app
# Cloning the repository...
# Installing dependencies...
# Setup complete!
```

---

## Template Repository

The Express app is based on [express-setup](https://github.com/AnikAdhikari7/express-setup). It includes all the necessary features to kickstart your project:

-   Express.js framework.
-   MongoDB integration using `mongoose`.
-   JWT authentication.
-   Environment variable management.
-   Logging with `morgan` and `winston`.
-   CORS enabled by default.
-   Development auto-reload with `nodemon`.

For more details about the template, visit the [express-setup README](https://github.com/AnikAdhikari7/express-setup#readme).

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

## Author

**Anik Adhikari**

For any inquiries, feel free to reach out via GitHub or open an issue in the repository.

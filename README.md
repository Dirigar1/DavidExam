DavidExam

SQLI Playwright Test Automation - Examen final
Automatiza los siguientes pasos en Playwright/TypeScript.
Preparación: Crea un nuevo proyecto
1. Crea una carpeta vacía.
2. Abre la carpeta con Visual Studio Code.
3. En el terminal, ejecuta los siguientes comandos:
npm install
npm init playwright@latest
Automatiza los siguientes pasos:
1. Ve a la página: https://parabank.parasoft.com/
2. Haz clic en el enlace "Register".
3. Rellena y envía el formulario para registrar un nuevo usuario.
4. Haz clic en el enlace "Log Out".
5. Inicia sesión con los datos de tu nuevo usuario.
Nota: El uso de Page Objects, Page Manager y Fixtures puede mejorar la calificación del examen.
Paso adicional (bonus): Comprueba mediante una llamada a la API si el usuario se ha creado correctamente después de enviar el formulario de registro
Enviar los resultados:
Crea un repositorio GIT en el GitHub de SQLI con tu usuario (preferiblemente público).
En el terminal de Visual Studio Code, ejecuta:
git init
git remote add origin https://your.git.repo/url.git
git add .
git commit -m "Initial commit of existing code"
git push -u origin main

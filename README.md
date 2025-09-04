# 👋 ¡Bienvenido a la Galería de Perfiles!

Este proyecto colaborativo te ayudará a aprender los fundamentos de **Git** y **GitHub**.  
Tu objetivo es **añadir tu perfil a la galería** siguiendo los pasos que se indican a continuación.

---

## 🚀 ¿Cómo colaborar?

Puedes contribuir de dos formas:  
- **Desde tu computadora (local)**
- **Usando GitHub Codespaces (en el navegador)**

---

### 🖥️ Opción 1: Trabajar en tu computadora

1. **Clona el repositorio**

    Abre la terminal y ejecuta:

    ```bash
    git clone https://github.com/[nombre-usuario]/galeria-equipo.git
    cd galeria-equipo
    ```

2. **Crea una nueva rama**

    Es recomendable trabajar en una rama separada para tus cambios:

    ```bash
    git checkout -b mi-perfil
    ```

3. **Agrega tu perfil**

    - Abre el archivo `data.json`.
    - Añade un nuevo objeto JSON con tu información al final de la lista.
    - Asegúrate de que el objeto anterior termine con una coma.

4. **Guarda y sube tus cambios**

    ```bash
    git add data.json
    git commit -m "Agrego mi perfil a la galería"
    git push origin mi-perfil
    ```

5. **Crea un Pull Request**

    - Ve al repositorio en GitHub.
    - Haz clic en "Compare & pull request".
    - Describe brevemente tu cambio y envíalo para revisión.

---

### 🌐 Opción 2: Trabajar con GitHub Codespaces

GitHub Codespaces te permite editar el proyecto directamente desde tu navegador.

1. **Abre un Codespace**

    - Ve a la página principal del repositorio en GitHub.
    - Haz clic en "Code" y selecciona la pestaña "Codespaces".
    - Haz clic en "Create codespace on main".

2. **Crea tu rama de trabajo**

    En la terminal de Codespaces, ejecuta:

    ```bash
    git checkout -b mi-perfil
    ```

3. **Edita y sube tus cambios**

    - Abre `data.json` y añade tu perfil como se indica arriba.
    - Guarda los cambios y usa los mismos comandos para subirlos:

      ```bash
      git add data.json
      git commit -m "Agrego mi perfil a la galería"
      git push origin mi-perfil
      ```

4. **Crea un Pull Request**

    - Desde GitHub, crea un Pull Request para que tus cambios sean revisados y fusionados.

---

¡Gracias por contribuir!  
Creado por Luis Guilarte y 4Geeks Academy

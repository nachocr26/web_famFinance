# 🚀 Guía: Cómo Subir la Landing de FamFinance a un Hosting Gratuito

La carpeta `landing/` contiene todo lo necesario para publicar la web de forma 100% estática, ligera e independiente (HTML5, CSS moderno, JavaScript interactivo, imágenes y política de privacidad). No requiere bases de datos ni backend.

A continuación tienes las **4 mejores opciones gratuitas** explicadas paso a paso.

---

## 🥇 Opción 1: Netlify Drop (La más rápida — ¡En 30 segundos sin instalar nada!)

Esta es la opción recomendada si quieres tu landing funcionando **ahora mismo** sin configurar terminales ni Git:

1. Ve a [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Si no tienes cuenta, inicia sesión gratis (con Google o GitHub).
3. **Arrastra y suelta la carpeta `landing`** directamente sobre el recuadro que aparece en la pantalla.
4. ¡Listo! En 5 segundos Netlify te dará una URL pública gratuita (por ejemplo: `https://famfinance-p2p.netlify.app`) con certificado de seguridad SSL HTTPS incluido.
5. *(Opcional)*: En los ajustes de Netlify (`Site settings > Change site name`) puedes cambiar el subdominio al nombre que prefieras o vincular tu propio dominio `.com`/`.es`.

---

## 🥈 Opción 2: Vercel (Recomendado si usas GitHub)

Vercel ofrece una red CDN global ultrarrápida y despliegues automáticos:

1. Entra en [https://vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New... > Project"**.
3. Selecciona tu repositorio de FamFinance.
4. En la sección **Root Directory**, haz clic en *Edit* y selecciona la carpeta `landing`.
5. Pulsa el botón azul **"Deploy"**.
6. En menos de un minuto tendrás tu enlace del tipo `https://famfinance-p2p.vercel.app` que se actualizará automáticamente cada vez que hagas push.

---

## 🥉 Opción 3: GitHub Pages (Directo desde tu repositorio)

Si ya tienes este proyecto subido a GitHub:

### Método A (Carpeta docs en rama principal):
1. Copia el contenido de la carpeta `landing/` a una carpeta llamada `docs/` en la raíz del proyecto.
2. Sube los cambios con `git push`.
3. En tu repositorio de GitHub, ve a **Settings** > **Pages** (en el menú lateral izquierdo).
4. En **Source**, selecciona `Deploy from a branch`.
5. En **Branch**, selecciona `desarrollo` (o `main`) y en la carpeta elige `/docs`.
6. Haz clic en **Save**. En 1 o 2 minutos tu web estará activa en `https://nachocr26.github.io/famfinance/`.

---

## ⚡ Opción 4: Cloudflare Pages

Cloudflare ofrece ancho de banda ilimitado y la red más rápida del mundo:

1. Entra en [https://pages.cloudflare.com/](https://pages.cloudflare.com/) e inicia sesión gratis.
2. Haz clic en **"Crear una aplicación" > "Pages"**.
3. Puedes elegir **"Cargar recursos directamente"** y arrastrar la carpeta `landing/`, o **"Conectar con Git"** seleccionando la carpeta raíz `landing`.
4. Cloudflare te asignará un dominio instantáneo tipo `https://famfinance.pages.dev`.

---

## 📁 Estructura de la Landing

La carpeta `landing/` contiene:
- `index.html`: La landing page completa con diseño moderno en modo oscuro, simulador interactivo de ahorro familiar, galería de capturas de pantalla, explicaciones de seguridad y llamadas a la acción.
- `styles.css`: Hoja de estilos con variables CSS, efectos de cristal (glassmorphism), degradados y diseño adaptable a móviles.
- `script.js`: Interactividad del menú móvil, pestañas de capturas, simulador en tiempo real de presupuestos y acordeón de preguntas frecuentes.
- `politica-privacidad.html`: Página oficial de política de privacidad vinculada y adaptada.
- `assets/`:
  - `icon.png`: Icono de alta resolución de la app.
  - `banner.png`: Gráfico promocional de FamFinance.
  - `screenshot-dashboard.jpg`: Captura del panel principal de gastos.
  - `screenshot-p2p.jpg`: Captura del emparejamiento P2P con código QR.
  - `screenshot-banks.jpg`: Captura de las conexiones y seguridad bancaria.

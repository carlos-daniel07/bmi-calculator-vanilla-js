# ⚖️ Calculadora de BMI con Clasificación por Categoría

Calculadora de índice de masa corporal (BMI) que valida los datos ingresados y clasifica el resultado en una categoría de salud. Construida con **HTML, CSS y JavaScript puro**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🔗 Proyecto en vivo

👉 [Ver proyecto en vivo](https://bmicalculatorjsvanilla.netlify.app/)

## ✨ Características

- Cálculo del **BMI** a partir de peso (kg) y altura (cm), con conversión automática de centímetros a metros.
- **Clasificación automática** del resultado en 4 categorías: bajo peso, peso normal, sobrepeso y obesidad.
- **Validación de entradas**: si los campos están vacíos o no son numéricos, se muestra un mensaje de error en rojo en vez de un resultado incorrecto.
- Resultado formateado a **2 decimales** para mayor precisión visual.
- Diseño de tarjeta centrada con inputs redondeados y botón con efecto de escala al presionar.

## 🛠️ Tecnologías utilizadas

- **HTML5** — formulario simple con dos campos numéricos y un botón de acción.
- **CSS3** — tarjeta centrada con sombra, inputs con `border-radius` tipo píldora y transición de escala en el botón (`:active`).
- **JavaScript (Vanilla)** — cálculo de la fórmula del BMI (`peso / altura²`), validación de datos con `parseFloat` y clasificación mediante condicionales encadenados.

## 📂 Estructura del proyecto

```
├── index.html
├── style.css
├── script.js
├── icon.png
└── README.md
```

## 🚀 Cómo usarlo localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/carlos-daniel07/bmi-calculator-vanilla-js.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd bmi-calculator-vanilla-js
   ```
3. Abre `index.html` en tu navegador (o usa la extensión Live Server en VS Code).

## 🧠 Qué aprendí / practiqué

- Aplicar la fórmula estándar del BMI (`peso (kg) / altura (m)²`) y convertir unidades de entrada (cm → m) antes del cálculo.
- Validar entradas numéricas de forma simple con `parseFloat` y condicionales, evitando resultados como `NaN` en pantalla.
- Usar condicionales encadenados (`if / else if`) para clasificar un valor numérico en rangos de categorías.

## 📸 Vista previa

<img width="1920" height="1536" alt="image" src="https://github.com/user-attachments/assets/03cf6595-51cc-4b14-9efe-a03148510b44" />

## 📄 Licencia

Este proyecto es de uso libre con fines educativos y de portfolio.

---

Hecho con 💻 por [Carlos Daniel](https://github.com/carlos-daniel07)

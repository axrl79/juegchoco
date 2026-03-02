# 🎮 Juego del Choco Sogliano - Propuestas Políticas

## Descripción
Juego web interactivo retro-moderno donde el famoso **Choco Sogliano** salta continuamente y golpea un cubo estilo Mario Bros para revelar **10 propuestas políticas** de la alcaldía. Diseño pixelado andino con animaciones fluidas, responsivo para móviles y computadoras.

## ✨ Características

- **Mecánica Simple**: Saltos automáticos + golpea el cubo para revelar propuestas
- **10 Propuestas Únicas**: Cada impacto revela una propuesta política diferente
- **Diseño Moderno-Retro**: Blend perfecto entre pixel art y interfaz moderna
- **Totalmente Responsivo**: Optimizado para móviles, tablets y escritorio
- **Animaciones Creativas**: 
  - Saltos parabólicos del Choco
  - Vibración del cubo al golpear
  - Pop-ups animadas de propuestas
  - Gato y perro animados a los lados
  - Elementos flotantes en el fondo

## 🎯 Cómo Jugar

1. **Observa** el Choco Sogliano saltando automáticamente
2. **Toca/Haz clic** en el cubo amarillo para golpearlo
3. **Revela** cada propuesta política
4. **Completa** las 10 propuestas para terminar el juego
5. **Reinicia** para jugar de nuevo

## 📁 Estructura del Proyecto

```
/components/game/
├── GameContainer.tsx      # Lógica principal del juego
├── Player.tsx             # Personaje Choco Sogliano
├── MarioCube.tsx          # Cubo interactivo
├── ProposalCard.tsx       # Tarjeta de propuesta
├── GameOver.tsx           # Pantalla de fin de juego
├── SideAnimals.tsx        # Gato y perro animados
├── GameBackground.tsx     # Fondo ciudad + elementos
└── ScoreDisplay.tsx       # Contador de propuestas

/app/
├── page.tsx               # Página principal
├── layout.tsx             # Configuración global
└── globals.css            # Estilos + animaciones
```

## 🎨 Paleta de Colores

- **Púrpura Principal**: #7c3aed (OKLch)
- **Naranja Acentos**: De Puma Katari
- **Amarillo Cubo**: Clásico Mario Bros
- **Fondo Cielo**: Gradiente azul claro

## 📱 Propuestas Incluidas

1. 🛣️ Mejorar infraestructura vial
2. 💧 Ampliación de servicios de agua potable
3. 👨‍💼 Programa de empleabilidad para jóvenes
4. 🌳 Renovación de espacios públicos
5. 📚 Subsidio para educación técnica
6. ⚕️ Campaña de salud preventiva
7. 🏪 Apoyo a productores locales
8. 💡 Mejora de iluminación en barrios
9. 🚔 Programa de seguridad ciudadana
10. ♻️ Incentivos para energías renovables

## 🛠️ Tecnologías Usadas

- **Next.js 16** - Framework React moderno
- **Tailwind CSS 4.2** - Estilos responsivos
- **React Hooks** - Estado y efectos
- **CSS Animations** - Animaciones fluidas
- **TypeScript** - Tipado seguro

## 📦 Instalación

```bash
# Clonar o descargar el proyecto
git clone [repo]
cd juego-choco-sogliano

# Instalar dependencias
npm install
# o
pnpm install

# Ejecutar en desarrollo
npm run dev
# o
pnpm dev

# Abrir en navegador
# http://localhost:3000
```

## 🚀 Características Técnicas

- **Responsive Mobile-First**: 100% funcional en todos los tamaños
- **Physics Engine**: Simulación realista de gravedad y saltos
- **Collision Detection**: Detección de colisiones automática
- **Touch-Friendly**: Interfaces optimizadas para pantalla táctil
- **Performance**: Animaciones con requestAnimationFrame para 60fps
- **Accesibilidad**: Interfaz intuitiva y clara

## 🎯 Objetivos del Juego

✅ Revelar todas las 10 propuestas políticas
✅ Completar el juego sin errores
✅ Aprender sobre propuestas de la alcaldía de forma divertida

## 🎮 Controles

- **Automático**: El Choco salta solo
- **Interactivo**: Toca/Haz clic en el cubo para golpear
- **Reinicio**: Botón "JUGAR DE NUEVO" al terminar

## 📸 Assets Usados

- Choco Sogliano (personaje principal pixel art)
- Teleférico de La Paz (decorativo)
- Puma Katari (bus andino decorativo)
- Fondo ciudad isométrica retro
- Nubes y elementos flotantes

## 🌍 Multiidioma

El juego está en español y es accesible desde cualquier navegador moderno en todo el mundo.

## 💡 Notas de Desarrollo

- Las propuestas se revelan aleatoriamente sin repetir
- El juego termina automáticamente al revelar las 10 propuestas
- Los estilos usan Tailwind CSS para máxima responsividad
- Las animaciones están optimizadas para no afectar rendimiento
- Los componentes son reutilizables y modularizados

---

**Creado con ❤️ para la alcaldía**

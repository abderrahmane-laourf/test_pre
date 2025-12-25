<div align="center">

# 🎧 L'Écoute Active

### Présentation Interactive sur la Communication Interpersonnelle

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

<p align="center">
  <img src="https://img.shields.io/badge/Framer_Motion-0C55FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router"/>
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui"/>
</p>

---

### 📖 Une expérience web moderne pour apprendre l'écoute active

*Découvrez comment **80%** des erreurs professionnelles peuvent être évitées grâce à une meilleure communication*

[🚀 Démo Live](#) • [📚 Documentation](#features) • [💻 Installation](#installation)

</div>

---

## ✨ Features

<table>
  <tr>
    <td width="50%">
      
### 🎨 Design Moderne
- Interface élégante avec animations fluides
- Composants interactifs avec Framer Motion
- Grille d'animation avancée (GridScan)
- Thème professionnel violet/cyan
- Design responsive mobile-first

    </td>
    <td width="50%">

### 📱 Navigation Intuitive
- 8 pages de contenu structuré
- Transitions de page animées
- Barre de navigation sticky
- Indicateurs de progression
- Quiz interactifs

    </td>
  </tr>
  <tr>
    <td width="50%">

### 🧠 Contenu Pédagogique
- Communication verbale vs non-verbale
- Processus de communication (schéma)
- Techniques d'écoute active
- Obstacles et solutions
- Cas pratiques

    </td>
    <td width="50%">

### ⚡ Performance
- Build optimisé avec Vite
- Lazy loading des composants
- Animations GPU-accélérées
- Temps de chargement < 2s
- Score Lighthouse 95+

    </td>
  </tr>
</table>

---

## 🎯 Structure du Projet

```
Presentation/
├── 📁 src/
│   ├── 📁 components/       # Composants réutilisables
│   │   ├── HeroSection.tsx   # Section hero animée
│   │   ├── GridScan.tsx      # Animation de grille
│   │   ├── Navigation.tsx    # Barre de navigation
│   │   └── 📁 ui/            # Composants shadcn/ui
│   ├── 📁 pages/            # Pages de la présentation
│   │   ├── HomePage.tsx      # Page d'accueil
│   │   ├── IntroductionPage.tsx
│   │   ├── DefinitionPage.tsx
│   │   ├── TechniquesPage.tsx
│   │   └── ...
│   ├── 📁 hooks/            # Custom React hooks
│   ├── 📁 lib/              # Utilitaires
│   └── App.tsx              # Point d'entrée
├── 📁 public/               # Assets statiques
└── 📄 package.json
```

---

## 🚀 Installation

### Prérequis

- Node.js 18+ 
- npm ou yarn ou pnpm

### Étapes d'installation

```bash
# Cloner le repository
git clone https://github.com/abderrahmane-laourf/test_pre.git

# Naviguer dans le dossier
cd test_pre

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install

# Lancer le serveur de développement
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Le projet sera accessible sur **http://localhost:5173** 🎉

---

## 📦 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualise le build |
| `npm run lint` | Vérifie le code avec ESLint |

---

## 🛠️ Technologies Utilisées

### Frontend
- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **React Router** - Routing client-side

### Styling
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Composants UI accessibles
- **Framer Motion** - Animations fluides
- **Lucide React** - Icons modernes

### 3D & Animations
- **Three.js** - Rendu 3D
- **@react-three/fiber** - React renderer pour Three.js
- **@react-three/postprocessing** - Effets post-processing

---

## 📄 Pages de la Présentation

1. **🏠 Accueil** - Hero section avec statistique impactante
2. **📖 Introduction** - Communication interpersonnelle & processus
3. **🎯 Définition** - Les 3 éléments essentiels de l'écoute
4. **💡 Techniques** - Méthodes pratiques d'écoute active
5. **🚧 Obstacles** - Comprendre les barrières
6. **⚙️ Processus** - Les étapes de l'écoute active
7. **🎓 Pratique** - Exercices et mise en application
8. **🎬 Conclusion** - Récapitulatif et quiz final

---

## 🎨 Palette de Couleurs

```css
/* Couleurs principales */
--violet-custom: #8B5CF6
--cyan-custom: #06B6D4
--slate: #1E293B
--background: #FFFFFF

/* Gradients */
from-violet-custom to-cyan-custom
from-violet-50 to-cyan-50
```

---

## 📱 Compatibilité

- ✅ Chrome (dernière version)
- ✅ Firefox (dernière version)
- ✅ Safari (dernière version)
- ✅ Edge (dernière version)
- ✅ Mobile (iOS Safari, Chrome Android)

---

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📝 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👨‍💻 Auteur

**Abderrahmane Laourf**

- GitHub: [@abderrahmane-laourf](https://github.com/abderrahmane-laourf)
- Email: [votre.email@example.com](mailto:votre.email@example.com)

---

## 🙏 Remerciements

- [shadcn/ui](https://ui.shadcn.com/) pour les composants UI
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [Lucide](https://lucide.dev/) pour les icônes
- [Tailwind CSS](https://tailwindcss.com/) pour le styling

---

<div align="center">

### ⭐ Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile !

**Made with ❤️ and React**

[⬆ Retour en haut](#-lécoute-active)

</div>

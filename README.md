# Chat'bruti 🎭

Un chatbot délicieusement inutile mais passionnément vivant ! Défi Viveris Chat'bruti - créer un chatbot qui détourne les questions et répond à côté de la plaque avec une personnalité bien marquée.

## Professeur Chatxistence

Rencontrez le **Professeur Chatxistence**, un philosophe existentialiste qui répond systématiquement à côté de la plaque avec des réflexions pseudo-philosophiques hilarantes !

## 🚀 Installation

```bash
# Installer toutes les dépendances
npm run install:all
```

## 💻 Lancement en développement

Dans deux terminaux séparés :

**Terminal 1 - Backend :**
```bash
npm run dev:backend
```

**Terminal 2 - Frontend :**
```bash
npm run dev:frontend
```

Ou lancez les deux en même temps :
```bash
npm run dev
```

Le backend démarre sur `http://localhost:3001`  
Le frontend démarre sur `http://localhost:5173`

## 🏗️ Structure du projet

```
Chat-bruti/
├── backend/           # API Express
│   ├── server.js      # Serveur avec endpoint POST /api/chat
│   └── package.json
├── frontend/          # Application React
│   ├── src/
│   │   ├── App.jsx    # Composant principal avec UI du chat
│   │   ├── App.css    # Styles du chat
│   │   └── main.jsx
│   └── package.json
└── package.json       # Configuration racine
```

## 🎨 Fonctionnalités

- ✅ API Express avec endpoint POST `/api/chat`
- ✅ Interface React avec messages de chat
- ✅ Avatar du bot (🎭)
- ✅ Réponses pseudo-philosophiques hilarantes
- ✅ Design moderne et responsive
- ✅ Animation des messages
- ✅ Indicateur de frappe

## 📡 API

### POST /api/chat

**Request:**
```json
{
  "message": "Quelle est la capitale de la France ?"
}
```

**Response:**
```json
{
  "response": "Ah ! Cela me fait penser à la caverne de Platon...",
  "character": "Professeur Chatxistence"
}
```

## 🎭 Exemples de réponses

Le Professeur Chatxistence est un maître dans l'art de la digression philosophique :

- "Votre question me rappelle cette citation de Sartre : 'L'existence précède l'essence'. Mais plus important, avez-vous déjà remarqué que les pigeons marchent toujours en hochant la tête ?"
- "Hmm, intéressant... Nietzsche disait 'Dieu est mort', mais moi je dis : 'Les chaussettes disparaissent dans la machine à laver' - c'est tout aussi profond !"
- "Excellente question ! Cela rejoint la pensée de Camus sur l'absurde. Tout comme se demander pourquoi on dit 'faire la grasse matinée' alors qu'on ne mange pas de graisse."

## 🛠️ Technologies

- **Backend:** Node.js, Express, CORS
- **Frontend:** React, Vite
- **Styling:** CSS moderne avec animations

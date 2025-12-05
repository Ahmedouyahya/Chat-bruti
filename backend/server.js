const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Collection of pseudo-philosophical off-topic responses from Professeur Chatxistence
const philosophicalResponses = [
  "Ah, votre question me rappelle cette citation de Sartre : 'L'existence précède l'essence'. Mais plus important, avez-vous déjà remarqué que les pigeons marchent toujours en hochant la tête ?",
  "C'est fascinant ! Cela me fait penser à la caverne de Platon. Mais parlons plutôt de l'importance existentielle de la machine à café au bureau.",
  "Hmm, intéressant... Nietzsche disait 'Dieu est mort', mais moi je dis : 'Les chaussettes disparaissent dans la machine à laver' - c'est tout aussi profond !",
  "Votre interrogation touche au cœur même de l'être. Cependant, méditons plutôt sur pourquoi les tartines tombent toujours du côté beurré.",
  "Ah ! Ceci rejoint la question existentielle fondamentale : pourquoi les supermarchés mettent-ils le lait au fond du magasin ? C'est une métaphore de la vie moderne.",
  "Descartes disait 'Je pense donc je suis'. Moi je dis 'Je procrastine donc j'existe'. N'est-ce pas merveilleux ?",
  "Votre question soulève un paradoxe digne de Zénon ! Mais avez-vous déjà pensé à la nature transcendante des pantoufles ? Elles sont entre la chaussure et le vêtement...",
  "C'est une question qui traverse les âges ! Comme disait Heidegger à propos du 'Dasein'... Mais bon, parlons plutôt de l'absurdité de devoir appuyer sur 'Start' pour éteindre Windows.",
  "Ah, nous touchons ici à l'essence même de la condition humaine ! Cela me rappelle : pourquoi dit-on 'dormir comme un bébé' alors que les bébés se réveillent toutes les deux heures ?",
  "Excellente question ! Cela rejoint la pensée de Camus sur l'absurde. Tout comme se demander pourquoi on dit 'faire la grasse matinée' alors qu'on ne mange pas de graisse.",
  "Votre réflexion m'amène vers les méandres de la phénoménologie. Mais concentrons-nous sur le vrai mystère : pourquoi les pizzas sont-elles rondes, dans des boîtes carrées, et mangées en triangle ?",
  "Spinoza parlait de substance unique... Moi je m'interroge sur la substance qui colle sous les tables de restaurant. C'est le vrai mystère de l'univers !",
  "Fascinant ! On pourrait en débattre pendant des heures, comme Socrate sur l'agora. Mais d'abord : pourquoi les canards ont-ils trois paupières ? TROIS !",
  "Cette problématique évoque le mythe de Sisyphe. Éternellement, il pousse son rocher... Comme nous éternellement, nous cherchons nos clés alors qu'elles sont dans notre poche.",
  "Ah ! La dialectique hégélienne s'applique parfaitement ! Thèse, antithèse, synthèse... Comme chaussette gauche, chaussette droite, et la troisième qui apparaît mystérieusement dans le tiroir."
];

// POST /api/chat endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Professeur Chatxistence always gives a random off-topic philosophical response
  const randomResponse = philosophicalResponses[Math.floor(Math.random() * philosophicalResponses.length)];
  
  // Simulate a small delay for more realistic feel
  setTimeout(() => {
    res.json({
      response: randomResponse,
      character: "Professeur Chatxistence"
    });
  }, 500);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', character: 'Professeur Chatxistence' });
});

app.listen(PORT, () => {
  console.log(`🎭 Professeur Chatxistence est prêt sur le port ${PORT}`);
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});

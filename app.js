import express from "express";
import bodyParser from "body-parser";
import Employe from "./Employe.js";
import Tache from "./Tache.js";
import Assigner from "./Assigner.js";

const app = express();
const port = 3090;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Bonjour les Employés");
});

app.post("/app", (req, res) => {
  // Créer deux employés
  const emp1 = new Employe({
    nom: "Sy",
    prenom: "Alioune",
    email: "aliousy@gmail.com",
    poste: "Développeur",
    dateEmbauche: new Date(),
    status: 'Actif',
  });

  const emp2 = new Employe({
    nom: "Mohamed",
    prenom: "Soumare",
    email: "medsoumare@gmail.com",
    poste: "Administrateur du Système",
    dateEmbauche: new Date(),
    status: "Actif",
  });

  // l'enregistrement des employés
  emp1.createEmploye(emp1);
  emp2.createEmploye(emp2);

  // Récupérer les informations des employés avant modification
  const emp1Created = emp1.getAllEmployes(); 
  const emp2Created = emp2.getAllEmployes(); 

  // Modifier emp1
  emp1.editEmploye({
    nom: "Harouna",
    prenom: "Traoré",
    email: "hr@gmail.com",
    poste: "Manager",
    dateEmbauche: new Date(),
    status: "Actif",
  });

  // Lister tous les employés dans la console
  console.log("Tous les employés");
  console.log(emp1.getAllEmployes());
  console.log(emp2.getAllEmployes());

  /*--------------------------------Taches---------------------------------*/

  // Créer une nouvelle tâche et l'assigner à emp1
  const tache1 = new Tache({
    nom: "Développement API",
    description: "Développer l'API pour la gestion des employés.",
    dateDebut: new Date(),
    dateFin: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 jours après la date de début
    status: "Actif",
    priorite: "Élevée",
    employe: emp1, 
  });
  
  const tache2 = new Tache({
    nom: "Développement API",
    description: "Développer l'API pour la gestion des employés.",
    dateDebut: new Date(),
    dateFin: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
    status: "Actif",
    priorite: "Moins",
    employe: emp2, 
  });

  // Simuler la création des tâches
  tache1.createTache(tache1);
  tache2.createTache(tache2);

  const tache1Creer = tache1.getAllTaches();
  const tache2Creer = tache2.getAllTaches();
  

  // Modifier tache1
  tache1.editTache({
    nom: "Développement API REST",
    description: "Développer et documenter l'API REST.",
    dateDebut: new Date(),
    dateFin: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 jours après la date de début
    status: "Actif",
    priorite: "Élevée",
    employe: emp2, 
  });

  // Assigner la tâche à emp1 et emp2
  Assigner.assignerTache(emp1, tache1);
  Assigner.assignerTache(emp2, tache2);

  // Liste des tâches assignées à emp1 AVANT le retrait de la tâche
  let tacheParEmploye1AvantRetrait = Assigner.getTachesParEmploye(emp1);
  console.log("Tâches assignées AVANT retrait:", tacheParEmploye1AvantRetrait);

  // Liste des tâches assignées à emp2 avant retrait
  let tacheParEmploye2AvantRetrait = Assigner.getTachesParEmploye(emp2);
  console.log("Tâches assignées AVANT retrait:", tacheParEmploye2AvantRetrait);

  // Retirer la tâche de emp1
  Assigner.retirerTache(emp1, tache1);

  // Liste des tâches assignées à emp1 APRES le retrait de la tâche
  let tacheParEmploye1ApresRetrait = Assigner.getTachesParEmploye(emp1);
  console.log("Tâches assignées  APRÈS retrait:", tacheParEmploye1ApresRetrait);

  
  // Liste des employés assignés à la tâche tache1 et taches2
  const employesParTache1 = Assigner.getEmployesParTache(tache1);
  console.log("Employés assignés à Développement API REST:", employesParTache1);
 
  const employesParTache2 = Assigner.getEmployesParTache(tache2);
  console.log("Employés assignés Développer l'API pour la gestion des employés.:", employesParTache2);


  // Réponse JSON avec les informations complètes
  res.status(200).json({
    employesCrees: [emp1Created, emp2Created],
    employesModifier: [emp1.getAllEmployes()],
    tachesCreer: [tache1Creer, tache2Creer],
    tachesModifier: [tache1.getAllTaches()],
    tacheParEmploye1AvantRetrait: tacheParEmploye1AvantRetrait,
    tacheParEmploye2AvantRetrait: tacheParEmploye2AvantRetrait,
    tacheParEmploye1ApresRetrait: tacheParEmploye1ApresRetrait,
    listeEmployesParTache1: employesParTache1,
    listeEmployesParTache2: employesParTache2,
  });
});

app.listen(port, () => {
  console.log(`L'application est en écoute sur le port ${port}`);
});

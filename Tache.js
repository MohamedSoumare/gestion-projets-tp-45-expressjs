export default class Tache {
  constructor(tache) {
    this.nom = tache.nom;
    this.description = tache.description;
    this.dateDebut = tache.dateDebut;
    this.dateFin = tache.dateFin;
    this.status = tache.status;
    this.priorite = tache.priorite;
    this.employe = tache.employe;
  }

  // Créer une nouvelle tâche
  createTache(tache) {
    this.nom = tache.nom;
    this.description = tache.description;
    this.dateDebut = tache.dateDebut;
    this.dateFin = tache.dateFin;
    this.status = tache.status;
    this.priorite = tache.priorite;
    this.employe = tache.employe;

    console.log(
      `Tâche créée : ${this.nom}, description: ${this.description}, Date Début: ${this.dateDebut}, Date Fin: ${this.dateFin}, Statut: ${this.status}, Priorité: ${this.priorite}, Employé: ${this.employe}`
    );
  }

  // Modifier les informations de la tâche
  editTache(newTache) {
    this.nom = newTache.nom;
    this.description = newTache.description;
    this.dateDebut = newTache.dateDebut;
    this.dateFin = newTache.dateFin;
    this.status = newTache.status;
    this.priorite = newTache.priorite;
    this.employe = newTache.employe;

    console.log(
      `Tâche mise à jour: ${this.nom}, description: ${this.description}, Date Début: ${this.dateDebut}, Date Fin: ${this.dateFin}, Statut: ${this.status}, Priorité: ${this.priorite}, Employé: ${this.employe}`
    );
  }

  // Récupérer les informations de la tâche
  getAllTaches() {
    return {
      Nom: this.nom,
      Description: this.description,
      DateDebut: this.dateDebut,
      DateFin: this.dateFin,
      Statut: this.status,
      Priorite: this.priorite,
      Employe: this.employe,
    };
  }

  // Supprimer une tâche
  destroyTache() {
    console.log(
      `Tâche supprimée : ${this.nom}, description: ${this.description}, Date Début: ${this.dateDebut}, Date Fin: ${this.dateFin}, Statut: ${this.status}, Priorité: ${this.priorite}, Employé: ${this.employe}`
    );
  }
}

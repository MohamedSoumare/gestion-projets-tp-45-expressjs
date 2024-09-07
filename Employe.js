// Employe.js
export default class Employe {
  constructor(employe) {
    this.nom = employe.nom;
    this.prenom = employe.prenom;
    this.email = employe.email;
    this.poste = employe.poste;
    this.dateEmbauche = employe.dateEmbauche;
    this.status = employe.status;
  }

  // Créer un nouvel employé
  createEmploye(employe) {
    this.nom = employe.nom;
    this.prenom = employe.prenom;
    this.email = employe.email;
    this.poste = employe.poste;
    this.dateEmbauche = employe.dateEmbauche;
    this.status = employe.status;
    console.log(
      `Employé créé: ${this.nom} ${this.prenom}, Email: ${this.email}, Poste: ${this.poste}, Date d'embauche: ${this.dateEmbauche}, Statut: ${this.status}`
    );
  }

  // Modifier les informations d'un employé
  editEmploye(newEmploye) {
    this.nom = newEmploye.nom;
    this.prenom = newEmploye.prenom;
    this.email = newEmploye.email;
    this.poste = newEmploye.poste;
    this.dateEmbauche = newEmploye.dateEmbauche;
    this.status = newEmploye.status;
    console.log(
      `Employé mis à jour: ${this.nom} ${this.prenom}, Email: ${this.email}, Poste: ${this.poste}, Date d'embauche: ${this.dateEmbauche}, Statut: ${this.status}`
    );
  }

  // Récupérer les informations d'un employé
  getAllEmployes() {
    return {
      Nom: this.nom,
      Prenom: this.prenom,
      Email: this.email,
      Poste: this.poste,
      DateEmbauche: this.dateEmbauche,
      Statut: this.status,
    };
  }

  // Supprimer un employé
  destroyEmploye() {
    console.log(
      `Employé supprimé: ${this.nom} ${this.prenom}, Email: ${this.email}, Poste: ${this.poste}, Date d'embauche: ${this.dateEmbauche}, Statut: ${this.status}`
    );
  }
}

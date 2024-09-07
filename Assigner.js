export default class Assigner {
  // Assigner une tâche à un employé
  static assignations = [];

  static assignerTache(employe, tache) {
    const nouvelleAssignation = {
      employe: employe,
      tache: tache,
      dateAssignation: new Date(),
    };
    Assigner.assignations.push(nouvelleAssignation);
    console.log(`Tâche "${tache}" assignée à ${employe}`);
  }

  // Retirer une tâche assignée à un employé
  static retirerTache(employe, tache) {
    Assigner.assignations = Assigner.assignations.filter(
      (assignation) => assignation.employe !== employe || assignation.tache !== tache
    );
    console.log(`Tâche "${tache}" retirée de ${employe}`);
  }

  // Obtenir la liste des tâches assignées à un employé
  static getTachesParEmploye(employe) {
    return Assigner.assignations
      .filter(assignation => assignation.employe === employe)
      .map(assignation => {
        return {
          tache: assignation.tache,
          dateAssignation: assignation.dateAssignation,
        };
      });
  }

  // Obtenir la liste des employés assignés à une tâche
  static getEmployesParTache(tache) {
    return Assigner.assignations
      .filter(assignation => assignation.tache === tache)
      .map(assignation =>
        {
          return {
            employe: assignation.employe,
            dateAssignation: assignation.dateAssignation,
          }
        })
  }
}

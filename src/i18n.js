const translations = {
  el: {
    services: 'Υπηρεσίες',
    about: 'Σχετικά',
    contact: 'Επικοινωνία',
    welcomeTitle: 'Καλώς ήρθατε στην Οδοντιατρική Μου Πρακτική',
    welcomeText: 'Παρέχω εξατομικευμένες και προσεκτικές οδοντιατρικές υπηρεσίες με έμφαση στην άνεση και την εμπιστοσύνη των ασθενών.',
    servicesTitle: 'Οδοντιατρικές Υπηρεσίες',
    servicesList: [
      {
        title: 'Διακοσμητική Οδοντιατρική',
        description: 'Επαγγελματικό καθάρισμα, λεύκανση και αισθητικές επεμβάσεις'
      },
      {
        title: 'Ορθοδοντική',
        description: 'Διόρθωση δοντιών με σύγχρονες μεθόδους'
      },
      {
        title: 'Επεμβάσεις',
        description: 'Εξαγωγές, εμφυτεύματα και άλλες χειρουργικές επεμβάσεις'
      }
    ],
    contactTitle: 'Επικοινωνήστε Μαζί Μας',
    addressTitle: 'Διεύθυνση',
    address: 'Κεντρική Πλατεία 15, Νέα Σάντα',
    phone: '+30 1111111111',
    hoursTitle: 'Ωράριο Λειτουργίας',
    hours: 'Δευ-Παρ: 09:00 - 20:00\nΣάββατο: 09:00 - 15:00',
    name: 'Όνομα',
    email: 'Email',
    message: 'Μήνυμα',
    sendButton: 'Αποστολή Μηνύματος',
    allRights: 'Όλα τα δικαιώματα διατηρούνται',
    aboutTitle: 'Σχετικά',
    aboutContent1: 'Καλώς ήρθατε στην οδοντιατρική πρακτική του Δρ. Φώτη. Εδώ, στο κέντρο της φροντίδας μας, βρίσκεται η εμπιστοσύνη και η άνεση των ασθενών μας.',
    aboutContent2: 'Ο Δρ. Φώτης είναι αφοσιωμένος στην παροχή εξατομικευμένων και προσεκτικών οδοντιατρικών υπηρεσιών, που σχεδιάζονται για να καλύψουν τις ανάγκες κάθε ασθενούς.',
    aboutContent3: 'Η πρακτική μας προσφέρει μια σειρά από υπηρεσίες, συμπεριλαμβανομένης της διακοσμητικής οδοντιατρικής, ορθοδοντικής και διάφορων χειρουργικών επεμβάσεων.',
    aboutContent4: 'Επικοινωνήστε μαζί μας σήμερα για να κλείσετε ένα ραντεβού και να μάθετε περισσότερα για το πώς μπορούμε να σας βοηθήσουμε να επιτύχετε ένα υγιές και χαμογελαστό στόμα.'
  }
}

export function useTranslation() {
  return {
    t: (key) => translations.el[key]
  }
}

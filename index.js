// Fonction pour attendre un certain temps (délai)
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));  // Résout après un délai
  }
  
  // Fonction pour afficher les valeurs avec un délai
  async function iterateWithAsyncAwait(values) {
    for (let value of values) {
      await delay(1000);  // Attendre 1 seconde
      console.log(value);  // Afficher la valeur
    }
  }
  
  /********************************************** */
  


async function awaitCall() {
    // Attendre 2 secondes pour simuler l'appel API
    const data = await new Promise(resolve => setTimeout(() => resolve("Données de l'API"), 2000));  
    console.log(data);  // Afficher les données
  }
  /*********************************************************** */
  


async function awaitCall() {
    try {
      // Simuler une erreur dans l'appel API
      const data = await new Promise((resolve, reject) => setTimeout(() => reject("Erreur de l'API"), 2000));  
      console.log(data);  // Si tout se passe bien, afficher les données
    } catch (error) {
      console.log("Erreur attrapée : " + error);  // Afficher l'erreur
    }
  }
  /************************************************************ */



  // Fonction pour afficher un message après un délai
function delayedMessage(message, delayTime) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(message);
        resolve();  // Résoudre la promesse une fois le délai écoulé
      }, delayTime);
    });
  }
  
  // Enchaîner trois messages
  async function chainedAsyncFunctions() {
    await delayedMessage("Message 1", 1000);  // Attendre 1 seconde
    await delayedMessage("Message 2", 1000);  // Attendre 1 seconde
    await delayedMessage("Message 3", 1000);  // Attendre 1 seconde
  }
  /****************************************************** */



  // Simuler un appel API avec un délai
function apiRequest(url) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Données de ${url}`);  // Retourner les données après un délai
      }, 2000);  // 2 secondes de délai
    });
  }
  
  // Effectuer deux appels API en même temps
  async function concurrentRequests() {
    const url1 = "https://api.example.com/1";
    const url2 = "https://api.example.com/2";
  
    // Attendre les deux appels simultanément
    const results = await Promise.all([apiRequest(url1), apiRequest(url2)]);
  
    console.log(results);  // Afficher les résultats des deux appels
  }
  /*************************************************************************************** */
  


  // Simuler un appel API avec un délai
function apiRequest(url) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Données de ${url}`);  // Retourner les données après un délai
      }, Math.random() * 2000);  // Délai aléatoire entre 0 et 2 secondes
    });
  }
  
  // Effectuer plusieurs appels API en parallèle
  async function parallelCalls(urls) {
    // Attendre que toutes les promesses soient résolues
    const results = await Promise.all(urls.map(url => apiRequest(url)));
  
    console.log(results);  // Afficher les résultats
  }
  
  // Liste des URLs
  const urls = [
    "https://api.example.com/1",
    "https://api.example.com/2",
    "https://api.example.com/3"
  ];
  
  
  

  
  // Appeler la fonction avec un tableau de valeurs
  //iterateWithAsyncAwait([1, 2, 3, 4, 5]);
  //awaitCall();
  //awaitCall();
  //chainedAsyncFunctions();
  //concurrentRequests();
  parallelCalls(urls);
  
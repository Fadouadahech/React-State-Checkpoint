import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "Mohamed Ben Ali",
      bio: "Un chirurgien est un professionnel de la médecine spécialisé dans la réalisation de chirurgies pour traiter diverses affections médicales.",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxaCOQKSHIK4XDJiD5aD3ilsT17hkmRf_QDw&usqp=CAU",
      profession: "chirurgien",
    },
    shows: false, // Un état pour afficher ou masquer les détails de la personne
    intervalId: null, // Un identifiant pour gérer l'intervalle de mise à jour du temps depuis le montage du composant
    secondsSinceMount: 0, // Le nombre de secondes depuis le montage du composant
  };

  // Méthode pour basculer l'affichage des détails de la personne
  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  // Méthode appelée après le montage du composant
  componentDidMount() {
    // Met en place un intervalle pour mettre à jour le temps depuis le montage du composant
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        secondsSinceMount: prevState.secondsSinceMount + 1,
      }));
    }, 1000);

    this.setState({ intervalId });
  }

  // Méthode appelée avant la suppression du composant
  componentWillUnmount() {
    // Nettoie l'intervalle pour éviter les fuites de mémoire
    clearInterval(this.state.intervalId);
  }

  render() {
    const { shows, person, secondsSinceMount } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <p>Profession : {person.profession}</p>
          </div>
        )}
        <p>Temps depuis le montage : {secondsSinceMount} secondes</p>
      </div>
    );
  }
}

export default App;

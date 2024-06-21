# react-modal-text
Ce composant permet de créer un bouton qui ouvre une modale avec du texte. Il est également possible d'affecter des fonctions à l'ouverture et à la fermeture de la modale. Ce composant a été créé dans le cadre d'un projet de la formation OpenClassrooms Développeur d'application - JavaScript React.

# Utilisation
Ce composant à 4 propriétés :
- **buttonName** [_String_] (obligatoire) 
- **text** [_String_] (obligatoire)
- **onOpen** [_function_]
- **onClose** [_function_]

# Exemples
## Juste une modale avec un texte
``` javascript
<ModalText buttonName="Modal button" text="Text in modal"></ModalText>
```
## Fonction lors de l'ouverture et de la fermeture de la modale
``` javascript
const openModalFunction = () => console.log("modal open");
const closeModalFunction = () => console.log("modal close");
```
``` javascript
<ModalText buttonName="Modal button" text="Text in modal" onOpen={openModalFunction} onClose={closeModalFunction}></ModalText>
```
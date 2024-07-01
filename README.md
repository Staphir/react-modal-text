# react-modal-text
Ce composant permet de créer un bouton qui ouvre une modale avec du texte. Il est également possible d'affecter des fonctions à l'ouverture et à la fermeture de la modale. Ce composant a été créé dans le cadre d'un projet de la formation OpenClassrooms Développeur d'application - JavaScript React.

# Utilisation
Ce composant à 4 propriétés :
- **buttonName** [_String_] (obligatoire) 
- **text** [_String_] (obligatoire)
- **onOpen** [_function_]
- **onClose** [_function_]

# Exemples
## Import du composant et de son style
``` javascript
import { ModalText } from "react-modal-text";
import 'react-modal-text/dist/style.css';
```
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

---

# react-modal-text
This component create a button that open textual modal. There is possible to affect functions when open and close modal. This component has created during the OpenClassrooms formation : _Développeur d'application - JavaScript React_.

# Utilisation
This component has 4 properties :
- **buttonName** [_String_] (require) 
- **text** [_String_] (require)
- **onOpen** [_function_]
- **onClose** [_function_]

# Examples
## Import component and style
``` javascript
import { ModalText } from "react-modal-text";
import 'react-modal-text/dist/style.css';
```
## Simple modal with text
``` javascript
<ModalText buttonName="Modal button" text="Text in modal"></ModalText>
```
## Function when open and close modal
``` javascript
const openModalFunction = () => console.log("modal open");
const closeModalFunction = () => console.log("modal close");
```
``` javascript
<ModalText buttonName="Modal button" text="Text in modal" onOpen={openModalFunction} onClose={closeModalFunction}></ModalText>
```

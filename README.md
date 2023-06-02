# Frontenders Community

## Challenge #14 - Shoe Configurator

In questa challenge bisogna implementare un **configuratore 3D** realizzare con **React Three Fiber**. In particolare, è possibile configurare i colori di un modello specifico di scarpa.

### Scaffolding
All'interno di ```/public``` è fornito il modello 3D (```shoe-draco.glb```) della scarpa. Sono forniti anche i componenti e il CSS di base. In App sono già impostati Canvas (senza setup) e i componenti Shoe e Picker.
**IMPORTANTE**: il componente Shoe renderizza di base un cubo. Naturalmente va eliminato, è messo lì solo come placeholder.


### Linee guida
- Impostare la ```Canvas``` di base;
- Importare il modello (nel componente Shoe): potete sfruttare l'utility di drei ```useGLTF```;
- Renderizzare la scarpa: il modello ha diverse ```mesh``` (8), ognuna con un suo materiale e una sua geometria. Per renderizzare più mesh si può utilizzare ```group```;
- Aggiungere il componente ```OrbitControls``` per poter muovere la camera (come si preferisce, in orizzontale o in tutte le direzioni);
- Aggiungere l'```Environment``` per migliorare il rendering;
- Aggiungere le luci (```ambientLight```, ```spotLight```) e le ombre (```ContactShadows```);
- Gestire i click sul gruppo di mesh: al click su una mesh va mostrato l'```HexColorPicker``` impostato con il colore della mesh selezionata;
- Tramite l'HexColorPicker è possibile cambiare il colore della mesh selezionata;
- Al click al di fuori del modello l'HexColorPicker viene nascosto;


*[Opzionale]*
Se si vuole impostare un effetto "levitazione", si può sfruttare ```useRef``` sul gruppo di mesh e ```useFrame``` con le seguenti operazioni:
```js
useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20);
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
})
```

### Tecnologie

Per svolgere la challenge è necessario utilizzare **React Three Fiber** e la libreria di utilities **drei**. Per il color picker è consigliato il componente HexColorPicker della libreria **react-colorful**. Per la gestione dello stato viene fornito Valtio, ma si può cambiare con la libreria che si preferisce.

### Preview
La challenge è l'implementazione di un [esempio](https://codesandbox.io/s/qxjoj) fornito sul sito ufficiale di React Three Fiber.
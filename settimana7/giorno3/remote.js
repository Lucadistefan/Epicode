// Object literal -> {}
const remote = {
  // Quando ad una chiave è associato un elemento primitivo o istanza
  // questa viene considerata una proprietà. Le proprietà concorrono a definire lo stato di un oggetto
  batteryLevel: 100,
  channel: "",
  // Quando ad una chiave associamo una funzione, questa si dice che contiene un
  // metodo. Il metodo altro non è che una funzione nel contesto di un oggetto
  goToChannel: function (channel) {
    this.channel = channel;
  },
};

function createRemote() {
  return {
    // Quando ad una chiave è associato un elemento primitivo o istanza
    // questa viene considerata una proprietà. Le proprietà concorrono a definire lo stato di un oggetto
    batteryLevel: 100,
    channel: "",
    // Quando ad una chiave associamo una funzione, questa si dice che contiene un
    // metodo. Il metodo altro non è che una funzione nel contesto di un oggetto
    goToChannel: function (channel) {
      this.channel = channel;
    },
  };
}

// In JavaScript, una funzione nomenclata in PascalCase è gestita dal JavaScript Engine
// come     COSTRUTTORE
// I costruttori restituiscono implicitamente il nuovo oggetto istanza
function Remote(batteryLevel = 100) {
  this.batteryLevel = batteryLevel;
  this.channel = "";

  this.goToChannel = function (channel) {
    this.channel = channel;
  };
}

const remote2 = new Remote(50); // "50" viene passato al parametro formale batteryLevel
const remote3 = new Remote(); // Nessun valore viene erogato al costruttore, verrà usato quello di default

/******** CLASSI ********/

class Remote {
    constructor(batteryLevel = 100) {
        this.batteryLevel = batteryLevel;
        this.channel = '';
        this.#_volume = 15;
    }

    changeVolume(isIncrement) {
        isIncrement ? this.#_volume++ : this.#_volume--;
    }

    goToChannel(channel) {
        this.channel = channel;
    }
}

const r = new Remote();
r.changeVolume(true);


export function getProduct(id) {
    fetch(`https://fakestoreapi.com/products/${id}`).then(
        // la risposta contiene un metodo json che converte il json in un oggetto / array
        res => res.json()
    ).then(
        product => new Product {
            product.id,
            product.title,
        }
    )
}

class Product {
    constructor(id, name, description, price, image, category, rating) {
        this.category = category;
        this.description = description;
        this.id = id;
        this.image = image;
        this.name = name;
        this.price = price;
        this.rating = rating;
    }


}
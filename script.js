var lastCard = 1;

function addCard() {
  var currCard = "#card" + lastCard;
  currCard = document.querySelector(currCard);
  lastCard += 1;
  var card = document.querySelector("#card0");
  var cloneCard = card.cloneNode(true);
  cloneCard.id = "card" + lastCard;
  cloneCard.classList.remove("visually-hidden");
  currCard.after(cloneCard);
}

// [ЧБ/цвет[кол-во[А4][А3]]]
const priceSheet = [
  [
    [0, 0, 0],
    [1, 32, 40],
    [6, 26, 38],
    [11, 23, 37],
    [21, 20, 34],
    [51, 19, 32],
    [101, 18, 29],
    [501, 15, 28],
  ],

  [
    [0, 0, 0],
    [1, 76, 92],
    [6, 74, 83],
    [11, 69, 75],
    [21, 66, 72],
    [51, 50, 55],
    [101, 44, 50],
    [201, 39, 44],
  ],
];

const pricePaper = [
  [7, 17, 23, 46, 157],
  [17, 33, 45, 91, 297],
];

var result;
var sheets;
var price;
var radio;
var side;
var paper;

function calculate() {
  document.getElementById("rnd-note-cnt").classList.add("visually-hidden");

  sheets = Number(document.getElementById("sheets").value);

  radio = document.getElementsByName("color");
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      color = i;
      break;
    }
  }

  radio = document.getElementsByName("size");
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      size = i + 1;
      break;
    }
  }

  for (var i = 7; i >= 0; i--) {
    if (sheets >= priceSheet[color][i][0]) {
      price = priceSheet[color][i][size];
      break;
    }
  }

  radio = document.getElementsByName("paper");
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      paper = i - 1;
      break;
    }
  }

  if (paper >= 0) {
    radio = document.getElementsByName("side");
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        side = i + 1;
        break;
      }
    }
    size += -1;
    paper = pricePaper[size][paper];

    document.getElementById("insert-price").innerHTML =
      "Печать: " + price + "₽ × " + sheets + " стр = " + price * sheets + "₽";
    document.getElementById("insert-paper-price").innerHTML =
      "Бумага: " +
      paper +
      "₽ × " +
      Math.ceil(sheets / side) +
      " лист = " +
      paper * Math.ceil(sheets / side) +
      "₽";

    result = sheets * price + Math.ceil(sheets / side) * paper;
    price = result / sheets;
    if (((result / sheets) * 10) % 1 > 0) {
      document.getElementById("rnd-note").innerHTML =
        "Cтоимость за 1 шт (" +
        Math.round(price * 10000) / 10000 +
        "...) была округлена, по кассе следует пробить <b>" +
        result +
        "₽ × 1 шт </b>";
      document
        .getElementById("rnd-note-cnt")
        .classList.remove("visually-hidden");
    }

    price = Math.round(price * 100) / 100;
  } else {
    result = sheets * price;
    document.getElementById("insert-price").innerHTML =
      "Печать: " + price + "₽ × " + sheets + " стр = " + result + "₽";
    document.getElementById("insert-paper-price").innerHTML =
      "Бумага: Включена";
  }

  document.getElementById("result").innerHTML =
    price + "₽ × " + sheets + " шт = " + result + "₽";
}

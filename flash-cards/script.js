const questions = [
  {
    question: "Kā sašķidrina gāzes?",
    answer: "Samazinot temperatūru un palielinot spiedienu.",
  },
  {
    question: "Ko sauc par absolūto gaisa mitrumu?",
    answer: "Ūdens tvaiku masa noteiktā gaisa tilpumā.",
  },
  {
    question: "Ko sauc par relatīvo gaisa mitrumu?",
    answer:
      "Ūdens tvaiku daudzums procentos no maksimāli iespējamā pie dotās temperatūras.",
  },
  {
    question: "Kas ir rasas punkts? Kā var noteikt rasas punktu?",
    answer:
      "Temperatūra, pie kuras ūdens tvaiki sāk kondensēties. To nosaka, atdzesējot gaisu līdz kondensācijas brīdim.",
  },
  {
    question: "Kā noteikt relatīvo mitrumu, ja zināms rasas punkts?",
    answer:
      "Izmantojot rasas punkta temperatūru un piesātinājuma tvaika spiedienu.",
  },
  {
    question: "Kā ar psihrometru nosaka relatīvo gaisa mitrumu?",
    answer: "Salīdzinot mitrā un sausā termometra rādījumus.",
  },
  {
    question: "Kā darbojas rasas punkta higrometrs?",
    answer: "Mēra temperatūru, kurā sāk veidoties rasa, lai noteiktu mitrumu.",
  },
  {
    question: "Kā darbojas Augusta psihrometrs?",
    answer:
      "Ar diviem termometriem: viens mitrs, otrs sauss; starpība palīdz aprēķināt mitrumu.",
  },
  {
    question: "Kāda nozīme ir gaisa mitrumam?",
    answer: "Ietekmē veselību, laika apstākļus un materiālu izturību.",
  },
  {
    question: "Kā veidojas šķidruma virsmas spiediens?",
    answer:
      "Tas veidojas šķidruma molekulu mijiedarbības dēļ pie šķidruma virsmas.",
  },
  {
    question: "Kas ir šķidruma virsmas spraigums?",
    answer:
      "Spēks, kas iedarbojas uz šķidruma virsmu, mērot to kā spēku uz vienības garuma.",
  },
  {
    question: "Kādos eksperimentos var novērot šķidruma virsmas spraigumu?",
    answer:
      "Var novērot ar pilieniem, virsmas pievilkšanu pie cietām virsmām vai ar kapilaritāti.",
  },
  {
    question: "Ko sauc par šķidruma virsmas spraiguma koeficientu?",
    answer: "Tas ir spraiguma spēks uz šķidruma virsmas vienības garuma.",
  },
  {
    question: "Ko sauc par virsmas spraiguma spēku?",
    answer:
      "Spēks, kas nepieciešams, lai pārvarētu šķidruma virsmas spraigumu.",
  },
  {
    question:
      "Kā eksperimentāli var noteikt šķidruma virsmas spraiguma koeficientu?",
    answer:
      "Veicot eksperimentus ar pilieniem un izmērot spēku uz virsmas vienību.",
  },
  {
    question: "No kā atkarīgs šķidruma virsmas spraiguma koeficients?",
    answer: "Tas ir atkarīgs no šķidruma veida un temperatūras.",
  },
  {
    question: "Kas ir slapināšana un neslapināšana?",
    answer:
      "Slapināšana ir parādība, kad šķidrums pielīp pie cietas virsmas, neslapināšana – kad šķidrums norit.",
  },
  {
    question: "Kā aprēķina šķidruma virsmas enerģiju?",
    answer:
      "Virsmu enerģiju aprēķina, izmantojot virsmas spraiguma koeficientu un virsmas laukumu.",
  },
  {
    question: "Ko sauc par kapilaritāti, un kur tā izpaužas?",
    answer:
      "Kapilaritāte ir šķidruma spēja pieaugt caur šaurām caurulēm vai porām, piemēram, augos.",
  },
  {
    question: "Kā izskaidrot kapilaritātes parādību?",
    answer:
      "Tā rodas no pievilkšanās spēkiem starp šķidrumu un cieto materiālu.",
  },
  {
    question: "Kādos gadījumos kapilaritāte ir derīga un kādos - kaitīga?",
    answer:
      "Derīga – augos, kaitīga – ūdens uzsūktos materiālos, piemēram, būvniecībā.",
  },
  {
    question: "Ar ko kristāliskas vielas atšķiras no amorfām vielām?",
    answer:
      "Kristāliskas vielas ir ar kārtotām molekulām, amorfās vielas – nejaušas struktūras.",
  },
  {
    question: "Kas ir anizotropija?",
    answer:
      "Anizotropija ir materiāla īpašība, kad tā īpašības mainās atkarībā no virziena.",
  },
  {
    question: "Kas ir mono kristāls, poli kristāls?",
    answer:
      "Mono kristāls ir viens vienots kristāls, poli kristāls sastāv no daudziem maziem kristāliem.",
  },
  {
    question: "Nosaukt galvenos cietu ķermeņu deformācijas veidus",
    answer: "Elastīga deformācija, plastiska deformācija, plīsums.",
  },
  {
    question: "Ko sauc par mehānisko spriegumu?",
    answer:
      "Spriegums ir spēks uz vienības laukuma, kas iedarbojas uz ķermeni.",
  },
  {
    question:
      "Kāda sakarība pastāv starp mehānisko spriegumu un relativo pagarinājumu?",
    answer:
      "Spriegums ir proporcionāls pagarinājumam līdz materiāla izturības robežai.",
  },
  {
    question: "Ar ko atšķiras elastīgā deformācija no plastiskās deformācijas?",
    answer:
      "Elastīga deformācija ir atgriezeniska, plastiska – neatgriezeniska.",
  },
  {
    question: "Ko sauc par izturības robežu?",
    answer:
      "Izturības robeža ir maksimālais spriegums, kuru materiāls var izturēt bez plīsuma.",
  },
  {
    question: "Kas ir izturības rezerve?",
    answer:
      "Tas ir sprieguma daudzums, kuru materiāls var izturēt pirms plīsuma, pārsniedzot izturības robežu.",
  },
  {
    question: "Kādus materiālus sauc par trausliem?",
    answer: "Materiālus, kas viegli plīst vai lūst, piemēram, stikls.",
  },
  {
    question: "Kāpēc sasilstot ķermenis izplešas?",
    answer:
      "Tāpēc, ka siltums palielina molekulu kustību, palielinot attālumu starp tām.",
  },
  {
    question: "Ko sauc par lineāro izplešanos?",
    answer:
      "Izplešanās, kas notiek pa vienu dimensiju (garumu) ķermenim sasilstot.",
  },
  {
    question: "Kā var iegūt lineārās izplešanās koeficienta aprēķina formulu?",
    answer: "Izmantojot ķermeņa garuma izmaiņas un temperatūras izmaiņas.",
  },
  {
    question: "Ko sauc par lineārās izplešanās koeficientu?",
    answer:
      "Tas ir skaitlis, kas raksturo ķermeņa garuma izmaiņas, atkarībā no temperatūras izmaiņām.",
  },
  {
    question: "Kā mainās ķermeņu blīvums, tos sasildot?",
    answer: "Ķermeņu blīvums samazinās, jo tie izplešas.",
  },
];

let isSingleCardMode = true; // По умолчанию режим одной карточки

// Функция для отображения одной карточки
function showRandomCard() {
  const currentCardIndex = Math.floor(Math.random() * questions.length);
  const currentCard = questions[currentCardIndex];

  const card = document.createElement("div");
  card.className = "card";

  const questionElement = document.createElement("div");
  questionElement.className = "question";
  questionElement.textContent = currentCard.question;

  const answerElement = document.createElement("div");
  answerElement.className = "answer";
  answerElement.textContent = currentCard.answer;

  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Show Answer";
  toggleButton.addEventListener("click", () => {
    card.classList.toggle("show-answer");
    toggleButton.textContent = card.classList.contains("show-answer")
      ? "Hide Answer"
      : "Show Answer";
  });

  card.appendChild(questionElement);
  card.appendChild(answerElement);
  card.appendChild(toggleButton);

  const container = document.getElementById("card-container");
  container.innerHTML = ""; // Очистка контейнера
  container.appendChild(card);
}

// Функция для отображения списка карточек
function showCardList() {
  const container = document.getElementById("card-container");
  container.innerHTML = ""; // Очистка контейнера

  questions.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.textContent = item.question;

    const answerElement = document.createElement("div");
    answerElement.className = "answer";
    answerElement.textContent = item.answer;

    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Show Answer";
    toggleButton.addEventListener("click", () => {
      card.classList.toggle("show-answer");
      toggleButton.textContent = card.classList.contains("show-answer")
        ? "Hide Answer"
        : "Show Answer";
    });

    card.appendChild(questionElement);
    card.appendChild(answerElement);
    card.appendChild(toggleButton);
    container.appendChild(card);
  });
}

// Функция переключения режима
function toggleMode() {
  isSingleCardMode = !isSingleCardMode; // Переключение режима
  const modeButton = document.getElementById("toggle-mode");
  const nextCardButton = document.getElementById("next-card");

  if (isSingleCardMode) {
    modeButton.textContent = "Switch to List Mode";
    nextCardButton.style.display = "block";
    showRandomCard();
  } else {
    modeButton.textContent = "Switch to Single Card Mode";
    nextCardButton.style.display = "none";
    showCardList();
  }
}

// Обработчик кнопки переключения режима
document.getElementById("toggle-mode").addEventListener("click", toggleMode);

// Обработчик кнопки "Next Card"
document.getElementById("next-card").addEventListener("click", showRandomCard);

// Показать первую карточку при загрузке
showRandomCard();

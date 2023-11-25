/******** dictionary ********/
const characters = [
  { pl: "A", gl: "\u2C00" },
  { pl: "a", gl: "\u2C30" },
  { pl: "Ą", gl: "\u2C28" },
  { pl: "ą", gl: "\u2C58" },
  { pl: "B", gl: "\u2C01" },
  { pl: "b", gl: "\u2C31" },
  { pl: "C", gl: "\u2C1C" },
  { pl: "c", gl: "\u2C4C" },
  { pl: "Ć", gl: "\u2C1C\u2C20" },
  { pl: "ć", gl: "\u2C4C\u2C50" },
  { pl: "Ch", gl: "\u2C18" },
  { pl: "CH", gl: "\u2C18" },
  { pl: "ch", gl: "\u2C48" },
  { pl: "Cz", gl: "\u2C1D" },
  { pl: "CZ", gl: "\u2C1D" },
  { pl: "cz", gl: "\u2C4D" },
  { pl: "D", gl: "\u2C04" },
  { pl: "d", gl: "\u2C34" },
  { pl: "Dz", gl: "\u2C07" },
  { pl: "DZ", gl: "\u2C07" },
  { pl: "dz", gl: "\u2C37" },
  { pl: "Dż", gl: "\u2C0C" },
  { pl: "DŻ", gl: "\u2C0C" },
  { pl: "dż", gl: "\u2C3C" },
  { pl: "E", gl: "\u2C05" },
  { pl: "e", gl: "\u2C35" },
  { pl: "Ę", gl: "\u2C24" },
  { pl: "ę", gl: "\u2C54" },
  { pl: "F", gl: "\u2C2A" },
  { pl: "f", gl: "\u2C5A" },
  { pl: "G", gl: "\u2C03" },
  { pl: "g", gl: "\u2C33" },
  { pl: "H", gl: "\u2C22" },
  { pl: "h", gl: "\u2C52" },
  { pl: "I", gl: "\u2C0B" },
  { pl: "I", gl: "\u2C09" },
  { pl: "i", gl: "\u2C3B" },
  { pl: "J", gl: "\u2C0A" },
  { pl: "j", gl: "\u2C3A" },
  { pl: "Ja", gl: "\u2C21" },
  { pl: "JA", gl: "\u2C21" },
  { pl: "ja", gl: "\u2C51" },
  { pl: "Ją", gl: "\u2C29" },
  { pl: "JĄ", gl: "\u2C29" },
  { pl: "ją", gl: "\u2C59" },
  { pl: "Jo", gl: "\u2C26" },
  { pl: "JO", gl: "\u2C26" },
  { pl: "jo", gl: "\u2C56" },
  { pl: "Ju", gl: "\u2C23" },
  { pl: "JU", gl: "\u2C23" },
  { pl: "ju", gl: "\u2C53" },
  { pl: "K", gl: "\u2C0D" },
  { pl: "k", gl: "\u2C3D" },
  { pl: "L", gl: "\u2C0E" },
  { pl: "l", gl: "\u2C3E" },
  { pl: "Ł", gl: "\u2C1F\u2C0E" },
  { pl: "ł", gl: "\u2C4F\u2C3E" },
  { pl: "M", gl: "\u2C0F" },
  { pl: "m", gl: "\u2C3F" },
  { pl: "N", gl: "\u2C10" },
  { pl: "n", gl: "\u2C40" },
  { pl: "Ń", gl: "\u2C10\u2C20" },
  { pl: "ń", gl: "\u2C40\u2C50" },
  { pl: "N", gl: "\u2C10" },
  { pl: "n", gl: "\u2C40" },
  { pl: "O", gl: "\u2C19" },
  { pl: "o", gl: "\u2C41" },
  { pl: "Ó", gl: "\u2C16" },
  { pl: "ó", gl: "\u2C46" },
  { pl: "P", gl: "\u2C12" },
  { pl: "p", gl: "\u2C42" },
  { pl: "R", gl: "\u2C13" },
  { pl: "r", gl: "\u2C43" },
  { pl: "Rz", gl: "\u2C06" },
  { pl: "RZ", gl: "\u2C06" },
  { pl: "rz", gl: "\u2C36" },
  { pl: "S", gl: "\u2C14" },
  { pl: "s", gl: "\u2C44" },
  { pl: "Ś", gl: "\u2C14\u2C20" },
  { pl: "ś", gl: "\u2C44\u2C50" },
  { pl: "Sz", gl: "\u2C1E" },
  { pl: "SZ", gl: "\u2C1E" },
  { pl: "sz", gl: "\u2C4E" },
  { pl: "Szcz", gl: "\u2C1B" },
  { pl: "SZCZ", gl: "\u2C1B" },
  { pl: "szcz", gl: "\u2C4B" },
  { pl: "T", gl: "\u2C15" },
  { pl: "t", gl: "\u2C45" },
  { pl: "U", gl: "\u2C16" },
  { pl: "u", gl: "\u2C46" },
  { pl: "W", gl: "\u2C02" },
  { pl: "w", gl: "\u2C32" },
  { pl: "V", gl: "\u2C02" },
  { pl: "v", gl: "\u2C32" },
  // { pl: "X", gl: "" },
  // { pl: "X", gl: "" },
  { pl: "Y", gl: "\u2C20\u2C09" },
  { pl: "y", gl: "\u2C50\u2C39" },
  { pl: "Z", gl: "\u2C08" },
  { pl: "z", gl: "\u2C38" },
  { pl: "Ź", gl: "\u2C08\u2C20" },
  { pl: "ź", gl: "\u2C38\u2C50" },
  { pl: "Ż", gl: "\u2C06" },
  { pl: "ż", gl: "\u2C36" },
];
const PLtoGL = {};
const GLtoPL = {};
for (const char of characters) {
  PLtoGL[char.pl] = char.gl;
  GLtoPL[char.gl] = char.pl;
}
window.addEventListener("load", () => {
  window.addEventListener("online", () => {
    // Run getLanguage to online when they change to online.
    getLanguage();
  });

  window.addEventListener("offline", () => {
    // Run getLanguage to offline when they change to offline.
    getLanguage();
  });
});
var language;
var emptyInput;
function getLanguage() {
  localStorage.getItem("language") == null ? setLanguage("pl") : false;
  localStorage.getItem("lang") == null ? localStorage.setItem("lang", "PLtoGL") : false;
  $.getJSON(`./languages/${localStorage.getItem("language")}.json`, function (data) {
    language = data;
    changeText(language);
    emptyInput = `${language["translator"]}`;
    textURL("read");
  });
}
function setLanguage(lang) {
  localStorage.setItem("language", lang);
  getLanguage();
}
$("button#change-language").on("click", function () {
  setLanguage(`${localStorage.getItem("language") == "en" ? "pl" : "en"}`);
  $(this).attr("lang", localStorage.getItem("language") == "en" ? "pl" : "en");
});
getLanguage();
function changeText(data) {
  $("[data-language]").each((e) => {
    let languageData = $("[data-language]").get(e).getAttribute("data-language");
    $("[data-language]").get(e).innerHTML = data[languageData];
  });
  checkLang();
  textURL("read");
}

/******** check source-text is empty or not ********/
$(".source-text").on("input", function (e) {
  textURL("write");
  if (e.target.value === "") {
    $(".translated-text").text(emptyInput);
    $(this).removeAttr("style");
  } else {
    translateText($(this).val());
    $(this).height(0).height(this.scrollHeight);
  }
});
/**
 * Add text to translate to URL
 */
function textURL(option) {
  if (option === "write") {
    if (history.pushState) {
      let text = $(".source-text").val();
      if (text === "") {
        var newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + ``;
        window.history.pushState({ path: newURL }, "", newURL);
      } else {
        var newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + `?text=${text}`;
        window.history.pushState({ path: newURL }, "", newURL);
      }
    }
  } else if (option === "read") {
    let params = new URL(document.location).searchParams;
    let text = params.get("text");
    if (text === null) {
      $(".translated-text").text(`${language["translator"]}`);
    } else {
      $(".source-text").val(text);
      translateText(text);
    }
  } else {
    alert("Wystąpił problem proszę odświeżyć stronę.We have a problem, please reload the page.");
  }
}
/**
 *  Create keyboard
 */
function Keyboard(lang) {
  let scrollPosition = $("#keyboard").scrollTop();
  $("#keyboard").html("");
  let lang1 = "";
  let lang2 = "";
  $(function () {
    characters.forEach(function (characters, id) {
      if (lang === "GLtoPL") {
        lang1 = characters.gl;
        lang2 = characters.pl;
      } else if (lang === "PLtoGL") {
        lang1 = characters.pl;
        lang2 = characters.gl;
      } else {
        console.log("We have a problem!!!");
      }
      $("#keyboard").append(`<button class="key" data-value="${lang1}"><b>${lang1}</b><p>${lang2}</p></button>`);
    });
    if (scrollPosition !== 0) {
      $("#keyboard").scrollTop(scrollPosition);
    }
    $(".key").on("click", function () {
      let sourceText = $(".source-text").val();
      $(".source-text").val(sourceText + $(this).children("b").text());
      translateText();
    });
  });
}

/**
 *  Translate text
 * @param {string} text Text to translate
 */
function translateText(text) {
  let word = text;
  let result = [];
  let addLetters = () => $(".translated-text").html(result);
  let dictionary = localStorage.getItem("lang") === "PLtoGL" ? PLtoGL : GLtoPL;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let combined = char + word[i + 1];
    let combinedSZCZ = combined + word[i + 2] + word[i + 3];
    if (combinedSZCZ === "szcz") {
      console.log(combinedSZCZ);
      result.push(dictionary[combinedSZCZ] || combinedSZCZ);
      i += 3;
    } else {
      if (combined in dictionary) {
        result.push(dictionary[combined] || combined);
        i++;
      } else {
        result.push(dictionary[char] || char);
      }
    }
  }
  addLetters();
}
/******** change language ********/
$("#change_language").on("click", function () {
  changeLang();
});
function changeLang() {
  let lang = localStorage.getItem("lang");
  if (lang === "PLtoGL") {
    localStorage.setItem("lang", "GLtoPL");
  } else if (lang === "GLtoPL") {
    localStorage.setItem("lang", "PLtoGL");
  }
  let inputTranslateText = $(".translated-text");
  let textareaInputText = $(".source-text");
  if (textareaInputText.val() === "") {
    textareaInputText.val();
    inputTranslateText.text(emptyInput);
  } else {
    textareaInputText.val(inputTranslateText.text());
    textareaInputText.height(0).height(textareaInputText[0].scrollHeight);
    textURL("write");
  }
  if ($(".translated-text").text() === emptyInput) {
  } else {
    textURL("read");
  }
  checkLang();
}
function checkLang() {
  let lang1 = $("#lang-1");
  let lang2 = $("#lang-2");
  let lang = localStorage.getItem("lang");
  if (lang === "PLtoGL") {
    lang1.attr("lang", "pl");
    lang2.attr("lang", "gl");
    $("#lang-1 > .text-language").html(`${language["translator-text-first"]}`);
    $("#lang-2 > .text-language").html(`${language["translator-text-second"]}`);
    $("title").text(`${language["title-LG"]}`);
    Keyboard("PLtoGL");
  } else if (lang === "GLtoPL") {
    lang1.attr("lang", "gl");
    lang2.attr("lang", "pl");
    $("#lang-1 > .text-language").html(`${language["translator-text-second"]}`);
    $("#lang-2 > .text-language").html(`${language["translator-text-first"]}`);
    $("title").text(`${language["title-GL"]}`);
    Keyboard("GLtoPL");
  }
}
$("#toggleKeyboard").on("click", function () {
  $("#keyboard").toggle();
  if ($(this).children("u").text() === "Ukryj klawiaturę") {
    $(this).children("u").text("Pokaż klawiaturę");
  } else {
    $(this).children("u").text("Ukryj klawiaturę");
  }
});
// copy translate text
$("#copy-button").on("click", function () {
  let text = $(".translated-text").text();
  navigator.clipboard.writeText(text);
});
/** Service worker start */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js", {
      scope: "/",
    })
    .then((registration) => {
      let serviceWorker;
      if (registration.installing) {
        serviceWorker = registration.installing;
        document.querySelector("#kind").textContent = "installing";
      } else if (registration.waiting) {
        serviceWorker = registration.waiting;
        document.querySelector("#kind").textContent = "waiting";
      } else if (registration.active) {
        serviceWorker = registration.active;
        document.querySelector("#kind").textContent = "active";
      }
      if (serviceWorker) {
        // logState(serviceWorker.state);
        serviceWorker.addEventListener("statechange", (e) => {
          // logState(e.target.state);
        });
      }
    })
    .catch((error) => {
      // Something went wrong during registration. The service-worker.js file
      // might be unavailable or contain a syntax error.
    });
} else {
  // The current browser doesn't support service workers.
  // Perhaps it is too old or we are not in a Secure Context.
}

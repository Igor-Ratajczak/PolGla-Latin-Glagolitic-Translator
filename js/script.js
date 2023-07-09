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
  { pl: "Ć", gl: "\u2C1B" },
  { pl: "ć", gl: "\u2C4B" },
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
  { pl: "Ł", gl: "\u2C0E\u2C1F" },
  { pl: "ł", gl: "\u2C3E\u2C4F" },
  { pl: "M", gl: "\u2C0F" },
  { pl: "m", gl: "\u2C3F" },
  { pl: "N", gl: "\u2C10" },
  { pl: "n", gl: "\u2C40" },
  { pl: "Ń", gl: "\u2C10\u2C4F" },
  { pl: "ń", gl: "\u2C40\u2C4F" },
  { pl: "Ni", gl: "\u2C10\u2C4F" },
  { pl: "NI", gl: "\u2C10\u2C1F" },
  { pl: "ni", gl: "\u2C40\u2C4F" },
  { pl: "O", gl: "\u2C11" },
  { pl: "o", gl: "\u2C41" },
  // { pl: "Ó", gl: "\u2C16" },
  // { pl: "ó", gl: "\u2C46" },
  { pl: "Ot", gl: "\u2C19" },
  { pl: "OT", gl: "\u2C19" },
  { pl: "ot", gl: "\u2C49" },
  { pl: "P", gl: "\u2C12" },
  { pl: "p", gl: "\u2C42" },
  { pl: "R", gl: "\u2C13" },
  { pl: "r", gl: "\u2C43" },
  { pl: "S", gl: "\u2C14" },
  { pl: "s", gl: "\u2C44" },
  { pl: "Ś", gl: "\u2C14\u2C4F" },
  { pl: "ś", gl: "\u2C44\u2C4F" },
  { pl: "Sz", gl: "\u2C1E" },
  { pl: "SZ", gl: "\u2C1E" },
  { pl: "sz", gl: "\u2C4E" },
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
  { pl: "Ż", gl: "\u2C06" },
  { pl: "ż", gl: "\u2C36" },
];
const PLtoGL = {};
const GLtoPL = {};
const emptyInput = `Tłumaczenie...`;
for (const char of characters) {
  PLtoGL[char.pl] = char.gl;
  GLtoPL[char.gl] = char.pl;
}

/******** check source-text is empty or not ********/
$(".source-text").on("input", function (e) {
  if (e.target.value === "") {
    $(".translated-text").text(emptyInput);
    $(this).removeAttr("style");
  } else {
    translateText();
    $(this)
      .height(0)
      .height(this.scrollHeight - 120);
  }
});

/******** Keyboard ********/
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
      let tabindex = id + 5;
      $("#keyboard").append(
        `<button class="key" data-value="${lang1}" tabindex="${tabindex}"><b>${lang1}</b><p>${lang2}</p></button>`
      );
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

/******** translate text ********/
function translateText() {
  let string = $(".source-text").val();
  let word = string;
  let result = [];
  let addLetters = () => $(".translated-text").html(result);
  let dictionary = $("#lang-1").attr("lang") === "pl" ? PLtoGL : GLtoPL;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let combined = char + word[i + 1];
    if (combined in dictionary) {
      result.push(dictionary[combined] || combined);
      i++;
    } else {
      result.push(dictionary[char] || char);
    }
  }
  addLetters();
}
/******** change language ********/
$(function () {
  $("#change_language").on("click", function () {
    let lang1 = $("#lang-1");
    let lang2 = $("#lang-2");
    let lang = lang1.attr("lang");
    if (lang === "pl") {
      lang1.attr("lang", "gl");
      lang2.attr("lang", "pl");
      $("#lang-1 > .text-language").html("GŁAGOLICA (ⰃⰎⰟⰀⰃⰑⰎⰋⰜⰀ)");
      $("#lang-2 > .text-language").html("POLSKI");
      Keyboard("GLtoPL");
    } else if (lang === "gl") {
      lang1.attr("lang", "pl");
      lang2.attr("lang", "gl");
      $("#lang-1 > .text-language").html("POLSKI");
      $("#lang-2 > .text-language").html("GŁAGOLICA (ⰃⰎⰟⰀⰃⰑⰎⰋⰜⰀ)");
      Keyboard("PLtoGL");
    }
    let inputTranslateText = $(".translated-text");
    let textareaInputText = $(".source-text");
    if (textareaInputText.val() === "") {
      textareaInputText.val();
      inputTranslateText.html(emptyInput);
    } else {
      textareaInputText.val(inputTranslateText.html());
    }
    if ($(".translated-text").html() === emptyInput) {
    } else {
      translateText();
    }
  });
});
Keyboard("PLtoGL");
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
  let copyText = $(".translated-text").text();
  navigator.clipboard.writeText(copyText);
});

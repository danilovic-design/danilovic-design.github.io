function getAddr() {
  let a = "l";
  let b = "QA==";
  let c = "a";
  let d = "s";
  let e = "o";
  let f = "d";
  let g = "Lg==";
  let h = "n";
  let i = "i";
  let j = "eWFob28=";
  let k = "Y29t";
  let l = a + c + d;
  let m = l.concat(a + e);
  let n = (f + c + h).concat(i);
  let o = m + atob(g) + n;
  let docRef = document.querySelector("#actionbutton");
  docRef.innerHTML = "";
  let newElement = document.createElement("h3");
  newElement.innerHTML = o + atob(b) + atob(j) + atob(g) + atob(k);
  docRef.appendChild(newElement);
}

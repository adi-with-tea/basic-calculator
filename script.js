function dis(val) {
  let result = document.getElementById("result");
  if (result.value === "0") {
    result.value = val;
  } else {
    result.value += val;
  }
}

function solve() {
  let x = document.getElementById("result").value;
  try {
    let y = math.evaluate(x);
    document.getElementById("result").value = y;
  } catch {
    document.getElementById("result").value = "Error";
  }
}

function clr() {
  document.getElementById("result").value = "0";
}

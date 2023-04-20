document.getElementById("send").addEventListener("click", async (event) => {
  document.getElementById("send").disabled = true
  let inputValue = document.getElementById("question").value;
  let answer = await getAnswer(inputValue);
  document.getElementById("send").disabled = false
  document.getElementById("answer").innerText = answer;
});

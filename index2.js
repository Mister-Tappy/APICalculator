function send() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operator = document.getElementById("operator").value;

    fetch(`http://localhost:3001/?a=${num1}&b=${num2}&op=${encodeURIComponent(operator)}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let summit = document.getElementById("summit");

            if (data.error) {
                summit.innerHTML = "Error : " + data.error;
            } else {
                summit.innerHTML = "Result: " + data.message;
            }
            console.log(data);
        })
}
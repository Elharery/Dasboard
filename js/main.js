function Hello() { 
    alert("================\n== Hello Midooo! ==\n================")
    alert("5 + 5 = ?")
    let n = prompt("Enter Right Answer: ")
    if (n == 10) {
        alert("================\n==== Good Job! ====\n================")
    }
    else {
        alert("Noo It Is Wrong Answer :(")
    }
    while (n != 10) {
        let n = prompt("Enter Right Answer: ")
        if (n == 10) {
            alert("================\n==== Good Job! ====\n================")
            break
        }
        else {
            alert("Noo It Is Wrong Answer :(")

        }
        
    }
}
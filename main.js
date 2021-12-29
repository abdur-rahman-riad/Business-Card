const name = document.getElementById("name").innerText;
const phone = document.getElementById("phone").innerText;
const email = document.getElementById("email").innerText;


document.getElementById("editBtn").addEventListener("click", () => {
    document.getElementById("updateForm").style.display = "block";

    document.getElementById("updateName").value = name;
    document.getElementById("updatePhone").value = phone;
    document.getElementById("updateEmail").value = email;

});

document.getElementById("change-btn").addEventListener("click", () => {
    document.getElementById("name").innerText = document.getElementById("updateName").value;
})




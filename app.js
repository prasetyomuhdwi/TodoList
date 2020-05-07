var add = document.querySelector("#tambah")
var text = document.querySelector("#textIn");
var list = document.querySelector(".list");
add.addEventListener("click", tambahRencana)

function tambahRencana() {
    if (text.value.length === 0) {
        return;
    }
    else {
        const todo = list.appendChild(document.createElement("div"))
        const judul = todo.appendChild(document.createElement("p"))
        const cek = todo.appendChild(document.createElement("i"))
        const del = todo.appendChild(document.createElement("i"))
        cek.className = "fas fa-check cek"
        del.className = "fas fa-trash-alt del"
        todo.className = "todo"
        judul.className = "judul"
        judul.innerHTML = text.value.charAt(0).toUpperCase() + text.value.slice(1)
        text.value = ""
        del.addEventListener("click", hapus)
        cek.addEventListener("click", selesai)
        function selesai(event) {
            event.target.previousSibling.style.textDecoration = "line-through"
        }
        function hapus(event) {
            event.target.parentElement.remove()
        }
    }
}


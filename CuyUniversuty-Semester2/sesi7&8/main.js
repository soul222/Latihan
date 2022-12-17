let Q = document.getElementById("Quest")
let Jawaban = document.getElementById("answer")
let load = document.getElementById("loader")
let container = document.getElementById("container")

let init = 0

const botsay = (data) =>{
    return ["Halo Saya, fake bot. Siapa Namamu?",
    `Halo ${data?.Nama}, berapa usiamu?`,
    `Ohh ${data?.Usia}, hobi kamu apa?`,
    `Waww sama dong aku juga hobi ${data?.Hobi}, btw punya pacar gak?`,
    `0hhh ${data?.Pacar}, Ya berhenti sampai disini!`
    ]
}
Q.innerText= botsay()[0];
let User = []
function Kirim(){
    init++
    if(Jawaban.value.length < 1){alert("Masukan isi yang lengkap"), End()}
    if(init === 1){
        Delay({Nama: Jawaban.value})
    }else if(init === 2){
        Delay({Usia: Jawaban.value})
    }else if(init === 3){
        Delay({Hobi: Jawaban.value})
    }else if(init === 4){
        Delay({Pacar: Jawaban.value})
    }else if (init === 5){
        finish();
    }else{
        End();
    }
}

function Delay(JawabanUser){
    load.style.display="block"
    container.style.filter = "blur(8px)"
    setTimeout(() => {
        Q.innerHTML = botsay(JawabanUser)[init]
        load.style.display="none"
        container.style.filter="none"
    }, [3000]);
    User.push(Jawaban.value)
    Jawaban.value = ""
}
function finish(){
    Q.innerHTML = `Thank You ${User[0]} sudah main`
}
function End(){
   window.location.reload()
}
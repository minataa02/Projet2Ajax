function requestListner(){
    console.log("Etat final de la requéte",this)//this l'objet en cour xhr
    let data=JSON.parse(this.responseText)
    let user=data.results[0]
    console.log("l'utilisateur recuperer est: ",user)
    //Extraire les données demandées a partir du user
    let fname=user.name.first
    let lname=user.name.last
    let image=user.picture.large
   /* console.log(fname)
    console.log(lname)
    console.log(image)*/
    //creer les éléments html dans le DOM
    let li=document.createElement("li")
    let img=document.createElement("img")
    let p=document.createElement("p")

    //Associer du contenu aux éléments créés
    img.src=image
    //p.innerHTML=fname+" "+ lname
    p.innerHTML=`${fname} ${lname}`
    //Attacher tous les élément HTML dans le DOM
    document.getElementById("user").appendChild(li)
    li.appendChild(img)
    li.appendChild(p)
}
function gererErreur(){
    console.log("y'a une erreur dans votre code")
}
//creer des variable pour URL et methode HTTP
let url="https://randomuser.me/api/"
let methode="GET"
//creer une nouvelle instance de l'objet xhr 
let xhr= new XMLHttpRequest()
//afficher 
console.log("Etat initial de la requéte",xhr)
//ouvrir la connexion
xhr.open(methode,url)
//creer une methode qui va gerer la reponse
xhr.onload=requestListner
//creer une methode qui va gerer les erreurs
xhr.onerror= gererErreur
//Envoyer la requete
xhr.send()

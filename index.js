// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBlimt5B0CuPv5KuB8Uk3z-8modEdoaG3U",
    authDomain: "blogsitesi-1893d.firebaseapp.com",
    projectId: "blogsitesi-1893d",
    storageBucket: "blogsitesi-1893d.appspot.com",
    messagingSenderId: "932006730186",
    appId: "1:932006730186:web:f011c83aeb97a8e1aad733",
    measurementId: "G-2R72LE5Z35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database();

function save() {
 
  var title = document.getElementById('title').value
  var details = document.getElementById('details').value

    var tarih=new Date();
    var gun=tarih.getDate()
    var ay=tarih.getMonth();
    var yil=tarih.getFullYear();
    var aylar= ['Ocak', 'Şubat', 'Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
    var date = gun+' '+aylar[ay]+' '+yil;            

  database.ref('posts/' + title).set({
    
    title : title,
    details : details,
    date : date
  })

  alert('Saved')
}

function SelectAllData(){
  database.ref("posts").once("value", function(AllRecords){
    AllRecords.forEach(function(CurrenRecord) {
      var title = CurrenRecord.val().title;
      var details = CurrenRecord.val().details;
      var date = CurrenRecord.val().date;
      getAllData(title,details,date);
    });
  })
}
window.onload = SelectAllData;

let postCollection = document.querySelector("#mydiv");

function getAllData(title,details,date) {


  let div = document.createElement("div");
  div.setAttribute("class", "card");

  let h2 = document.createElement("h2");
  let content = document.createElement("p");
  let pDate = document.createElement("p");
  pDate.setAttribute("class", "date-class")

  h2.textContent = title;
  content.textContent = details;
  pDate.textContent = date;

  div.appendChild(h2);
  div.appendChild(content);
  div.appendChild(pDate);

  postCollection.appendChild(div);
}  

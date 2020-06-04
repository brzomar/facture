async function pdfToHTML(){
var pdf = new jsPDF();

var facturationDate = new Date();

// Garage
pdf.setFontSize(14);
pdf.setFontStyle("bold");
pdf.text("FODIL AUTOS", 20, 30);
pdf.setFontSize(8);
pdf.setFontStyle("normal");
pdf.text("Entretien et réparation de véhicules automobiles legers (4520A)", 20, 35);
pdf.setFontSize(11);
pdf.setFontStyle("normal");
pdf.text("183 Reu de l'Abbé Henri Alivon", 20, 40);
pdf.text("04100 Manosque", 20, 45);
pdf.text("Tel : 06 61 58 12 83", 20, 50);
pdf.text("SIRET : 87936932000020", 20, 55);


// Client
var nomPrenom = document.getElementById('name').value;
var adress = document.getElementById('adress').value;
var zipCode = document.getElementById('zipCode').value;
var city = document.getElementById('city').value;
pdf.text(nomPrenom, 125, 55);
pdf.text(adress, 125, 60);
pdf.text(zipCode + ', ' + city, 125, 65);

// Facture
pdf.setFontSize(14);
pdf.setFontStyle("bold");
pdf.text("FACTURE", 20, 70);
pdf.setFontSize(11);
pdf.setFontStyle("normal");
pdf.text("Numero  : " + timeRef(facturationDate), 20, 75);
pdf.text("Date    : " + formattedDate(facturationDate), 20, 80);

// Voiture
var brand = document.getElementById('brand').value;
var model = document.getElementById('model').value;
var firstDate = document.getElementById('firstDate').value;
var registration = document.getElementById('registration').value;
var kil = document.getElementById('kil').value;
var serialNum = document.getElementById('serialNum').value;
var power = document.getElementById('power').value;
var energy = document.getElementById('energy').value;
var kind = document.getElementById('kind').value;


pdf.autoTable({
  head: [['Marque', 'Modèle', '1ère MEC', 'Immatriculation', 'Kilometrage']],
  body: [
    [brand, model, firstDate, registration, kil],
  ],
  startY: 85,
  theme: 'plain',
  styles: { fillColor: [242, 243, 244] },
});

pdf.autoTable({
  head: [['N° Série', 'Puissance', 'Énergie', 'Genre']],
  body: [
    [serialNum, power, energy, kind],
  ],
  startY: 103,
  theme: 'plain',
  styles: { fillColor: [242, 243, 244] },
});

// Articles
//Item0
var item0Desc = document.getElementById('item0Desc').value;
var item0Qte = document.getElementById('item0Qte').value;
var item0Price = document.getElementById('item0Price').value;
//Item1
var item1Desc = document.getElementById('item1Desc').value;
var item1Qte = document.getElementById('item1Qte').value;
var item1Price = document.getElementById('item1Price').value;
//Item2
var item2Desc = document.getElementById('item2Desc').value;
var item2Qte = document.getElementById('item2Qte').value;
var item2Price = document.getElementById('item2Price').value;
//Item3
var item3Desc = document.getElementById('item3Desc').value;
var item3Qte = document.getElementById('item3Qte').value;
var item3Price = document.getElementById('item3Price').value;
//Item4
var item4Desc = document.getElementById('item4Desc').value;
var item4Qte = document.getElementById('item4Qte').value;
var item4Price = document.getElementById('item4Price').value;
//Item5
var item5Desc = document.getElementById('item5Desc').value;
var item5Qte = document.getElementById('item5Qte').value;
var item5Price = document.getElementById('item5Price').value;
//Item6
var item6Desc = document.getElementById('item6Desc').value;
var item6Qte = document.getElementById('item6Qte').value;
var item6Price = document.getElementById('item6Price').value;
//Item7
var item7Desc = document.getElementById('item7Desc').value;
var item7Qte = document.getElementById('item7Qte').value;
var item7Price = document.getElementById('item7Price').value;
//Item8
var item8Desc = document.getElementById('item8Desc').value;
var item8Qte = document.getElementById('item8Qte').value;
var item8Price = document.getElementById('item8Price').value;
//Item9
var item9Desc = document.getElementById('item9Desc').value;
var item9Qte = document.getElementById('item9Qte').value;
var item9Price = document.getElementById('item9Price').value;
//Item10
var item10Desc = document.getElementById('item10Desc').value;
var item10Qte = document.getElementById('item10Qte').value;
var item10Price = document.getElementById('item10Price').value;

pdf.autoTable({
  head: [['DESCRIPTION', 'QTE/TEMPS', 'PX UNITAIRE', 'MONTANT TTC']],
  body: [
    [item0Desc, item0Qte, item0Price, item0Qte*item0Price],
    [item1Desc, item1Qte, item1Price, item1Qte*item1Price],
    [item2Desc, item2Qte, item2Price, item2Qte*item2Price],
    [item3Desc, item3Qte, item3Price, item3Qte*item3Price],
    [item4Desc, item4Qte, item4Price, item4Qte*item4Price],
    [item5Desc, item5Qte, item5Price, item5Qte*item5Price],
    [item6Desc, item6Qte, item6Price, item6Qte*item6Price],
    [item7Desc, item7Qte, item7Price, item7Qte*item7Price],
    [item8Desc, item8Qte, item8Price, item8Qte*item8Price],
    [item9Desc, item9Qte, item9Price, item9Qte*item9Price],
    [item10Desc, item10Qte, item10Price, item10Qte*item10Price],
  ],
  startY: 125,
});

var totalTTC = (item0Qte*item0Price) + (item1Qte*item1Price) + (item2Qte*item2Price) + 
(item3Qte*item3Price) + (item4Qte*item4Price) + (item5Qte*item5Price) +
(item6Qte*item6Price) + (item7Qte*item7Price) + (item8Qte*item8Price) +   
(item9Qte*item9Price) + (item10Qte*item10Price);
var TVA = (totalTTC*20)/100;
var totalHT = totalTTC - TVA;

// Total + TVA
pdf.autoTable({
  head: [['TOTAL HT', 'TVA (20%)', 'TOTAL TTC']],
  body: [
    [totalHT.toFixed(3).slice(0,-1), TVA.toFixed(3).slice(0,-1), totalTTC.toFixed(3).slice(0,-1) + ' EUR'],
  ],
  startY: 225,
  tableWidth: 70,
  margin: {top: 0, right: 0, bottom: 0, left: 126},
});

pdf.save('facture_'+ timeRef(facturationDate) +'.pdf');
}


function formattedDate(d) {
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return `${day}/${month}/${year}`;
}

function timeRef(d) {
  let month = String(d.getMonth() + 1);
  if (month.length < 2) month = '0' + month;
  let day = String(d.getDate());
  if (day.length < 2) day = '0' + day;
  let h = String(d.getHours());
  if (h.length < 2) h = '0' + h;
  let m = String(d.getMinutes());
  if (m.length < 2) m = '0' + m;
  let s = String(d.getSeconds());  
  if (s.length < 2) s = '0' + s;
  return `${day}${month}${h}${m}${s}`;
}

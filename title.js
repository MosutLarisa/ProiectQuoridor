
function playerText() {
    // textFont("Press Start 2");
    textFont("Foldit");
     textSize(20);
     stroke("black");
     fill("#E0A872");
    text('Jucător 1:', 350, 20);
    fill("#C59A96");
    text('Jucător 2:', 350, 725);

 
 }
 
 function title() {
     textFont("Honk");
     textSize(100);
     strokeWeight(3);
     fill("#38231B");
     text('QUORIDOR', 760, 130);
 
 }  
 function incurajare() {
     textFont("Foldit");
     textSize(20);
     strokeWeight(1);
     let s = 'Ești pe cale să cucerești tabla de joc în Quoridor! Ai tot ce îți trebuie pentru a reuși: strategie, răbdare și un spirit competitiv. Concentrează-te pe mutările tale, folosește-ți barierele cu înțelepciune și nu lăsa nimic să te oprească. Ai încredere în tine și amintește-ți că fiecare pas te aduce mai aproape de victorie. Mult succes! Tu poți câștiga!';
     text(s, 760, 150, 650, 800);
 }
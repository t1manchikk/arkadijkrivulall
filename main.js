const $logs = document.getElementById("logs");
const getRandom = (m) => Math.floor(Math.random()*m)+1;
let p1, p2;

function start(){
  p1={name:"Pikachu",hp:100};
  p2={name:"Charmander",hp:100};
  $logs.innerHTML="";
  document.getElementById("attack").disabled=false;
  draw();
}

function draw(){
  document.getElementById("name1").textContent=p1.name;
  document.getElementById("hp1").textContent=p1.hp;
  document.getElementById("name2").textContent=p2.name;
  document.getElementById("hp2").textContent=p2.hp;
}

function log(t){
  const p=document.createElement("p");
  p.textContent=t;
  $logs.prepend(p);
}

document.getElementById("attack").onclick=()=>{
  const dmg=getRandom(20);
  const attacker = Math.random()>0.5 ? p1 : p2;
  const defender = attacker===p1 ? p2 : p1;
  defender.hp = Math.max(0, defender.hp-dmg);
  log(`${attacker.name} б'є ${defender.name}: -${dmg}, HP=${defender.hp}`);
  draw();
  if(defender.hp<=0){
    log(`${attacker.name} переміг!`);
    document.getElementById("attack").disabled=true;
  }
};

document.getElementById("newGame").onclick=start;
start();

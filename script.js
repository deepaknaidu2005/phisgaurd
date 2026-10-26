const bank=[
["A bank message says your account will close in 10 minutes. Safest action?",["Click immediately","Open the official bank app/site manually","Reply with your password","Forward it"],1,"Verify independently through a known official channel."],
["Which is a common phishing warning sign?",["Unexpected sensitive-data request","A known bookmark","An independently verified message","A routine expected notice"],0,"Unexpected requests for sensitive information are a red flag."],
["A courier SMS asks for a small fee through a link. What should you do?",["Pay now","Enter card details","Check through the official courier channel","Forward it"],2,"Use the courier's known official app/site."],
["What is social engineering?",["Network hardware","Manipulating people into unsafe actions","File compression","Database storage"],1,"It relies on human manipulation."],
["A fake support popup asks for remote-access software. What is safest?",["Install it","Give an OTP","Close it and use trusted support","Disable security"],2,"Use trusted support channels."],
["Does HTTPS prove a website is legitimate?",["Yes, always","No; HTTPS encrypts the connection but phishing sites can also use it","Only for banks","It replaces MFA"],1,"Verify the actual domain and context."],
["An invitation asks for your email password. What should you do?",["Enter it","Reuse another password","Don't provide it; verify independently","Send an OTP"],2,"Unexpected credential requests are unsafe."],
["Which tactic creates pressure to act quickly?",["Urgency","Encryption","Compression","Backups"],0,"Urgency is a common manipulation technique."],
["A surprise prize asks for bank details. Main warning sign?",["Unexpected reward + sensitive-data request","Good grammar","Short message","Friendly greeting"],0,"Unexpected rewards plus sensitive-data requests are common scam patterns."],
["Safest way to access an important account after a suspicious message?",["Message link","Known bookmark/official app","Reply to sender","Random search result"],1,"Use a known-good route."],
["Which deserves the most scrutiny?",["Known official domain","Misspelled look-alike domain","Saved bookmark","Verified company domain"],1,"Look-alike domains are a common impersonation technique."],
["Why impersonate a manager, bank or IT staff?",["Customer service","Exploit trust and authority","Encrypt files","Test speed"],1,"Authority increases compliance."],
["What should you do with an unexpected attachment?",["Open it","Forward it","Verify sender and context first","Disable antivirus"],2,"Verify before opening."],
["Which should never be shared just because a message asks?",["Public company name","Password or OTP","Product name","Public webpage"],1,"Passwords and OTPs are authentication secrets."],
["You see an unknown payment alert. First step?",["Click cancellation link","Call message number","Check through official service directly","Reply with card number"],2,"Verify through a trusted official channel."],
["What is smishing?",["Phishing via SMS/messaging","Firewall","Backup","Password manager"],0,"Smishing is phishing through text or messaging."],
["A message threatens account suspension. Best response?",["Act immediately","Pause and verify officially","Share password","Install app"],1,"Threats are a reason to slow down and verify."],
["Why inspect the actual sender address?",["Make email longer","Spot impersonation/suspicious domains","Increase speed","Unlock files"],1,"Displayed names can be copied."],
["Good phishing-defense habit?",["Reuse password","MFA + independent verification","Click first","Share OTP"],1,"MFA and verification reduce risk."],
["A message asks you to keep a request secret. What should you think?",["Always legitimate","Secrecy can be manipulation; verify","Obey immediately","Proves identity"],1,"Isolation and secrecy can be social-engineering tactics."],
["A caller claims to be your bank and asks you to move money to a 'safe account'. What is safest?",["Move it","Verify via official bank contact","Give OTP","Install remote app"],1,"Unexpected money-transfer instructions should be independently verified."],
["A QR code on a poster asks you to log into a service. Best habit?",["Scan blindly","Verify destination and use official app/site if possible","Enter OTP first","Share it"],1,"QR codes can redirect to phishing pages."],
["A recruiter asks you to pay a fee before an interview. What is the strongest warning?",["Professional email","Upfront payment request","Company logo","Interview time"],1,"Legitimate hiring processes should be independently verified; payment demands are a red flag."],
["A voice message sounds exactly like your manager but asks for an unusual payment. What should you do?",["Pay immediately","Use a second trusted channel to verify","Send OTP","Forward it"],1,"Convincing voice or AI does not replace verification."],
["You entered a password on a suspicious page. What should you do?",["Ignore it","Change it through a trusted route and enable MFA","Share it with IT by email","Reuse it"],1,"Act quickly to protect the account and report the incident."]
];
let current=[];
const shuffle=a=>[...a].sort(()=>Math.random()-0.5);
function newQuiz(){
 current=shuffle(bank).slice(0,10);
 const box=document.getElementById("quizBox"); box.innerHTML="";
 current.forEach((item,i)=>{
   const opts=shuffle(item[1].map((t,j)=>({t,j})));
   const div=document.createElement("div"); div.className="question"; div.dataset.correct=item[2];
   div.innerHTML=`<p><b>${i+1}.</b> ${item[0]}</p>`+opts.map(o=>`<label><input type="radio" name="q${i}" value="${o.j}"> ${o.t}</label>`).join("");
   box.appendChild(div);
 });
 document.getElementById("result").textContent="New randomized questions loaded.";
}
document.getElementById("submitBtn").onclick=()=>{
 let score=0, unanswered=0;
 document.querySelectorAll(".question").forEach((d,i)=>{
   d.classList.remove("correct","wrong");
   const s=d.querySelector(`input[name="q${i}"]:checked`);
   if(!s){unanswered++;d.classList.add("wrong");return}
   if(+s.value===+d.dataset.correct){score++;d.classList.add("correct")}else d.classList.add("wrong");
 });
 const r=document.getElementById("result");
 r.textContent=`Score: ${score}/10 — ${score>=9?"Excellent! 🛡️":score>=7?"Very good! Review the missed areas.":score>=5?"Good start. Review the training and try again.":"Review the training and take a new quiz."}${unanswered?` ${unanswered} unanswered.`:""}`;
};
document.getElementById("newBtn").onclick=newQuiz;
document.getElementById("reveal").onclick=()=>document.getElementById("analysis").classList.toggle("hidden");
newQuiz();

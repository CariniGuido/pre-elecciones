const a0_0x5bff48=a0_0x3ba0;(function(_0x195c69,_0x1a6fce){const _0x202a35=a0_0x3ba0,_0x2e1c81=_0x195c69();while(!![]){try{const _0x4da99f=parseInt(_0x202a35(0xa0))/0x1+parseInt(_0x202a35(0x9d))/0x2*(-parseInt(_0x202a35(0xbc))/0x3)+-parseInt(_0x202a35(0xb0))/0x4*(-parseInt(_0x202a35(0x90))/0x5)+parseInt(_0x202a35(0xbb))/0x6*(-parseInt(_0x202a35(0xb3))/0x7)+parseInt(_0x202a35(0x99))/0x8*(parseInt(_0x202a35(0xaa))/0x9)+parseInt(_0x202a35(0xba))/0xa+-parseInt(_0x202a35(0x8e))/0xb*(parseInt(_0x202a35(0xb9))/0xc);if(_0x4da99f===_0x1a6fce)break;else _0x2e1c81['push'](_0x2e1c81['shift']());}catch(_0x40a663){_0x2e1c81['push'](_0x2e1c81['shift']());}}}(a0_0x525f,0xd9c9c));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';import{onSnapshot,collection,doc,setDoc,getDocs,getFirestore,updateDoc,increment}from'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';const firebaseConfig={'apiKey':a0_0x5bff48(0x98),'authDomain':'votos-11d12.firebaseapp.com','projectId':a0_0x5bff48(0x93),'storageBucket':'votos-11d12.appspot.com','messagingSenderId':a0_0x5bff48(0xb6),'appId':'1:749944122292:web:856682d456e713a0f760e1','measurementId':a0_0x5bff48(0x91)},app=initializeApp(firebaseConfig),db=getFirestore(),candidatosCollection=collection(db,a0_0x5bff48(0xac));function a0_0x525f(){const _0x5d9c39=['contador-votos','danielo','textContent','btn','lamerce','Valor\x20de\x20candidato.img:','data','2877291ztROri','includes','candidatos','card-body','https://firebasestorage.googleapis.com/v0/b/votos-11d12.appspot.com/o/danielo.jpg?alt=media&token=0ce73180-53e9-4b38-bc79-c70b47e4360f','setItem','4PlYWiY','getElementById','addEventListener','658gBAhvm','click','https://api.ipify.org/?format=json','749944122292','src','card-text-votos','12wwaySc','9793050mnNmPh','108294ugRVGe','138PkVnVU','createElement','Error\x20al\x20obtener\x20la\x20dirección\x20IP:','forEach','nombre','log','classList','img','7615355kIxWuK','Ya\x20has\x20votado\x20antes','1306155XbFGEq','G-JQZGDCK8QJ','card-img-top','votos-11d12','https://firebasestorage.googleapis.com/v0/b/votos-11d12.appspot.com/o/lamerce.jpg?alt=media&token=8ae5d097-25bf-4cd2-8e55-fc42376511f1','Votos:\x20','appendChild','btn-primary','AIzaSyAh9_foQiyNYjMAyvhjDqglCALeIEEM8Yk','24iimbfq','button','json','div','342QKAIIL','add','votos','1089204BxnLje','getItem','then'];a0_0x525f=function(){return _0x5d9c39;};return a0_0x525f();}function a0_0x3ba0(_0x36cf1a,_0x4059d9){const _0x525f1c=a0_0x525f();return a0_0x3ba0=function(_0x3ba01c,_0x169309){_0x3ba01c=_0x3ba01c-0x87;let _0x24b2b2=_0x525f1c[_0x3ba01c];return _0x24b2b2;},a0_0x3ba0(_0x36cf1a,_0x4059d9);}function crearCardCandidato(_0x50cbcf){const _0x1a3024=a0_0x5bff48,_0x1da1c8=document[_0x1a3024(0x87)]('div');_0x1da1c8['classList'][_0x1a3024(0x9e)]('card');function _0x2889fe(){const _0x5cf2ec=_0x1a3024;return fetch(_0x5cf2ec(0xb5))[_0x5cf2ec(0xa2)](_0x1533b1=>_0x1533b1[_0x5cf2ec(0x9b)]())['then'](_0xbd442d=>_0xbd442d['ip'])['catch'](_0x1af3d7=>{const _0x974a24=_0x5cf2ec;return console[_0x974a24(0x8b)](_0x974a24(0x88),_0x1af3d7),null;});}const _0x58ed78=document['createElement'](_0x1a3024(0x9c));_0x58ed78[_0x1a3024(0x8c)]['add'](_0x1a3024(0xad));const _0x46d53a=document[_0x1a3024(0x87)]('h5');_0x46d53a['classList'][_0x1a3024(0x9e)]('card-title'),_0x46d53a[_0x1a3024(0xa5)]=_0x50cbcf[_0x1a3024(0x8a)];const _0x18cee3=document[_0x1a3024(0x87)]('p');_0x18cee3[_0x1a3024(0x8c)]['add']('card-text'),_0x18cee3[_0x1a3024(0xa5)]=_0x50cbcf['informacion'];const _0x263a58=document[_0x1a3024(0x87)]('p');_0x263a58['classList'][_0x1a3024(0x9e)]('card-text',_0x1a3024(0xb8)),_0x263a58[_0x1a3024(0xa5)]=_0x1a3024(0x95)+_0x50cbcf['votos'];const _0x44f3ea=document[_0x1a3024(0x87)]('img');_0x44f3ea[_0x1a3024(0x8c)]['add'](_0x1a3024(0x92),'custom-img-size'),console[_0x1a3024(0x8b)](_0x1a3024(0xa8),_0x50cbcf[_0x1a3024(0x8d)]);if(_0x50cbcf[_0x1a3024(0x8d)][_0x1a3024(0xab)](_0x1a3024(0xa7)))_0x44f3ea[_0x1a3024(0xb7)]=_0x1a3024(0x94);else{if(_0x50cbcf[_0x1a3024(0x8d)]['includes'](_0x1a3024(0xa4)))_0x44f3ea[_0x1a3024(0xb7)]=_0x1a3024(0xae);else _0x50cbcf['img'][_0x1a3024(0xab)]('elflexita')?_0x44f3ea[_0x1a3024(0xb7)]='https://firebasestorage.googleapis.com/v0/b/votos-11d12.appspot.com/o/elflexita.jpg?alt=media&token=bf325cb2-0dbc-47c4-b2fc-90a57376aa5f':_0x44f3ea[_0x1a3024(0xb7)]=_0x1a3024(0xae);}const _0x1e7a7c=document[_0x1a3024(0x87)](_0x1a3024(0x9a));_0x1e7a7c[_0x1a3024(0x8c)][_0x1a3024(0x9e)](_0x1a3024(0xa6),_0x1a3024(0x97)),_0x1e7a7c[_0x1a3024(0xa5)]='Votar';const _0x1d0a12=document[_0x1a3024(0x87)]('span');_0x1d0a12['classList'][_0x1a3024(0x9e)](_0x1a3024(0xa3)),_0x1d0a12[_0x1a3024(0xa5)]=_0x1a3024(0x95)+_0x50cbcf[_0x1a3024(0x9f)],_0x58ed78[_0x1a3024(0x96)](_0x46d53a),_0x58ed78['appendChild'](_0x18cee3),_0x58ed78[_0x1a3024(0x96)](_0x44f3ea),_0x58ed78[_0x1a3024(0x96)](_0x263a58),_0x58ed78[_0x1a3024(0x96)](_0x1e7a7c),_0x58ed78[_0x1a3024(0x96)](_0x1d0a12),_0x1da1c8[_0x1a3024(0x96)](_0x58ed78);const _0x20752e=document[_0x1a3024(0xb1)]('candidatosContainer');_0x20752e['appendChild'](_0x1da1c8),_0x1e7a7c[_0x1a3024(0xb2)](_0x1a3024(0xb4),async()=>{const _0x4a551d=_0x1a3024,_0x41eba9=_0x2889fe(),_0x371431=localStorage[_0x4a551d(0xa1)](_0x41eba9);if(_0x371431){alert(_0x4a551d(0x8f));return;}const _0x51242b=_0x50cbcf[_0x4a551d(0x9f)]+0x1,_0x12cf47=doc(db,_0x4a551d(0xac),_0x50cbcf['id']);await updateDoc(_0x12cf47,{'votos':increment(0x1)}),localStorage[_0x4a551d(0xaf)](_0x41eba9,!![]),_0x1d0a12[_0x4a551d(0xa5)]=_0x4a551d(0x95)+_0x51242b;});}async function obtenerCandidatos(){const _0x36fcde=a0_0x5bff48,_0x2e372f=await getDocs(candidatosCollection);_0x2e372f[_0x36fcde(0x89)](_0x577e63=>{const _0x343d7a=_0x36fcde,_0x1b4eb2=_0x577e63[_0x343d7a(0xa9)]();_0x1b4eb2['id']=_0x577e63['id'],crearCardCandidato(_0x1b4eb2);});}obtenerCandidatos();
//TODO Make my own Freenom client using JS that allows use of free domains (no longer supported by the Freenom API)
//const Freenom=require("p3x-freenom");
require("dotenv").config();

(async ()=>{
  const freenom=await Freenom(
    {
      email:process.env.EMAIL,
      password:process.env.PASSWORD,
    }
  );
  console.log((await freenom.service.ping()).body);
  console.log((await freenom.domain.search(
    {
      domainname:"snippit.cf",
      domaintype:"FREE",
    }
  )).body);
  console.log(await freenom.domain.register({
    domainname:[],
    domaintype:'FREE',
    period:'12M',
    nameserver:[
      'ns01.freenom.com',
      'ns02.freenom.com',
      'ns03.freenom.com',
      'ns04.freenom.com',
    ],
    idshield:true,
  }));
})();

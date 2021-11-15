const mworkshopcard = [
    {
         workshopname:'Git & Github',
        workshopimg:'github_session.png',
        workshoplink:''
    },{
        workshopname:'Hacktoberfest',
        workshopimg:'hacktoberfest.png',
        workshoplink:''
    },{
        workshopname:'Bug Bounty KickStart',
        workshopimg:'web_security_bb.png',
        workshoplink:''
    },{
         workshopname:'Crypto and Blockchain',
        workshopimg:'Binance_BUIDLer_Program_3.png',
        workshoplink:''
    },
];

var mworkRow = document.querySelectorAll('.mainworkrow')[0];
for(let i=0;i<mworkshopcard.length;i++){
    let work=document.createElement('div');
    work.className='workcolums';
    let imgurl;
   
        imgurl= 'workshop/images/' + mworkshopcard[i].workshopimg;
        work.innerHTML='<a class="sess_card"><div class="sesscardstext">'+mworkshopcard[i].workshopname+'</div><div class="sesscardsimg"><img class="sess_img" src="'+imgurl+'" alt="'+mworkshopcard[i].workshopname+'"></div></a>';
    
mworkRow.append(work);    
}


async function loadDev(){
    try {
        const fs = await import('fs');
        return(fs);
    
    } catch(error) {
        console.log(error);
    };
};


function main(params){
    let loadParams = {};
    if (process.env.NODE_ENV == 'localdev') {
        console.log('Running locally');
        loadParams.NODE_EVN = process.env.NODE_ENV;
        const rawdata = process.env.USER;
        loadParams.user= JSON.parse(rawdata);
        const fss = loadDev();

    } else {
        console.log('Running remotely');
    };
    
    console.log({'user-surname': loadParams.user.surname});
};

main();

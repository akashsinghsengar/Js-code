const NFTs = [];

function mintNFT(name, eid, department) {
    const NFT = {
        "name": name,
        "eid": eid,
        "department": department
    };
    NFTs.push(NFT);
    console.log("Name of the object: " + name);
}

function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log(NFTs[i]);
    }
}

function getTotalSupply() {
    console.log(NFTs.length);
}


mintNFT("Vishal", "E128", "Manager");
listNFTs();
getTotalSupply();

var Application_ID = "E128";
console.log("Application_ID: " + Application_ID);

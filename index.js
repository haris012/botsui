const {
    
    Wallet,
    LocalProvider,
    AccountCreateTransaction,
    Hbar,
    Client, TokenAssociateTransaction, PrivateKey } = require("@hashgraph/sdk");


    const dotenv = require('dotenv');

    dotenv.config();


(async () => {

//Create the transaction
const transaction = new AccountCreateTransaction()
    .setKey(privateKey.publicKey)
    .setInitialBalance(new Hbar(1000));

//Sign the transaction with the client operator private key and submit to a Hedera network
const txResponse = await transaction.execute(client);

//Request the receipt of the transaction
const receipt = await txResponse.getReceipt(client);

//Get the account ID
const newAccountId = receipt.accountId;

console.log("The new account ID is " +newAccountId);

//v2.0.5


    // // Masukkan informasi akun dan kunci pribadi Anda
    // const accountId = ""; // account id mu
    // const privateKey = PrivateKey.fromString(
    //     ""
    // ); // private key mu

    // // Inisialisasi klien Hedera Hashgraph
    // const client = Client.forMainnet();
    // client.setOperator(accountId, privateKey);

    // const transaction_ass = await new TokenAssociateTransaction()
    //     .setAccountId(accountId)
    //     .setTokenIds(['0.0.2283230']) // isi token id, disebelah ini contoh $KARATE
    //     .freezeWith(client);

    // const signTx_ass = await transaction_ass.sign(privateKey);
    // const txResponse_ass = await signTx_ass.execute(client);

    // console.log("Token berhasil diasosiasikan dengan kunci pribadi");
    // console.log("Hash transaksi:", txResponse_ass.transactionId.toString());
})();

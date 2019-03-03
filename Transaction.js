class Transaction {


    static BASE_URL = "http://localhost:82/ServicewTM.svc/";
    static APPLICATION = "APT";
    static USER = "admin";
    static PASSWORD = "admin";
    static STATION = "1";
    static WORKFLOW = "APT";
    static PAGEFILENAME = "transaction";
    static RULESETS = "PageID,CreateDocs,Recognize";
    static IMAGENAME = "APT001";
    static IMAGEEXT = "tif";
    static IMAGEPATH = "C:\\Datacap\\APT\\Images\\Input\\APT001.tif";

    pageFile = `
    <B id=\"APT\">
        <V n=\"TYPE\">APT</V>
        <P id=\"APT001\">
            <V n=\"TYPE\">Other</V> 
            <V n=\"IMAGEFILE\">APT001.tif</V>
        </P>
    </B>
        `;
    processTransaction = () => {
        let transactionId = ""; //id returned by the Start method to be included with subsequent calls
        try {
            const logon =
                `<LogonProperties>
                    <application>APT</application>
                    <password>admin</password>
                    <station>1</station>
                    <user>admin</user>
                </LogonProperties>`
            const urlLogon = BASE_URL + "Session/Logon";
            fetch(urlLogon, {
                method: 'POST',
                body: logon,
                headers: {
                    'Content-Type': 'text/xml'
                }
            }).then(res => res.json())
                .then(response => console.log('Success:', response.headers['set-cookie']))
                .catch(error => console.error('Error:', error));
        } catch (error) {

        }
    }
}
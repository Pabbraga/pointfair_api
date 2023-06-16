import dotenv from "dotenv";
dotenv.config();

const private_key = process.env.PRIVATE_KEY;

const googledrive = {
    type: "service_account",
    project_id: "pointfair",
    private_key_id: "84e71473ef2ca2895cb9aeb6e956fae98f2f516e",
    private_key: private_key,
    client_email: "googledrive@pointfair.iam.gserviceaccount.com",
    client_id: "109087787033537651173",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/googledrive%40pointfair.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
}

export default googledrive;

/*
  API URL : https://api.zenguard.biz

  POST, JSON
    https://api.zenguard.biz/v2/account/confirmations

 */

 {
     url: s.apiURL + "/v2/account/confirmations",
     method: "POST",
     responseType: "json",
     data: {
         auth_method: "device",
         auth_id: e.uuid,
         auth_secret: e.token
     }
 };


 {
     url: r.apiURL + "/v2/" + e,
     responseType: "json",
     data: t
 };


 {
     method: "POST",
     url: i.apiURL + "/v2/sign_in",
     responseType: "json",
     data: {
         auth_method: "legacy",
         auth_id: s.email,
         auth_secret: s.hash
     }
 }


 {
     method: "GET",
     url: i.apiURL + "/v2/et/upgrade",
     data: {
         previous_version: e.previousVersion
     }
 }


 {
     method: "GET",
     url: r.apiURL + "/v2/et/install/download",
     data: {
         install_id: e
     }
 }


 {
     method: "POST",
     url: i.apiURL + "/v2/sign_up",
     responseType: "json",
     data: n
 }

/*
{
    auth_method: "user",
    auth_id: e.email,
    auth_secret: e.password
}
*/

 {
     method: "POST",
     url: i.apiURL + "/v2/sign_in",
     responseType: "json",
     data: n
 }


 {
     url: i.apiURL + "/v2/email_registered",
     responseType: "json",
     data: e
 }

 {
     url: i.apiURL + "/v2/account/password_reset",
     method: "POST",
     responseType: "json",
     data: {
         email: e.email
     }
 }

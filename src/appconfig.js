const env = process.env.REACT_APP_STAGING; //possible values: sandpit, test, dev, preprod;

const getCognito = () => {
  let cognito = { state: "local.inergy", region: "eu-west-1" };
  switch (env) {
    case "sandpit":
      cognito = {
        ...cognito,
        userPoolId: "eu-west-1_HoHpsci4H", //NGI - Sandpit Env
        domain: "https://ngi-auth-sandpit.auth.eu-west-1.amazoncognito.com", //NGI - Sandpit Env
        clientId: "60vo29lp0rca1508k8tccn9acj", //NGI - Sandpit Env,
        redirectUrl: "https://d3w4y1ur5h5rls.cloudfront.net", // NGI - Sandpit Env
      };
      break;
    case "test":
      cognito = {
        ...cognito,
        userPoolId: "eu-west-1_K0rxqDada", //NGI - Test Env
        domain: "https://ngi-auth-test.auth.eu-west-1.amazoncognito.com", //NGI - Test Env
        clientId: "4p7753gsjr8t8j40elfi61h6mk", //NGI - Test Env,
        redirectUrl: "https://d37fl0sdj106ho.cloudfront.net", // NGI - Test Env
        clientSecret: "h57o4nik36ca7f76f36h8flrehmta8kia544rj8jp4ffekee9ga",
      };
      break;
    case "dev":
      cognito = {
        ...cognito,
        userPoolId: "eu-west-1_kaXZWRlNB", //NGI - Dev Env
        domain: "https://ngi-auth-integration.auth.eu-west-1.amazoncognito.com", //NGI - Test Env
        clientId: "3hbh4vavjtk4t9ugrcrverd4ro", //NGI - Dev Env,
        redirectUrl: "https://dfoxbwbklyciv.cloudfront.net", // NGI - Dev Env
        clientSecret: "h57o4nik36ca7f76f36h8flrehmta8kia544rj8jp4ffekee9ga",
      };
      break;
    case "preprod":
      cognito = {
        ...cognito,
        userPoolId: "eu-west-1_Hd3nR87YG", //NGI - PreProd Env
        domain: "https://ngi-auth-preprod.auth.eu-west-1.amazoncognito.com", //NGI - PreProd Env
        clientId: "74ae7incjfp5mb54v6gahl9hfr", //NGI - PreProd Env,
        redirectUrl: "https://d3kfsld079gs9n.cloudfront.net", // NGI - PreProd Env
        clientSecret: "q77o6rqh0r0k5jf20s7glc1qj0o496crtiq2sg1cmnoeuq8rt81",
      };
      break;
    case "ngi-dev":
      cognito = {
        ...cognito,
        userPoolId: "eu-west-1_CL583LH8V", //NGI - NgiDev Env
        domain: "https://ngi-auth-ngi-dev.auth.eu-west-1.amazoncognito.com", //NGI - NgiDev Env
        clientId: "32rscb5330htao4hva0928nbul", //NGI - NgiDev Env,
        redirectUrl: "https://d1rxn1xsgcd3d7.cloudfront.net", // NGI - NgiDev Env
        clientSecret: "1r18nh7e9jj3v8t0796cr895es6f9lbbmehlfsshmmprpm2abnu1",
      };
      break;
    case "ngi-test":
      cognito = {
        ...cognito,
        userPoolId: "eu-west-1_uKO6oVcQ1",
        domain: "https://ngi-auth-ngi-test.auth.eu-west-1.amazoncognito.com",
        clientId: "3chtlmff72mgsj2pjupsu80161",
        redirectUrl: "https://d2xfarreuj3r0d.cloudfront.net",
        clientSecret: "1uchbssi4knf5ooai0uum3n63a9sfkdqj1lusipar41novpv37ds",
      };
      break;
    default:
      cognito = {
        ...cognito,
        userPoolId: "eu-west-1_Hd3nR87YG", //NGI - PreProd Env
        domain: "https://ngi-auth-preprod.auth.eu-west-1.amazoncognito.com", //NGI - PreProd Env
        clientId: "74ae7incjfp5mb54v6gahl9hfr", //NGI - PreProd Env,
        redirectUrl: "https://d3kfsld079gs9n.cloudfront.net", // NGI - PreProd Env
      };
  }
  return cognito;
};

const config = {
  cognito: getCognito(),
  env,
};
export default config;

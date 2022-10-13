// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

//given url -> domain-name
// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

function replaceDomain(str) {
 let result = str.replace("http://",'').replace("https://",'').replace("www.", '').split('.')
 return result[0]
}

console.log(replaceDomain("http://github.com/carbonfive/raygun"))

console.log(replaceDomain("http://www.zombie-bites.com"))

console.log(replaceDomain("https://www.cnet.com"))
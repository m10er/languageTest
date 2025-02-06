interface Resources {
    contactUrl: string;
  }
  
  const baseURL = "https://www.savvy-telematics.com"; 
  const baseUrlEng="https://www.savvy-telematics.com/en";
  
  export const ResourcesDE: Resources = {
    contactUrl: baseURL+"/kontakt",
  };
  
   export const ResourcesENG: Resources = {
    contactUrl: baseUrlEng+"/contact",
  };

  
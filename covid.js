export const loadData = async (country2) => {
    try {
      const response = await fetch(
        `https://covid-api.mmediagroup.fr/v1/cases?country=${country2}`,
        {
          method: 'GET'
          
        }
      
      );
    
      console.log(await response.json());
    } catch (e) {
      console.log('Error:', e);
    }
  };
  
loadData();
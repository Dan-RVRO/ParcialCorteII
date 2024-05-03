function formatearString(str) {
    str = str.trim();
  
  
    return str.charAt(0).toUpperCase() + str.slice(1, -1) + str.charAt(str.length - 1).toUpperCase();
  }
  
  const stringOriginal = ' hola mundo mundo mundo';
  const stringFormateado = formatearString(stringOriginal);
  console.log(stringOriginal); 
  console.log(stringFormateado); 
  

  
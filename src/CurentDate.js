const CurentDate = () => {
    const date = new Date();
    const month = date.toLocaleString();
    
    
    // const day = date.getDate();
    // const time = date.toLocaleTimeString();
    
    // const formattedDate = `${month} ${day}, ${time}`;
    
    return (
      <div>
        
        <p>{month}</p>
      </div>
    );
  }
  export default CurentDate;
const ConsoleOutput = ({ logs }) => {
  const formatLogItem = (item) => {
    if (typeof item === 'object' && item !== null) {
      return JSON.stringify(item, (key, value) => {
        if (value && typeof value === 'object' && value.toString().startsWith('[object ')) {
          return value;
        }
        return value;
      }, 2);
    } else if (typeof item === 'function') {
      return item.toString();
    } else {
      return item;
    }
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', marginTop: '10px', height: '200px', overflowY: 'scroll' }}>
      {logs.map((log, index) => (
        <div key={index}>
          {log.map((item, i) => (
            <pre key={i}>{formatLogItem(item)}</pre>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ConsoleOutput;
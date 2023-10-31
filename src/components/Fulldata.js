import React from 'react';
import { Query } from 'react-apollo';
import DATA_QUERY from './Data/index';
import Datadisplay from './Displaydata';
import Navbar from './Navbar';

function RetrievedData() {

    return (
      <Query query={DATA_QUERY}>
       {({ loading, error, data }) => {
        
          if (loading) return <div>Fetching Data.....</div>
          if (error)   return <div>Error Fetching Data</div>

          var items;

          for(let i in data.assets){
            if(data.assets[i].id === "clo5guxc0163v0bo8xesbasfq"){
              items = data.assets[i];
            }
          }

          return (
            <div>
              <Navbar />
              <Datadisplay key={items.id} product={items} />
            </div>
          )
        }}
      </Query>
    );
  

};
export default RetrievedData;
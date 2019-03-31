
import React, { Component } from 'react';



class ConnectDB extends Component {

    // function readAll() {
    //     var objectStore = db.transaction("employee").objectStore("employee");
        
    //     objectStore.openCursor().onsuccess = function(event) {
    //        var cursor = event.target.result;
           
    //        if (cursor) {
    //           alert("Name for id " + cursor.key + " is " + cursor.value.name + ",  Age: " + cursor.value.age + ", Email: " + cursor.value.email);
    //           cursor.continue();
    //        } else {
    //           alert("No more entries!");
    //        }
    //     };
    //  }


    constructor(props) {
        super(props);


        if (!('indexedDB' in window)) {
            console.log('This browser doesn\'t support IndexedDB');
            return;
        }else{
            console.log('Browser Support');
            //window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
            console.log(window.indexedDB)
            
            const employeeData = [
                { id: "00-01", name: "gopal", age: 35, email: "gopal@tutorialspoint.com" },
                { id: "00-02", name: "prasad", age: 32, email: "prasad@tutorialspoint.com" }
             ];

            var db
            var request = indexedDB.open("testIndexedDB");
            request.onerror = function(event) {
              console.log("Why didn't you allow my web app to use IndexedDB?!");
            };

            request.onsuccess = function(event) {
              db = event.target.result;
              db.onerror = function(event) {
                // Generic error handler for all errors targeted at this database's
                // requests!
                console.log("Database error: " + event.target.errorCode);
              };
            };

            request.onupgradeneeded = function(event) { 
                // Save the IDBDatabase interface 
                var db = event.target.result;
              
                // Create an objectStore for this database
                var objectStore = db.createObjectStore("employee", { keyPath: "id" });

                for (var i in employeeData) {
                    objectStore.add(employeeData[i]);
                 }
              }
           

        }
        

        var transaction = db.transaction(["employee"]);
        var objectStore = transaction.objectStore("employee");
        var request = objectStore.get();
        
        request.onerror = function(event) {
            // Handle errors!
            console.log("Database error: " + event.target.errorCode);
        };

        request.onsuccess = function(event) {
            // Do something with the request.result!
            console.log("Name for SSN 444-44-4444 is " + request.result.name);
            this.state = { "name" : request.result.name}
            console.log(this.state)
        };

    }


    render() {
        return (
            <div>Loading</div>
        )
    }

}

export default ConnectDB;

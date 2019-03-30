
import React, { Component } from 'react';



class ConnectDB extends Component {

    componentDidMount(){
        
        
        // window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || 
        // window.msIDBTransaction;
        // window.IDBKeyRange = window.IDBKeyRange || 
        // window.webkitIDBKeyRange || window.msIDBKeyRange
        
        // if (!window.indexedDB) {
        //     console.log("Your browser doesn't support a stable version of IndexedDB.")
        // }

        if (!('indexedDB' in window)) {
            console.log('This browser doesn\'t support IndexedDB');
            return;
        }else{
            console.log('Browser Support');
            window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
            console.log(window.indexedDB)
        }
    }
    render() {
        return (
            <div>Loading</div>
        )
    }

}

export default ConnectDB;

/**
 * Problem Description

You are given a collection of servers connected to each other in a tree-like network.

Each server is represented by an integer ID (e.g., 0, 1, 2, …, n-1).

The network has n servers and n−1 connections (edges), 
meaning it is a connected acyclic graph.

Each server (except the root) knows only:

The ID of its parent server in the network.

The latency (in milliseconds) of the connection to that parent.

class Server {
    int id;                  // Unique identifier for this server
    Connection parentConnection; // Connection to its parent (null if this is the root)
}

class Connection {
    int nodeId;    // ID of the connected (parent) server
    int latency;   // Latency in milliseconds between this server and its parent
}



The parent does not know about its children.

Your task is to compute the total latency between any two given servers in the network.

Latency between two servers is defined as the sum of all 
connection latencies along the unique path between them in the tree.
 * 
 */


function getLatency(ser1, ser2){
    if (ser1.id === ser2.id)
        return 0;

    let curr = ser1;
    let latencyFrom1=0, latencyFrom2=0, ancestors1 = new Map();
    while(curr){
        ancestors1.set(curr, latencyFrom1);
        if (!curr.parentConnection) break; // root reached
        latencyFrom1 += curr.parentConnection.latency;
        curr=curr.parentConnection.parent;
        if(curr === ser2){
            return latencyFrom1;
        }
    }
    curr = ser2;

    while(curr){
        if(ancestors1.has(curr)){
            return ancestors1.get(curr) + latencyFrom2;
        }
        if (!curr.parentConnection) break; // root reached
        latencyFrom2 += curr.parentConnection.latency;
        curr = curr.parentConnection.parent;
    }
    
    return -1;
  
}
//T(C) : O(h)
//S(C): O(h)
const tree = {
  name: 'root',
  type: 'folder',
  children: [
    {
      name: 'folder1',
      type: 'folder',
      children: [
        { name: 'file1.txt', type: 'file', children: [] },
        { name: 'file2.txt', type: 'file', children: [] }
      ]
    },
    {
      name: 'folder2',
      type: 'folder',
      children: [
        { name: 'file3.txt', type: 'file', children: [] }
      ]
    },
    { name: 'file4.txt', type: 'file', children: [] }
  ]
};


function dfsTraverse(node, result) {
  
  // Recursively traverse children
  if (node.children ) {
    node.children.forEach(child => {
        if(child.size > 5){
            if(child.type === 'folder' ){
                dfsTraverse(child, result);
            }else{
                result.push(child.path);
            }
        }
        
    });
  }
  return result;
}

let result = [];
dfsTraverse(tree, result);
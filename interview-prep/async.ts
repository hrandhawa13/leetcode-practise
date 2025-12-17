console.log("Start");

async function fetchUserById(id: string): Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`User Id: ${id}`);
    }, 1000);
    });
}

async function fetchAllUsersById(ids: string[]): Promise<string[]>{
    const promises = ids.map(id => fetchUserById(id));
    console.log(promises);
    const userIds = await Promise.all(promises);
    console.log(userIds);
   
    return userIds;
   
}

async function main() {
  const list = await fetchAllUsersById(["1", "2", "3"]);
  console.log(list);
}

main();

console.log("Done");
export {}